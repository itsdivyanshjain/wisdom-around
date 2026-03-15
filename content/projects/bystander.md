+++
date = '2026-01-21T15:40:22+05:30'
draft = false
title = 'Bystander'
repo = "https://github.com/itsdivyanshjain/Bystander"
description = "Passive Web Vulnerability Detection Tool"
github = "https://github.com/itsdivyanshjain/Bystander"
featured = true
+++

## Overview

- Bystander is a chrome extension which monitors the network request and detect the potential web vulnerabilities, all on the user's browser. So, browse as usual and bystander will notify you if it detects any potential web vulnerabilities.

## What it can do
- Detect Actual Web Vulnerabilities like CSRF, Clickjacking, etc.
- Detect Potential Code Sink's like NoSQLi, SSTI, SSI etc.
- Detect API token leakage
- Detect Other Important PII leakage like PAN Number, Hash disclosure, etc.
- Look for Insights like staging domain, admin dashboard in frontend code and network traffic.

## How to use
- For now, download the github zip file or get it unpacked from git clone.
- Go to Chrome (or any chromium based browser) -> Settings -> Extensions -> Enable Developer Mode.
- Click on "Load unpacked" and select the downloaded Bystander folder.
- Make sure to restart the browser after loading the extension. 
- Access the application normally and check the alert list in the popup.

## Features
- Testing Mode: This is required to be turned on when you're performing penetration testing so that it will not report certain alerts to avoid False Positive.
- Add your own rules: You can add your own rules to detect other passive vulnerabilities, insights, pii leakage, etc. Just require to edit in `alert.js` file.

## Expected Future Improvements
- Actual Web Vulnerabilities - Open Redirect(Dom Based), Client Side Path Traversal
- Possible Code Sink - XSS (Dom based), XPATH Injection
- PII Leakage - Credit/Debit Card Number, Aadhar Number, SSN, etc.
- Other leakage/ Insights - S3 bucket url exposed, Sensitive File Disclosure
- General Improvements included tackling False Positive/ Negative, performance, etc.
- New feature: Support for Request originated from, evaluation on request method, etc.

## Warning

> [!WARNING]
> There might be some bugs as well as false positives and negatives.

> [!WARNING]
> If browser is getting crashed/hang after installing the extension, you can disable for time being until it's optimized.

> [!WARNING] 
> Severity of the alerts are tentative and those are meant as a weight of the alert but doesn't mean it's actually critical/high/medium/low severity vulnerability.