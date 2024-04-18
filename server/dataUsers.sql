-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 16 2024 г., 17:39
-- Версия сервера: 8.0.30
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `dataUsers`
--

-- --------------------------------------------------------

--
-- Структура таблицы `data_users`
--

CREATE TABLE `data_users` (
  `id` int NOT NULL,
  `login` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_team` int NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT 'Игрок',
  `servers` int DEFAULT '2',
  `identifier` int DEFAULT NULL,
  `skin` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'defaultAvatar.gif',
  `date` bigint DEFAULT NULL,
  `short_description` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `coins` int DEFAULT NULL,
  `bonus` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `data_users`
--

INSERT INTO `data_users` (`id`, `login`, `password`, `email`, `is_team`, `status`, `servers`, `identifier`, `skin`, `avatar`, `date`, `short_description`, `coins`, `bonus`) VALUES
(8, 'Quark', '4297f44b13955235245b2497399d7a93', NULL, 1, '', 1, 10, NULL, 'defaultAvatar.gif', 1707557907206, NULL, NULL, 0),
(24, 'oreo12', '05b755ace5b49029e32c3b90fb494edc', NULL, 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', NULL, NULL, NULL, 0),
(26, 'radiomod', '05b755ace5b49029e32c3b90fb494edc', NULL, 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', NULL, NULL, NULL, 0),
(28, 'pati0111', '05b755ace5b49029e32c3b90fb494edc', NULL, 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', NULL, NULL, NULL, 0),
(30, 'pati014', '05b755ace5b49029e32c3b90fb494edc', NULL, 0, 'Игрок', NULL, NULL, NULL, 'dfc32179d49591d85ffa4f56c2cd6fe2.jpeg', NULL, NULL, NULL, 0),
(31, '2131231', '29852fd8f42d63ef579aa46d8cd15183', NULL, 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', NULL, NULL, NULL, 0),
(41, 'pati014s', '827ccb0eea8a706c4c34a16891f84e7b', 'retortop72@gmail.com', 0, NULL, NULL, NULL, NULL, 'defaultAvatar.gif', 1708557907206, NULL, NULL, 0),
(42, 'pati012', 'c27203994a5a602d3b685e1951d08f1d', 'retortop72@gmail.com', 0, '', 8, 10, NULL, '104442f1be512e0b614536b3b6b3bf6d.jpeg', 1708557955890, '1111111111111111111111111111', 986, 0),
(43, 'pati012213', '827ccb0eea8a706c4c34a16891f84e7b', 'retor123@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', NULL, '1709311335043', NULL, 0),
(44, 'Moderator', '05b755ace5b49029e32c3b90fb494edc', 'retortop72s@gmail.com', 0, 'Игрок', NULL, NULL, NULL, '62315e40b12c0ffddd36d6f4385c55a2.png', 1709311478830, '1321', 5, 0),
(45, 'oakdweoeff', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709506027922, NULL, 5, 0),
(46, 'pati012sqs', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709506058800, NULL, 5, 0),
(47, 'men_hack', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop12@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709506105323, NULL, 5, 0),
(48, 'men_hack12', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop12@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709506251086, NULL, 5, 0),
(49, 'men_hack121231', 'fcea920f7412b5da7be0cf42b8c93759', 'retor2@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709506529841, NULL, 5, 0),
(50, 'pati012ійці', '827ccb0eea8a706c4c34a16891f84e7b', '', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709508890718, NULL, 5, 0),
(51, 'pati012цца', '827ccb0eea8a706c4c34a16891f84e7b', 'в', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709508937735, NULL, 5, 0),
(52, 'pati0123123', '827ccb0eea8a706c4c34a16891f84e7b', '21313221', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709515408708, NULL, 5, 0),
(53, 'pati0120', 'fcea920f7412b5da7be0cf42b8c93759', 'retortops21@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517535124, NULL, 5, 0),
(54, 'pati0120s', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop7s22@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517709640, NULL, 5, 0),
(55, 'pati0120ss', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop7ssss2@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517752764, NULL, 5, 0),
(56, 'pati0120sssssss', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop72ssss@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517774157, NULL, 5, 0),
(57, 'pati0120s12', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop72sss112@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517866837, NULL, 5, 0),
(58, 'pati0120sss1231', 'fcea920f7412b5da7be0cf42b8c93759', 'retortop72s123sq@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709517911814, NULL, 5, 0),
(59, 'pati0120sqs', 'fcea920f7412b5da7be0cf42b8c93759', 'retors1top7@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709518037136, NULL, 5, 0),
(60, 'p1ati0120ss', 'fcea920f7412b5da7be0cf42b8c93759', 'rsswetortop72@gmail.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1709518120214, NULL, 5, 0),
(61, 'texnoman12', 'c27203994a5a602d3b685e1951d08f1d', 'retortop72@gamil.com', 0, 'Игрок', NULL, NULL, NULL, 'defaultAvatar.gif', 1710784861952, NULL, 5, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `info_ban_user`
--

CREATE TABLE `info_ban_user` (
  `id` int NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `info_ban_user`
--

INSERT INTO `info_ban_user` (`id`, `reason`, `duration`) VALUES
(12, 'BLABLABLA', '99999days');

-- --------------------------------------------------------

--
-- Структура таблицы `info_game`
--

CREATE TABLE `info_game` (
  `id` int NOT NULL,
  `identifier` int DEFAULT NULL,
  `server` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `server_id` int DEFAULT NULL,
  `time` int DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_team` tinyint(1) DEFAULT NULL,
  `duration_status` int DEFAULT NULL,
  `monay` int DEFAULT '0',
  `bonus` int DEFAULT '0',
  `info_ban` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `info_game`
--

INSERT INTO `info_game` (`id`, `identifier`, `server`, `server_id`, `time`, `status`, `is_team`, `duration_status`, `monay`, `bonus`, `info_ban`) VALUES
(1, 8, 'TechnoMagic', 2, 122, 'Delux', NULL, 1718459833, 8700, NULL, NULL),
(2, 8, 'Magic', 1, 222, 'Игрок', NULL, 1708990267, 0, NULL, NULL),
(3, 1, 'TechnoMagic', 2, 12, 'Vip', 0, NULL, 0, NULL, NULL),
(4, 1, 'TechnoMagic', 2, 12, 'Разработчик', 1, NULL, 0, NULL, NULL),
(5, 8, 'TechnoMagic', 3, 82, 'Elixir', NULL, 1717266017, 13585, NULL, 12);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `data_users`
--
ALTER TABLE `data_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `servers` (`servers`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `info_ban_user`
--
ALTER TABLE `info_ban_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `info_game`
--
ALTER TABLE `info_game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `identifier` (`identifier`),
  ADD KEY `infoBan` (`info_ban`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `data_users`
--
ALTER TABLE `data_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT для таблицы `info_ban_user`
--
ALTER TABLE `info_ban_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `info_game`
--
ALTER TABLE `info_game`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `data_users`
--
ALTER TABLE `data_users`
  ADD CONSTRAINT `data_users_ibfk_1` FOREIGN KEY (`servers`) REFERENCES `info_game` (`identifier`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `info_game`
--
ALTER TABLE `info_game`
  ADD CONSTRAINT `info_game_ibfk_1` FOREIGN KEY (`info_ban`) REFERENCES `info_ban_user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
