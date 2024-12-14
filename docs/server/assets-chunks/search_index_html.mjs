export default `<!DOCTYPE html><html lang="en" data-beasties-container><head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta charset="utf-8">
  <title>DemoApp</title>
  <base href="/demo_app/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <style>@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
<style>html{--mat-sys-background: #faf9fd;--mat-sys-error: #ba1a1a;--mat-sys-error-container: #ffdad6;--mat-sys-inverse-on-surface: #f2f0f4;--mat-sys-inverse-primary: #abc7ff;--mat-sys-inverse-surface: #2f3033;--mat-sys-on-background: #1a1b1f;--mat-sys-on-error: #ffffff;--mat-sys-on-error-container: #410002;--mat-sys-on-primary: #ffffff;--mat-sys-on-primary-container: #001b3f;--mat-sys-on-primary-fixed: #001b3f;--mat-sys-on-primary-fixed-variant: #00458f;--mat-sys-on-secondary: #ffffff;--mat-sys-on-secondary-container: #131c2b;--mat-sys-on-secondary-fixed: #131c2b;--mat-sys-on-secondary-fixed-variant: #3e4759;--mat-sys-on-surface: #1a1b1f;--mat-sys-on-surface-variant: #44474e;--mat-sys-on-tertiary: #ffffff;--mat-sys-on-tertiary-container: #00006e;--mat-sys-on-tertiary-fixed: #00006e;--mat-sys-on-tertiary-fixed-variant: #0000ef;--mat-sys-outline: #74777f;--mat-sys-outline-variant: #c4c6d0;--mat-sys-primary: #005cbb;--mat-sys-primary-container: #d7e3ff;--mat-sys-primary-fixed: #d7e3ff;--mat-sys-primary-fixed-dim: #abc7ff;--mat-sys-scrim: #000000;--mat-sys-secondary: #565e71;--mat-sys-secondary-container: #dae2f9;--mat-sys-secondary-fixed: #dae2f9;--mat-sys-secondary-fixed-dim: #bec6dc;--mat-sys-shadow: #000000;--mat-sys-surface: #faf9fd;--mat-sys-surface-bright: #faf9fd;--mat-sys-surface-container: #efedf0;--mat-sys-surface-container-high: #e9e7eb;--mat-sys-surface-container-highest: #e3e2e6;--mat-sys-surface-container-low: #f4f3f6;--mat-sys-surface-container-lowest: #ffffff;--mat-sys-surface-dim: #dbd9dd;--mat-sys-surface-tint: #005cbb;--mat-sys-surface-variant: #e0e2ec;--mat-sys-tertiary: #343dff;--mat-sys-tertiary-container: #e0e0ff;--mat-sys-tertiary-fixed: #e0e0ff;--mat-sys-tertiary-fixed-dim: #bec2ff;--mat-sys-neutral-variant20: #2d3038;--mat-sys-neutral10: #1a1b1f}html{--mat-sys-level0: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level1: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level2: 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level3: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level4: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12)}html{--mat-sys-level5: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12)}html{--mat-sys-body-large: 400 1rem / 1.5rem Roboto;--mat-sys-body-large-font: Roboto;--mat-sys-body-large-line-height: 1.5rem;--mat-sys-body-large-size: 1rem;--mat-sys-body-large-tracking: .031rem;--mat-sys-body-large-weight: 400;--mat-sys-body-medium: 400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font: Roboto;--mat-sys-body-medium-line-height: 1.25rem;--mat-sys-body-medium-size: .875rem;--mat-sys-body-medium-tracking: .016rem;--mat-sys-body-medium-weight: 400;--mat-sys-body-small: 400 .75rem / 1rem Roboto;--mat-sys-body-small-font: Roboto;--mat-sys-body-small-line-height: 1rem;--mat-sys-body-small-size: .75rem;--mat-sys-body-small-tracking: .025rem;--mat-sys-body-small-weight: 400;--mat-sys-display-large: 400 3.562rem / 4rem Roboto;--mat-sys-display-large-font: Roboto;--mat-sys-display-large-line-height: 4rem;--mat-sys-display-large-size: 3.562rem;--mat-sys-display-large-tracking: -.016rem;--mat-sys-display-large-weight: 400;--mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font: Roboto;--mat-sys-display-medium-line-height: 3.25rem;--mat-sys-display-medium-size: 2.812rem;--mat-sys-display-medium-tracking: 0;--mat-sys-display-medium-weight: 400;--mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font: Roboto;--mat-sys-display-small-line-height: 2.75rem;--mat-sys-display-small-size: 2.25rem;--mat-sys-display-small-tracking: 0;--mat-sys-display-small-weight: 400;--mat-sys-headline-large: 400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font: Roboto;--mat-sys-headline-large-line-height: 2.5rem;--mat-sys-headline-large-size: 2rem;--mat-sys-headline-large-tracking: 0;--mat-sys-headline-large-weight: 400;--mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font: Roboto;--mat-sys-headline-medium-line-height: 2.25rem;--mat-sys-headline-medium-size: 1.75rem;--mat-sys-headline-medium-tracking: 0;--mat-sys-headline-medium-weight: 400;--mat-sys-headline-small: 400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font: Roboto;--mat-sys-headline-small-line-height: 2rem;--mat-sys-headline-small-size: 1.5rem;--mat-sys-headline-small-tracking: 0;--mat-sys-headline-small-weight: 400;--mat-sys-label-large: 500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font: Roboto;--mat-sys-label-large-line-height: 1.25rem;--mat-sys-label-large-size: .875rem;--mat-sys-label-large-tracking: .006rem;--mat-sys-label-large-weight: 500;--mat-sys-label-large-weight-prominent: 700;--mat-sys-label-medium: 500 .75rem / 1rem Roboto;--mat-sys-label-medium-font: Roboto;--mat-sys-label-medium-line-height: 1rem;--mat-sys-label-medium-size: .75rem;--mat-sys-label-medium-tracking: .031rem;--mat-sys-label-medium-weight: 500;--mat-sys-label-medium-weight-prominent: 700;--mat-sys-label-small: 500 .688rem / 1rem Roboto;--mat-sys-label-small-font: Roboto;--mat-sys-label-small-line-height: 1rem;--mat-sys-label-small-size: .688rem;--mat-sys-label-small-tracking: .031rem;--mat-sys-label-small-weight: 500;--mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font: Roboto;--mat-sys-title-large-line-height: 1.75rem;--mat-sys-title-large-size: 1.375rem;--mat-sys-title-large-tracking: 0;--mat-sys-title-large-weight: 400;--mat-sys-title-medium: 500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font: Roboto;--mat-sys-title-medium-line-height: 1.5rem;--mat-sys-title-medium-size: 1rem;--mat-sys-title-medium-tracking: .009rem;--mat-sys-title-medium-weight: 500;--mat-sys-title-small: 500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font: Roboto;--mat-sys-title-small-line-height: 1.25rem;--mat-sys-title-small-size: .875rem;--mat-sys-title-small-tracking: .006rem;--mat-sys-title-small-weight: 500}html{--mat-sys-corner-extra-large: 28px;--mat-sys-corner-extra-large-top: 28px 28px 0 0;--mat-sys-corner-extra-small: 4px;--mat-sys-corner-extra-small-top: 4px 4px 0 0;--mat-sys-corner-full: 9999px;--mat-sys-corner-large: 16px;--mat-sys-corner-large-end: 0 16px 16px 0;--mat-sys-corner-large-start: 16px 0 0 16px;--mat-sys-corner-large-top: 16px 16px 0 0;--mat-sys-corner-medium: 12px;--mat-sys-corner-none: 0;--mat-sys-corner-small: 8px}html{--mat-sys-dragged-state-layer-opacity: .16;--mat-sys-focus-state-layer-opacity: .12;--mat-sys-hover-state-layer-opacity: .08;--mat-sys-pressed-state-layer-opacity: .12}@font-face{font-family:Archivo Black;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/archivoblack/v21/HTxqL289NzCGg4MzN6KJ7eW6CYKF_i7y.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Archivo Black;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/archivoblack/v21/HTxqL289NzCGg4MzN6KJ7eW6CYyF_g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9X6VLKzA.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9e6VLKzA.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9b6VLKzA.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF9,U+200C-200D,U+20A8,U+20B9,U+20F0,U+25CC,U+A830-A839,U+A8E0-A8FF,U+11B00-11B09}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9W6VLKzA.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9Z6VLKzA.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9V6VLKzA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9U6VLKzA.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Noto Sans;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9a6VI.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}html,body{height:100%}body{margin:0;font-family:Noto Sans,sans-serif}.font-archivo{font-family:Archivo Black,sans-serif}.container{display:flex;flex-direction:column;align-items:center;margin:0 auto}.inner-wrapper{width:90%;margin:0 auto}.search-bar{position:relative;width:100%;margin-top:30px}.search-bar input{width:100%;padding:10px 0;text-indent:20px;font-size:16px;border:1px solid #ccc;border-radius:15px;box-shadow:0 2px 6px #0000001a;border:none}.search-bar .search-icon{position:absolute;right:0;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;background-color:orange;color:#fff;width:40px;height:40px;border-radius:15px;font-size:18px;cursor:pointer;box-shadow:0 2px 6px #0000001a}.fa{font-family:var(--fa-style-family, "Font Awesome 6 Free");font-weight:var(--fa-style, 900)}.fa{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display, inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa:before{content:var(--fa)}.fa-map-marker{--fa: "\\f041";--fa--fa: "\\f041\\f041"}.fa-search{--fa: "\\f002";--fa--fa: "\\f002\\f002"}:root{--fa-style-family-brands: "Font Awesome 6 Brands";--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-6PJPV6JM.woff2") format("woff2"),url("./media/fa-brands-400-KOKGDU7E.ttf") format("truetype")}:root{--fa-style-family-classic: "Font Awesome 6 Free";--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-OHB6J4OK.woff2") format("woff2"),url("./media/fa-regular-400-IPMAEX5Y.ttf") format("truetype")}:root{--fa-style-family-classic: "Font Awesome 6 Free";--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-ABTK6BNK.woff2") format("woff2"),url("./media/fa-solid-900-SRFFQLRM.ttf") format("truetype")}
</style><link rel="stylesheet" href="styles-UQQ7IBC5.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-UQQ7IBC5.css"></noscript><style ng-app-id="ng">@font-face{font-family:Aicho Regular;font-style:normal;font-weight:400;src:local("Aicho Regular"),url("./media/AichoRegular-BW1dd-UPAFKXNN.woff") format("woff")}.font-archivo[_ngcontent-ng-c3339952087]{font-family:Aicho Regular,sans-serif}.container[_ngcontent-ng-c3339952087]{background-color:#f5f5f0;height:100%}.location-container[_ngcontent-ng-c3339952087]{display:flex;flex-direction:column;margin-top:20px;color:#ff9433}.location-icon[_ngcontent-ng-c3339952087]{font-size:18px;margin-right:5px}.location-text[_ngcontent-ng-c3339952087]{font-size:16px;font-weight:700}.location-subtext[_ngcontent-ng-c3339952087]{font-size:14px;margin:5px 0 0 15px}.search-bar[_ngcontent-ng-c3339952087]{border:1px solid #ccc;border-radius:15px;margin-top:20px}.good-deals[_ngcontent-ng-c3339952087]{margin:20px 0;font-size:18px;font-weight:700;color:#333}.title-texts[_ngcontent-ng-c3339952087]{display:flex;justify-content:space-between;font-size:medium}.see-all[_ngcontent-ng-c3339952087]{color:#ff9433;cursor:pointer}.gd-content[_ngcontent-ng-c3339952087]{white-space:nowrap;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin:20px 0}.gd-images[_ngcontent-ng-c3339952087]{display:inline-block;width:300px;height:250px;background-color:#fff;margin-right:20px;border:1px solid #ccc;border-radius:25px;text-align:center;font-weight:400;box-sizing:border-box}@media (max-width: 768px){.gd-images[_ngcontent-ng-c3339952087]{width:150px;height:160px;font-size:small}}.gd-img-content[_ngcontent-ng-c3339952087]{width:100%;height:100%}.gd-img-content[_ngcontent-ng-c3339952087]   img[_ngcontent-ng-c3339952087]{width:70%;height:70%;object-fit:contain;border-radius:25px;display:block;margin:0 auto}.explore-neighbourhood[_ngcontent-ng-c3339952087]{margin-top:40px;font-size:18px;font-weight:700;color:#333}.en-content[_ngcontent-ng-c3339952087]{white-space:nowrap;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin:20px 0}.en-images[_ngcontent-ng-c3339952087]{display:inline-block;width:700px;height:230px;margin-right:20px}@media (max-width: 768px){.en-images[_ngcontent-ng-c3339952087]{width:250px;height:200px}}.en-images[_ngcontent-ng-c3339952087]   img[_ngcontent-ng-c3339952087]{width:100%;height:100%;object-fit:cover;border-radius:25px}.autocomplete-list[_ngcontent-ng-c3339952087]{position:absolute;top:100%;left:0;width:100%;max-height:150px;overflow-y:auto;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 6px #0000001a;z-index:100;list-style-type:none;padding:0}.autocomplete-list[_ngcontent-ng-c3339952087]   li[_ngcontent-ng-c3339952087]{padding:10px;cursor:pointer;color:#333}.autocomplete-list[_ngcontent-ng-c3339952087]   li[_ngcontent-ng-c3339952087]:hover{background-color:#d3d3d3}</style><style ng-app-id="ng">.tab-bar[_ngcontent-ng-c969141191]{display:flex;justify-content:space-around;align-items:center;position:fixed;width:90%;bottom:20px;background-color:#000;padding:10px;border-radius:15px}@media (max-width: 768px){.tab-bar[_ngcontent-ng-c969141191]{width:85%}}.tab-icon[_ngcontent-ng-c969141191]{font-size:24px;cursor:pointer;padding:8px;border-radius:50%;transition:background-color .3s,transform .3s}.tab-icon[_ngcontent-ng-c969141191]:hover{background-color:#fff3}.active-tab[_ngcontent-ng-c969141191]{background-color:tomato;transform:scale(1.2)}</style></head>

<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["input","compositionstart","compositionend","click"],["blur"]);</script>
  <app-root ng-version="19.0.1" ngh="2" ng-server-context="ssg"><router-outlet></router-outlet><app-search _nghost-ng-c3339952087 ngh="1"><div _ngcontent-ng-c3339952087 class="container"><div _ngcontent-ng-c3339952087 class="inner-wrapper"><div _ngcontent-ng-c3339952087 class="location-container"><div _ngcontent-ng-c3339952087><span _ngcontent-ng-c3339952087 class="location-icon"><i _ngcontent-ng-c3339952087 class="fa fa-map-marker"></i></span><span _ngcontent-ng-c3339952087 class="location-text">Park, Toronto</span></div><div _ngcontent-ng-c3339952087 class="location-subtext">within 10km</div></div><div _ngcontent-ng-c3339952087 class="search-bar"><input _ngcontent-ng-c3339952087 type="text" placeholder="Toronto, ON" value class="ng-untouched ng-pristine ng-valid" jsaction="input:;blur:;compositionstart:;compositionend:;"><span _ngcontent-ng-c3339952087 class="search-icon"><i _ngcontent-ng-c3339952087 class="fa fa-search"></i></span><!----></div><div _ngcontent-ng-c3339952087 class="good-deals"><div _ngcontent-ng-c3339952087 class="title-texts"><span _ngcontent-ng-c3339952087 class="font-archivo">Good Deals</span><span _ngcontent-ng-c3339952087 class="see-all">See all &gt;</span></div><div _ngcontent-ng-c3339952087 class="gd-content"><div _ngcontent-ng-c3339952087 class="gd-images"><div _ngcontent-ng-c3339952087><p _ngcontent-ng-c3339952087>Free Ice Cream</p></div><div _ngcontent-ng-c3339952087 class="gd-img-content"><img _ngcontent-ng-c3339952087 src="assets/icecream.jpg" alt="icecream"></div></div><div _ngcontent-ng-c3339952087 class="gd-images"><div _ngcontent-ng-c3339952087><p _ngcontent-ng-c3339952087>20% off Margherita</p></div><div _ngcontent-ng-c3339952087 class="gd-img-content"><img _ngcontent-ng-c3339952087 src="assets/pizza.png" alt="pizza"></div></div><div _ngcontent-ng-c3339952087 class="gd-images"><div _ngcontent-ng-c3339952087><p _ngcontent-ng-c3339952087>30% off Tteokbokki</p></div><div _ngcontent-ng-c3339952087 class="gd-img-content"><img _ngcontent-ng-c3339952087 src="assets/tteokbokki.png" alt="tteokbokki"></div></div><!----></div></div><div _ngcontent-ng-c3339952087 class="explore-neighbourhood"><div _ngcontent-ng-c3339952087 class="title-texts"><span _ngcontent-ng-c3339952087 class="font-archivo">Explore the Neighborhood</span><span _ngcontent-ng-c3339952087 class="see-all">See all &gt;</span></div><div _ngcontent-ng-c3339952087 class="en-content"><div _ngcontent-ng-c3339952087 class="en-images"><img _ngcontent-ng-c3339952087 src="assets/evergreen-brick-works.jpg" alt="evergreen-brick-works"></div><div _ngcontent-ng-c3339952087 class="en-images"><img _ngcontent-ng-c3339952087 src="assets/summer-hill.jpg" alt="summer-hill"></div><!----></div></div><app-tab-bar-view _ngcontent-ng-c3339952087 _nghost-ng-c969141191 ngh="0"><div _ngcontent-ng-c969141191 class="container"><div _ngcontent-ng-c969141191 class="tab-bar"><div _ngcontent-ng-c969141191 class="tab-icon" jsaction="click:;"> 🌎 </div><div _ngcontent-ng-c969141191 class="tab-icon" jsaction="click:;"> 🔍 </div><div _ngcontent-ng-c969141191 class="tab-icon" jsaction="click:;"> ⭐ </div><div _ngcontent-ng-c969141191 class="tab-icon" jsaction="click:;"> 💖 </div><div _ngcontent-ng-c969141191 class="tab-icon" jsaction="click:;"> 🙍‍♂️ </div></div></div></app-tab-bar-view></div></div></app-search><!----></app-root>
<link rel="modulepreload" href="chunk-KQP4RHDQ.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-4Q4BMYK2.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"14":"t0","22":"t1","30":"t2"},"c":{"14":[],"22":[{"i":"t1","r":1,"x":3}],"30":[{"i":"t2","r":1,"x":2}]}},{"c":{"0":[{"i":"c3339952087","r":1}]}}]}</script></body></html>`;