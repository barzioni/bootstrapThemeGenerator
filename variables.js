     /*
          Variable options:
          =================
          type: string options: text/number/color
          before: string | add logic to the variable that going to be written before the value
          !default: true/false | for making the variable deafault (same as !important)
          hidden: true/false | for necessary variables but not editbles
          units: rem/px | not a must
        */

     var variablesjson = {
         "root": {
             "$font-size-base": {
                 "type": "number",
                 "default": true,
                 "value": "1",
                 "units": "rem"
             },
             "$font-family-sans-serif": {
                 "options": {
                     "'Alef', sans-serif": "Alef",
                     "'Assistant', sans-serif": "Assistant",
                     "'Heebo', sans-serif": "Heebo",
                     "'OpenSansHebrew', sans-serif": "OpenSansHebrew",
                     "'Rubik', sans-serif": "Rubik"
                 },
                 "type": "select",
                 "value": "'Alef', sans-serif",
                 "default": true
             },
             "$font-family-base": {
                 "hidden": true,
                 "value": "$font-family-sans-serif"
             },
             "$spacer": {
                 "type": "number",
                 "units": "rem"
             }
         },
         "text": {
             "$font-weight-lighter": {
                 "options": {
                     "100": "100",
                     "200": "200",
                     "300": "300",
                     "400": "400",
                     "500": "500",
                     "600": "600",
                     "700": "700",
                     "800": "800",
                     "900": "900",
                 },
                 "value": "100",
                 "default": true
             },
             "$font-weight-light": {
                 "options": {
                     "100": "100",
                     "200": "200",
                     "300": "300",
                     "400": "400",
                     "500": "500",
                     "600": "600",
                     "700": "700",
                     "800": "800",
                     "900": "900",
                 },
                 "value": "300",
                 "default": true
             },
             "$font-weight-normal": {
                 "options": {
                     "100": "100",
                     "200": "200",
                     "300": "300",
                     "400": "400",
                     "500": "500",
                     "600": "600",
                     "700": "700",
                     "800": "800",
                     "900": "900",
                 },
                 "value": "400",
                 "default": true
             },
             "$font-weight-bold": {
                 "options": {
                     "100": "100",
                     "200": "200",
                     "300": "300",
                     "400": "400",
                     "500": "500",
                     "600": "600",
                     "700": "700",
                     "800": "800",
                     "900": "900",
                 },
                 "value": "700",
                 "default": true
             },
             "$font-weight-bolder": {
                 "options": {
                     "100": "100",
                     "200": "200",
                     "300": "300",
                     "400": "400",
                     "500": "500",
                     "600": "600",
                     "700": "700",
                     "800": "800",
                     "900": "900",
                 },
                 "value": "900",
                 "default": true
             },
             "$h1-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2.5
             },
             "$h1-font-size-mobile": {
                 "type": "number",
                 "default": true,
                 "value": 2.5
             },
             "$h1-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$h2-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2
             },

             "$h2-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2
             },
             "$h2-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$h3-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.75
             },
             "$h3-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.75
             },
             "$h3-font-weight": {
                 "type": "number",
                 "value": 400
             },

             "$h4-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.5
             },
             "$h4-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.5
             },
             "$h4-font-weight": {
                 "type": "number",
                 "value": 400
             },

             "$h5-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.25
             },

             "$h5-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.25
             },
             "$h5-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$h6-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1
             },

             "$h6-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1
             },
             "$h6-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$p-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1
             },

             "$p-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1
             },
             "$p-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$slider-title-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2.5
             },
             "$slider-title-font-size-mobile": {
                 "type": "number",
                 "default": true,
                 "value": 2.5
             },
             "$slider-title-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$slider-subtitle-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2
             },
             "$slider-subtitle-font-size-mobile": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2
             },
             "$slider-subtitle-font-weight": {
                 "type": "number",
                 "value": 400
             },
             "$bread-crumbs-font-size": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1,
             },
             "$bread-crumbs-font-weight": {
                 "type": "number",
                 "value": 400,
             },
             "$icon-xs": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.07
             },
             "$icon-s": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 1.60
             },
             "$icon-m": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 2.13
             },
             "$icon-l": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 3.20
             },
             "$icon-xl": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 4.27
             },
             "$icon-xxl": {
                 "type": "number",
                 "before": "$font-size-base *",
                 "default": true,
                 "value": 8
             }
         },
         "colors": {
             "$white": {
                 "type": "color",
                 "default": true
             },
             "$gray-100": {
                 "type": "color",
                 "default": true
             },
             "$gray-200": {
                 "type": "color",
                 "default": true
             },
             "$gray-300": {
                 "type": "color",
                 "default": true
             },
             "$gray-400": {
                 "type": "color",
                 "default": true
             },
             "$gray-500": {
                 "type": "color",
                 "default": true
             },
             "$gray-600": {
                 "type": "color",
                 "default": true
             },
             "$gray-700": {
                 "type": "color",
                 "default": true
             },
             "$gray-800": {
                 "type": "color",
                 "default": true
             },
             "$gray-900": {
                 "type": "color",
                 "default": true
             },
             "$black": {
                 "type": "color",
                 "default": true
             },
             "$primary": {
                 "type": "color",
                 "default": true
             },
             "$secondary": {
                 "type": "color",
                 "default": true
             },
             "$success": {
                 "type": "color",
                 "default": true
             },
             "$info": {
                 "type": "color",
                 "default": true
             },
             "$warning": {
                 "type": "color",
                 "default": true
             },
             "$danger": {
                 "type": "color",
                 "default": true
             },
             "$light": {
                 "type": "color",
                 "default": true
             },
             "$dark": {
                 "type": "color",
                 "default": true
             },
             "$body-color": {
                 "type": "color",
                 "default": true,
                 "value": "#000"
             }
         },
         "$theme-colors": {
             "color-1": {
                 "type": "color",
                 "default": true
             },
             "color-2": {
                 "type": "color",
                 "default": true
             },
             "color-3": {
                 "type": "color",
                 "default": true
             },
             "color-4": {
                 "type": "color",
                 "default": true
             },
             "color-5": {
                 "type": "color",
                 "default": true
             },
             "color-6": {
                "type": "color",
                "default": true
            },
            "color-7": {
                "type": "color",
                "default": true
            },
            "color-8": {
                "type": "color",
                "default": true
            },
            "color-9": {
                "type": "color",
                "default": true
            },
            "color-10": {
                "type": "color",
                "default": true
            }
         },
         "links": {
             "$link-color": {
                 "hidden": true,
                 "value": "#666"
             },
             "$link-decoration": {
                 "hidden": true,
                 "value": "none"
             },
             "$link-hover-decoration": {
                 "hidden": true,
                 "value": "none"
             }
         },
         "inputs": {
             "$input-btn-font-size": {
                 "type": "number",
                 "units": "rem"
             },
             "$input-border-radius": {
                 "type": "number",
                 "units": "px"
             },
             "$input-bg": {
                 "hidden": true,
                 "value": "#fff"
             },
             "$input-border-width": {
                 "type": "number",
                 "units": "px"
             },
             "$input-border-color": {
                 "type": "color"
             },
             "$input-bg": {
                 "type": "color"
             },


             "$input-focus-border-color": {
                 "type": "color"
             },
             "$input-focus-box-shadow": {
                 "type": "text"
             },
             "$form-group-margin-bottom": {
                 "hidden": true,
                 "value": 0,
                 "units": "rem"
             }
         },
         "buttons": {
             "$btn-font-size": {
                 "type": "number",
                 "units": "rem"
             },
             "$btn-border-radius": {
                 "type": "number",
                 "units": "px"
             },
             "$btn-padding-x": {
                 "type": "number",
                 "units": "rem",
                 "default": true,
             },
             "$btn-padding-y": {
                 "type": "number",
                 "units": "rem",
                 "default": true,
             },
             "$btn-border-width": {
                 "type": "number",
                 "units": "px",
                 "default": true,
             },
             "$btn-line-height": {
                 "type": "number",
                 "default": true,
             },
             "$btn-box-shadow": {
                 "type": "text",
                 "default": true,
             },
             "$btn-focus-box-shadow": {
                 "type": "text",
                 "default": true,
             },

         },
         "others": {
             "$border-radius": {
                 "hidden": true,
                 "value": "$font-size-base",
             },

             "$box-shadow-sm": {
                 "type": "text",
                 "default": true,
             },
             "$box-shadow": {
                 "type": "text",
                 "default": true,
             },
             "$box-shadow-lg": {
                 "type": "text",
                 "default": true,
             },

         }
     }