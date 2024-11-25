//current experiment data 
let thermos_h = 400; // w/m2-k
let thermos_k = 20; // w/m-k
let thermos_cp = 400; // J/kg-k
let thermos_rho = parseInt((8000 + Math.random() * 1000).toFixed(0)); // kg/m<sup>3</sup>
let thermos_tao = 1; // seconds
let thermos_junction_temp = parseInt((25 + Math.random() * 5).toFixed(0)); // celcius
let thermos_stream_temp = 200; // celcius
let thermos_temp_achive = thermos_stream_temp - 2; // celcius
let thermos_r = 0; // meters
let thermos_biot_number = 0;
let thermos_t = 0; // seconds
// activity 2 variables
let lc_diamter = 10; // cm
let lc_init_temp = parseInt((25 + Math.random() * 5).toFixed(0)); // celcius
let lc_tgt_temp = parseInt((450 + Math.random() * 50).toFixed(0)); // celcius
let lc_gas_temp = parseInt((700 + Math.random() * 130).toFixed(0)); // celcius
let lc_h = 100; // w/m2-k
let lc_k = 0.2; // w/m-k
let lc_alpha = 0.026e-5; // m2/s
let lc_a = 11.3e-5;
let lc_l = 0;
let lc_bi = 0;
let lc_theta_ratio = 0;
let fourier_number = 0.14;
let lc_t = 0; // seconds
//# sourceMappingURL=data.js.map