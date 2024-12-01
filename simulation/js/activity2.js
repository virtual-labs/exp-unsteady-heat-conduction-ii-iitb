function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Unsteady state heat conduction (Long Cylinder)</h5>
        <p>Learning Objective: Find the time required to reach the desired temperature.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Long Cylinder", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>
            Long cylinder with diamter ${lc_diamter}cm initially at ${lc_init_temp}&deg; C. Determine the time required for the cylinder to read temperature for the cylinder to read temperature of ${lc_tgt_temp}&deg; C when it is exposed to hot gas at temperature ${lc_gas_temp}&deg;  C. h = ${lc_h} w/m<sup>2</sup>-k, K = ${lc_k} w/m-k, &alpha; = ${lc_alpha} m<sup>2</sup>/s, a = ${lc_a}.
        </h5>

 
        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("Biot Number", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                For Cylinder
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ L = \\frac{${lc_diamter / 2}}{100} $$
                </span>
        </p> 

        <p> 
                Biot number
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ B_i = \\frac{hL}{K} $$
                </span>
        </p> 


        <p style='text-align: center;'> 
                B<sub>i</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp2' /><span id='dsp2-inp2'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    lc_bi = lc_h * (lc_diamter / 200) / lc_k;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(lc_bi);
    let inp1 = document.getElementById('a2-inp2');
    let sp1 = document.getElementById('dsp2-inp2');
    if (!verify_values(parseFloat(inp1.value), lc_bi)) {
        alert('Biot number is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(lc_bi).toFixed(3)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Calculate", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
                if B<sub>i</sub> > 0.1 that means internal temperature gradient > 5% <br>
                &therefore; from Heisler's chart
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{\\theta}{\\theta_0} = \\frac{${lc_tgt_temp} - ${lc_gas_temp}}{${lc_init_temp} - ${lc_gas_temp}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                &theta; / &theta;<sub>0</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp3' /><span id='dsp2-inp3'></span></span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{B_i} = \\frac{1}{${lc_bi}} = ${(1 / lc_bi).toFixed(5)} $$
                </span>
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    lc_theta_ratio = (lc_tgt_temp - lc_gas_temp) / (lc_init_temp - lc_gas_temp);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(lc_theta_ratio);
    let inp1 = document.getElementById('a2-inp3');
    let sp1 = document.getElementById('dsp2-inp3');
    if (!verify_values(parseFloat(inp1.value), lc_theta_ratio)) {
        alert('value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(lc_theta_ratio).toFixed(3)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol4();
}
function a2_sol4() {
    let btn_text = get_collapse_btn_text("Calculate time", "tb2-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st4'>


        <p> 
               from chart fourier number
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ F_0 = 0.14 $$
                </span>
        </p>

        <p> 
               Now
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ F_0 = \\frac{\\alpha t}{r^2} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ t = \\frac{F_0 r^2}{\\alpha} $$
                </span>
        </p>


        <p style='text-align: center;'> 
                t = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp4' /><span id='dsp2-inp4'></span></span> seconds
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol4();'  id='temp-btn-24' >Verify</button></div>


    </div>

    `;
    lc_t = fourier_number * (Math.pow((lc_diamter / 200), 2)) / lc_alpha;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol4() {
    let btn = document.getElementById('temp-btn-24');
    console.log(lc_t);
    let inp1 = document.getElementById('a2-inp4');
    let sp1 = document.getElementById('dsp2-inp4');
    if (!verify_values(parseFloat(inp1.value), lc_t)) {
        alert('R3 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(lc_t).toFixed(4)}`;
    alert('Your entered value is correct. Experiment Completed Successfully.');
    btn.style.display = 'none';
}
//activity2();
//# sourceMappingURL=activity2.js.map