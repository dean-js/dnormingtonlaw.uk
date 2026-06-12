---
layout: main
title: Contact & Connect | Dean Normington
description: "Get in touch with me for collaborations, technical discussions, or opportunities in software development, IT support, and website development across commercial and local business projects."
---

<section class="contact-section page-section">
  <h1>Work With Me</h1>
  <p>I help individuals and small businesses with web development, automation, and practical cybersecurity work. If you'd like a friendly, no-pressure conversation about a paid project, scope, or consultancy, pick one of the options below.</p>

  <div class="learning-path">
    <div class="learning-item">
      <h3>Quick Email</h3>
      <p>Prefer email? Send a short note with your project summary and an estimated budget or timeline.</p>
      {% if site.social-email %}
      <p><a class="button-primary" href="mailto:{{ site.social-email }}">Email me</a></p>
      {% else %}
      <p><a class="button-primary" href="mailto:your.email@example.com">Email me</a></p>
      {% endif %}
    </div>

    <div class="learning-item">
      <h3>Book a Short Call</h3>
      <p>Book a 15-minute discovery call to discuss requirements and next steps. (Replace the link with your Calendly or booking URL.)</p>
      <p><a class="button-primary" href="https://calendly.com/your-username/15min" target="_blank" rel="noopener noreferrer">Book 15‑min</a></p>
    </div>

    <div class="learning-item">
      <h3>Send a Message</h3>
      <p>If you prefer a contact form, you can use the form below. Currently this is a simple form — configure a service (Formspree, Netlify Forms) and replace the `action` attribute with the provided endpoint to start receiving messages.</p>
      <form action="#" method="post" aria-label="Contact form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button class="button-primary" type="submit">Send Message</button>
      </form>
    </div>
  </div>

  <hr />
  <p class="panel-note">If you'd like, include links to a project brief, examples, or a target budget to speed up the initial estimate. I aim to reply within 48 hours.</p>
</section>
