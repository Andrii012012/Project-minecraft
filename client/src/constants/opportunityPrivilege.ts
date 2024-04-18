import iconOK from "../assets/images/global/icon-ok.svg";
import iconNo from "../assets/images/global/icon-no.svg";

interface IOpporunityPrivileges {
  command: null | string;
  description: string | null;
  opportunityHas: (string | number)[];
}

interface IOpportuniry {
  privileges: string[];
  opportunityPrivileges: IOpporunityPrivileges[];
}

const OPPORTUNITY_PRIVILEGES: IOpportuniry[] = [
  {
    privileges: [
      "Доступные команды:",
      "VIP",
      "Premium",
      "Delux",
      "Extra",
      "Elixir",
    ],
    opportunityPrivileges: [
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconNo, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconNo, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconNo, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconNo, iconOK, iconNo, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
      {
        command: "fly",
        description: "Позволяет летать введя эту команду.",
        opportunityHas: [iconOK, iconOK, iconOK, iconOK, iconOK],
      },
    ],
  },
  {
    privileges: [
      "Доступные команды:",
      "VIP",
      "Premium",
      "Delux",
      "Extra",
      "Elixir",
    ],
    opportunityPrivileges: [
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: null,
        description: "Максимальное количество приватов WorldGuard",
        opportunityHas: [4, 6, 15, 20, 30],
      },
      {
        command: "/sethome",
        description: "Количество точек дома",
        opportunityHas: [4, 6, 15, 20, 30],
      },
    ],
  },
];

export {
  OPPORTUNITY_PRIVILEGES,
  type IOpporunityPrivileges,
  type IOpportuniry,
};
