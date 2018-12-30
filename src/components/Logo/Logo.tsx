/* tslint:disable:max-line-length */
import React from 'react';

type Props = {
  className: string,
};

function Logo({ className }: Props) {
  return (
    <div className={className}>
      <svg viewBox="0 0 207 153" version="1.1">
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="lg1"
          >
            <stop stopColor="#61F0FA" offset="0%" />
            <stop stopColor="#1CF773" offset="100%" />
          </linearGradient>
        </defs>
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Bubble">
            <path
              d="M185.326636,101 C183.26317,105.985823 182.140921,111.69706 182.140921,117.766776 C182.140921,132.780337 189.007176,145.600618 200,150.674516 C196.79396,152.168223 193.233394,153 189.483674,153 C175.40943,153 164,141.281836 164,126.826748 C164,113.82557 173.229706,103.038438 185.326636,101 Z"
              fill="#29F58B"
            />
            <path
              d="M106.494083,149 C174.900823,149 203.06245,119.986484 206.676668,76.2755493 C210.290887,32.564615 183.907433,4.5581728 112.284698,0.443834425 C40.6619629,-3.67050395 8.27760643,20.9690042 0.811526583,68.1567891 C-6.65455327,115.344574 38.087344,149 106.494083,149 Z"
              fill="url(#lg1)"
            />
          </g>
          <g id="Yarc" transform="translate(41.000000, 33.000000)" fill="#FFFFFF">
            <path
              d="M28.152,60.36 C27.7679981,62.7120118 26.5920098,65.0159887 24.624,67.272 C22.8479911,69.3360103 20.8080115,70.9199945 18.504,72.024 C15.5279851,73.4640072 12.8880115,74.184 10.584,74.184 C6.88798152,74.184 3.75601284,72.9600122 1.188,70.512 C-1.38001284,68.0639878 -2.664,64.9920185 -2.664,61.296 C-2.664,60.5279962 -2.61600048,59.8320031 -2.52,59.208 C-2.08799784,56.3759858 -0.16801704,54.96 3.24,54.96 C4.10400432,54.96 4.99199544,55.1519981 5.904,55.536 C7.00800552,55.9680022 7.58399976,56.5679962 7.632,57.336 L7.632,59.784 C7.68000024,60.8880055 8.17199532,61.8599958 9.108,62.7 C10.0440047,63.5400042 11.0639945,63.96 12.168,63.96 C13.2240053,63.96 14.4359932,63.5040046 15.804,62.592 C17.1720068,61.6799954 17.9279993,60.7440048 18.072,59.784 L19.008,53.664 C17.1359906,53.664 14.304019,53.4960017 10.512,53.16 C7.91998704,52.6799976 5.6040102,51.1680127 3.564,48.624 C1.5239898,46.0799873 0.504,43.4640134 0.504,40.776 C0.504,40.2959976 0.52799976,39.9120014 0.576,39.624 L4.392,15.504 C4.53600072,14.5919954 5.37599232,13.8000034 6.912,13.128 C8.16000624,12.5999974 9.19199592,12.336 10.008,12.336 C10.9680048,12.336 11.951995,12.5999974 12.96,13.128 C14.2080062,13.8000034 14.7600007,14.5679957 14.616,15.432 L10.872,39.192 C10.7759995,39.7680029 11.1719956,40.5959946 12.06,41.676 C12.9480044,42.7560054 13.7039969,43.296 14.328,43.296 L20.664,43.296 L25.056,15.504 C25.2000007,14.5439952 25.9439933,13.7520031 27.288,13.128 C28.3920055,12.5999974 29.5199942,12.336 30.672,12.336 C31.6320048,12.336 32.615995,12.5999974 33.624,13.128 C34.8720062,13.8000034 35.4240007,14.5679957 35.28,15.432 L28.152,60.36 Z M64.368,50.136 C64.0319983,52.3920113 62.8320103,54.6719885 60.768,56.976 C58.9439909,59.1360108 56.928011,60.7439947 54.72,61.8 C51.7439851,63.2400072 49.0800118,63.96 46.728,63.96 C42.8399806,63.96 39.6720122,62.7240124 37.224,60.252 C34.7759878,57.7799876 33.552,54.6240192 33.552,50.784 C33.552,45.4559734 35.6159794,41.0640173 39.744,37.608 C43.6320194,34.3919839 48.2879729,32.784 53.712,32.784 C54.720005,32.784 55.727995,32.8559993 56.736,33 C57.3120029,31.0319902 57.6,29.2800077 57.6,27.744 C57.6,24.2879827 56.1600144,22.56 53.28,22.56 C52.079994,22.56 50.9040058,22.9679959 49.752,23.784 C48.5999942,24.6000041 47.8320019,25.5839942 47.448,26.736 C47.3039993,27.3600031 47.0400019,28.1999947 46.656,29.256 C45.647995,30.7920077 43.9200122,31.56 41.472,31.56 C38.4959851,31.56 37.008,30.456011 37.008,28.248 C37.008,26.1839897 37.703993,24.0240113 39.096,21.768 C40.296006,19.8479904 41.7839911,18.1440074 43.56,16.656 C47.0640175,13.7759856 50.8319798,12.336 54.864,12.336 C55.872005,12.336 56.9999938,12.4559988 58.248,12.696 C60.840013,13.1760024 63.1559898,14.6999872 65.196,17.268 C67.2360102,19.8360128 68.256,22.4399868 68.256,25.08 C68.256,25.4640019 68.2080005,25.8239983 68.112,26.16 L64.368,50.136 Z M54.216,49.632 L55.224,43.296 L48.888,43.296 C47.9279952,43.296 46.8960055,43.9079939 45.792,45.132 C44.6879945,46.3560061 44.0640007,47.471995 43.92,48.48 C43.6799988,49.872007 44.0039956,51.0959947 44.892,52.152 C45.7800044,53.2080053 46.919993,53.736 48.312,53.736 C49.3680053,53.736 50.5799932,53.2920044 51.948,52.404 C53.3160068,51.5159956 54.0719993,50.5920048 54.216,49.632 Z M89.3507703,22.416 C89.3510737,22.4160001 89.3513778,22.416 89.3516827,22.416 C89.3513663,22.416 89.3510683,22.416 89.3507703,22.416 Z M89.3507703,22.4160001 C87.911173,22.416205 86.4715973,22.7762013 85.032,23.496 C83.3519916,24.3120041 82.416001,25.3679935 82.224,26.664 L76.824,60.864 C76.6799993,61.7760046 75.9360067,62.5439969 74.592,63.168 C73.4879945,63.6960026 72.3600058,63.96 71.208,63.96 C70.199995,63.96 69.192005,63.6960026 68.184,63.168 C66.983994,62.5439969 66.4559993,61.7520048 66.6,60.792 L72.072,26.232 C72.3120012,24.6479921 73.127993,22.8720098 74.52,20.904 C78.5520202,15.1919714 84.2879628,12.336 91.728,12.336 C93.7920103,12.336 95.1599966,12.4559988 95.832,12.696 C97.1280065,13.1280022 97.776,14.1599918 97.776,15.792 C97.776,16.3200026 97.7280005,16.8719971 97.632,17.448 C97.3439986,19.3200094 96.7800042,20.6279963 95.94,21.372 C95.0999958,22.1160037 93.7680091,22.488 91.944,22.488 L90.648,22.488 C89.4976397,22.4400683 89.0652341,22.4160686 89.3507703,22.4160001 Z M119.016,59.856 C115.463982,62.5920137 111.792019,63.96 108,63.96 C103.727979,63.96 100.296013,62.3040166 97.704,58.992 C95.6879899,56.4479873 94.68,53.880013 94.68,51.288 C94.68,50.7599974 94.7039998,50.3520014 94.752,50.064 L98.496,26.232 C98.8320017,23.9759887 100.03199,21.6720118 102.096,19.32 C103.968009,17.2079894 106.007989,15.6000055 108.216,14.496 C111.144015,13.0559928 113.783988,12.336 116.136,12.336 C119.832018,12.336 122.963987,13.5599878 125.532,16.008 C128.100013,18.4560122 129.384,21.5279815 129.384,25.224 C129.384,25.9920038 129.336,26.6879969 129.24,27.312 C128.807998,30.1440142 126.888017,31.56 123.48,31.56 C120.839987,31.56 119.352002,30.7920077 119.016,29.256 L119.016,26.736 C119.016,25.5839942 118.560005,24.6000041 117.648,23.784 C116.735995,22.9679959 115.704006,22.56 114.552,22.56 C113.495995,22.56 112.320006,22.9919957 111.024,23.856 C109.583993,24.7680046 108.792001,25.7039952 108.648,26.664 L105.048,49.632 C104.903999,50.5440046 105.287995,51.4559954 106.2,52.368 C107.112005,53.2800046 108.239993,53.736 109.584,53.736 C112.272013,53.736 114.215994,52.3440139 115.416,49.56 C115.512,48.9839971 115.775998,48.1440055 116.208,47.04 C117.120005,45.5039923 118.847987,44.736 121.392,44.736 C124.368015,44.736 125.856,45.839989 125.856,48.048 C125.856,50.1600106 125.136007,52.3679885 123.696,54.672 C122.447994,56.6880101 120.888009,58.4159928 119.016,59.856 Z"
              style={{ mixBlendMode: 'overlay' }}
            />
            <path
              d="M28.152,58.36 C27.7679981,60.7120118 26.5920098,63.0159887 24.624,65.272 C22.8479911,67.3360103 20.8080115,68.9199945 18.504,70.024 C15.5279851,71.4640072 12.8880115,72.184 10.584,72.184 C6.88798152,72.184 3.75601284,70.9600122 1.188,68.512 C-1.38001284,66.0639878 -2.664,62.9920185 -2.664,59.296 C-2.664,58.5279962 -2.61600048,57.8320031 -2.52,57.208 C-2.08799784,54.3759858 -0.16801704,52.96 3.24,52.96 C4.10400432,52.96 4.99199544,53.1519981 5.904,53.536 C7.00800552,53.9680022 7.58399976,54.5679962 7.632,55.336 L7.632,57.784 C7.68000024,58.8880055 8.17199532,59.8599958 9.108,60.7 C10.0440047,61.5400042 11.0639945,61.96 12.168,61.96 C13.2240053,61.96 14.4359932,61.5040046 15.804,60.592 C17.1720068,59.6799954 17.9279993,58.7440048 18.072,57.784 L19.008,51.664 C17.1359906,51.664 14.304019,51.4960017 10.512,51.16 C7.91998704,50.6799976 5.6040102,49.1680127 3.564,46.624 C1.5239898,44.0799873 0.504,41.4640134 0.504,38.776 C0.504,38.2959976 0.52799976,37.9120014 0.576,37.624 L4.392,13.504 C4.53600072,12.5919954 5.37599232,11.8000034 6.912,11.128 C8.16000624,10.5999974 9.19199592,10.336 10.008,10.336 C10.9680048,10.336 11.951995,10.5999974 12.96,11.128 C14.2080062,11.8000034 14.7600007,12.5679957 14.616,13.432 L10.872,37.192 C10.7759995,37.7680029 11.1719956,38.5959946 12.06,39.676 C12.9480044,40.7560054 13.7039969,41.296 14.328,41.296 L20.664,41.296 L25.056,13.504 C25.2000007,12.5439952 25.9439933,11.7520031 27.288,11.128 C28.3920055,10.5999974 29.5199942,10.336 30.672,10.336 C31.6320048,10.336 32.615995,10.5999974 33.624,11.128 C34.8720062,11.8000034 35.4240007,12.5679957 35.28,13.432 L28.152,58.36 Z M64.368,48.136 C64.0319983,50.3920113 62.8320103,52.6719885 60.768,54.976 C58.9439909,57.1360108 56.928011,58.7439947 54.72,59.8 C51.7439851,61.2400072 49.0800118,61.96 46.728,61.96 C42.8399806,61.96 39.6720122,60.7240124 37.224,58.252 C34.7759878,55.7799876 33.552,52.6240192 33.552,48.784 C33.552,43.4559734 35.6159794,39.0640173 39.744,35.608 C43.6320194,32.3919839 48.2879729,30.784 53.712,30.784 C54.720005,30.784 55.727995,30.8559993 56.736,31 C57.3120029,29.0319902 57.6,27.2800077 57.6,25.744 C57.6,22.2879827 56.1600144,20.56 53.28,20.56 C52.079994,20.56 50.9040058,20.9679959 49.752,21.784 C48.5999942,22.6000041 47.8320019,23.5839942 47.448,24.736 C47.3039993,25.3600031 47.0400019,26.1999947 46.656,27.256 C45.647995,28.7920077 43.9200122,29.56 41.472,29.56 C38.4959851,29.56 37.008,28.456011 37.008,26.248 C37.008,24.1839897 37.703993,22.0240113 39.096,19.768 C40.296006,17.8479904 41.7839911,16.1440074 43.56,14.656 C47.0640175,11.7759856 50.8319798,10.336 54.864,10.336 C55.872005,10.336 56.9999938,10.4559988 58.248,10.696 C60.840013,11.1760024 63.1559898,12.6999872 65.196,15.268 C67.2360102,17.8360128 68.256,20.4399868 68.256,23.08 C68.256,23.4640019 68.2080005,23.8239983 68.112,24.16 L64.368,48.136 Z M54.216,47.632 L55.224,41.296 L48.888,41.296 C47.9279952,41.296 46.8960055,41.9079939 45.792,43.132 C44.6879945,44.3560061 44.0640007,45.471995 43.92,46.48 C43.6799988,47.872007 44.0039956,49.0959947 44.892,50.152 C45.7800044,51.2080053 46.919993,51.736 48.312,51.736 C49.3680053,51.736 50.5799932,51.2920044 51.948,50.404 C53.3160068,49.5159956 54.0719993,48.5920048 54.216,47.632 Z M89.3507703,20.416 C89.3510737,20.4160001 89.3513778,20.416 89.3516827,20.416 C89.3513663,20.416 89.3510683,20.416 89.3507703,20.416 Z M89.3507703,20.4160001 C87.911173,20.416205 86.4715973,20.7762013 85.032,21.496 C83.3519916,22.3120041 82.416001,23.3679935 82.224,24.664 L76.824,58.864 C76.6799993,59.7760046 75.9360067,60.5439969 74.592,61.168 C73.4879945,61.6960026 72.3600058,61.96 71.208,61.96 C70.199995,61.96 69.192005,61.6960026 68.184,61.168 C66.983994,60.5439969 66.4559993,59.7520048 66.6,58.792 L72.072,24.232 C72.3120012,22.6479921 73.127993,20.8720098 74.52,18.904 C78.5520202,13.1919714 84.2879628,10.336 91.728,10.336 C93.7920103,10.336 95.1599966,10.4559988 95.832,10.696 C97.1280065,11.1280022 97.776,12.1599918 97.776,13.792 C97.776,14.3200026 97.7280005,14.8719971 97.632,15.448 C97.3439986,17.3200094 96.7800042,18.6279963 95.94,19.372 C95.0999958,20.1160037 93.7680091,20.488 91.944,20.488 L90.648,20.488 C89.4976397,20.4400683 89.0652341,20.4160686 89.3507703,20.4160001 Z M119.016,57.856 C115.463982,60.5920137 111.792019,61.96 108,61.96 C103.727979,61.96 100.296013,60.3040166 97.704,56.992 C95.6879899,54.4479873 94.68,51.880013 94.68,49.288 C94.68,48.7599974 94.7039998,48.3520014 94.752,48.064 L98.496,24.232 C98.8320017,21.9759887 100.03199,19.6720118 102.096,17.32 C103.968009,15.2079894 106.007989,13.6000055 108.216,12.496 C111.144015,11.0559928 113.783988,10.336 116.136,10.336 C119.832018,10.336 122.963987,11.5599878 125.532,14.008 C128.100013,16.4560122 129.384,19.5279815 129.384,23.224 C129.384,23.9920038 129.336,24.6879969 129.24,25.312 C128.807998,28.1440142 126.888017,29.56 123.48,29.56 C120.839987,29.56 119.352002,28.7920077 119.016,27.256 L119.016,24.736 C119.016,23.5839942 118.560005,22.6000041 117.648,21.784 C116.735995,20.9679959 115.704006,20.56 114.552,20.56 C113.495995,20.56 112.320006,20.9919957 111.024,21.856 C109.583993,22.7680046 108.792001,23.7039952 108.648,24.664 L105.048,47.632 C104.903999,48.5440046 105.287995,49.4559954 106.2,50.368 C107.112005,51.2800046 108.239993,51.736 109.584,51.736 C112.272013,51.736 114.215994,50.3440139 115.416,47.56 C115.512,46.9839971 115.775998,46.1440055 116.208,45.04 C117.120005,43.5039923 118.847987,42.736 121.392,42.736 C124.368015,42.736 125.856,43.839989 125.856,46.048 C125.856,48.1600106 125.136007,50.3679885 123.696,52.672 C122.447994,54.6880101 120.888009,56.4159928 119.016,57.856 Z"
              style={{ mixBlendMode: 'hue' }}
            />
            <path
              d="M28.152,59.36 C27.7679981,61.7120118 26.5920098,64.0159887 24.624,66.272 C22.8479911,68.3360103 20.8080115,69.9199945 18.504,71.024 C15.5279851,72.4640072 12.8880115,73.184 10.584,73.184 C6.88798152,73.184 3.75601284,71.9600122 1.188,69.512 C-1.38001284,67.0639878 -2.664,63.9920185 -2.664,60.296 C-2.664,59.5279962 -2.61600048,58.8320031 -2.52,58.208 C-2.08799784,55.3759858 -0.16801704,53.96 3.24,53.96 C4.10400432,53.96 4.99199544,54.1519981 5.904,54.536 C7.00800552,54.9680022 7.58399976,55.5679962 7.632,56.336 L7.632,58.784 C7.68000024,59.8880055 8.17199532,60.8599958 9.108,61.7 C10.0440047,62.5400042 11.0639945,62.96 12.168,62.96 C13.2240053,62.96 14.4359932,62.5040046 15.804,61.592 C17.1720068,60.6799954 17.9279993,59.7440048 18.072,58.784 L19.008,52.664 C17.1359906,52.664 14.304019,52.4960017 10.512,52.16 C7.91998704,51.6799976 5.6040102,50.1680127 3.564,47.624 C1.5239898,45.0799873 0.504,42.4640134 0.504,39.776 C0.504,39.2959976 0.52799976,38.9120014 0.576,38.624 L4.392,14.504 C4.53600072,13.5919954 5.37599232,12.8000034 6.912,12.128 C8.16000624,11.5999974 9.19199592,11.336 10.008,11.336 C10.9680048,11.336 11.951995,11.5999974 12.96,12.128 C14.2080062,12.8000034 14.7600007,13.5679957 14.616,14.432 L10.872,38.192 C10.7759995,38.7680029 11.1719956,39.5959946 12.06,40.676 C12.9480044,41.7560054 13.7039969,42.296 14.328,42.296 L20.664,42.296 L25.056,14.504 C25.2000007,13.5439952 25.9439933,12.7520031 27.288,12.128 C28.3920055,11.5999974 29.5199942,11.336 30.672,11.336 C31.6320048,11.336 32.615995,11.5999974 33.624,12.128 C34.8720062,12.8000034 35.4240007,13.5679957 35.28,14.432 L28.152,59.36 Z M64.368,49.136 C64.0319983,51.3920113 62.8320103,53.6719885 60.768,55.976 C58.9439909,58.1360108 56.928011,59.7439947 54.72,60.8 C51.7439851,62.2400072 49.0800118,62.96 46.728,62.96 C42.8399806,62.96 39.6720122,61.7240124 37.224,59.252 C34.7759878,56.7799876 33.552,53.6240192 33.552,49.784 C33.552,44.4559734 35.6159794,40.0640173 39.744,36.608 C43.6320194,33.3919839 48.2879729,31.784 53.712,31.784 C54.720005,31.784 55.727995,31.8559993 56.736,32 C57.3120029,30.0319902 57.6,28.2800077 57.6,26.744 C57.6,23.2879827 56.1600144,21.56 53.28,21.56 C52.079994,21.56 50.9040058,21.9679959 49.752,22.784 C48.5999942,23.6000041 47.8320019,24.5839942 47.448,25.736 C47.3039993,26.3600031 47.0400019,27.1999947 46.656,28.256 C45.647995,29.7920077 43.9200122,30.56 41.472,30.56 C38.4959851,30.56 37.008,29.456011 37.008,27.248 C37.008,25.1839897 37.703993,23.0240113 39.096,20.768 C40.296006,18.8479904 41.7839911,17.1440074 43.56,15.656 C47.0640175,12.7759856 50.8319798,11.336 54.864,11.336 C55.872005,11.336 56.9999938,11.4559988 58.248,11.696 C60.840013,12.1760024 63.1559898,13.6999872 65.196,16.268 C67.2360102,18.8360128 68.256,21.4399868 68.256,24.08 C68.256,24.4640019 68.2080005,24.8239983 68.112,25.16 L64.368,49.136 Z M54.216,48.632 L55.224,42.296 L48.888,42.296 C47.9279952,42.296 46.8960055,42.9079939 45.792,44.132 C44.6879945,45.3560061 44.0640007,46.471995 43.92,47.48 C43.6799988,48.872007 44.0039956,50.0959947 44.892,51.152 C45.7800044,52.2080053 46.919993,52.736 48.312,52.736 C49.3680053,52.736 50.5799932,52.2920044 51.948,51.404 C53.3160068,50.5159956 54.0719993,49.5920048 54.216,48.632 Z M89.3507703,21.416 C89.3510737,21.4160001 89.3513778,21.416 89.3516827,21.416 C89.3513663,21.416 89.3510683,21.416 89.3507703,21.416 Z M89.3507703,21.4160001 C87.911173,21.416205 86.4715973,21.7762013 85.032,22.496 C83.3519916,23.3120041 82.416001,24.3679935 82.224,25.664 L76.824,59.864 C76.6799993,60.7760046 75.9360067,61.5439969 74.592,62.168 C73.4879945,62.6960026 72.3600058,62.96 71.208,62.96 C70.199995,62.96 69.192005,62.6960026 68.184,62.168 C66.983994,61.5439969 66.4559993,60.7520048 66.6,59.792 L72.072,25.232 C72.3120012,23.6479921 73.127993,21.8720098 74.52,19.904 C78.5520202,14.1919714 84.2879628,11.336 91.728,11.336 C93.7920103,11.336 95.1599966,11.4559988 95.832,11.696 C97.1280065,12.1280022 97.776,13.1599918 97.776,14.792 C97.776,15.3200026 97.7280005,15.8719971 97.632,16.448 C97.3439986,18.3200094 96.7800042,19.6279963 95.94,20.372 C95.0999958,21.1160037 93.7680091,21.488 91.944,21.488 L90.648,21.488 C89.4976397,21.4400683 89.0652341,21.4160686 89.3507703,21.4160001 Z M119.016,58.856 C115.463982,61.5920137 111.792019,62.96 108,62.96 C103.727979,62.96 100.296013,61.3040166 97.704,57.992 C95.6879899,55.4479873 94.68,52.880013 94.68,50.288 C94.68,49.7599974 94.7039998,49.3520014 94.752,49.064 L98.496,25.232 C98.8320017,22.9759887 100.03199,20.6720118 102.096,18.32 C103.968009,16.2079894 106.007989,14.6000055 108.216,13.496 C111.144015,12.0559928 113.783988,11.336 116.136,11.336 C119.832018,11.336 122.963987,12.5599878 125.532,15.008 C128.100013,17.4560122 129.384,20.5279815 129.384,24.224 C129.384,24.9920038 129.336,25.6879969 129.24,26.312 C128.807998,29.1440142 126.888017,30.56 123.48,30.56 C120.839987,30.56 119.352002,29.7920077 119.016,28.256 L119.016,25.736 C119.016,24.5839942 118.560005,23.6000041 117.648,22.784 C116.735995,21.9679959 115.704006,21.56 114.552,21.56 C113.495995,21.56 112.320006,21.9919957 111.024,22.856 C109.583993,23.7680046 108.792001,24.7039952 108.648,25.664 L105.048,48.632 C104.903999,49.5440046 105.287995,50.4559954 106.2,51.368 C107.112005,52.2800046 108.239993,52.736 109.584,52.736 C112.272013,52.736 114.215994,51.3440139 115.416,48.56 C115.512,47.9839971 115.775998,47.1440055 116.208,46.04 C117.120005,44.5039923 118.847987,43.736 121.392,43.736 C124.368015,43.736 125.856,44.839989 125.856,47.048 C125.856,49.1600106 125.136007,51.3679885 123.696,53.672 C122.447994,55.6880101 120.888009,57.4159928 119.016,58.856 Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Logo;
