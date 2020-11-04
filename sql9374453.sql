-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql9.freemysqlhosting.net
-- Generation Time: Nov 04, 2020 at 04:08 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql9374453`
--

-- --------------------------------------------------------

--
-- Table structure for table `LikedPosts`
--

CREATE TABLE `LikedPosts` (
  `UserID` int(8) NOT NULL COMMENT 'User ID of whomever likes a post',
  `PostID` int(11) NOT NULL COMMENT 'Post ID of liked post'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Post`
--

CREATE TABLE `Post` (
  `PostID` int(11) NOT NULL COMMENT 'Unique identifier for the post',
  `CreatedTime` datetime NOT NULL COMMENT 'Time of post''s creation',
  `CreatorID` int(8) NOT NULL COMMENT 'UserID of post owner',
  `Photo` text COMMENT 'Pointer for photo in post, optional',
  `Location` text NOT NULL COMMENT 'Location workout occurred'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserProfile`
--

CREATE TABLE `UserProfile` (
  `UserID` int(8) NOT NULL COMMENT 'Unique User ID',
  `FirstName` tinytext NOT NULL COMMENT 'User''s First Name',
  `LastName` tinytext NOT NULL COMMENT 'User''s Last Name',
  `Username` char(12) NOT NULL COMMENT 'Unique Username',
  `Email Address` tinytext NOT NULL COMMENT 'User''s Email',
  `About` text NOT NULL COMMENT 'A small blurb user can have on profile',
  `ProfilePicture` text NOT NULL COMMENT 'User''s profile picture pointer'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserRelation`
--

CREATE TABLE `UserRelation` (
  `UserID1` int(8) NOT NULL COMMENT 'ID of first user',
  `UserID2` int(8) NOT NULL COMMENT 'ID of second user',
  `1Follows2` int(11) NOT NULL COMMENT '0-False, 1-True, 2-Pending',
  `2Follows1` int(11) NOT NULL COMMENT '0-False, 1-True, 2-Pending'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `UserProfile`
--
ALTER TABLE `UserProfile`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Post`
--
ALTER TABLE `Post`
  MODIFY `PostID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Unique identifier for the post';
--
-- AUTO_INCREMENT for table `UserProfile`
--
ALTER TABLE `UserProfile`
  MODIFY `UserID` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Unique User ID';COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
