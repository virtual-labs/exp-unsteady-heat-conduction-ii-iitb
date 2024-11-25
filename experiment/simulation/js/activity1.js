let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Unsteady state heat conduction (Spherical Thermocouple)</h5>
        <p>Learning Objective: Find at what time the thermocouple will show the required temperature</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Cylinder", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>
            A thermocouple junction of spherical form is to be used to measured the temperature of a gas stream. Take h = ${thermos_h} w/m<sup>2</sup>-k, K = ${thermos_k} w/m-k, C<sub>p</sub> = ${thermos_cp} J/kg-k, &rho; = ${thermos_rho} kg/m<sup>3</sup>.
        </h5>


        <ol type='1'>
            <li>Find the diameter of thermocouple to have a time constant (&tau;) of 1 second.</li>
            <li>If the junction temperature is ${thermos_junction_temp}&deg; C initially. Then it is placed in gas stream of ${thermos_stream_temp}&deg; C. Find at what time thermocouple will show temperature of ${thermos_temp_achive}&deg; C.</li>
        </ol>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Find Diameter", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Time constant
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\tau = \\frac{\\rho C_p V}{hA} \\ seconds $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\tau = \\frac{\\rho C_p \\left(\\frac{4 \\pi r^3}{3}\\right)}{h (4 \\pi \\ r^3)} \\ seconds $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ r = \\left(\\frac{3 \\tau h}{\\rho C_p}  \\times 1000 \\right) \\ meters  $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp1' /><span id='dsp-inp1'></span></span> m
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    thermos_r = (3 * thermos_tao * thermos_h * 1000) / (thermos_rho * thermos_cp);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(thermos_r);
    let inp1 = document.getElementById('a1-inp1');
    let sp1 = document.getElementById('dsp-inp1');
    if (!verify_values(parseFloat(inp1.value), thermos_r)) {
        alert('r is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(thermos_r).toFixed(3)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Biot Number", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                now, 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ L = \\frac{r}{1000} \\ for \\ sphere $$
                </span>
        </p>

        <p> 
                Biot number 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ B_i = \\frac{h L}{K} $$
                </span>
        </p>


        <p style='text-align: center;'> 
                B<sub>i</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp2' /><span id='dsp-inp2'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    thermos_biot_number = thermos_h * (thermos_r / 1000) / (thermos_k);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(thermos_biot_number);
    let inp1 = document.getElementById('a1-inp2');
    let sp1 = document.getElementById('dsp-inp2');
    if (!verify_values(parseFloat(inp1.value), thermos_biot_number)) {
        alert('Biot number is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(thermos_biot_number).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Calcualate Time", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>


        <p> 
                if Biot number < 0.1 that means internal temperature gradient < 5%s
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block; font-size: 26px;' >
                    $$ \\frac{\\theta}{\\theta_0} = e^{-\\frac{t}{\\tau}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ where, \\theta = 200 - 198, \\theta_0 = 200 - 25 $$
                </span>
        </p>

        <p> 
                taking natural log both sides
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ ln \\left(\\frac{\\theta}{\\theta_0} \\right) = -\\frac{t}{\\tau} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$  t = - \\tau \\times ln \\left(\\frac{\\theta}{\\theta_0} \\right) $$
                </span>
        </p>


        <p style='text-align: center;'> 
                t = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp3' /><span id='dsp-inp3'></span></span> seconds
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>


    </div>

    `;
    thermos_t = -1 * thermos_tao * Math.log((200 - 198) / (200 - 25));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(thermos_t);
    let inp1 = document.getElementById('a1-inp3');
    let sp1 = document.getElementById('dsp-inp3');
    if (!verify_values(parseFloat(inp1.value), thermos_t)) {
        alert('t is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(thermos_t).toFixed(3)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map