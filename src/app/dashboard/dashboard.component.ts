import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TableModule } from 'primeng/table';
import { Tweet } from '../interfaces/tweet.interface';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, TableModule, CommonModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  tweets: Tweet[] = [
    {
      tweetID: 3364,
      entity: 'Facebook',
      sentiment: 'Irrelevant',
      tweetContent: "I mentioned on Facebook that I was struggling for motivation to go for a run the other day, which has been translated by Tom’s great auntie as ‘Hayley can’t get out of bed’ and told to his grandma, who now thinks I’m a lazy, terrible person 🤣"
    },
    {
      tweetID: 352,
      entity: 'Amazon',
      sentiment: 'Neutral',
      tweetContent: "BBC News - Amazon boss Jeff Bezos rejects claims company acted like a 'drug dealer' bbc.co.uk/news/av/busine…"
    },
    {
      tweetID: 8312,
      entity: 'Microsoft',
      sentiment: 'Negative',
      tweetContent: "@Microsoft Why do I pay for WORD when it functions so poorly on my @SamsungUS Chromebook? 🙄"
    },
    {
      tweetID: 4371,
      entity: 'CS-GO',
      sentiment: 'Negative',
      tweetContent: "CSGO matchmaking is so full of closet hacking, it's a truly awful game."
    },
    {
      tweetID: 4433,
      entity: 'Google',
      sentiment: 'Neutral',
      tweetContent: "Now the President is slapping Americans in the face that he really did commit an unlawful act after his  acquittal! From Discover on Google vanityfair.com/news/2020/02/t…"
    },
    {
      tweetID: 6273,
      entity: 'FIFA',
      sentiment: 'Negative',
      tweetContent: "Hi @EAHelp I’ve had Madeleine McCann in my cellar for the past 13 years and the little sneaky thing just escaped whilst I was loading up some fifa points, she took my card and I’m having to use my paypal account but it isn’t working, can you help me resolve it please?"
    },
    {
      tweetID: 7925,
      entity: 'MaddenNFL',
      sentiment: 'Positive',
      tweetContent: "Thank you @EAMaddenNFL!! New TE Austin Hooper in the ORANGE & BROWN!! #Browns | @AustinHooper18 pic.twitter.com/GRg4xzFKOn"
    },
    {
      tweetID: 11332,
      entity: 'TomClancysRainbowSix',
      sentiment: 'Positive',
      tweetContent: "Rocket League, Sea of Thieves or Rainbow Six: Siege🤔? I love playing all three on stream but which is the best? #stream #twitch #RocketLeague #SeaOfThieves #RainbowSixSiege #follow"
    },
    {
      tweetID: 1107,
      entity: 'AssassinsCreed',
      sentiment: 'Positive',
      tweetContent: "my ass still knee-deep in Assassins Creed Odyssey with no way out anytime soon lmao"
    },
    {
      tweetID: 2069,
      entity: 'CallOfDuty',
      sentiment: 'Negative',
      tweetContent: "FIX IT JESUS ! Please FIX IT ! What In the world is going on here. @PlayStation @AskPlayStation @Playstationsup @Treyarch @CallofDuty negative 345 silver wolf error code pic.twitter.com/ziRyhrf59Q"
    },
    {
      tweetID: 3185,
      entity: 'Dota2',
      sentiment: 'Positive',
      tweetContent: "The professional dota 2 scene is fucking exploding and I completely welcome it. Get the garbage out."
    },
    {
      tweetID: 1172,
      entity: 'AssassinsCreed',
      sentiment: 'Positive',
      tweetContent: "Itching to assassinate #TCCGif #AssassinsCreedBlackFlag #AssassinsCreed #TheCapturedCollective pic.twitter.com/vv8MOGtCjw"
    },
    {
      tweetID: 11783,
      entity: 'Verizon',
      sentiment: 'Negative',
      tweetContent: "@FredTJoseph hey fred, Comcast cut the cable and now Verizon stays calling me to shut that too pic.twitter.com/CPWSrmueDg"
    },
    {
      tweetID: 4286,
      entity: 'CS-GO',
      sentiment: 'Neutral',
      tweetContent: "CSGO WIngman (Im Silver dont bully) twitch.tv/lprezh"
    },
    {
      tweetID: 8431,
      entity: 'NBA2K',
      sentiment: 'Negative',
      tweetContent: "@NBA2K game sucks... down by 2 with 38 seconds left and my team intentionally fouls"
    },
    {
      tweetID: 9135,
      entity: 'Nvidia',
      sentiment: 'Positive',
      tweetContent: "Congrats to the NVIDIA NeMo team for the 1.0.0 release candidate! Really excited to see NeMo embracing Hydra as the way to take control over the configuration madness that is machine learning! :)"
    },
    {
      tweetID: 4822,
      entity: 'GrandTheftAuto(GTA)',
      sentiment: 'Positive',
      tweetContent: "yeah and it’s fun"
    },
    {
      tweetID: 3068,
      entity: 'Dota2',
      sentiment: 'Negative',
      tweetContent: "fuck my life 😆"
    },
    {
      tweetID: 10537,
      entity: 'RedDeadRedemption(RDR)',
      sentiment: 'Positive',
      tweetContent: "happy birthday red dead redemption that shit changed my life what a crazy experience"
    },
    {
      tweetID: 8056,
      entity: 'Microsoft',
      sentiment: 'Negative',
      tweetContent: "What does that say about Microsoft hardware & software security - The Man gets hacked"
    },
    {
      tweetID: 2131,
      entity: 'CallOfDuty',
      sentiment: 'Negative',
      tweetContent: "The new @CallofDuty for ps5 is 🔥🔥🔥🔥 Oh God 😭😍"
    },
    {
      tweetID: 5450,
      entity: 'Hearthstone',
      sentiment: 'Neutral',
      tweetContent: "Anyone that plays a bad luck albatross deck in hearthstone is a literal cop. Fucking fun police. pic.twitter.com/jY6TRq351e"
    },
    {
      tweetID: 2286,
      entity: 'CallOfDuty',
      sentiment: 'Irrelevant',
      tweetContent: "Call of duty warzone (livestream) w/ subs #Warzone youtu.be/7BhH_pjOMU4 via @YouTube Please come watch this AMAZING Call of Duty Warzone stream from this AMAZING streamer! It'd be really, really nice to give him some views and likes as well! 😀 #COD #CallofDuty #Warzone"
    },
    {
      tweetID: 4038,
      entity: 'CS-GO',
      sentiment: 'Negative',
      tweetContent: "Finally played Rainbow Six Siege for the first time... I have to admit, I prefer it over pulling my hair out in CSGO any day."
    },
    {
      tweetID: 526,
      entity: 'ApexLegends',
      sentiment: 'Neutral',
      tweetContent: "Umm @PlayApex when I died it said Bug This pic.twitter.com/bzMHzbadOF"
    },
    {
      tweetID: 8977,
      entity: 'Nvidia',
      sentiment: 'Neutral',
      tweetContent: "#gtc20 - nice, motivational, and very accessible Nvidia/AI product fair + related tech talks nvidia.com/en-us/gtc/keyn… interesting interaction/social activities: braindates, dinner with strangers, ... and free attendance for universities: reg.rainfocus.com/flow/nvidia/gt…"
    },
    {
      tweetID: 11995,
      entity: 'Verizon',
      sentiment: 'Negative',
      tweetContent: "Yo! @Verizon just added a $120 'fee' to my account under #COVID19 protection without my permission and I am forced to pay it! Check your bills carefully!"
    },
    {
      tweetID: 9449,
      entity: 'Overwatch',
      sentiment: 'Irrelevant',
      tweetContent: "They might not be the last team that has to make this difficult decision. #update #overwatchleague #nyxl #overwatch #overwatch2 #blizzard #games #lockdown pic.twitter.com/dI1HTl4mcV"
    },
    {
      tweetID: 10193,
      entity: 'PlayerUnknownsBattlegrounds(PUBG)',
      sentiment: 'Irrelevant',
      tweetContent: "Best squad yet#pubg #pubgmobile #pubgkenya instagram.com/p/B-Obt_eAA4f/…"
    },
    {
      tweetID: 2419,
      entity: 'Borderlands',
      sentiment: 'Negative',
      tweetContent: "@Borderlands how do I submit a complaint? Your CEO isn't paying his staff their bonuses."
    }
  ];

    data: any;
    options: any;

    data2: any;
    options2: any;

    data3: any;
    options3: any;

    ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: ['Positive', 'Negative', 'Neutral', 'Irrelevant'],
          datasets: [
              {
                  data: [540, 325, 702, 204],
                  backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--gray-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--gray-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };

      this.data2 = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  tension: 0.4,
                  borderColor: documentStyle.getPropertyValue('--blue-500')
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderDash: [5, 5],
                  tension: 0.4,
                  borderColor: documentStyle.getPropertyValue('--teal-500')
              },
              {
                  label: 'Third Dataset',
                  data: [12, 51, 62, 33, 21, 62, 45],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--orange-500'),
                  tension: 0.4,
                  backgroundColor: 'rgba(255,167,38,0.2)'
              }
          ]
      };
      
      this.options2 = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };

      this.data3 = {
        labels: ['GrandTheftAuto(GTA)', 'Google', 'Cyberpunk2077', 'johnson&johnson', 'HomeDepot', 'Nvidia', 'LeagueOfLegends'],
        datasets: [
            {
                label: 'Positive',
                borderColor: documentStyle.getPropertyValue('--green-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--green-400'),
                pointBorderColor: documentStyle.getPropertyValue('--green-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--green-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'Negative',
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
      };
    
      this.options3 = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: textColorSecondary
                  },
                  pointLabels: {
                      color: textColorSecondary
                  }
              }
          }
      };
    }
}
