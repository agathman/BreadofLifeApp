<template>
<div class="row">
 <div class="col-md-2">
 </div>
 <div class="col-md-6">
<form>
   <div class="form-group">
     <h1>Distribution Sign Up</h1>
<label>For which distribution are you signing up?</label>
    <select class="form-control">
    <option value="" > </option>

    </select>
    <label class="font-weight-bold">First Name</label>
    <input type="text" class="form-control">
    <label class="font-weight-bold">Last Name</label>
    <input type="text" class="form-control">
    <label class="font-weight-bold">Phone Number</label>
    <input type="tel" class="form-control">

            <label class="font-weight-bold">How did you hear about our distribution?</label>
            <br>
            <span class="font-weight-light">Check all that apply</span>
            <br>
            <br>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Facebook" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
      Facebook
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Instagram" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Instagram
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Twitter" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Twitter  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="WordOfMouth" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Word of Mouth
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    KMAZ 102.5 FM
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Other
  </label>
  <input type="text" class="form-control">
</div>

<label class="font-weight-bold">Zip Code *</label>
<input type="text" class="form-control">
<br>
<!-- Formatting needed -->
<label class="font-weight-bold">Would you like the COVID vaccine on during the distribution? *</label>
<br>
<span>During the distribution we will also provide free COVID vaccines on the campus.</span>
<br>
<br>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Yes <span> Skip to question 7 </span>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    No <span> Skip to question 8 </span>
  </label>
</div>
  <br>
  <!-- Formatting needed -->
  <span> COVID Vaccine Preference </span>
  <br>
  <label class="font-weight-bold">Which COVID vaccine would you prefer to receive? * </label>
  <br>
  <br>
  <span>Mark only one box.</span>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Moderna
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Pfizer
  </label>
  </div>
  <br>
  <!-- Formatting needed -->
  <span class="font-italics">Skip to question 9</span>
  <br>
  <br>

  <label class="font-weight-bold">Have you received the COVID vaccine? *</label>
    <br>
    <br>
    <span class="font-italics">Mark only one box</span>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Yes <span> Skip to question 7 </span>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    No <span> Skip to question 8 </span>
  </label>
</div>

<br>
<h3>Additional Supportive Services</h3>
<br>
<label class="font-weight-bold"> 9. Are you in need of additional supportive services (e.g. utility assistance, rental assistance, housing, nutritional support, etc.)? * </label>
<br>
<br>
<span class="font-italics">Mark only one box.</span>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    No <span class="font-italics"> Skip to question 10 </span>
  </label>
</div>





   </div>
</form>
 </div>
</div>
 


</template>

<script>


export default {
  name: "SignUp"
}

</script>
