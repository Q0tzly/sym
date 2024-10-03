Object.assign(window.search, {"doc_urls":["overview.html#1-概要","start.html#2-始め方","start.html#21-インストール","start.html#22-hello-world","syntax.html#3-構文の概要","syntax.html#31-スタック操作","syntax.html#32-算術演算","syntax.html#33-比較演算","syntax.html#34-制御フロー","syntax.html#35-入出力","syntax.html#36-デバッグ","syntax.html#37-コメント","examples.html#4-使用例","examples.html#41-down-counter","examples.html#42-up-counter","examples.html#43-greeter","application.html#5-応用例","application.html#51-fizz-buzz"],"index":{"documentStore":{"docInfo":{"0":{"body":2,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"10":{"body":0,"breadcrumbs":1,"title":1},"11":{"body":1,"breadcrumbs":1,"title":1},"12":{"body":0,"breadcrumbs":1,"title":1},"13":{"body":5,"breadcrumbs":3,"title":3},"14":{"body":6,"breadcrumbs":3,"title":3},"15":{"body":16,"breadcrumbs":2,"title":2},"16":{"body":0,"breadcrumbs":1,"title":1},"17":{"body":38,"breadcrumbs":3,"title":3},"2":{"body":8,"breadcrumbs":1,"title":1},"3":{"body":63,"breadcrumbs":3,"title":3},"4":{"body":1,"breadcrumbs":1,"title":1},"5":{"body":8,"breadcrumbs":1,"title":1},"6":{"body":6,"breadcrumbs":1,"title":1},"7":{"body":5,"breadcrumbs":1,"title":1},"8":{"body":11,"breadcrumbs":1,"title":1},"9":{"body":1,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"Sym 言語は、非常にシンプルで軽量なスタックベースのプログラミング言語です。プログラムは、数値と記号を使って記述され、スタック上で演算を行います。 このドキュメントでは、Sym 言語の使用方法、命令セット、簡単なサンプルコード、応用例について説明します。","breadcrumbs":"概要 » 1. 概要","id":"0","title":"1. 概要"},"1":{"body":"この言語を使用して最初のプログラムを書くための基本的な手順を示します。","breadcrumbs":"始め方 » 2. 始め方","id":"1","title":"2. 始め方"},"10":{"body":"デバッグ用の命令もいくつか用意されています。プログラムの実行時にスタックの状態を確認したり、デバッグ情報を入出力したりすることができます。 命令 説明 使用例 $? 標準入力から数値を受け取り、スタックにプッシュする。 $? $! スタックの先頭の値をデバッグ出力する。 $!","breadcrumbs":"構文の概要 » 3.6 デバッグ","id":"10","title":"3.6 デバッグ"},"11":{"body":"行の先頭の文字が#の場合のみ、コメントになります。 Sym 言語の命令セットは、シンプルで直感的に使えるよう設計されています。これらの基本命令を理解することで、Sym 言語を使ったプログラミングの基礎が身に付きます。","breadcrumbs":"構文の概要 » 3.7 コメント","id":"11","title":"3.7 コメント"},"12":{"body":"","breadcrumbs":"使用例 » 4. 使用例","id":"12","title":"4. 使用例"},"13":{"body":"100\n@ $! 1 - @ ~2 10 13 ! !","breadcrumbs":"使用例 » 4.1 Down Counter","id":"13","title":"4.1 Down Counter"},"14":{"body":"0\n@ $! 1 + @ 100 > |2 10 13 ! !","breadcrumbs":"使用例 » 4.2 Up Counter","id":"14","title":"4.2 Up Counter"},"15":{"body":"10 13 100 108 114 111 87 32 111 108 108 101 72\n13\n& ! 1 - @ ~3","breadcrumbs":"使用例 » 4.3 Greeter","id":"15","title":"4.3 Greeter"},"16":{"body":"","breadcrumbs":"応用例 » 5 応用例","id":"16","title":"5 応用例"},"17":{"body":"31 @ 15 % |8\n@ 5 % |9\n@ 3 % |10\n^12 122 122 117 66 122 122 105 70 8 ^13\n122 122 117 66 4 ^13\n122 122 105 70 4 ^13 @ $! ^16\n& ! 1 - @ ~13 _\n1 - @ ~3 10 13 ! !","breadcrumbs":"応用例 » 5.1 Fizz Buzz","id":"17","title":"5.1 Fizz Buzz"},"2":{"body":"Cargo を使用したインストール Sym 言語は、Rust 製で、Cargo を使ってインストールすることができます。以下のコマンドを実行して、インストールしてください。 cargo install sym-lang","breadcrumbs":"始め方 » 2.1 インストール","id":"2","title":"2.1 インストール"},"3":{"body":"Sym 言語での最初のコーディングとして、「Hello World」を出力するプログラムを書いてみましょう。 10 13 100 108 114 111 87 32 111 108 108 101 72\n13\n& ! 1 - @ ~3 このコードは少し、複雑に見えますが、各部分を丁寧に解説していきます。まずは、このコードをわかりやすい形式に置き換えます。 `n` `\\` `d` `l` `r` `o` `W` ` ` `o` `l` `l` `e` `H`\n13\nswap out 1 - dup jnz(3) まず、前提として、Sym 言語はスペースと改行で命令を分割します。 1 行目 数字が並んでいます。Sym 言語では、数値(0 ~ 255)のみをデータとして扱うことができます。 数値は、そのまま書くと、スタックにプッシュできます。 Sym 言語では、文字や文字列はなく、ascii のコードを１０進数表記にして扱います。 これらの数値は10進数の ascii で、\"Hello World\\n\"を逆にしてプッシュしています。 また、最初の10 13は改行文字です。 Note: 文字と文字列、リバース操作は Ver 1.1.0 で追加される予定です。 2 行目 13 という数値がスタックに積まれます。 これは出力する文字列の長さです。後の処理でのループ制御に使用します。 3 行目 三行目では、文字を１つずつ出力するための処理を行います。 ステップごとに分解して説明します。 &(swap) : 現在のスタックのトップにある数値 13 (文字列の長さ)と、その下にある最初の文字'H'(72)を入れ替えます。これにより、次の命令で文字を出力できるようにします。 !(out) : スタックのトップにある文字'H'(72)を ascii として出力します。 1 - : １文字出力したので、文字列の長さから1を引きます。これにより、次回ループ時に、残りの文字列がわかります。 @(dup) : スタックのトップにある、減算後の文字列の長さの値をコピーします。この値が次の命令に使われます。 ~3(jnz(3)) : スタックのトップの値が0でない場合に、３行目にジャンプします。これにより、文字列の全てが出力されるまで、ループが繰り返されます。","breadcrumbs":"始め方 » 2.2 Hello World","id":"3","title":"2.2 Hello World"},"4":{"body":"Sym 言語の命令は、スタック操作、算術演算、比較、制御フロー、入出力、デバックの６つに分類されます。","breadcrumbs":"構文の概要 » 3. 構文の概要","id":"4","title":"3. 構文の概要"},"5":{"body":"Sym 言語では、スタックを用いてデータを操作します。以下は、スタック操作に関連する命令です。 命令 説明 使用例 _ スタックの先頭の値を取り除く。 _ @ スタックの先頭の値をコピーする。 @ & スタックの先頭の2つの値を入れ替える。 & n n をスタックにプッシュする（例: 10）。 10","breadcrumbs":"構文の概要 » 3.1 スタック操作","id":"5","title":"3.1 スタック操作"},"6":{"body":"Sym 言語では、スタックに積まれた数値に対して基本的な算術演算を行うことができます。算術命令は、スタックの先頭の値を使用して演算を実行します。 命令 説明 使用例 + スタックの先頭の2つの値を加算する。 + - スタックの先頭の2つの値を減算する。 - * スタックの先頭の2つの値を掛け算する。 * / スタックの先頭の2つの値を割り算する。 / % スタックの先頭の2つの値の剰余を計算する。 %","breadcrumbs":"構文の概要 » 3.2 算術演算","id":"6","title":"3.2 算術演算"},"7":{"body":"Sym 言語では、値の比較を行うための命令が用意されています。これらの命令は、スタックの先頭の値を比較し、結果をスタックにプッシュします（1 または 0）。 命令 説明 使用例 = スタックの先頭の2つの値が等しいか比較。 = > スタックの先頭の値が2番目の値より大きいか。 > < スタックの先頭の値が2番目の値より小さいか。 <","breadcrumbs":"構文の概要 » 3.3 比較演算","id":"7","title":"3.3 比較演算"},"8":{"body":"制御フロー命令を使って、プログラムの実行を分岐させることができます。特定の条件に基づいてジャンプやループを行うことが可能です。 命令 説明 使用例 ^n 指定された行番号 n に無条件ジャンプ。 ^10 |n スタックの先頭が 0 なら、行番号 n にジャンプ。 |10 ~n スタックの先頭が 0 でないなら、行番号 n にジャンプ。 ~10 ; プログラムを停止する。 ;","breadcrumbs":"構文の概要 » 3.4 制御フロー","id":"8","title":"3.4 制御フロー"},"9":{"body":"Sym 言語には、基本的な入出力命令が用意されています。これにより、標準入力から値を受け取り、標準出力に値を表示することができます。 命令 説明 使用例 ? 標準入力から1つの値を受け取り、スタックにプッシュする。 ? ! スタックの先頭の値を標準出力に出力する。 !","breadcrumbs":"構文の概要 » 3.5 入出力","id":"9","title":"3.5 入出力"}},"length":18,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":4,"docs":{"14":{"tf":1.0},"3":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"1":{".":{"1":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"0":{"df":4,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"3":{"tf":1.0}}},"1":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"5":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"8":{"df":2,"docs":{"15":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772}}},"df":7,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}},"1":{"1":{"df":2,"docs":{"15":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}},"4":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"7":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"2":{"df":1,"docs":{"17":{"tf":2.8284271247461903}}},"df":1,"docs":{"17":{"tf":1.0}}},"3":{"df":5,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.4142135623730951},"17":{"tf":2.23606797749979},"3":{"tf":2.449489742783178}}},"5":{"df":1,"docs":{"17":{"tf":1.0}}},"6":{"df":1,"docs":{"17":{"tf":1.0}}},"df":6,"docs":{"0":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":2.0}}},"2":{".":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":7,"docs":{"1":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.23606797749979},"7":{"tf":1.7320508075688772}}},"3":{"(":{"df":0,"docs":{},"j":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"(":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},".":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"7":{"tf":1.0}}},"4":{"df":1,"docs":{"8":{"tf":1.0}}},"5":{"df":1,"docs":{"9":{"tf":1.0}}},"6":{"df":1,"docs":{"10":{"tf":1.0}}},"7":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"1":{"df":1,"docs":{"17":{"tf":1.0}}},"2":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":4,"docs":{"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"4":{".":{"1":{"df":1,"docs":{"13":{"tf":1.0}}},"2":{"df":1,"docs":{"14":{"tf":1.0}}},"3":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"12":{"tf":1.0},"17":{"tf":1.4142135623730951}}},"5":{".":{"1":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"16":{"tf":1.0},"17":{"tf":1.0}}},"6":{"6":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"7":{"0":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"2":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"8":{"7":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"17":{"tf":1.0}}},"_":{"df":2,"docs":{"17":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}}}}}}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}},"h":{"'":{"(":{"7":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"(":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"n":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"r":{"df":1,"docs":{"3":{"tf":1.0}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"m":{"df":9,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"9":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"w":{"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"0":{"df":4,"docs":{"14":{"tf":1.0},"3":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"1":{".":{"1":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"0":{"df":4,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"3":{"tf":1.0}}},"1":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"5":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"8":{"df":2,"docs":{"15":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772}}},"df":7,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}},"1":{"1":{"df":2,"docs":{"15":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}},"4":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"7":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"2":{"df":1,"docs":{"17":{"tf":2.8284271247461903}}},"df":1,"docs":{"17":{"tf":1.0}}},"3":{"df":5,"docs":{"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.4142135623730951},"17":{"tf":2.23606797749979},"3":{"tf":2.449489742783178}}},"5":{"df":1,"docs":{"17":{"tf":1.0}}},"6":{"df":1,"docs":{"17":{"tf":1.0}}},"df":6,"docs":{"0":{"tf":1.4142135623730951},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":2.0}}},"2":{".":{"1":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":7,"docs":{"1":{"tf":1.4142135623730951},"13":{"tf":1.0},"14":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.23606797749979},"7":{"tf":1.7320508075688772}}},"3":{"(":{"df":0,"docs":{},"j":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"(":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},".":{"1":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"4":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"5":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}},"7":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"1":{"df":1,"docs":{"17":{"tf":1.0}}},"2":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":4,"docs":{"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}},"4":{".":{"1":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"12":{"tf":1.4142135623730951},"17":{"tf":1.4142135623730951}}},"5":{".":{"1":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"16":{"tf":1.4142135623730951},"17":{"tf":1.0}}},"6":{"6":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"7":{"0":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"2":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"8":{"7":{"df":2,"docs":{"15":{"tf":1.0},"3":{"tf":1.0}}},"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"17":{"tf":1.0}}},"_":{"df":2,"docs":{"17":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.4142135623730951}}}}}}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}}}}}}},"h":{"'":{"(":{"7":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":2.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"(":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"n":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"r":{"df":1,"docs":{"3":{"tf":1.0}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"m":{"df":9,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"9":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"w":{"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}},"title":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"2":{".":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}},"3":{".":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"7":{"tf":1.0}}},"4":{"df":1,"docs":{"8":{"tf":1.0}}},"5":{"df":1,"docs":{"9":{"tf":1.0}}},"6":{"df":1,"docs":{"10":{"tf":1.0}}},"7":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"4":{".":{"1":{"df":1,"docs":{"13":{"tf":1.0}}},"2":{"df":1,"docs":{"14":{"tf":1.0}}},"3":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.0}}},"5":{".":{"1":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"16":{"tf":1.0}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.0}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});