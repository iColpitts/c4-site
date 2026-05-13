<template>
  <div class="page-content">
    <div class="flex flex-col gap-4">
      <C4Logo />
      <h3 class="text-center md:w-3xl mx-auto"><strong>C4 Art Games</strong> a celebration of the weird and wonderful
        possibility at the
        intersection of art and games!</h3>
    </div>
    <div class="flex md:flex-row flex-col p-8 gap-8 pb-8 justify-evenly">
      <Card>
        <slot>
          <h3>Conference</h3>
          <p><strong>Date:</strong> Sept 19</p>
          <p><strong>Location:</strong> Bus Stop Theatre</p>
        </slot>
      </Card>
      <Card>
        <slot>
          <h3>Exhibition</h3>
          <p><strong>Date:</strong> Sept 18 - Oct 9</p>
          <p><strong>Location:</strong> CFAT Gallery</p>
        </slot>
      </Card>
      <Card>
        <slot>
          <h3>Opening Party</h3>
          <p><strong>Date:</strong> Sept 18</p>
          <p><strong>Location:</strong> CFAT Gallery</p>
        </slot>
      </Card>
    </div>

    <PageSection title="About C4 Art Games" subtitle="">
      <p>This event is a space to showcase and support the growing games and interactive art community in Atlantic
        Canada.
        C4 looks at how games can be used as an expressive art medium and critical cultural objects. Hosted by the
        Centre
        for Arts Tapes, an inclusive artist-run centre that supports artists who use video, audio, and electronic media
        to
        express ideas and stories that are under-represented in mainstream culture.</p>
    </PageSection>
    <BorderedSection>
      <div title="Schedule">
        <h3>Schedule</h3>
        <p>To be announced August 2026</p>
      </div>
      <div title="Tickets">
        <h3>Tickets</h3>
        <p>On Sale July 2026</p>
      </div>
    </BorderedSection>

    <!-- <PageSection title="Tickets" subtitle="">
      <p>Regular Ticket: $50</p>
      <p>CFAT Members: Free</p>
      <p>Low income/Underemployed: $25</p>
      <p>Opening Party: Free*</p>
      <p>Exhibition: Free*</p>
      <p>*Donations for CFAT building initiative will be collected at the door</p>
    </PageSection> -->
    <PageSection title="Call for Submissions" subtitle="">
      <p>C4 builds off CFAT’s mission to put marginalized artists into the centre of discourses and practices of media
        art
        and as such, encourages artists and game makers from backgrounds not typically represented in mainstream games
        culture. We hope to support submissions which might not be valued in more traditional game conferences or art
        exhibitions.</p>
      <p>We encourage those interested in submitting to both the conference and exhibition.</p>
    </PageSection>
    <BorderedSection>
      <div title="Schedule">
        <h3>Conference</h3>
        <p>Call Open: May 29 - June 29</p>
      </div>
      <div title="Tickets">
        <h3>Exhibition</h3>
        <p>Call Open: June 12 - July 13</p>
      </div>
    </BorderedSection>
    <!-- <p>C4 welcomes talk submissions from both game makers and interactive artists from Atlantic Canada and beyond.</p>
      <p>We are looking for panel ideas as well as 15-30 minute talk submissions. Topics can be expansive and we hope to
        include as much of them as we can:</p>
      <ul>
        <li>Thoughts on the unique expressive possibility of games</li>
        <li>Critical play</li>
        <li>Game Engine effects on art game development</li>
        <li>Climate aware game development</li>
        <li>Game co-operative and collective action</li>
        <li>Political engagement in games</li>
        <li>Games as exploration of social rules</li>
        <li>A weird and highly specific thought that guide your art game practice</li>
        <li>… And whatever else you think would be cool to see at the conference</li>
      </ul>
      <p>To submit a talk or panel to C4, please fill out the Submission Form below by June 1, 2026</p>
      <h4>Submission Form</h4>
      <p>Name</p>
      <p>Pronouns</p>
      <p>Bio (max 250 words)</p>
      <p>A brief description of your proposed talk and or panel (max 500 words)</p>
      <p>If a panel, names of panelists</p>
      <p>Link so we can see your work</p>
      <h3>Exhibition</h3>
      <p>We hope to showcase a wide range of what a game can be. We are happy to show both digital or analogue games as
        well
        as art that looks at games/gaming and its cultural impact.</p>
      <p>To submit a game (analogue or digital), VR/AR experience, or any other art work to C4, please fill out the
        Submission Form below by June 15, 2026.</p>
      <h4>Submission Form</h4>
      <p>Name</p>
      <p>Pronouns</p>
      <p>Bio (max 250 words)</p>
      <p>A brief description of your game (max 500 words)</p>
      <p>Names of the people involved in the project</p>
      <p>Links to work of the people involved</p>
      <p>Link to a build we can play and/or documentation of the work</p>
      <h3>Zine Library</h3>
      <p>Name</p>
      <p>Pronouns</p>
      <p>Bio (max 250 words)</p>
      <p>Names of the people involved in the project</p>
      <p>Link to zine description/documentation</p> -->
    <PageSection title="Sponsorship & Community Partners" subtitle="">
      <p>We are looking for community partnerships and sponsors to support C4 Art Games as well as CFAT’s ongoing games
        programming including education, production and exhibition of games and other interactive media works.</p>
      <p>If you are interested in supporting our efforts or think that your work would be, please contact us for our
        sponsorship information: </p>
      <p>Cat Bluemke </p>
      <p>[email]</p>
      <p>[phone]</p>
    </PageSection>
    <PageSection title="Media Outreach" subtitle="">
      <p>Notify the media that this incredible event will be happening, and they should be there!</p>
    </PageSection>
  </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue';
import PageSection from './components/PageSection.vue';
import C4Logo from './components/c4-Logo.vue';
</script>

<style scoped>
@import "tailwindcss";

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, midnightblue, #111);
  height: 100vh;
}

h1 {
  position: absolute;
  font-size: 4em;
  padding-top: 50px;
  font-family: "Corben", cursive;
  letter-spacing: 0.6em;
  line-height: 1.4em;
  text-transform: uppercase;
  color: teal;
  font-weight: 400;
  text-align: center;
}

.bg-layer {
  @apply h-screen w-screen;
  position: absolute;
  top: -40vh;
  left: -20vw;
}

.noise {
  @apply w-screen h-screen;
  margin-top: -15%;
  background: radial-gradient(circle at 50% 50%,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  filter: contrast(145%) brightness(650%) invert(100%);
  mix-blend-mode: screen;
}

@media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
  .noise {
    filter: contrast(125%) brightness(650%) invert(100%);
    mix-blend-mode: color-dodge;
  }
}

.center {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 400px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 50%;
}
</style>
