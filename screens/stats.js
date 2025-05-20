import { parse, type, prompt, input, clear } from "../util/io.js";
import pause from "../util/pause.js";
import alert from "../util/alert.js";
import say from "../util/speak.js";


export async function stats() {
  clear();

  await type([
    "SYSTEM DIAGNOSTICS",
    " "
  ]);

  await type([
    "Uptime: 24 yrs 4 mo 8 days",
    "Build number: 1.8905",
    "Version: 24.185",
    "Product key: ***-**-****",
    " "
  ]);
  
  await type([
    "Loaded Devices:",
    "  ARM0",
    "  ARM1",
    "  LEG0",
    "  LEGG1",
    "  <Truncated>",
    " "
  ]);
  
  await type([
    "Logged in as: Anonymous (63.174.23.95)",
    "Memory usage: 100%",
    "CPU Usage: 38%",
    " "
  ]);

  await type([
    ""
  ]);
}

