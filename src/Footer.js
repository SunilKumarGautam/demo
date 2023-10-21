import React from "react";
function Footer(){

    return(
        <div>
            
            <footer>
            <section id="section-1">
      
      <h6>Thank you TO Open MY WEBSITE</h6>
      <p>Author: Hege Refsnes</p>
  <p><a href="sksingh85273@gmail.com">sksingh85273@gmail.com</a></p>
  <button>click me</button>
  <div class="container">
<div class="main">
<form action="#" method="post" name="form_name" id="form_id" class="form_class" >
<label>Name :</label>
<input type="text" name="name" id="name" placeholder="Name" />
<label>Email :</label>
<input type="text" name="email" id="email" placeholder="Valid Email" />
<input type="button" name="submit_id" id="btn_id" value="Submit by Id" onclick="submit_by_id()"/>
<input type="button" name="submit_name" id="btn_name" value="Submit by Name" onclick="submit_by_name()"/>
<input type="button" name="submit_class" id="btn_class" value="Submit by Class" onclick="submit_by_class()"/>
<input type="button" name="submit_tag" id="btn_tag" value="Submit by Tag" onclick="submit_by_tag()"/>
</form>
</div>
</div>
    <aside/>
    
    </section>
    
    </footer>
    
        </div>
    );
}
export default Footer;