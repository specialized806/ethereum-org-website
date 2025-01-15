import { ReactNode } from "react"
import { Heading, Stack, StackProps, Text } from "@chakra-ui/react"

import Emoji from "@/components/Emoji"

export type CardProps = Omit<StackProps, "children" | "title"> & {
  children?: ReactNode
  emoji?: string
  title?: ReactNode
  description?: ReactNode
}

const Card = ({ emoji, title, description, children, ...props }: CardProps) => (
  <Stack
    spacing="4"
    justifyContent="space-between"
    bg="ednBackground"
    borderRadius="sm"
    border="1px"
    borderStyle="solid"
    borderColor="lightBorder"
    p="6"
    {...props}
  >
    <Stack spacing="4">
      {emoji && <Emoji className="text-5xl leading-none" text={emoji} />}
      <Stack spacing="8">
        {title && (
          <Heading as="h3" fontSize="2xl">
            {title}
          </Heading>
        )}
        {description && <Text>{description}</Text>}
      </Stack>
    </Stack>
    {children}
  </Stack>
)

export default Card
