---
title: 分散型取引所 (DEX) のデザインベストプラクティス
description: トークンをスワップする際のUX/UIの意思決定を解説するガイド
lang: ja
---

2018年にUniswapが登場して以来、数十の異なるチェーンで数百の分散型取引所が立ち上げられてきました。
多くのDEXは新しい要素を導入したり、自分たち独自の工夫を加えたりしていますが、インターフェースは基本的に同じままです。

この理由の1つが[Jakobの法則](https://lawsofux.com/jakobs-law/)です。

> ユーザーはほとんどの時間を他のサイトで過ごしています。 つまりユーザーは、あなたのサイトも、既に知っている他のサイトと同じように機能してほしいと考えます。

Uniswap、Pancakeswap、Sushiswapのような初期の革新者たちのおかげで、DeFiユーザーはDEXがどうあるべきかについて共通のイメージを持つようになりました。
このため、「ベストプラクティス」のようなものが徐々に形成されつつあります。 私たちは、デザインの意思決定がますます多くのサイトで標準化されていく様子を目の当たりにしています。 DEXの進化は、まさにリアルタイムで行われる大規模なテストのようなものです。 機能したものは残り、機能しなかったものは排除されました。 個性を出す余地はまだありますが、DEXには守るべき一定の基準があります。

この記事では以下の内容をまとめています：

- 含めるべき要素
- できるだけ使いやすくする方法
- デザインをカスタマイズする主要な方法

すべてのワイヤーフレーム例は、この記事のために特別に作成されたもので、実際のプロジェクトを基にしています。

記事の最後にはFigmaキットも含まれているので、自由に使って自分のワイヤーフレームの作成をスピードアップしてください！

## DEXの基本的な構造 {#basic-anatomy-of-a-dex}

UIには一般的に次の3つの要素が含まれます:

1. メインフォーム
2. ボタン
3. 詳細パネル

![Generic DEX UI, showing the three main elements](./1.png)

## バリエーション {#variations}

この記事全体を通して共通のテーマとなりますが、これらの要素をまとめる方法にはさまざまな種類があります。 「詳細パネル」は以下のような配置が可能です:

- ボタンの上
- ボタンの下
- アコーディオンパネルに隠す
- 「プレビュー」モーダルに表示する

注意： 「プレビュー」モーダルは必須ではありませんが、メインUIで非常に少ない詳細しか表示しない場合は、必須になります。

## メインフォームの構造 {#structure-of-the-main-form}

これは、実際にスワップしたいトークンを選択するボックスです。 このコンポーネントは、入力フィールドと小さなボタンが一列に並んでいます。

DEXは通常、上下に1行ずつ追加の詳細を表示しますが、これは異なる構成にすることもできます。

![Input row, with a details row above and below](./2.png)

## バリエーション {#variations2}

ここでは2つのUIバリエーションを紹介します。1つは境界線のない非常にオープンなデザインで、もう1つは入力行に境界線があり、その要素に焦点を当てたデザインです。

![Two UI variations of the main form](./3.png)

この基本構造により、デザインに4つの重要な情報を表示することができます。それぞれが各コーナーに配置されます。 行が上か下に1つしかない場合は、スポットは2つだけになります。

DeFiの進化の過程で、ここにはさまざまな情報が含まれてきました。

## 含めるべき重要な情報 {#key-info-to-include}

- ウォレットの残高
- 最大ボタン
- 法定通貨での価値
- 「受け取る」金額への価格インパクト

DeFi初期の頃は、法定通貨換算の価値表示がしばしば欠けていました。 Web3プロジェクトを構築する場合、法定通貨での価値表示は必須です。 ユーザーはまだ現地通貨で考えているので、現実世界の思考モデルに合わせるためにこれを含めるべきです。

2つ目のフィールド (スワップ先のトークンを選択するフィールド) では、入力金額と推定出力金額の差を計算することで、法定通貨金額の横に価格インパクトも表示できます。 これはかなり有用な詳細情報です。

パーセンテージボタン (例：25%、50%、75%) は便利な機能ですが、より多くのスペースを占め、アクションの呼び掛けを増やし、精神的負荷を増加させます。 パーセンテージスライダーも同様です。 これらのUI設計の決定の一部は、あなたのブランドやユーザータイプに依存します。

追加の詳細情報は、メインフォームの下に表示することができます。 このタイプの情報は主にプロユーザー向けなので、以下のいずれかの方法が合理的です：

- できるだけミニマルに保つ
- アコーディオンパネルに隠す

![Details shown in the corners of that main form](./4.png)

## 含めるべき追加情報 {#extra-info-to-include}

- トークン価格
- スリッページ
- 最小受取額
- 予想アウトプット
- 価格への影響
- ガス代の見積もり
- その他の手数料
- オーダールーティング

これらの詳細情報の中には、オプションとして扱えるものもあるかもしれません。

オーダールーティングは興味深いですが、多くのユーザーにとって大きな違いをもたらすわけではありません。

また、他の詳細情報は、同じ内容を異なる表現で繰り返しているだけのこともあります。 たとえば、「最小受取額」と「スリッページ」は同じことを別の角度から説明しているに過ぎません。 スリッページが1%に設定されている場合、期待される受取額は「予想アウトプット-1%」になります。 いくつかのUIでは、予想受取額、最小受取額、そしてスリッページが表示されますが、 これは便利である一方で、少し過剰かもしれません。

ほとんどのユーザーは、デフォルトのスリッページをそのまま使用するでしょう。

「価格への影響」は、しばしば「to」フィールドにある法定通貨換算の隣にカッコで表示されます。 これは優れたUXのディテールですが、ここに表示されるなら、下にもう一度表示する必要があるでしょうか？ そしてさらにプレビュー画面でも表示する必要があるのでしょうか？

多くのユーザー (特に少額のスワップを行うユーザー) は、こうした詳細にはあまり関心がなく、単に数値を入力してスワップをクリックするだけでしょう。

![Some details show the same thing](./5.png)

どの詳細を表示するかは、対象とする層や、アプリに持たせたい雰囲気によって異なります。

もしスリッページ許容範囲を詳細パネルに含める場合は、ここから直接編集できるようにするべきです。 これは「アクセラレーター」の良い例です。アプリの一般的な使いやすさに影響を与えることなく、熟練ユーザーのフローを高速化できる巧妙なUXのテクニックです。

![Slippage can be controlled from the details panel](./6.png)

1つの画面上の特定の情報だけでなく、全体のフローについて慎重に考えることが重要です：メインフォームに数字を入力 → 詳細を確認 → プレビュー画面をクリック (プレビュー画面がある場合)。
詳細パネルは常に表示されるべきか、それともユーザーがクリックして展開する必要があるでしょうか？
レビュー画面を追加して、ユーザーを一度立ち止まらせるべきでしょうか？ これにより、ユーザーはスローダウンし、取引を検討することができます。これは有用かもしれません。 とはいえ、彼らは同じ情報をもう一度見たいと思うでしょうか？ この時点で彼らにとって最も有用なものは何でしょうか？

## デザインオプション {#design-options}

前述のように、これは多くが個人のスタイルに関わってきます。あなたのユーザーは誰ですか？
あなたのブランドは何ですか？
あらゆる詳細を表示する「プロ向け」インターフェースを望んでいますか、それともミニマリストを目指していますか？
たとえプロユーザー向けに可能な限りの情報を表示したいと考えていても、アラン・クーパーの賢明な言葉を覚えておくべきです：

> インターフェースがどんなに美しくても、どんなにクールでも、シンプルであればあるほど良いのです。

### 構造 {#structure}

- トークンを左に置くか、右に置くか
- 2行にするか3行にするか
- 詳細をボタンの上に置くか下に置くか
- 詳細を展開するか、最小化するか、表示しないか

### コンポーネントのスタイル {#component-style}

- スタイルなし
- アウトライン
- 塗りつぶし

純粋なUXの観点から見ると、UIスタイルは思ったほど重要ではありません。 視覚的なトレンドは周期的に変わるものであり、多くの好みは主観的なものです。

これを感じ取る最も簡単な方法は、いくつかの例を見て、さまざまな構成を自分で試してみることです。

付属のFigmaキットには、スタイルなし、アウトライン、塗りつぶしのコンポーネントが含まれています。

以下の例を見て、さまざまな組み合わせ方を確認してみてください。

![3 rows in a filled style](./7.png)

![3 rows in a outlined style](./8.png)

![2 rows in an empty style](./9.png)

![3 rows in an outlined style, with a details panel](./10.png)

![3 rows with the input row in an outlined style](./11.png)

![2 rows in a filled style](./12.png)

## トークンはどちら側に配置すべきか？ {#but-which-side-should-the-token-go-on}

結論から言うと、使いやすさに大きな違いはないかもしれません。 ただし、いくつか考慮すべき点があり、それが配置の選択に影響を与えるかもしれません。

時とともに流行が変化するのを見るのは少し興味深いです。 Uniswapは最初、トークンを左側に配置していましたが、後に右側に移動させました。 Sushiswapもデザインアップグレードの際にこの変更を行いました。 ほとんどのプロトコルがこれに倣っていますが、すべてではありません。

金融の慣習では、$50, €50, £50のように通貨記号を数字の前に置きます。しかし、言葉で話すときは「50ドル」「50ユーロ」「50ポンド」と言います。

一般的なユーザー、特に左から右、上から下へ読む人にとっては、トークンが右側にある方が自然に感じるかもしれません。

![A UI with tokens on the left](./13.png)

トークンを左に配置し、すべての数字を右に置くと、見た目が対称的で美しいという利点がありますが、このレイアウトには別の欠点もあります。

近接の法則では、近くにある項目は関連があると認識されます。 したがって、関連する項目を隣同士に配置したいと考えます。 トークン残高はトークン自体に直接関連しており、新しいトークンが選択されるたびに変化します。 そのため、トークンの残高をトークン選択ボタンの隣に配置する方が少し理にかなっています。 トークンの下に移動することもできますが、それではレイアウトの対称性が崩れてしまいます。

最終的には、どちらのオプションにも利点と欠点がありますが、トークンを右側に配置するトレンドが見られるのは興味深いです。

# ボタンの動作 {#button-behavior}

承認用の別ボタンは設けないでください。 また、承認のための別クリックも不要です。 ユーザーはスワップを望んでいるので、ボタンには単に「スワップ」と表示し、最初のステップとして承認を開始してください。 モーダルでステッパーを使って進捗を表示するか、シンプルに「取引1/2 - 承認中」という通知を表示することができます。

![A UI with separate buttons for approve and swap](./14.png)

![A UI with one button that says approve](./15.png)

## コンテキストヘルプとしてのボタン {#button-as-contextual-help}

ボタンはアラートとしても活用できます！

これは実際にはWeb3以外ではかなり珍しいデザインパターンですが、Web3の世界では標準となっています。 スペースを節約し、ユーザーの注意を集中させることができるため、良い革新です。

もしメインアクションである「スワップ」がエラーによって利用できない場合、その理由をボタンで説明できます。例えば、以下のようなエラーが考えられます。

- ネットワークの切り替え
- ウォレットを接続
- 様々なエラー

また、ボタンは実行する必要があるアクションに対応させることもできます。 例えば、ユーザーが間違ったネットワークに接続しているためにスワップできない場合、ボタンには「イーサリアムに切り替える」と表示し、ユーザーがそのボタンをクリックすると、ネットワークがイーサリアムに切り替わります。 これにより、ユーザーフローが大幅にスピードアップします。

![Key actions being initiated from the main CTA](./16.png)

![Error message shown within the main CTA](./17.png)

## Figmaファイルで自作する {#build-your-own-with-this-figma-file}

複数のプロトコルの尽力により、DEXのデザインは大幅に改善されました。 私たちは、ユーザーが必要とする情報や、その表示方法、そしてできるだけスムーズなフローの作り方を理解しています。
この記事がUXの基本原則についてのしっかりとした概要を提供できていれば幸いです。

もし試してみたい場合は、ぜひFigmaのワイヤーフレームキットをご利用ください。 可能な限りシンプルに保たれていますが、基本構造をさまざまな方法で構築できる柔軟性も備えています。

[Figmaワイヤーフレームキット](https://www.figma.com/community/file/1393606680816807382/dex-wireframes-kit)

DeFiはこれからも進化し続け、改善の余地は常にあります。

健闘を祈ります！