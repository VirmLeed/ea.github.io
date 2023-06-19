const langList = ['en', 'ru', 'jp'];
const langArr = {
    "Selected" : {
        "en" : "English",
        "ru" : "Русский",
        "jp" : "日本",
    },
    "About" : {
        "en" : "About",
        "ru" : "О нас",
        "jp" : "だいたい",
    },
    "Download" : {
        "en" : "Download",
        "ru" : "Скачать",
        "jp" : "ダウンロード",
    },
    "Help" : {
        "en" : "Help",
        "ru" : "Помощь",
        "jp" : "ヘルプ",
    },
    "Team" : {
        "en" : "Our team",
        "ru" : "Наша команда",
        "jp" : "私たちのチーム",
    },
    "Slogan" : {
        "en" : "Bringin fun since 2021",
        "ru" : "Развлекаем с 2021-го",
        "jp" : "2021 年から楽しみをお届けします",
    },
    "Introduction" : {
        "en" : "In connection with the post-COVID situation and the foreign policy of the Russian Federation, people began to travel more within the country. However, some part of the population still prefers to relax abroad. Our team has developed an application that is designed to solve the eternal questions of travelers. Where to go for a walk? Where to have a delicious dinner? What is this city famous for? There is an answer! Entertainment assistant - will become your friend and indispensable assistant anywhere in the world.",
        "ru" : "В связи с послековидной ситуацией и внешней политикой Российской Федерации люди стали больше путешествовать внутри страны. Однако некоторая часть населения до сих пор предпочитает отдыхать за рубежом. Наша команда разработала приложение, которое призвано решить вечные вопросы путешественников. Куда сходить на прогулку? Где вкусно поужинать? Чем знаменит данный город? Ответ есть! Entertainment assistant - станет вашим другом и незаменимым помощником в любой точке земного шара.",
        "jp" : "新型コロナウイルス感染症後の状況とロシア連邦の外交政策に関連して、人々は国内を旅行することが増え始めましたが、人口の一部は依然として海外でリラックスすることを好みます。私たちのチームは、この問題を解決するために設計されたアプリケーションを開発しました。旅行者の永遠の疑問、どこへ散歩に行きますか？ おいしいディナーはどこで食べますか？ この都市は何で有名ですか? 答えはあります！ エンターテイメント アシスタント - 世界中のどこにいてもあなたの友人、そして欠かせないアシスタントになります。",
    },
    "WhyName" : {
        "en" : "How are we better?",
        "ru" : "Почему мы лучше?",
        "jp" : "なぜ私たちのほうが優れているのでしょうか？",
    },
    "Why" : {
        "en" : "Entertainment assistant is a domestic answer to foreign applications. Our product is focused primarily on the audience of the Russian Federation, which has created a real boom in domestic tourism. long-familiar cities. The trend towards exploring the homeland will only grow, and the constant development of tourism will ensure continued interest and an influx of new travelers. Up-to-date information, nice functionality, keyword search, adding favorite places to “favorites” - this is only a small part of what what the Entertainment assistant is capable of.",
        "ru" : "Entertainment assistant - отечественный ответ иностранным приложениям. Наш продукт ориентирован в первую очередь на аудиторию РФ, которая устроила настоящий бум внутреннего туризма. Введенные санкции послужили катализатором для исследований родного края и близлежащих территорий. Наше приложение станет путеводителем для путешественников, открывая всё новые уголки вроде-бы давно знакомых городов. Тенденция к изучению родины будет только расти, а постоянное развитие туризма обеспечит непрекращающийся интерес и приток новых путешественников. Актуальная информация, приятный функционал, поиск по ключевым словам, добавление любимых мест в “избранное” - это лишь малая часть того, на что способен Entertainment assistant.",
        "jp" : "エンターテイメント アシスタントは、外国のアプリケーションに対する国内の答えです。当社の製品は主に、国内観光の本当のブームを生み出しているロシア連邦の視聴者に焦点を当てています。長年馴染みのある都市です。祖国を探索する傾向はますます高まるでしょう。観光業の継続的な発展により、継続的な関心と新たな旅行者の流入が保証されます。最新情報、優れた機能、キーワード検索、お気に入りの場所の「お気に入り」への追加 - これはエンターテイメント アシスタントの機能のほんの一部にすぎません。の。",
    },
    "MapName" : {
        "en" : "Application starting page",
        "ru" : "Стартовая страница приложения",
        "jp" : "アプリケーションのスタートページ",
    },
    "Map" : {
        "en" : "The application, when loaded, opens the place where the user was last time, from this page you can already go to such tabs as:",
        "ru" : "Приложение при загрузке открывает место где последний раз был пользователь, с этой страницы уже можно перейти на такие вкладки как:",
        "jp" : "アプリケーションをロードすると、ユーザーが最後に訪れた場所が開きます。このページから、次のようなタブにすでに移動できます。",
    },
    "SearchLi" : {
        "en" : "Search",
        "ru" : "Поиск",
        "jp" : "検索",
    },
    "TimeLi" : {
        "en" : "Entertainment and leisure",
        "ru" : "Развлечения и досуг",
        "jp" : "エンターテイメントとレジャー",
    },
    "ReviewsLi" : {
        "en" : "Reviews",
        "ru" : "Отзывы",
        "jp" : "レビュー",
    },
    "FavsLi" : {
        "en" : "Favorites",
        "ru" : "Избранное",
        "jp" : "お気に入り",
    },
    "ProfileLi" : {
        "en" : "Profile",
        "ru" : "Профиль",
        "jp" : "プロフィール",
    },
    "SettingsLi" : {
        "en" : "Settings",
        "ru" : "Настройки",
        "jp" : "設定",
    },
    "PlacesName" : {
        "en" : "Places",
        "ru" : "Места",
        "jp" : "場所",
    },
    "Places" : {
        "en" : "Our app has collected many popular places from memorials and restaurants to hotels and hiking trails. Since this is still not enough, our users can add and evaluate other people's added places themselves. Also, if you have already decided on the chosen hotel or cinema, you can book seats directly from our application!",
        "ru" : "В нашем приложении собрано множество популярных мест начиная с мемориалов и ресторанов вплоть до отелей и пешеходных троп. Так как этого всё равно мало, наши пользователи могут сами добавлять и оценивать чужие добавленные места. Также, если вы уже определились с выбранным отелем или кинотеатром, вы можете забронировать места прямо из нашего приложения!",
        "jp" : "私たちのアプリは、記念碑やレストランからホテルやハイキングコースまで、多くの人気の場所を収集しています。 これだけではまだ不十分なので、ユーザーは他の人が追加した場所を自分で追加して評価することができます。 また、選択したホテルや映画館がすでに決まっている場合は、アプリから直接座席を予約することもできます。",
    },
    "ReviewsName" : {
        "en" : "Reviews",
        "ru" : "Отзывы",
        "jp" : "レビュー",
    },
    "Reviews" : {
        "en" : "Entertainment Assistant users can leave reviews for places they like or dislike and rate other people's reviews for the place they visited. Thanks to our moderation system, irrelevant or false reviews will quickly disappear, and truthful and useful ones will get to the top of the list.",
        "ru" : "Пользователи Entertainment Assistant могут оставлять отзывы на понравившиеся или не понравившиеся им места и оценивать чужие отзывы на посещённое место. Благодаря нашей системе модерации, не актуальные или ложные отзывы быстро исчезнут, а правдивые и полезные попадут в начало списка.",
        "jp" : "Entertainment Assistant のユーザーは、好きな場所や嫌いな場所についてレビューを残したり、訪れた場所について他の人のレビューを評価したりできます。 当社のモデレーション システムのおかげで、無関係または誤ったレビューはすぐに消え、真実で有益なレビューがリストの一番上に表示されます。",
    },
    "Review1" : {
        "en" : "User Artem Sadykov left a comment",
        "ru" : "Пользователь Артём Садыков оставил комментарий",
        "jp" : "ユーザー Artyom Sadykov がコメントを残しました",
    },
    "Review2" : {
        "en" : "Horrible place near the tech uni, corresponding contingent",
        "ru" : "Ужасное место возле политеха, контингент соответствующий",
        "jp" : "ポリテクニックの近くのひどい場所、派遣が適切です",
    },
    "DownloadProblem" : {
        "en" : "Having problems downloading?",
        "ru" : "Проблемы с загрузкой?",
        "jp" : "ダウンロードに問題がありますか?",
    },
    "Faq" : {
        "en" : "Frequently asked questions",
        "ru" : "Часто задаваемые вопросы",
        "jp" : "よくある質問",
    },
    "Q1" : {
        "en" : "Why is there no real questions?",
        "ru" : "Почему тут нету настоящих вопросов?",
        "jp" : "本当の質問がないのはなぜですか?",
    },
    "A1" : {
        "en" : "Because we don't have any yet. If they appear, we will put them here.",
        "ru" : "Потому что у нас их пока нет. Если они появятся, мы разместим их здесь.",
        "jp" : "本当の質問がないのはなぜですか?",
    },
    "Q2" : {
        "en" : "What kinds of questions will you put here?",
        "ru" : "Какие вопросы вы сюда добавляете?",
        "jp" : "ここにはどのような質問を入れますか?",
    },
    "A2" : {
        "en" : "We will include questions that are often asked and yet have a simple and usually similar answers.",
        "ru" : "Мы будем добавлять вопросы, которые часто задают, но при этом они имеют простые и обычно похожие ответы.",
        "jp" : "よく聞かれる質問ですが、答えは簡単で、通常は同様のものが含まれます。",
    },
    "Q3" : {
        "en" : "What score does this project deserve?",
        "ru" : "Какой оценки заслуживает этот проект?",
        "jp" : "このプロジェクトは何点に値しますか?"
    },
    "A3" : {
        "en" : "Of course it deserves 100 points.",
        "ru" : "Конечно он заслуживает 100 баллов.",
        "jp" : "もちろん100点満点です。",
    },
    "NoQ" : {
        "en" : "Haven't found an answer to your question?",
        "ru" : "Не нашли ответ на свой вопрос?",
        "jp" : "質問に対する答えが見つかりませんでしたか?",
    },
    "ContactUsButton" : {
        "en" : "Contact us!",
        "ru" : "Свяжитесь с нами!",
        "jp" : "お問い合わせ！",
    },
    "ReadBefore" : {
        "en" : "Before messaging us, please check out our FAQs, as your question may have already been addressed.",
        "ru" : "Перед тем, как отправить нам сообщение, ознакомьтесь с часто задаваемыми вопросами, так как ваш вопрос, возможно, уже обсуждался.",
        "jp" : "あなたの質問がすでに解決されている可能性があるため、メッセージを送る前によくある質問をご確認ください。",
    },
    "QType" : {
        "en" : "Type of your question",
        "ru" : "Тип вашего вопроса",
        "jp" : "質問の種類",
    },
    "AppQ" : {
        "en" : "Application techincal question",
        "ru" : "Технический вопрос по приложению",
        "jp" : "アプリケーションの技術的な質問",
    },
    "CoopQ" : {
        "en" : "Cooperation",
        "ru" : "Сотрудничество",
        "jp" : "協力",
    },
    "AppIdea" : {
        "en" : "Application idea",
        "ru" : "Идея для приложения",
        "jp" : "アプリケーションのアイデア",
    },
    "GeneralQ" : {
        "en" : "General question",
        "ru" : "Общий вопрос",
        "jp" : "一般的な質問",
    },
    "QEmail" : {
        "en" : "Your email",
        "ru" : "Ваша почта",
        "jp" : "あなたのメールアドレス",
    },
    "QConfirm" : {
        "en" : "Confirm your email",
        "ru" : "Подтвердите вашу почту",
        "jp" : "メールを確認してください",
    },
    "WrongEmail" : {
        "en" : "Emails don't match",
        "ru" : "Почта не совпадает",
        "jp" : "メールが一致しません",
    },
    "QSubject" : {
        "en" : "Subject",
        "ru" : "Тема",
        "jp" : "主題",
    },
    "QMessage" : {
        "en" : "Message",
        "ru" : "Сообщение",
        "jp" : "メッセージ",
    },
    "ContactSend" : {
        "en" : "Send",
        "ru" : "Отправить",
        "jp" : "送信",
    },
    "SentEmail" : {
        "en" : "Sent!",
        "ru" : "Отправлено!",
        "jp" : "送信済！",
    },
    "ContactUs" : {
        "en" : "Contact us",
        "ru" : "Свяжитесь с нами",
        "jp" : "お問い合わせ",
    }
}