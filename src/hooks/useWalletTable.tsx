import { useState } from "react"

import { WalletTableProps } from "@/components/FindWallet/WalletTable"

import { trackCustomEvent } from "@/lib/utils/matomo"

export interface DropdownOption {
  label: string
  value: string
  filterKey: string
  category: string
}

export type ColumnClassName = "firstCol" | "secondCol" | "thirdCol"

type UseWalletTableProps = Pick<WalletTableProps, "filters" | "walletData"> & {
  t: (x: string) => string
}

export const useWalletTable = ({
  filters,
  t,
  walletData,
}: UseWalletTableProps) => {
  const featureDropdownItems: Array<DropdownOption> = [
    {
      label: t("page-find-wallet-open-source"),
      value: t("page-find-wallet-open-source"),
      filterKey: "open_source",
      category: "security",
    },
    {
      label: t("page-find-wallet-self-custody"),
      value: t("page-find-wallet-self-custody"),
      filterKey: "non_custodial",
      category: "security",
    },
    {
      label: t("page-find-wallet-hardware-wallet-support"),
      value: t("page-find-wallet-hardware-wallet-support"),
      filterKey: "hardware_support",
      category: "feature",
    },
    {
      label: t("page-find-wallet-rpc-importing"),
      value: t("page-find-wallet-rpc-importing"),
      filterKey: "rpc_importing",
      category: "advanced",
    },
    {
      label: t("page-find-wallet-nft-support"),
      value: t("page-find-wallet-nft-support"),
      filterKey: "nft_support",
      category: "feature",
    },
    {
      label: t("page-find-wallet-connect-to-dapps"),
      value: t("page-find-wallet-connect-to-dapps"),
      filterKey: "connect_to_dapps",
      category: "feature",
    },
    {
      label: t("page-find-wallet-staking"),
      value: t("page-find-wallet-staking"),
      filterKey: "staking",
      category: "feature",
    },
    {
      label: t("page-find-wallet-swaps"),
      value: t("page-find-wallet-swaps"),
      filterKey: "swaps",
      category: "feature",
    },
    {
      label: t("page-find-wallet-layer-2"),
      value: t("page-find-wallet-layer-2"),
      filterKey: "layer_2",
      category: "feature",
    },
    {
      label: t("page-find-wallet-gas-fee-customization"),
      value: t("page-find-wallet-gas-fee-customization"),
      filterKey: "gas_fee_customization",
      category: "advanced",
    },
    {
      label: t("page-find-wallet-ens-support"),
      value: t("page-find-wallet-ens-support"),
      filterKey: "ens_support",
      category: "feature",
    },
    {
      label: t("page-find-wallet-token-importing"),
      value: t("page-find-wallet-token-importing"),
      filterKey: "erc_20_support",
      category: "advanced",
    },
    {
      label: t("page-find-wallet-buy-crypto"),
      value: t("page-find-wallet-buy-crypto"),
      filterKey: "buy_crypto",
      category: "trade_and_buy",
    },
    {
      label: t("page-find-wallet-sell-for-fiat"),
      value: t("page-find-wallet-sell-for-fiat"),
      filterKey: "withdraw_crypto",
      category: "trade_and_buy",
    },
    {
      label: t("page-find-wallet-multisig"),
      value: t("page-find-wallet-multisig"),
      filterKey: "multisig",
      category: "smart_contract",
    },
    {
      label: t("page-find-wallet-social-recovery"),
      value: t("page-find-wallet-social-recovery"),
      filterKey: "social_recovery",
      category: "smart_contract",
    },
  ]

  const [walletCardData, setWalletData] = useState(
    walletData.map((wallet) => {
      return { ...wallet, moreInfo: false, key: wallet.name }
    })
  )

  const updateMoreInfo = (key) => {
    const temp = [...walletCardData]

    temp.forEach((wallet, idx) => {
      if (wallet.key === key) {
        temp[idx].moreInfo = !temp[idx].moreInfo
      }
    })

    setWalletData(temp)
  }

  const filteredWallets = walletCardData.filter((wallet) => {
    let showWallet = true
    let mobileCheck = true
    let desktopCheck = true
    let browserCheck = true
    let hardwareCheck = true

    const featureFilterKeys = featureDropdownItems.map((item) => item.filterKey)

    const deviceFilters = Object.entries(filters).filter(
      (item) => !featureFilterKeys.includes(item[0])
    )
    const mobileFiltersTrue = deviceFilters
      .filter((item) => item[0] === "ios" || item[0] === "android")
      .filter((item) => item[1])
      .map((item) => item[0])
    const desktopFiltersTrue = deviceFilters
      .filter(
        (item) =>
          item[0] === "linux" || item[0] === "windows" || item[0] === "macOS"
      )
      .filter((item) => item[1])
      .map((item) => item[0])
    const browserFiltersTrue = deviceFilters
      .filter((item) => item[0] === "firefox" || item[0] === "chromium")
      .filter((item) => item[1])
      .map((item) => item[0])
    const hardwareFiltersTrue = deviceFilters
      .filter((item) => item[0] === "hardware")
      .filter((item) => item[1])
      .map((item) => item[0])

    for (let item of mobileFiltersTrue) {
      if (wallet[item]) {
        mobileCheck = true
        break
      } else {
        mobileCheck = false
      }
    }

    for (let item of desktopFiltersTrue) {
      if (wallet[item]) {
        desktopCheck = true
        break
      } else {
        desktopCheck = false
      }
    }

    for (let item of browserFiltersTrue) {
      if (wallet[item]) {
        browserCheck = true
        break
      } else {
        browserCheck = false
      }
    }

    for (let item of hardwareFiltersTrue) {
      if (wallet[item]) {
        hardwareCheck = true
        break
      } else {
        hardwareCheck = false
      }
    }

    featureFilterKeys.forEach((filter) => {
      if (filters[filter] && showWallet === true) {
        showWallet = filters[filter] === wallet[filter]
      }
    })

    return (
      mobileCheck && desktopCheck && browserCheck && hardwareCheck && showWallet
    )
  })

  /**
   *
   * @param selectedOption selected dropdown option
   * @param stateUpdateMethod method for updating state for dropdown
   * @param className className of column
   *
   * This method gets the elements with the className, adds a fade class to fade icons out, after 0.5s it will then update state for the dropdown with the selectedOption, and then remove the fade class to fade the icons back in. Then it will send a matomo event for updating the dropdown.
   */
  const updateDropdown = (
    selectedOption: DropdownOption,
    stateUpdateMethod: Function,
    className: ColumnClassName
  ) => {
    const domItems: HTMLCollectionOf<Element> =
      document.getElementsByClassName(className)

    Array.from(domItems).forEach((item) => {
      item.classList.add("fade")
    })

    setTimeout(() => {
      stateUpdateMethod(selectedOption)
      Array.from(domItems).forEach((item) => {
        item.classList.remove("fade")
      })
    }, 375)

    trackCustomEvent({
      eventCategory: "WalletFeatureCompare",
      eventAction: `Select WalletFeatureCompare`,
      eventName: `${selectedOption.filterKey} selected`,
    })
  }

  return {
    featureDropdownItems,
    updateMoreInfo,
    filteredWallets,
    updateDropdown,
    walletCardData,
  }
}
