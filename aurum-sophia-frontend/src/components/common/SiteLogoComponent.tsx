import React from 'react';
import { AppContext } from '../../services/siteDefaultsService';

export const SiteLogoComponent = (): JSX.Element => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    return (
        <>
            {
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 34 220 200" version="1.1" id="svgTreeShape">
                    <g id="treeShape">
                        {/*                  <defs
     id="defs2">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4507">
      <stop
         style="stop-color:#fef09b;stop-opacity:1;"
         offset="0"
         id="stop4503" />
      <stop
         style="stop-color:#e7bf47;stop-opacity:1"
         offset="1"
         id="stop4505" />
    </linearGradient>
    <linearGradient
       id="linearGradient4509"
       x1="58.867207"
       y1="195.49533"
       x2="69.595345"
       y2="168.26237"
       gradientUnits="userSpaceOnUse" />
       
  </defs>
       */}
                        <style type="text/css">
                            {`.st01{
                                fill:${theme.palette.text.primary};stroke:${theme.palette.primary.main};stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1
                            }`}
                        </style>

                        {/*   <style type="text/css">
                            {`.st02{
                                fill:${theme.palette.error.main};stroke:${theme.palette.primary.main};stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1
                            }`}
                        </style> */}

                        <style type="text/css">
                            {`.st02{  fill:${theme.palette.text.primary};stroke:${theme.palette.primary.main};stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1
                             }`}
                        </style>
                        <path
                            className="st02"
                            d="m 60.449994,233.45696 c 0,0 15.891083,-8.3609 25.12419,-24.9614 3.733323,-6.71226 6.50857,-14.0688 8.031056,-21.59703 0.416301,-2.05848 1.011007,-4.32904 0.27132,-6.29462 -0.802049,-2.1313 -2.561823,-4.21424 -4.72096,-4.93801 -2.032844,-0.68143 -4.714966,-0.3572 -6.348876,1.03101 -1.475535,1.25366 -2.296549,3.62499 -1.844974,5.50779 0.346042,1.44279 1.735801,2.75725 3.174439,3.12017 1.132287,0.28564 2.481792,-0.21207 3.364363,-0.97675 0.480271,-0.41612 0.630155,-1.12059 0.786825,-1.73644 0.609374,-2.39536 -2.799079,-2.30224 -2.974406,-3.54418 -0.137121,-0.97129 0.851083,-1.96892 1.753468,-2.09927 1.355492,-0.1958 2.661444,1.13788 3.418628,2.27909 0.79922,1.20457 1.108578,2.84446 0.813959,4.25971 -0.316973,1.52263 -1.313285,3.02787 -2.6318,3.85274 -1.627563,1.01821 -3.851879,1.36892 -5.697712,0.84109 -1.881613,-0.53807 -3.524531,-2.08873 -4.476771,-3.79847 -0.858843,-1.54205 -1.23395,-3.52896 -0.786826,-5.23647 0.641578,-2.45011 2.547127,-4.60976 4.666695,-5.99616 1.351068,-0.88373 3.079677,-1.22337 4.693827,-1.19381 1.347692,0.0247 2.00252,0.51649 3.879871,1.13954 0.733685,0.24349 2.057792,-0.3397 2.034897,-1.1124 -0.160564,-5.41904 -3.038389,-10.21988 -5.236469,-15.05824 -2.846393,-6.26541 -5.511251,-10.72384 -10.17448,-14.54273 -2.314379,-1.89533 -5.636994,-2.5214 -8.627962,-2.46901 -2.666487,0.0467 -4.820668,1.08684 -6.945781,2.27909 -2.724832,1.52871 -5.1977,3.62688 -7.135704,6.07756 -1.083851,1.37057 -1.930085,2.98032 -2.387613,4.66669 -0.540805,1.99332 -0.914857,4.19868 -0.352714,6.18609 1.102934,3.89933 3.149976,7.13987 6.403139,8.65509 2.907806,1.35437 6.830166,1.01292 9.604714,-0.5969 1.965703,-1.14052 3.153508,-3.50321 3.744209,-5.69771 0.296648,-1.10207 0.310702,-2.39299 -0.189924,-3.41863 -1.043075,-2.13697 -3.001363,-4.5091 -5.372126,-4.69383 -2.646871,-0.20624 -6.55162,2.18629 -5.589183,6.29462 0.147287,0.62872 1.042353,0.91286 1.166675,1.54652 0.325588,1.6595 -0.65355,3.20466 -2.767459,2.33335 -1.271067,-0.5239 -1.824231,-2.15774 -2.224821,-3.47289 -0.366382,-1.20284 -0.376095,-2.54895 -0.0814,-3.77134 0.686338,-2.84691 2.071698,-4.34188 4.042661,-5.45353 2.429134,-1.37006 5.721333,-1.77434 8.329509,-0.78683 2.746624,1.03993 5.075237,3.65061 6.023295,6.43028 1.073403,3.14718 0.726371,7.05836 -0.949618,9.93029 -1.69579,2.90586 -4.996606,5.02394 -8.275246,5.77911 -3.49773,0.80563 -7.398882,-0.13105 -10.635726,-1.68218 -1.189416,-0.56998 -2.103523,-1.63126 -2.930253,-2.65893 -1.503322,-1.86871 -2.840099,-3.95945 -3.581418,-6.24035 -0.677615,-2.08489 -0.875733,-4.35318 -0.705429,-6.5388 0.132423,-1.69947 1.329465,-4.93802 1.329465,-4.93802 0,0 -4.623882,0.76827 -6.891515,0.37985 -3.108985,-0.53254 -6.134917,-1.85209 -8.736491,-3.63568 -1.661885,-1.13936 -3.074707,-2.68242 -4.178321,-4.36825 -1.181226,-1.80439 -2.052022,-3.85861 -2.49614,-5.96903 -0.298041,-1.41627 -0.277835,-2.90721 -0.08139,-4.34111 0.290891,-2.12328 0.782754,-4.29759 1.844971,-6.15895 1.129269,-1.97885 2.767262,-3.7211 4.639564,-5.01941 1.493294,-1.03549 3.237543,-1.88971 5.046543,-2.06203 3.112893,-0.29652 6.518349,0.23285 9.197735,1.84497 2.032139,1.22268 3.758938,3.25622 4.503904,5.50779 0.918592,2.77634 0.739444,6.07335 -0.40698,8.76362 -0.767414,1.80086 -2.385971,3.21693 -4.042661,4.25972 -0.997249,0.62771 -2.191103,0.97577 -3.364362,1.08527 -1.434119,0.13385 -2.938779,-0.0354 -4.286848,-0.54264 -1.19497,-0.44966 -2.389328,-1.13657 -3.174439,-2.14342 -1.289519,-1.65372 -2.367648,-3.82974 -2.143424,-5.91477 0.246829,-2.29523 1.597171,-4.88617 3.689945,-5.8605 2.334112,-1.08669 5.894231,-0.82387 7.65121,1.05815 1.707415,1.82893 1.718571,5.29459 0.515506,7.48842 -0.922485,1.68218 -2.846975,0.49425 -3.34654,-0.62949 -0.320807,-0.72164 0.940183,-1.93126 0.796137,-2.70774 -0.190135,-1.02493 -1.155278,-2.22811 -2.197687,-2.22482 -1.54132,0.005 -3.076521,1.77629 -3.228703,3.31009 -0.154305,1.5552 1.177257,3.18787 2.550404,3.93414 1.319084,0.71688 3.113998,0.56751 4.503904,0 1.172329,-0.47867 2.141182,-1.5292 2.713196,-2.65893 0.722204,-1.42635 1.00999,-3.18412 0.678299,-4.7481 -0.314444,-1.48266 -1.25766,-2.87379 -2.414744,-3.85273 -1.584836,-1.34084 -3.677029,-2.45202 -5.751975,-2.38762 -2.97953,0.0925 -6.061067,1.69689 -8.031059,3.93414 -1.64814,1.87173 -2.316204,4.58944 -2.414744,7.08144 -0.07523,1.90248 0.32588,3.97034 1.410862,5.53492 2.536232,3.65733 6.566834,6.919 10.961309,7.62408 4.034541,0.64733 8.254363,-1.19728 11.748137,-3.50003 2.496473,-1.64543 6.779133,-5.39926 6.779133,-5.39926 0,0 -4.226368,-3.98835 -5.314008,-6.59306 -0.743509,-1.78057 -1.109323,-3.87758 -0.651166,-5.75197 0.711727,-2.91178 2.409326,-5.98735 5.01941,-7.46129 2.704465,-1.52724 6.674812,-2.11112 9.306261,-0.46125 3.021428,1.89438 5.516607,6.48218 4.178322,9.8489 -0.717174,1.80419 -2.045563,3.65861 -3.852739,4.36825 -2.115051,0.83053 -4.990572,0.71829 -6.782987,-0.6783 -1.721856,-1.34162 -2.893057,-4.08093 -2.224821,-6.15895 0.718815,-2.23531 3.467275,-4.19468 5.806239,-3.9884 1.681816,0.14832 3.571452,1.86634 3.608549,3.55428 0.05426,2.46901 -1.613475,2.50964 -2.875987,1.60079 -0.464799,-0.3346 -0.204452,-1.21099 -0.624035,-1.60079 -1.289533,-1.19801 -2.722856,0.65386 -2.848856,1.76358 -0.145018,1.27722 1.467391,2.53446 2.740329,2.7132 1.378808,0.1936 2.876525,-0.85871 3.662812,-2.00777 0.587259,-0.85821 0.687275,-2.09163 0.40698,-3.09304 -0.397079,-1.41865 -1.431553,-2.8248 -2.76746,-3.44576 -1.714562,-0.79696 -3.982487,-0.71594 -5.670576,0.13566 -1.829978,0.92318 -3.374463,2.84576 -3.771342,4.85662 -0.46523,2.35718 0.05067,5.44428 1.926368,6.94578 3.213235,2.5722 5.735152,4.41437 10.418669,3.44576 2.424823,-0.50148 7.271364,1.51939 7.271364,1.51939 l 4.286851,2.19769 c 0,0 -2.441877,-6.72873 -2.60467,-6.89152 -1.390642,-4.15331 -1.23685,-6.77519 -1.519388,-10.20161 -0.409208,-4.96257 0.785771,-8.43907 1.736445,-12.69776 0.989381,-4.43208 1.532778,-9.773503 0.298452,-13.620238 -2.048216,-6.383194 -9.854232,-11.602993 -17.093131,-10.55433 -3.635396,0.526642 -7.213156,3.107815 -9.251997,6.213216 -1.504138,2.290983 -2.239215,5.448452 -1.492258,8.085323 0.926715,3.271439 3.669251,6.334959 6.837254,7.569819 2.09034,0.8148 4.762738,0.50479 6.701591,-0.62404 1.639158,-0.95435 2.70912,-2.85046 3.255836,-4.6667 0.320736,-1.06551 0.275317,-2.283213 -0.0814,-3.337225 -0.419285,-1.238884 -1.103585,-2.660326 -2.306216,-3.174439 -1.921731,-0.821521 -4.740339,-0.641669 -6.213219,0.841089 -0.899657,0.90569 -1.032872,2.643841 -0.488373,3.798475 0.405627,0.86015 1.482912,1.70934 2.414744,1.51939 1.165209,-0.23753 2.295681,-1.05593 2.034897,-2.930251 -0.175843,-1.263829 2.251951,-3.228703 3.825605,-0.13566 0.319988,0.628941 0.153256,1.441831 -0.05426,2.116291 -0.442645,1.43866 -1.158485,3.01197 -2.441877,3.79847 -1.619748,0.99263 -3.846292,1.09976 -5.670579,0.56978 -1.336067,-0.38814 -2.559005,-1.38943 -3.282966,-2.57754 -0.800201,-1.31323 -1.025226,-3.001249 -0.868222,-4.531037 0.153986,-1.500378 0.773767,-3.017245 1.736444,-4.178321 1.021473,-1.231989 2.464074,-2.239126 4.015529,-2.6318 1.768563,-0.447624 3.748681,-0.188139 5.453522,0.461246 1.605808,0.611663 3.156512,1.672969 4.124058,3.093042 1.188482,1.744342 1.640923,3.994354 1.682181,6.10469 0.03105,1.58796 -0.342611,3.23562 -1.085278,4.63956 -0.924822,1.74828 -2.338513,3.31973 -4.015529,4.36825 -1.608573,1.00573 -5.453522,1.62792 -5.453522,1.62792 0,0 -4.101871,-0.31403 -5.941899,-1.13955 -2.048153,-0.9189 -3.945936,-2.34138 -5.344996,-4.09692 -1.016466,-1.27546 -2.418599,-3.9892 -2.418599,-3.9892 0,0 -1.878817,1.78866 -3.27911,2.49694 -2.536916,1.28319 -5.412793,2.37908 -8.248113,2.17056 -3.18823,-0.23448 -6.539381,-1.52897 -8.817885,-3.77134 -2.054448,-2.02186 -3.298197,-5.022031 -3.527155,-7.895403 -0.183663,-2.304931 0.367056,-4.8796 1.790708,-6.701592 1.85188,-2.370039 4.888184,-4.311646 7.895399,-4.368247 2.988449,-0.05625 6.333616,1.56394 8.003926,4.042661 1.404772,2.084666 1.703187,5.245168 0.624036,7.515553 -1.030588,2.168214 -3.554178,3.820686 -5.941899,4.069792 -1.927737,0.201116 -4.104542,-0.758583 -5.372126,-2.22482 -1.110339,-1.284349 -1.728962,-3.309779 -1.248069,-4.938014 0.545597,-1.847314 2.355509,-3.501897 4.232585,-3.934135 1.419057,-0.326769 3.075456,0.324313 4.178321,1.275202 0.621954,0.536248 0.883077,1.422486 1.058145,2.22482 0.134975,0.61859 0.385575,1.419086 -0.02713,1.899238 -0.620995,0.722481 -1.305471,1.605594 -2.848853,0.0814 -0.341052,-0.336812 0.219333,-1.011788 0,-1.437994 -0.320396,-0.62259 -1.009135,-1.225552 -1.709314,-1.220939 -0.718113,0.0047 -1.424928,0.628158 -1.736445,1.275202 -0.294475,0.611646 -0.216829,1.425073 0.0814,2.034897 0.400369,0.81868 1.215939,1.502775 2.08916,1.763578 0.864187,0.258105 1.879036,0.07709 2.686063,-0.325583 0.87568,-0.436928 1.647979,-1.217396 2.034895,-2.116294 0.379441,-0.881534 0.409838,-1.956256 0.13566,-2.875986 -0.427408,-1.433738 -1.282076,-2.990287 -2.631798,-3.635682 -2.034403,-0.972788 -4.77965,-0.733433 -6.755857,0.352716 -1.546035,0.849721 -2.538434,2.630527 -3.065912,4.313981 -0.511108,1.631209 -0.48382,3.505428 0.05427,5.127937 0.584803,1.763363 1.760399,3.439362 3.282966,4.503902 1.82752,1.27775 4.203467,1.96253 6.430271,1.84497 2.669953,-0.14096 5.286109,-1.41966 7.434157,-3.01164 1.270949,-0.941939 2.307758,-2.260065 2.984516,-3.689945 0.802046,-1.694593 0.418456,-3.777195 1.139542,-5.507789 0.793032,-1.903262 3.418625,-5.15507 3.418625,-5.15507 0,0 -4.610201,-0.993864 -6.565934,-2.224821 -1.894411,-1.19236 -3.420841,-2.961156 -4.693827,-4.802357 -0.828375,-1.198132 -1.545301,-2.535809 -1.844972,-3.961265 -0.433626,-2.062646 -0.330598,-4.26623 0.13566,-6.321745 0.252502,-1.113163 0.720618,-2.211078 1.410862,-3.120173 1.832516,-2.413542 4.102473,-4.861832 6.972911,-5.833371 2.34094,-0.792323 5.100441,-0.561804 7.407023,0.325583 1.828633,0.70351 3.372371,2.164238 4.531038,3.744211 0.825327,1.125427 1.349575,2.502356 1.573651,3.879868 0.231336,1.422142 0.284927,2.984848 -0.271319,4.313981 -0.890163,2.127016 -2.476443,4.286657 -4.612431,5.15507 -2.20022,0.894528 -5.003062,0.610702 -7.108574,-0.488373 -1.522569,-0.794779 -3.174439,-3.717078 -3.228702,-4.015531 -0.05426,-0.29845 0.07074,-4.33278 1.410861,-5.806236 1.358642,-1.493823 3.745518,-2.380242 5.724843,-1.980634 1.512925,0.305446 3.349556,1.552593 3.445758,3.093043 0.06194,0.991796 -0.423331,2.673957 -1.9535,2.251953 -0.943252,-0.260139 -1.138634,-1.829881 -2.089161,-2.06203 -1.011544,-0.247052 -2.298743,0.138922 -2.984513,0.922488 -0.573812,0.655642 -0.67003,1.738803 -0.434113,2.577534 0.321135,1.141699 1.221125,2.27428 2.333348,2.686063 1.337395,0.49515 2.985717,0.06815 4.232584,-0.624033 1.026635,-0.569927 1.866117,-1.586857 2.279086,-2.686063 0.419904,-1.117667 0.519781,-2.481968 0.05426,-3.581418 -0.890585,-2.103347 -2.784067,-4.109871 -4.99228,-4.69383 -2.563867,-0.678011 -5.676706,0.196881 -7.732607,1.872107 -1.79082,1.459228 -2.842924,3.960257 -2.957383,6.267481 -0.141733,2.857017 0.92242,5.995773 2.875987,8.08532 2.376288,2.541691 6.111621,3.844491 9.57758,4.151191 2.619961,0.231838 5.058295,-1.586995 7.678344,-1.817841 2.066401,-0.182066 4.187134,-0.09243 6.213215,0.352714 1.756783,0.385981 5.019413,1.980633 5.019413,1.980633 0,0 -1.916904,-2.131845 -2.767459,-3.282965 -1.994712,-2.699591 -5.043521,-5.133719 -5.453523,-8.46517 -0.371005,-3.014581 0.833656,-6.430318 2.93025,-8.627961 1.723864,-1.806948 4.479817,-2.886069 6.972913,-2.740327 2.48817,0.145454 5.229075,1.441084 6.593065,3.527152 1.449693,2.217141 1.614961,5.465827 0.624036,7.92253 -0.678217,1.681437 -2.299788,3.215763 -4.069795,3.608552 -2.109144,0.468047 -5.487406,0.18991 -6.213218,-1.844974 -0.378382,-1.060832 0.824148,-2.458851 1.899237,-2.79459 0.93466,-0.291884 1.768365,1.176782 2.740327,1.058145 1.063467,-0.129807 2.141728,-0.892272 2.6318,-1.844974 0.45095,-0.87665 0.454067,-2.096963 -0.02713,-2.957382 -0.922297,-1.64914 -2.921994,-3.197471 -4.802356,-3.011647 -2.47661,0.244747 -4.538927,2.80288 -5.42639,5.12794 -0.420761,1.102348 -0.120972,2.424297 0.29845,3.527155 0.590244,1.552029 1.900409,2.730662 2.984516,3.988395 0.830889,0.963961 1.90412,1.709124 2.686063,2.713197 1.129306,1.450113 2.848856,4.72096 2.848856,4.72096 0,0 1.839677,-4.856903 3.527152,-6.755858 1.672955,-1.882615 3.992681,-3.123496 6.240352,-4.259717 0.829619,-0.419381 2.52327,-0.922486 2.631797,-0.922486 0.108529,0 1.884783,-2.719228 1.166675,-3.852738 -1.287341,-2.032028 -1.447184,-3.694125 -1.600785,-5.643446 -0.185317,-2.35182 0.171187,-4.765177 0.841089,-7.027174 0.33193,-1.120798 1.297201,-2.005292 1.546522,-3.147309 0.287527,-1.317019 -0.04859,-2.695955 -0.108527,-4.042661 -0.202113,-4.540845 -3.644193,-6.866937 -6.945781,-8.35664 -2.226769,-1.004736 -5.0957,-0.780651 -7.325627,0.217054 -1.991256,0.89092 -3.767466,2.694682 -4.503904,4.748093 -0.651928,1.817771 -0.476615,4.061968 0.406979,5.779106 0.773024,1.502261 2.308092,2.682954 3.907002,3.228702 1.044776,0.356608 2.337499,0.413753 3.310099,-0.108526 1.622782,-0.871423 3.248392,-2.662545 3.201569,-4.503905 -0.03634,-1.428945 -1.254122,-3.10032 -2.65893,-3.364362 -1.37045,-0.257584 -3.384759,0.73992 -3.608552,2.116291 -0.167674,1.031224 2.084643,1.315958 2.06203,2.36048 -0.02298,1.06164 -1.135808,2.302324 -2.19769,2.306217 -1.144869,0.0042 -1.857536,-1.454237 -2.38761,-2.46901 -0.499294,-0.955848 -0.870353,-2.124546 -0.624036,-3.174436 0.359462,-1.532155 1.49339,-2.992454 2.875987,-3.744211 1.586243,-0.862486 3.766294,-1.204484 5.399259,-0.43411 2.27361,1.072607 4.215031,3.674115 4.313981,6.186085 0.107698,2.73404 -1.835217,5.624439 -4.151188,7.081441 -2.043211,1.285406 -4.947606,1.419323 -7.2171,0.596902 -2.387014,-0.865008 -4.4706,-2.99286 -5.42639,-5.344996 -1.134004,-2.79071 -1.154348,-6.339211 0.189923,-9.034941 1.324956,-2.656998 4.231871,-4.434303 7.000044,-5.507786 2.189795,-0.849191 4.752835,-1.10177 7.027175,-0.515506 2.854164,0.735727 5.529346,2.55751 7.407023,4.829487 1.643378,1.988477 2.930253,7.162837 2.930253,7.162837 0,0 2.834219,-2.249818 4.47677,-2.957383 1.71456,-0.738586 3.58734,-1.224469 5.45353,-1.275202 2.33208,-0.0634 4.75394,0.286362 6.89151,1.220936 2.41309,1.055037 4.80795,2.601308 6.29462,4.775224 1.50771,2.204678 2.18275,5.0346 2.19769,7.705476 0.0113,2.025034 -0.48586,4.169994 -1.60079,5.860502 -1.60894,2.439548 -4.08724,4.54383 -6.86439,5.453523 -1.79759,0.588826 -3.88151,0.3972 -5.67057,-0.217056 -2.02255,-0.694421 -3.98346,-1.992025 -5.20934,-3.744209 -1.15227,-1.646981 -1.73556,-3.799078 -1.62792,-5.806239 0.0991,-1.848072 0.84099,-3.764297 2.06203,-5.15507 1.08725,-1.238387 2.70575,-2.055196 4.31399,-2.414746 1.38029,-0.308587 2.95032,-0.298407 4.23258,0.298452 1.496,0.69635 2.743,2.06129 3.44576,3.554286 0.63164,1.341904 0.90945,3.00041 0.48837,4.42251 -0.47442,1.602247 -1.68185,3.128572 -3.17444,3.879869 -1.18886,0.598413 -2.7246,0.60743 -3.98839,0.189923 -0.61026,-0.201605 -1.35385,-0.593323 -1.49226,-1.220938 -0.20559,-0.9322 -0.43143,-2.959671 1.24807,-2.577537 0.80732,0.18369 1.68398,0.53445 2.46901,0.27132 0.62481,-0.209425 1.1813,-0.749677 1.43799,-1.356596 0.24663,-0.583133 0.21936,-1.316032 -0.0271,-1.899237 -0.35349,-0.836474 -1.07773,-1.603171 -1.92637,-1.92637 -0.88045,-0.335314 -2.02467,-0.339537 -2.82172,0.162792 -1.53759,0.969044 -2.63236,2.957743 -2.6318,4.775224 4.9e-4,1.590841 0.99642,3.275423 2.30621,4.178321 1.64698,1.135334 4.04946,1.489307 5.9419,0.841092 2.38397,-0.81658 4.40507,-3.057203 5.2636,-5.426392 0.74157,-2.046432 0.54946,-4.59837 -0.48838,-6.511668 -1.48604,-2.739573 -4.38907,-5.006471 -7.43415,-5.67058 -3.28839,-0.717173 -7.1315,0.238969 -9.8489,2.224821 -2.726328,1.99238 -4.421494,5.434462 -5.127942,8.736488 -0.590064,2.758033 -0.05214,5.764205 0.922486,8.410906 0.823469,2.236219 2.325643,4.234576 4.015536,5.914766 1.33586,1.328192 3.43425,1.746569 4.69383,3.147308 1.6744,1.862039 2.94423,4.205632 3.50002,6.647329 0.48811,2.144343 0.32398,4.42201 -0.24419,6.593064 -0.83221,3.179994 -3.85633,5.87744 -6.94578,7.000044 -2.953627,1.07325 -6.809682,1.222959 -9.387661,-0.868222 -1.780014,-1.443895 -3.286312,-3.39844 -4.042661,-5.562052 -0.406282,-1.162211 -0.617511,-2.545816 -0.162793,-3.689945 0.807359,-2.03142 3.443242,-2.752938 4.55817,-0.108527 0.334252,0.792785 -0.207524,1.788576 0.13566,2.577536 0.586788,1.34899 1.681782,2.676156 3.06591,3.174437 1.832426,0.659667 4.170399,0.405694 5.806245,-0.651166 1.51907,-0.981417 2.46663,-2.883367 2.76746,-4.666697 0.32395,-1.920372 -0.0562,-4.125 -1.16668,-5.72484 -1.58696,-2.286179 -4.323764,-4.047996 -7.081442,-4.422511 -2.710768,-0.368144 -5.822553,0.517077 -7.868266,2.33335 -2.562872,2.275429 -4.623902,5.612267 -4.069792,9.441918 0.427536,2.954856 1.234264,5.160614 1.573652,7.786873 0.241495,1.868737 0.325583,5.643445 0.325583,5.643445 0,0 3.402478,-1.91695 5.290732,-2.08916 2.193805,-0.20008 4.577877,0.17181 6.484535,1.2752 1.670097,0.96649 3.003808,2.60988 3.798478,4.36824 0.78539,1.73785 1.15484,3.80488 0.7597,5.67058 -0.34742,1.64037 -1.41681,3.13131 -2.631807,4.28685 -0.95608,0.90929 -2.169553,1.6938 -3.472892,1.89924 -1.818701,0.28667 -3.843831,-0.0901 -5.42639,-1.03102 -1.325824,-0.78829 -2.550498,-2.08643 -2.930249,-3.58142 -0.475992,-1.87387 -0.138905,-4.20126 1.085275,-5.69771 1.181445,-1.44421 3.372277,-2.56985 5.182204,-2.11629 2.062262,0.51679 4.677353,2.87351 4.069794,4.91088 -0.289397,0.97045 -1.884747,2.34237 -2.90312,0.89536 -0.557167,-0.79168 -0.482434,-2.36804 -1.437994,-2.52327 -1.270673,-0.20642 -2.789114,1.29313 -2.875986,2.57753 -0.09135,1.35064 1.312657,2.78899 2.631799,3.09304 1.625904,0.37476 3.564765,-0.68772 4.585301,-2.00776 0.913054,-1.18102 1.235715,-3.02706 0.705432,-4.42251 -0.780748,-2.05455 -2.925705,-3.86263 -5.100809,-4.17832 -2.747729,-0.3988 -5.851631,1.13773 -7.678344,3.2287 -1.257178,1.43905 -0.864124,2.66833 -1.492255,5.53492 -0.497753,2.27159 -0.997842,4.56768 -1.085278,6.89152 -0.117701,3.12822 0.06603,6.30791 0.759692,9.36052 0.789758,3.47552 2.191874,7.27824 3.825608,9.98456 0.912589,1.51173 4.314861,0.46011 4.744233,-1.25272 1.209384,-4.82441 1.500963,-7.89457 2.364338,-11.74348 1.154221,-5.1455 5.851458,-7.66636 9.170608,-11.15124 3.48483,-3.65883 8.36036,-1.24097 11.50394,-3.77134 1.88854,-1.52015 3.71707,-6.15895 3.68995,-6.26748 -0.0271,-0.10853 -0.46709,-4.895102 -5.42639,-6.15895 -2.24993,-0.57338 -5.37178,2.53455 -5.01941,4.82949 0.27438,1.78699 1.64558,3.32239 4.85662,2.41474 0,0 0.0731,-1.27756 0.43411,-1.76358 2.26179,-3.04532 3.52715,0.94962 3.41863,1.03102 -0.10853,0.0814 -1.9675,3.87243 -3.82561,4.12405 -3.11885,0.42235 -7.05361,-1.97345 -8.03106,-4.96514 -0.83661,-2.56063 0.73765,-6.087872 3.03878,-7.488421 3.03347,-1.846278 7.67847,-1.029512 10.60859,0.976752 1.84217,1.261343 2.62691,3.792369 2.98452,5.996159 0.22822,1.40642 -0.5969,4.23258 -0.5969,4.23258 0,0 10.35482,-3.71008 14.2323,-7.38963 3.13143,-2.971584 6.17337,-6.866283 6.56133,-11.165779 0.46765,-5.182561 -1.3381,-11.370167 -5.37185,-14.657486 -3.62883,-2.957325 -9.59054,-3.92351 -13.89008,-2.071999 -3.79655,1.634906 -7.17608,6.035271 -7.09852,10.168149 0.0689,3.670143 3.17281,7.575792 6.63808,8.786817 2.28126,0.797243 5.08119,-0.363324 7.02178,-1.803408 1.06922,-0.793451 1.83362,-2.105013 2.072,-3.414963 0.22366,-1.229064 -0.1419,-2.561294 -0.69067,-3.683556 -0.39007,-0.797708 -0.97684,-1.586316 -1.76504,-1.99526 -1.13087,-0.586733 -2.63692,-0.944991 -3.79867,-0.422074 -1.35583,0.610274 -2.6589,2.16095 -2.57081,3.645186 0.0612,1.030627 1.06158,2.090137 2.072,2.302221 0.85155,0.178737 2.07544,-0.258921 2.37896,-1.074369 0.20161,-0.541661 -0.53866,-1.027471 -0.72903,-1.573186 -1.15112,-3.299852 2.64755,-2.877778 3.18474,-1.688296 0.45633,1.010426 0.9997,2.076787 0.95926,3.184739 -0.0405,1.108545 -0.4814,2.254121 -1.18949,3.108003 -0.74774,0.901693 -1.84151,1.626109 -2.99288,1.841777 -1.53372,0.287288 -3.35545,0.09119 -4.60445,-0.844147 -1.5704,-1.176026 -2.74365,-3.297158 -2.64755,-5.256742 0.13349,-2.721836 1.88337,-5.801275 4.37422,-6.90667 2.68113,-1.189841 6.5034,-0.479071 8.6717,1.496446 2.42878,2.212837 3.47476,6.356973 2.57082,9.515853 -0.971,3.393232 -4.36715,6.20982 -7.75082,7.213632 -2.92508,0.867765 -6.46564,0.09998 -9.01704,-1.573186 -2.77954,-1.822775 -4.72672,-5.090573 -5.48696,-8.326371 -0.6778,-2.884894 -0.41379,-6.262496 1.07437,-8.825188 2.37776,-4.094618 6.73112,-7.668356 11.396,-8.479853 5.52923,-0.961859 11.08904,1.841779 11.08904,1.841779 0,0 -0.59578,-2.704474 -0.34533,-4.02889 0.48783,-2.579748 1.4585,-5.399074 3.4917,-7.060149 2.13102,-1.740992 5.30771,-2.762738 7.98104,-2.110373 2.73567,0.667576 5.12478,3.099359 6.25437,5.678816 0.63622,1.452828 0.5646,3.291001 -0.0384,4.757928 -0.76685,1.865526 -2.28785,3.759497 -4.22074,4.335851 -2.19757,0.655275 -5.49385,0.444669 -6.71482,-1.496443 0,0 -0.99215,-4.653305 2.072,-3.06963 0,0 2.01012,1.543477 3.108,1.304592 1.30898,-0.284819 2.40911,-1.652517 2.7243,-2.954518 0.2935,-1.212394 -0.0591,-2.785134 -0.99763,-3.606816 -1.75835,-1.539395 -4.85982,-2.014434 -6.94504,-0.95926 -2.01195,1.018097 -3.16195,3.693365 -3.22311,5.94741 -0.0656,2.419182 1.42425,4.720878 3.03126,6.484592 2.88466,3.165956 3.72193,9.630966 3.72193,9.630966 0,0 3.05107,-3.187193 5.02652,-4.02889 2.63437,-1.122448 5.69904,-1.61477 8.51822,-1.112742 3.3118,0.589752 6.60156,2.263313 8.9403,4.681185 1.6386,1.694038 2.6484,4.050575 3.06963,6.369484 0.43378,2.388015 0.35766,5.045021 -0.6523,7.252002 -1.34748,2.944528 -3.58367,6.319976 -6.75318,6.983406 -3.62666,0.75912 -8.33191,-1.07096 -10.28327,-4.220738 -1.74321,-2.813794 -0.57555,-7.06015 -0.57555,-7.290374 0,-0.230222 3.15976,-4.653927 6.90667,-4.566073 2.76764,0.06489 5.43412,3.012388 6.02415,5.717185 0.34371,1.575619 -0.56712,3.453817 -1.80341,4.489333 -1.39225,1.166144 -3.62687,1.73381 -5.33348,1.112743 -1.22387,-0.44539 -2.65692,-1.789458 -2.41734,-3.06963 0.18037,-0.963781 1.03137,-2.366897 2.53245,-1.496446 0.53568,0.310634 0.57522,1.230492 1.15111,1.458076 0.63758,0.25196 1.48543,0.104698 2.03363,-0.306964 0.58574,-0.439856 1.05937,-1.275961 0.92089,-1.99526 -0.24971,-1.297099 -1.58173,-2.469205 -2.87778,-2.724296 -1.25148,-0.246318 -2.68139,0.464817 -3.56845,1.381332 -0.75394,0.778969 -1.13507,1.987261 -1.07437,3.069632 0.0858,1.530703 0.80417,3.178735 1.99526,4.143999 1.4629,1.185546 3.65,1.756661 5.48697,1.342965 1.64084,-0.369525 3.04898,-1.74216 3.91378,-3.184742 1.27296,-2.123447 1.84024,-4.850577 1.4197,-7.290372 -0.44414,-2.5767 -1.82125,-5.293415 -3.99052,-6.753185 -3.17544,-2.136857 -7.76198,-3.000113 -11.35763,-1.688298 -3.57524,1.304367 -6.112,5.036652 -7.55896,8.556596 -1.40252,3.411833 -0.4943,6.61536 -2.91615,8.940297 -1.42378,1.366812 -2.45612,3.13286 -3.99052,4.37422 -3.19082,2.58143 -7.00208,4.29417 -10.6286,6.216 -1.94109,1.02866 -5.9474,2.83941 -5.9474,2.83941 0,0 4.16661,1.31937 5.9474,2.53244 2.78809,1.89925 5.26422,4.38238 7.09852,7.21363 2.28114,3.52095 3.42338,7.56646 6.67645,9.82282 3.41819,2.37088 8.10549,4.02612 12.12504,2.95452 4.1435,-1.10464 8.20757,-4.72322 9.324,-8.86356 0.89148,-3.30609 -0.32652,-7.57732 -2.87778,-9.86119 -2.26389,-2.02662 -6.20884,-2.82234 -8.97867,-1.57318 -2.29759,1.03618 -4.06321,3.92823 -3.95215,6.44622 0.0842,1.90902 1.64098,3.89424 3.41497,4.60445 1.32547,0.53065 3.08742,0.13932 4.22074,-0.72904 0.7722,-0.59167 1.43281,-1.69659 1.22785,-2.64756 -0.25984,-1.20562 -1.56876,-2.46752 -2.80104,-2.41733 -4.16995,0.16984 -2.898,-3.27142 -1.68829,-4.144 1.67244,-1.20636 3.76434,-0.38928 5.33348,0.46044 1.51417,0.81995 2.67433,2.42272 3.18474,4.06726 0.547,1.76244 0.38433,3.83035 -0.34533,5.52534 -0.71921,1.67072 -2.0908,3.18555 -3.72193,3.99052 -1.90134,0.93832 -4.31786,1.27902 -6.33111,0.61392 -2.71713,-0.89763 -5.40147,-3.06269 -6.36948,-5.75555 -1.25069,-3.47924 -0.74072,-8.12153 1.61155,-10.97393 2.63022,-3.18944 7.63576,-4.8462 11.70297,-4.10563 4.46604,0.81319 8.58916,4.60198 10.43674,8.74845 2.51948,5.65439 -0.55951,9.80577 -1.53482,13.468 0,0 4.31784,0.42455 5.98578,1.64992 2.58751,1.90094 4.89959,4.90128 5.21838,8.09615 0.24007,2.40593 -0.99768,4.9857 -2.64756,6.75319 -2.46036,2.63574 -6.38558,3.778 -9.47748,2.072 -2.11285,-1.1658 -3.9149,-3.51077 -4.18238,-5.90904 -0.218,-1.95461 0.7198,-4.23043 2.26386,-5.44859 1.58645,-1.2516 4.07525,-1.61742 5.98578,-0.95926 1.38618,0.47752 2.45699,1.85843 2.99288,3.22311 0.41608,1.05955 0.42548,2.35915 0,3.41496 -0.35163,0.87256 -1.8034,2.03363 -1.95688,2.03363 -0.15349,0 -2.03363,1.11275 -2.072,-2.18711 -0.007,-0.58328 1.0963,-0.79842 1.07437,-1.38133 -0.0415,-1.10392 -1.12364,-2.53509 -2.22549,-2.45571 -1.59927,0.11521 -2.9227,2.40469 -2.68592,3.99052 0.24572,1.64571 2.24009,2.83903 3.87541,3.14638 1.39929,0.26299 3.03371,-0.32535 4.06726,-1.3046 1.17254,-1.11094 1.79497,-2.91389 1.72666,-4.5277 -0.0823,-1.94324 -0.97299,-4.09439 -2.53244,-5.25674 -2.2642,-1.68764 -5.94902,-2.8055 -8.36475,-1.34297 -2.05831,1.24614 -3.86284,3.03602 -6.13926,3.83704 -1.43365,0.50447 -5.87678,-0.1627 -4.5277,0.53719 0,0 3.60125,3.39136 4.10563,6.67644 0.55653,3.62473 0.57226,4.59812 -0.76741,6.71482 -0.85147,1.34534 -1.89987,2.69504 -3.29985,3.45333 -2.08225,1.12783 -4.74236,2.06978 -6.98341,1.3046 -2.83764,-0.96888 -5.50338,-3.75539 -5.98578,-6.71482 -0.3761,-2.30731 0.96193,-4.95544 2.76267,-6.44623 1.37209,-1.13592 3.70798,-2.09538 5.21837,-1.15111 1.34493,0.84083 1.9313,3.61239 0.0384,3.68356 -0.88642,0.0333 -1.95113,-0.28082 -2.64755,0.26859 -1.84247,1.45354 -2.19553,4.41667 0.34533,6.02415 1.16262,0.73554 2.80931,0.88279 4.10563,0.42208 1.49984,-0.53304 2.76746,-1.90602 3.37659,-3.3766 0.54819,-1.32345 0.58386,-2.98937 0,-4.29748 -0.95243,-2.13388 -2.96055,-4.07885 -5.21837,-4.68119 -3.1646,-0.84425 -4.17135,-1.3869 -6.10089,-2.41733 -1.19234,-0.63674 -3.33822,-2.30222 -3.33822,-2.30222 0,0 -1.16015,5.19824 -2.76267,7.21363 -2.2078,2.77661 -5.30904,5.4777 -8.82519,5.94741 -4.9672,0.66355 -10.91054,-1.08518 -14.2354,-4.83467 -2.47148,-2.78713 -3.32131,-7.35258 -2.30223,-10.93556 1.0444,-3.672 4.14982,-7.59649 7.9043,-8.288 4.18034,-0.76995 9.47628,1.75501 11.51111,5.48697 1.39509,2.55865 0.59895,6.31308 -1.11274,8.6717 -2.22058,3.05984 -7.80428,3.52827 -10.62859,1.34296 -2.37639,-1.83874 -3.24264,-6.78304 -1.15111,-8.94029 1.55319,-1.602 4.94978,-2.22549 4.71955,1.38133 -0.0638,0.99895 -1.59526,1.71725 -1.34296,2.68592 0.28076,1.07795 1.66732,2.08271 2.76267,1.88015 1.60837,-0.29742 2.93094,-2.39841 2.80104,-4.02888 -0.1523,-1.91161 -2.12745,-3.68968 -3.99052,-4.14401 -1.90187,-0.46379 -4.31249,0.37461 -5.56371,1.88015 -1.67636,2.01709 -1.94708,5.30268 -1.11274,7.78919 0.72214,2.15213 2.73786,3.92649 4.83467,4.7963 2.35101,0.97526 5.31281,1.07886 7.6357,0.0384 2.80341,-1.25569 5.2713,-3.94903 6.10089,-6.90667 1.14035,-4.06556 -0.0887,-8.8285 -2.22548,-12.47037 -2.03294,-3.46483 -5.44384,-6.5954 -9.324,-7.63571 -5.65826,-1.51704 -12.4099,-0.35806 -16.88297,3.06963 -5.746732,4.4037 -6.487037,18.05578 -6.638075,20.91185 -0.1478,2.79485 -1.356795,6.05664 0.805778,9.13216 2.376907,3.38034 7.772617,2.30417 9.400747,1.8034 4.26614,-1.31214 9.42163,-1.11586 13.35289,0.99763 2.64992,1.42463 4.48829,4.31268 5.52533,7.13689 0.97971,2.6681 1.61454,5.15846 0.38371,8.51823 -1.28356,3.50371 -3.41645,5.33669 -6.216,5.87067 -3.76081,0.71733 -8.62471,-1.02069 -10.66697,-4.25912 -1.45633,-2.30932 -1.12441,-6.00657 0.53719,-8.17289 1.61973,-2.11174 4.98577,-3.25027 7.55896,-2.57081 2.08473,0.55048 3.62928,2.78462 4.29748,4.83466 0.37034,1.13621 0.26321,2.53996 -0.34533,3.56845 -0.84363,1.42582 -2.4529,2.68632 -4.10563,2.80104 -1.60915,0.1117 -3.87856,-0.60189 -4.33585,-2.14874 -0.26989,-0.91293 0.3139,-2.50334 1.22785,-2.45571 0,0 2.67942,1.29875 3.68356,0.69067 0.74089,-0.44866 1.04855,-1.68902 0.72903,-2.49408 -0.50333,-1.26818 -2.17776,-2.25328 -3.53007,-2.07199 -1.50602,0.2019 -2.71172,1.81748 -3.18474,3.26148 -0.36994,1.12933 -0.17745,2.55287 0.49881,3.53007 1.06184,1.53437 3.0604,2.92164 4.91141,2.68593 2.83642,-0.3612 5.47742,-3.11892 6.25437,-5.87067 0.73856,-2.61578 -0.4031,-5.78254 -2.14874,-7.86593 -1.57264,-1.87691 -4.18943,-3.13626 -6.63808,-3.14637 -2.73527,-0.0113 -5.70543,1.34153 -7.44385,3.45334 -2.4861,3.02009 -2.1915,6.83006 -2.80104,11.396 -0.52493,3.93212 -0.69276,7.93988 -0.3837,11.89482 0.34083,4.36145 1.55921,8.61054 2.4557,12.89244 3.46902,16.56903 31.38697,38.86919 31.38697,38.86919"
                        />
                    </g>
                </svg>
            }
        </>
    );
};
