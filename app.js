let story = {
  step1: {
    img: "https://hd.wallpaperswide.com/thumbs/cute_monster_amused_illustration-t2.jpg",
    text: "should you stick around or run away surrounded by munsters",
    btn1: { text: "stick Around", step: "step2" },
    btn2: { text: "run Away", step: "step3" }
  },

  step2: {
    img: "https://c4.wallpaperflare.com/wallpaper/688/334/516/adorable-baby-monster-feeling-hungry-wallpaper-preview.jpg",
    text: "you get straight diddy",
    btn1: { text: "stay and get more diddy", step: "step3" },
    btn2: { text: "fight", step: "step3" }
  },

  step3: {
    img: "https://hd.wallpaperswide.com/thumbs/cute_baby_monster_first_tooth_illustration-t2.jpg",
    text: "monsters be goring you up real good",
    btn1: { text: " " },
    btn2: { text: ""}
  }
};

const storyImage = document.getElementById('TheImage');
const storyText = document.getElementById('StoryText');
const storybtn1 = document.getElementById('Btn1');
const storybtn2 = document.getElementById('Btn2');

let currentStep = "step1";

LoadScene();

function LoadScene() {
  storyImage.src = story[currentStep].img;
  storyText.innerHTML = story[currentStep].text;

  if (story[currentStep].btn1 == undefined) {
    document.getElementById('ButtonDiv').classList.add('hidden');
  } else {
    document.getElementById('ButtonDiv').classList.remove('hidden');

    storybtn1.innerHTML = story[currentStep].btn1.text;
    storybtn2.innerHTML = story[currentStep].btn2.text;
  }
}

document.getElementById('Btn1').addEventListener('click', function() {
  currentStep = story[currentStep].btn1.step;
  LoadScene();
});

document.getElementById('Btn2').addEventListener('click', function() {
  currentStep = story[currentStep].btn2.step;
  LoadScene();
});