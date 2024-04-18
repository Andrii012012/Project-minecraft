interface IRules {
  id: string;
  title: string;
  descriptions: string[];
  pointRules: string[];
  punishments: (string | null)[];
}

const RULES: IRules[] = [
  {
    id: "common",
    title: "Общие:",
    descriptions: [
      "Пройдя регистрацию на нашем проекте, Вы автоматически и безоговорочно подтверждаете свою ознакомленность и своё полное согласие с приведенным ниже сводом правил, в таком виде, в котором они есть и обязуетесь не нарушать их. Незнание правил, не освобождает Вас от ответственности. В целях безопасности игроков и проекта при регистрации вы даёте согласие на обработку личных данных и личных сообщений на форуме, сайте и в игре. Запомните, шуток мы не понимаем - если Вы что-то нарушили, то получили своё соответствующее наказание, поэтому думайте, что Вы делаете и что пишите",
      "Проект является бесплатной и некоммерческой структурой, предоставляющей игровые услуги, без каких-либо гарантий правильность работы. Вы соглашаетесь с тем, что любые потерянные вами игровые ресурсы, деньги, пожертвованные на счет аккаунта; товары, купленные путём пожертвования в игровом онлайн магазине и прочее не возвращаются ни при каких условиях и обстоятельствах. Все перечисления на счет являются добровольными пожертвованиями для развития проекта, а платные услуги предоставляются в качестве благодарности за материальную поддержку.",
      "Оплата услуг и пополнение денег на счёт предоставляется только на официальном сайте проекта в рублевом эквиваленте.",
      "Запомните, Вы сами несете ответственность за безопасность вашего аккаунта (используйте уникальные сложные пароли, не передавайте третьим лицам данные о вашем аккаунте и прочее), а так же за любые действия совершенные под этим аккаунтом. Взлом, кража, 'играл не я, мой брат/сестра/бабушка/дедушка и прочее' - не являются оправданием.",
      'Вы подтверждаете свое согласие с тем, что администрация проекта не несет перед вами никакие обязательства, и принимаете то, что игра на проекте предоставляется "как есть" и отказываетесь от каких-либо претензий к их решениями и действиям. Соглашаетесь с тем, что другие члены команды также не несут перед вами каких-либо дополнительных обязательств, кроме общих и должностных, указанных в этом своде правил.',
      "При блокировке аккаунта, все игровые ценности, территория и прочее не будут возвращены или переданы третьим лицам. Так же игровые ценности могут быть изъяты или удалены: - если нет доказательств их получения; - если они были получены нечестным путём (при покупки по низкой цене, при раздаче и прочее) или по какой-то ошибке; - если игрок не заходил на сервер более 30 дней.",
      "Правила общения относятся ко всем видам передачи информации на серверах. К этому относятся голосовой (в данном случае будет выдаваться бан), локальный, глобальный и личный чаты, таблички, префиксы, информационные панели, варпы и прочее.",
      "Зафиксированные нарушения подаются не позднее 72 часов на форум. Так же Вышестоящее руководство вправе отказать Вам, если Вы не можете предоставить чётких доказательств того или иного нарушения. Внутриигровой Администратор не обязан отвечать на жалобу непосредственно в игре. Используя форум и правильно составив свой вопрос или жалобу, Вы помогаете её скорейшему рассмотрению и решению.",
      "На каждом сервере присутствуют свои внутриигровые правила. За нарушение их Вы в свою очередь получите наказание, поэтому внимательно читайте их. Каждый сервер по своему уникален и поэтому, некоторые правила созданы на форуме в разделе серверов.",
      "Запомните, Администрация проекта не несёт ответственность за тех игроков, которых вы добавили в приват. В случае обмана, кражи, убийства и прочее - вещи вам скорее всего не вернут, но за гриферство накажут. Если это будет возможно.",
      "Запрещено регистрировать никнеймы, которые: - состоят из одних бессмысленных символов и цифр; - нарушающие нормы морали и приличия; - имеющий рекламный подтекст (реклама сервера, групп, упоминание онлайн-игр, Youtube-каналов); - содержащие упоминание наркотических веществ; - содержащих оскорбительный, нецензурный или сексуальный (порнографический) характер; - схожие с никами Команды проекта; - содержащие технические слова (Helper, Moder, Admin, Server, Tester, OP и прочее).",
      "Запрещено устанавливать скины, плащи и аватары - содержащие оскорбительный или нецензурный характер; - носящие порнографический характер; - имеющие отношение к нацизму. Пояснение: запрет на скины такие как - Адам, Ева, Гитлер, Сталин, обнаженный мужчина/женщина и прочее.",
      "На серверах запрещена любая коммерческая деятельность (покупать, обменивать, продавать, предоставлять какие-либо услуги за реальные деньги и прочее).",
      'Игрок пишет подобное: "Продаю землю за 2 рубля" и потом следом сообщение - "Шучу" (1 раз предупреждение), повторно - Перманентный бан).',
      "Запрещена реклама и упоминание сторонних проектов в любом виде",
      "Запрещено использование стороннего программного обеспечения: кликеры, программы для взлома, багов, недочетов, дюпов или других нестандартных средств для получения преимущества над другими игроками. Помимо этого запрещено распространять любую информацию о их существовании.",
      "Запрещены: взлом, попытки взлома чужого аккаунта, разглашение личных данных других игроков(место проживания, IP-адрес, личные фотографии, видеозаписи, контакты, социальные сети и т.д)",
      "Управляющий сервера имеет полное право забанить Вас без доказательств(до выяснений обстоятельств).",
    ],
    pointRules: [
      "1.1",
      "1.2",
      "1.3",
      "1.4",
      "1.5",
      "1.6",
      "1.7",
      "1.8",
      "1.9",
      "1.10",
      "1.11",
      "1.12",
      "1.13",
      "1.14",
      "1.15",
      "1.16",
      "1.17",
      "1.18",
    ],
    punishments: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "Перманентный бан.",
      "устное предупреждение на смену / при рецидиве - бан на 5 дней.",
      "Перманентный бан.",
      "Перманентный бан.",
      "Перманентный бан.",
      "Бан от 3 дней/Перманентный бан",
      "Бан от 3 дней/Перманентный бан",
    ],
  },
  {
    id: "chat",
    title: "Общение и чат:",
    descriptions: [
      "Язык чата — (?). Общение на других языках в общем чате запрещено и наказуемо. Транслит разрешен.",
      "Выдавать себя за администратора/модератора, постить в чате команды модераторов/администратора (mute, jail, ban) запрещено.",
      "Категорически запрещается оскорблять других игроков/модераторов/администратора. Относитесь уважительно к другим людям.",
      "апрещается употреблять ругательства, нецензурные слова, мат в любом виде, в том числе завуалированный, а также эвфемизмы (замена грубых/неприличных слов на более мягкие, но имеющие идентичный смысл в используемом контексте), и мат на другом языке.",
      "Запрещается упоминание родных лиц в оскорбительной и/или унизительной форме.",
      "Запрещаются сообщения, унижающие человеческое достоинство, разжигающие межнациональную рознь. А также, сообщения сексуального характера, угрозы расправой в реальной жизни, угрозы баном, дискриминация людей по религиозному или другим признакам, пропаганда/обсуждение нацизма, наркотиков, алкоголизма и табакокурения. А также фразы, касающиеся запретных группировок, банд и тп.",
      'Запрещен флуд. (Сообщения, повторяющиеся более двух раз подряд в чате, просьбы-призывы игроков выйти с сервера, выпрашивание ресурсов/прав, просьбы вида "Кто приютит?").',
      'Запрещена организация флуда, путем отправки в чат провокационных сообщений, например "Кто за вайп - ставим в чат +".',
      'Запрещено писать в чат сообщения, содержащие от 7-ми любых повторяющихся символов. Это может быть расценено модератором, как "обилие символов".',
      "Рекламу магазинов/услуг/желания приобрести/продать, можно давать только раз в 5 минут.",
      "Запрещается рекламировать определенный варп сразу нескольким личностям, это может делать только владелец привата варпа. Наказываются все, кто рекламировал, кроме владельца. Владельцем варпа является тот, на чьем привате стоит точка, следовательно, владелец точки и владелец варпа - должен быть один и тот же игрок. Запрещено, чтобы у точки варпа и привата были разные хозяева. Когда владельца нет в сети, никто рекламить данный варп не может.",
      "Запрещается любое упоминание варпа, а также завуалированная реклама этого варпа в различных сообщениях. Это может быть расценено модератором как реклама варпа.",
      "Запрещается включать музыку в голосовом чате, находясь на спавне/варпах/чужих приватах (это не распространяется на владельцев привата/привата варпа).",
      'Запрещается любое упоминание Варпа его владельцем, в промежутке между основной рекламой,в глобальном чате. Это может быть расценено модератором, как "скрытая реклама".',
      "Запрещается создание пустых варпов. На варпе должно находиться красивое строение, магазин, раздатчики, порталы, обменники и прочие нужные для варпов сооружения.",
      "Запрещается создание нескольких варпов в одном месте. Между точками варпов и приватами должно быть как минимум 100 блоков.",
      "Запрещается соединять варпы разных владельцев телепортами и иными средствами перемещения.",
      "Запрещается постить рекламу в ночное время суток, либо в любой момент времени, когда в чате уже имеется ваша реклама, а 5-ти минутный интервал прошел. Не засоряйте своей рекламой чат в моменты его неактивности.",
      "Запрещен капс (большое количество ЗАГЛАВНЫХ букв) в сообщениях (за исключением аббревиатур, ников и названий приборов в игре, таких как ЭХО, МФЭ или других).",
      'Запрещено флудить, используя команды сервера. Также, запрещено "обходить" мут, используя полномочия офицера, лидера клана или же посредством /r (ответить на личное сообщение).',
      "Запрещена дискриминация неопытных игроков, дезинформирование, насмешки. А также, запрещено отправлять в чат провокационные сообщения, сомнительные или внешние ссылки.",
      "Разрешено размещать ссылки только на всем известные ресурсы, такие как vk.com, google.com, wikipedia.org и т.д. Все остальные URL следует отправлять только в локальный чат определенному игроку. Если же после перехода по вашей ссылке будет обнаружено вредоносное ПО, вы будете наказаны по 6.6.",
      "Запрещены любого рода азартные игры в глобальном чате, требующие вложений со стороны игрока.",
      "Попытки завладеть чужим аккаунтом, выманивание логина и/или пароля наказуемы. Распространение личной информации, включая номер телефона, ФИО, паспортные данные, а также ",
      "Запрещается подстрекать третьи лица на нарушение правил, подставлять игроков, говорить лживые сведения от любого игрока в третьем лице.",
      "убличная критика/обсуждение действий администратора или модераторов запрещена.",
      "Запрещена критика администратора и его бездействия в чем-либо.",
      "Публичная критика проекта/серверов запрещена (серверный чат, комментарии на сайтах, форум).",
      "Пускать ложные сведения о вайпе запрещено.",
      'Если зовете модератора/администратора, обоснуйте, почему они должны телепортироваться к вам. Если же вы просто будете писать "Модер ТП", то модератор имеет право не телепортироваться к вам. Частые сообщения приравниваются к флуду и наказываются по соответствующему правилу.',
    ],
    pointRules: [
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "2.5",
      "2.6",
      "2.7",
      "2.7.1",
      "2.7.2",
      "2.8",
      "2.8.1",
      "2.8.1.1",
      "2.8.2",
      "2.8.3",
      "2.8.4",
      "2.8.5",
      "2.8.6",
      "2.8.7",
      "2.9",
      "2.10",
      "2.11",
      "2.11.1",
      "2.11.2",
      "2.12",
      "2.13",
      "2.14",
      "2.14.1",
      "2.15",
      "2.16",
      "2.17",
    ],
    punishments: [
      "Предупреждение, после мут на 30 минут, при рецидиве - 3 часа.",
      "Предупреждение, после мут от 1 часа до 5 часов.",
      "Мут от 1 часа до 24 часов, в зависимости от тяжести высказывания.",
      "Предупреждение или мут от 30 минут до 12 часов, в зависимости от тяжести высказывания.",
      "Мут от 3 часов до 48 часов.",
      "Предупреждение, потом мут от 5 часов до 7 дней. При частых рецидивах - вечный мут.",
      "Предупреждение, потом мут от 15 минут до 12 часов. При частых рецидивах - мут до 24 часа.",
      null,
      null,
      "Предупреждение, потом мут от 30 минут до 5 часов, при рецидиве мут от 5 часов до 24 часов.",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "Предупреждение, потом мут от 15 минут до 6 часов.",
      "Предупреждение, после тюрьма от 1 часа до 12 часов, при рецидиве бан от 1 дня до 7 дней.",
      "Предупреждение, потом мут от 30 минут до 2 часов, при рецидиве наказывается по 5.6.",
      null,
      null,
      "Предупреждение, потом мут от 5 часов до 1 дня, при рецидиве - вечный бан на всех серверах.",
      "Предупреждение, потом мут от 3 часов до 1 дня.",
      "Мут от 1 часа до вечного бана на всех серверах, в зависимости от тяжести высказывания.",
      null,
      "Мут от 1 часа до вечного бана на всех серверах, в зависимости от тяжести высказывания.",
      "Предупреждение, потом мут от 30 минут до 3 часов.",
      null,
    ],
  },
  {
    id: "game-process",
    title: "Игровой процесс:",
    descriptions: [
      "начала нужно приватить территорию, а потом строить. Если вашу постройку заприватил другой игрок, то она автоматически переходит в его владение. Запрещено создавать приваты, являющиеся пустыми, ничтожно малыми по одной из осей координат, по ошибке заприваченных не полностью (так это или нет решается модератором). *",
      "Запрещается нецензурная лексика, ложь, оскорбления, неприличные рисунки, угрозы в игровом мире, провокации (на флагах, на табличках, в названиях приватов, в названиях точек варпов и т.д.).",
      "Не разрешается ставить скины и плащи, содержащие неприличное и нацистское содержание, политическое и народное оскорбление. А также пропагандировать изображениями табачных, наркотических и иных веществ. Запрещено использовать реальные фотографии пользователей и их родственников без их согласия.",
      'Попытка дестабилизации экономики сервера наказуема. Запрещена раздача ценных ресурсов, на которые установлена минимальная цена, если вы хотите "Разыграть на ивенте" эти ресурсы, свяжитесь с модератором и только под его контролем и разрешением проводите этот ивент.',
      "Запрещена продажа или покупка ресурсов по заниженным ценам. Со списком минимальных цен и процентом торговли можно ознакомиться в разделе Рынок своего сервера.",
      "Запрещено устанавливать флаги greeting и farewell на регион, в котором содержатся сообщения от другого игрока или нецензурное содержание. Используйте флаг по назначению.",
      "Запрещено находиться на чужой территории и мешать игровому процессу, если владелец привата против. Модераторов этот пункт правил не затрагивает.",
      "Запрещено создавать приват слишком близко к чужой территории (40 блоков), а также создавать его над или под чужим приватом. ~",
      "Запрещено как-либо обманывать администрацию и модерацию.",
      "Запрещено разрушать или переделывать постройки, не принадлежащие вам. Вмешиваться на чужую территорию, непредусмотренным игровой механикой способом. Если дом/часть дома не запривачена или же человек добавлен в приват - это правило не действует.",
      "Запрещено намеренно блокировать доступ к чужим сооружениям, выстраивая глухие стены, вырывая окопы, разливая воду или лаву и т.п.",
      "Запрещено убийство других игроков с помощью лавы, огня и других методов без их согласия.",
      "Запрещается строить ловушки и заманивать в них игроков.",
      "Запрещается выкачивать/добывать ресурсы с сундуков, а также ману, магические узлы и прочие ресурсы, принадлежащие другому игроку.",
      "Запрещается убийство других игроков, используя любые телепортации, в том числе призыв на /warp.",
      "Запрещается изменять биомы в приватах игроков, используя (не)игровую механику.",
    ],
    pointRules: [
      "3.1",
      "3.2",
      "3.3",
      "3.4",
      "3.4.1",
      "3.5",
      "3.6",
      "3.7",
      "3.8",
      "3.9",
      "3.10",
      "3.11",
      "3.12",
      "3.13",
      "3.14",
      "3.15",
    ],
    punishments: [
      "Предупреждение, в случае отказа убрать приват - удаление привата.",
      "Снос постройки и тюрьма на 6 часов.",
      "Предупреждение, в случае отказа - бан",
      "Бан от 1 дня до вечного.",
      null,
      "Предупреждение и просьба изменить содержание флага, в случае отказа - удаление региона и тюрьма на 1 день.",
      "Первый раз - телепорт на спаун, второй - тюрьма на 10 минут. При рецидиве - тюрьма на 1 день.",
      "Предупреждение и просьба удалить приват, в случае отказа - удаление и сет территории Администратором.",
      "Бан на 2 дня. При рецидиве - бан от 1 дня.",
      null,
      null,
      null,
      null,
      null,
      null,
      "Первый раз тюрьма на 12 часов, при рецидиве - бан от 1 дня до 7 дней.",
    ],
  },
  {
    id: "team",
    title: "Команда проекта:",
    descriptions: [
      "Хелперу-Администратору запрещено нарушать правила проекта, указанные в пунктах 1, 2, 3, 4, 5.",
      "Хелпер-Мл.Администратор обязан реагировать на просьбы помощи игроков, следить за чатом и не пропускать нарушителей. Если уже не помогает другому игроку.",
      "Хелпер-Мл.Администратор должны исполнять указания Администрации вовремя, а также по возможности помогать при проведении мероприятий и вайпов.",
      "Хелпер-Мл.Администатор, не поняв ситуации, может обратиться к любому из членов команды проекта за помощью.",
      "Хелпер-Мл.Администратору разрешается торговать/жить/делать магазины с игроками или без них, но управляющий вправе запретить торг с игроками.",
      "Хелпер-Админ не имеет права злоупотреблять своими правами (выдавать наказание по максимуму, если нарушение не серьёзное) / мешать / телепортировать / кикать игрока без причины.",
      "Хелпер-Админ обязан соблюдать цензуру и речевые нормы при общении с игроками.",
      "Хелпер-Мл.Администратор обязан иметь онлайн не менее 3 часов в день (в случае малого онлайна должен сообщить Управляющему причину неактивности).",
      "Хелперу-Администратору запрещается модерировать на серверах к которым он не привязан, а так же на других игровых проектах.",
      "Хелперу-Администратору запрещено спорить или же разжигать дискуссии.",
      "Хелперу-Мл.Администратору запрещено находится на сервере в afk (если нужно отойти, то он должен покинуть сервер).",
      "Хелперу-Мл.Администратору запрещено наносить вред игрокам и участвовать в pvp-сражениях с ними.",
      "Хелпер-Администратор обязан самостоятельно следить за безопасностью своего аккаунта. Если к аккаунту модератора был получен доступ посторонними лицами, то модератор будет снят без разбирательств.",
      "Хелперу-Администратору запрещено разглашать посторонним лицам содержание конференций персонала, личных сообщений персонала и Администрации, переговоров с Администрацией.",
      "Хелпер-Администратор может быть снят с поста, если он отсутствовал не по уважительной причине 3 дня и более.",
      "Хелпер-Администратор обязан иметь доказательства нарушения.",
      "Хелпер-Администратор обязан предъявлять доказательства нарушения только Администрации проекта",
      "Мл.Администратор-Администратор обязан помогать Управляющему и следить за командой сервера.",
    ],
    pointRules: [
      "4.1",
      "4.2",
      "4.3",
      "4.4",
      "4.5",
      "4.6",
      "4.7",
      "4.8",
      "4.9",
      "4.10",
      "4.11",
      "4.12",
      "4.13",
      "4.14",
      "4.15",
      "4.16",
      "4.17",
      "4.18",
    ],
    punishments: [],
  },
];

export default RULES;
