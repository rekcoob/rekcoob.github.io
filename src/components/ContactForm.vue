<template>
  <!-- Contact -->
  <section id="contact" class="contact">
    <div class="box">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/meqplpjo" method="POST">
        <div class="inputBox">
          <input type="text" name="name" required="" />
          <label>Name</label>
        </div>
        <div class="inputBox">
          <input type="text" name="_replyto" required="" />
          <label>Email</label>
        </div>
        <div class="inputBox">
          <textarea name="message" style="resize: none" rows="8" required=""></textarea>
          <label>Message</label>
        </div>
        <div class="submit">
          <input type="submit" name="" value="Send" />
        </div>
      </form>
    </div>
  </section>
  <!-- Contact -->
</template>
