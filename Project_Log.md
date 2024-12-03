## Dec 2, 2024
- Tina add angular material
- Error message
```bash
tina9@GUARDIAN-NX00 MINGW64 ~/Desktop/work/workstation-app (tpham-workstation)
$ ng add @angular/material
✔ Determining Package Manager
  › Using package manager: npm
✔ Searching for compatible package version
  › Found compatible package version: @angular/material@17.0.0.
✔ Loading package information from registry
✔ Confirming installation
✔ Installing package
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1230 bytes)
✔ Packages installed successfully.
Cannot find module 'C:\Users\tina9\Desktop\work\workstation-app\node_modules\@schematics\angular\private\components.js'

tina9@GUARDIAN-NX00 MINGW64 ~/Desktop/work/workstation-app (tpham-workstation)
$ npm cache clean --force  
npm WARN using --force Recommended protections disabled.

tina9@GUARDIAN-NX00 MINGW64 ~/Desktop/work/workstation-app (tpham-workstation)
$ ng add @angular/material
Skipping installation: Package already installed
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1230 bytes)
✔ Packages installed successfully.
Cannot find module 'C:\Users\tina9\Desktop\work\workstation-app\node_modules\@schematics\angular\private\components.js'
```
- Fix
```bash
# Step 1
rm -rf node_modules package-lock.json
# Step 2
npm cache clean --force
# Step 3
npm install
# Step 4
ng add @angular/material
```