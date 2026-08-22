<template>
    <div>
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

    <PageSection title="About C4 Art Games" subtitle="" id="About">
      <p>This event is a space to showcase and support the growing games and interactive art community in Atlantic
        Canada. C4 looks at how games can be used as an expressive art medium and critical cultural objects. Hosted by the
        <a href="https://cfat.ca/">Centre for Arts Tapes</a> (CFAT), an inclusive artist-run centre that supports
        artists who use video, audio, and electronic media to express ideas and stories that are under-represented in
        mainstream culture.
      </p>
    </PageSection>
    <BorderedSection>
      <div title="Schedule">
        <h3>Schedule</h3>
        <CoolButton class="m-auto"
        url="/program">
        View festival program</CoolButton>
      </div>
      <div title="Tickets">
        <h3>Tickets</h3>
        <CoolButton class="m-auto"
        url="https://www.zeffy.com/en-CA/organizations/centre-for-art-tapes">
        On Sale Now</CoolButton>
      </div>
    </BorderedSection>

    <!-- <PageSection title="Call for Submissions" subtitle="" id="Submissions">
      <p>C4 builds off CFAT’s mission to put marginalized artists into the centre of discourses and practices of media
        art
        and as such, encourages artists and game makers from backgrounds not typically represented in mainstream games
        culture. We hope to support submissions which might not be valued in more traditional game conferences or art
        exhibitions.</p>
      <p>We encourage those interested in submitting to any combination of the conference, exhibition and zine library.
      </p>
      <p>Though our programming will prioritize opportunities for artists and gamemakers with connections to Atlantic Canada we welcome submissions from those based anywhere in the world. Though we can't support travel to the conference all accepted applicants will recieve a ticket to the event.</p>
    </PageSection> -->
    <!-- <BorderedSection class="flex" bottomBorder="false">
      <div class="flex-grow">
        <h3>Submission Templates</h3>
        <p>Copy our sumbission template to get started!</p>
      </div>
      <CoolButton class="m-auto"
        url="https://drive.google.com/drive/folders/159r6lMEBy5z7j54A4b9omzhB9fPm2I7U?usp=drive_link">Get
        Template's here!</CoolButton>
    </BorderedSection> -->
    <!-- <BorderedSection>
      <div title="Conference">
        <h3>Conference</h3>
        <CoolButton url="https://forms.gle/4b3f5Z9LXCui6yss7">Conference Submission</CoolButton>
        <p class="font-bold">Due: <span class="line-through">June 29</span> July 13</p>
      </div>
      <div title="Exhibition">
        <h3>Exhibition</h3>
        <CoolButton url="https://forms.gle/TJ9UjswxftvCMFEh9">Exhibition Submission</CoolButton>
        <p class="font-bold">Due: July 13</p>
      </div>
      <div title="Zine Library">
        <h3>Zine Library</h3>
        <CoolButton url="https://forms.gle/4cp67LcYSvrxGYxG6">Zine Submission</CoolButton>
        <p class="font-bold">Due: August 25</p>
      </div>
    </BorderedSection> -->
    <PageSection title="Sponsorship & Community Partners" subtitle="" id="Sponsorship">
      <p>We are looking for community partnerships and sponsors to support C4 Art Games as well as CFAT’s ongoing games
        programming including education, production and exhibition of games and other interactive media works.</p>
      <p>If you are interested in supporting our efforts or think that your work would be, please contact us for our
        sponsorship information: </p>
    </PageSection>
    <BorderedSection>
      <h3>C4 Team</h3>
      <p>c4@cfat.ca</p>
    </BorderedSection>
    <PageSection title="Media Outreach" subtitle="" id="Media">
      <p>Notify the media that this incredible event will be happening, and they should be there!</p>
    </PageSection>
  </div>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue';
import PageSection from '../components/PageSection.vue';
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
