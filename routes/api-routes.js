// GLOBAL VARIABLES & REQUIRES
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Read and write functions
const { readFromFile, writeToFile } = require('../db/db-utils');