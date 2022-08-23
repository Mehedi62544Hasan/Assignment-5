<main>  
<div class="container text-center  my-5">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="images/Rectangle 144 (2).png" class="card-img-top" alt="...">
            <div class="card-body bg-black text-light">
              <h4 class="card-title">Lionel Messi</h4>
              <p class="card-text">55 Goals . 100 Assist</p>
              <button class="select-btn">SELECT</button>
            </div>
          </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="images/Rectangle 144 (1).png" class="card-img-top" alt="...">
            <div class="card-body bg-black text-light">
              <h4 class="card-title">Neymar Jr</h4>
              <p class="card-text">40 Goals . 90 Assist</p>
              <button class="select-btn">SELECT</button>
            </div>
          </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="images/Rectangle 144.png" class="card-img-top" alt="...">
            <div class="card-body bg-black text-light">
              <h4 class="card-title">Kylian Mbappé</h4>
              <p class="card-text">30 Goals . 85 Assist</p>
              <button class="select-btn">SELECT</button>
            </div>
          </div>
      </div>
      <div class="col background text-light">
        <h4 class="text-light sub-title">Selected - 5</h4>
        


        <ol id="ol-container" class="text-start fs-5">


        </ol>
      </div>
    </div>



    <div class="row mt-5">
         <div class="col">
          <div class="card" style="width: 18rem;">
              <img src="images/Rectangle 144 (3).png" class="card-img-top" alt="...">
              <div class="card-body bg-black text-light">
                <h4 class="card-title">Mesut Ozil</h4>
                <p class="card-text">35 Goals . 92 Assist</p>
                <button class="select-btn">SELECT</button>
              </div>
            </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
              <img src="images/Rectangle 144 (4).png" class="card-img-top" alt="...">
              <div class="card-body bg-black text-light">
                <h4 class="card-title">Mohammed Salah</h4>
                <p class="card-text">25 Goals . 75 Assist</p>
                <button class="select-btn">SELECT</button>
              </div>
            </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
              <img src="images/Rectangle 144 (5).png" class="card-img-top" alt="...">
              <div class="card-body bg-black text-light">
                <h4 class="card-title">Karim Benzema</h4>
                <p class="card-text">35 Goals   .   95 Assist</p>
                <button class="select-btn">SELECT</button>
              </div>
            </div>
        </div>


        <div class="col background">
            <h3 class="text-light mb-3 sub-title ">Budget</h3>
            <P class="text">Per Player:  <input id="PerPlayer-field"  type="text" name="" class="field"></P>
            <button id="calculate-btn" class=" cal-btn">Calculate</button>
            <div class="parent mt-3">
                <p id="player-expense" class="text">Player Expenses:-</p>
                <p class="final text last-sum">$<span id="expense-text">0</span></p>
            </div>
            <P class="text">Maneger:  <input id="maneger-field"  type="text" name="" class="field"></P>
            <P class="text">Couch:  <input  id="couch-field"  type="text" name="" class="field"></P>
            <button id="calculateTotal-btn" class=" cal-btn">Calculate Total</button>
            <div class="parent mt-3">
                <p id="player-expense" class="text">Total:</p>
                <p id="final" class="text final">$<span id="total-text">0</span></p>
            </div>
        </div>
    </div>

    
</main>