-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2023 at 05:38 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `firstNAME` varchar(20) NOT NULL,
  `lastNAME` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL DEFAULT 'abcd',
  `balance` decimal(20,0) DEFAULT NULL,
  `id` int(10) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`firstNAME`, `lastNAME`, `password`, `balance`, `id`, `username`) VALUES
('IKECHI', 'AKWARA', 'abcd', '341000', NULL, NULL),
('MENE', 'BAGUDU', 'abcd', '273000', NULL, NULL),
('KALEKIDAN', 'BEKELE', 'abcd', '278000', NULL, 'bekelek0517@students.bowiestate.edu'),
('DEJAI', 'BROWN', 'abcd', '329000', NULL, NULL),
('CECIL', 'HUNTER', 'abcd', '445000', NULL, NULL),
('DAMANTE', 'MADDOX', 'abcd', '402000', NULL, NULL),
('SANIS', 'MAHATO', 'abcd', '388000', NULL, NULL),
('PHILLIP', 'NGUYEN', 'abcd', '343000', NULL, NULL),
('EKENE', 'ONOH', 'abcd', '275000', NULL, NULL),
('MICHAEL', 'OSEIEFFAH', 'abcd', '243000', NULL, NULL),
('MARISA', 'RUFFIN', 'abcd', '334000', NULL, NULL),
('DEVIN', 'SAMUDA', 'abcd', '412000', NULL, NULL),
('OLIVIA', 'WATTS', 'abcd', '393000', NULL, NULL),
('BRIANNA', 'YOUNG', 'abcd', '299000', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
