-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2016 at 02:43 PM
-- Server version: 5.7.9-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `events`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(6) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `discription` varchar(300) NOT NULL,
  `STAT` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `title`, `discription`, `STAT`) VALUES
(201, 'learn pyhton', 'You need to learn python and should completed by end of this month', 0),
(202, 'learn c', 'You need to learn c and should completed 2 years back', 1),
(203, 'learn c++', 'You need to learn c and should completed 2 years back', 1),
(204, 'learn angular2', 'You need to learn angular2 and should completed in jabuary', 0),
(205, 'learn angular', 'You need to learn angular and should completed in next month', 0),
(206, 'learn php', 'You need to learn php and should completed 4 year back', 1),
(207, 'learn jquery advanced', 'You need to learn jquery advanced and should completed in feb 2017', 0),
(208, 'learn jquery advanced', 'You need to learn jquery advanced and should completed in feb 2017', 0),
(213, 'learn angular advanced', 'You need to learn angular advanced and should completed in feb 2017', 0),
(214, 'learn aws advanced', 'You need to learn aws advanced and should completed in feb 2017', 0),
(215, 'learn django', 'You need to learn django  and should completed in feb 2017 (very ggod)', 0),
(216, 'learn html', 'You need to learn html  and should completed in feb 2017', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
