import iconMode from "../assets/images/servers/TechnoMagic/techno-magic-icon-mode.png";
import signServer from "../assets/images/servers/TechnoMagic/techno-magic-icon-sign.png";

interface IInfoServer {
  icon: string;
  info: string;
  aboutInfo: string;
}

interface IInfoMods {
  icon: string;
  title: string;
  text: string;
}

interface IServer {
  serverName?: string;
  description?: string;
  infoServer?: IInfoServer[];
  infoModes?: IInfoMods[];
}

interface IInfoServerMainCraft {
  SERVER: IServer[];
}

const INFO_SERVER_MAINCRAFT: IInfoServerMainCraft[] = [
  {
    SERVER: [
      {
        serverName: "TechnoMagic",
      },
      {
        description: ` Давно искал сервер, на котором сможешь со своими друзьями стать
        великими магами или великими механики? Тогда - тебе к нам! У нас ты
        найдёшь : много интересного, как для себя, так и для своих друзей,
        интересные, а главное оптимизированные сборки таких популярных
        модов, как : легендарный IC2, не менее популярный AE2, а также -
        легенду и отца всех магических модов - Thaumcraf. А в придачу ты
        TechnoMagic!`,
      },
      {
        infoServer: [
          { icon: "", info: "Версия игры", aboutInfo: "minecraft 1.7.10" },
          {
            icon: "",
            info: "Размер карты в обычном мире:",
            aboutInfo: "5000 на 5000 блоков",
          },
          {
            icon: "",
            info: 'Размер карты в аду":',
            aboutInfo: "5000 на 5000 блоков",
          },
          {
            icon: "",
            info: "Размер карты в эндер мире:",
            aboutInfo: "20000 на 20000",
          },
          { icon: "", info: "Дата последнего вайпа:", aboutInfo: "НЕТ" },
          { icon: "", info: "Режим PVP", aboutInfo: "Да" },
          {
            icon: "",
            info: "Порталы доступны на варпе",
            aboutInfo: "Команда /warp portals",
          },
        ],
      },
      {
        infoModes: [
          {
            icon: iconMode,
            title: `Industrial`,
            text: `Дополнение к моду Industrial Craft 2, добавляющий новые виды
                инструментов и брони. Хотите летать как при помощи /fly? Вам
                нужен - гравитационный жилет, но учтите, что не всё так
                просто, всё это требует огромный вклад ресурсов.`,
          },
          {
            icon: iconMode,
            title: `Draconic Evolution`,
            text: `
            Великолепное творение мододела brandon3055. Эта модификация добавляет
             большое количество энд-гейм предметов: от сверхмощных инструментов, что 
             позволяют добывать огромное количество ресурсов и менять ландшафт в считанные секунды,
              до огромных ядер из дракония, позволяющие хранить невообразимое количество энергий.
              `,
          },
          {
            icon: iconMode,
            title: `DragonMounts`,
            text: `Д
            Небольшой мод,добавляющий возможность приручения дракона! В этом моде присутствует много разных драконов!Соберите полную коллекцию и полетите в небо со своим дракошей.
        `,
          },
          {
            icon: iconMode,
            title: `Ender IO`,
            text: `
            Это аддон, который связывает “ThaumCraft” и “Industrial Craft 2”, путём добавления отдельной вкладки. После изучения вкладки, вы сможете сделать магические аналоги технических инструментов и брони, а также некоторых механизмов.
        `,
          },
          {
            icon: iconMode,
            title: `Extra Cells 2`,
            text: `
            Данный мод является дополнением к моду Applied Energistics 2. Теперь жидкости и газы можно хранить в вашей МЭ системе! Автоматизируйте все заводы жидкостей при помощи жидкостных шин импорта и экспорта! Храните миллионы бакетов жидкостей на огромной жидкостной ячейке.
        `,
          },
        ],
      },
    ],
  },
];

export {
  INFO_SERVER_MAINCRAFT,
  type IInfoServerMainCraft,
  type IInfoServer,
  type IInfoMods,
};
