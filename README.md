# AdminDevModeColors
Distinguish the backend for ProcessWire development instances with different colors

## Status
alpha

## Compatibility
This module is compatible with ProcessWire 3.0

## Description
The module changes the color of the top toolbar and adds a unique text next to / instead of the ProcessWire logo
there (depending on the screen size) so you can easily dinstinguish your development installations from the production
systems.

You can enable development mode by either
- enabling the option in the module settings
- setting ```$config->devMode = true;``` in site/config.php

I suggest to use the site/config.php option since this file usually needs to be adapted for development systems
and you are less likely to accidentally ship your changes to the production system this way, unlike the module
settings option.

## Admin Theme Support
The module supports the following admin themes:
- Default
- Reno
- Uikit

## Credits
### Inspiration
The module was inspired by a [post in the ProcessWire support forum](https://processwire.com/talk/topic/21360-adminonsteroids-css-helper-to-show-its-a-dev-site/)
by benbyf.

### Color Picker
The module includes the color [picker from tovic](https://github.com/tovic/color-picker) which is licensed under the same terms.
