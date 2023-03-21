<script setup lang="ts">



 var modal = document.getElementById('MealForm');
 /*
 window.onclick = function(event)  {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

</script>

<template>

<div class="button" onclick="document.getElementById('MealForm').style.display='block'" style="width:auto;">Add Meal</div>

<div class="modal" id="MealForm">
    <span onclick="'MealForm'.style.display='none'" class="close" title="Close Modal">&times;</span>
    <form class="modal-content" action="">
        <div class="container">
            <h1>New Meal</h1>
            <p>So what have you eaten today?</p>
            <hr>
            <label for="type"><b>Type of consumption :</b></label><br>
                <input type="radio" id="meal" name="type" value="meal">
                <label for="meal">Meal</label><br>
                <input type="radio" id="snack" name="type" value="snack">
                <label for="snack">Snack</label><br>
                <input type="radio" id="drink" name="type" value="drink">
                <label for="drink">Drink</label><br>

            <label for="desc"><b>Description</b></label>
            <input type="text" placeholder="Enter Description" name="desc"><br>

            <label for="cal"><b>Calories</b></label>
            <input type="number" placeholder="Enter Calories" name="cal"><br>
            

            

            <div class="clearfix">
                <button type="button" onclick="document.getElementById('MealForm').style.display='none'" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Submit</button>
            </div>
        </div>
    </form>
</div>
</template>

<style scoped>

* {
  box-sizing: border-box;
}
.button
{
    background-color: #00d1b2;
    border-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    
    transition: all 0.3s ease-in-out;
    
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color:rgb(0,0,0,0.4);
  padding-top: 50px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.container
{
    padding: 16px;
}

input[type=text]
{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>