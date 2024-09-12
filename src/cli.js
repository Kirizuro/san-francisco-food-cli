#!/usr/bin/env node

import { main } from "./index.js";

const cliMode = async () => {
  await main();
};

cliMode();
