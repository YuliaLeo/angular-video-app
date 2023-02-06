import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoPageComponent} from './video-page.component';
import {AppRoutingModule} from "../../app-routing.module";
import {VideoService} from "../../services/video.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {IVideo} from "../../types/Video";
import {of} from "rxjs";

describe('VideoPageComponent', () => {
  let component: VideoPageComponent;
  let fixture: ComponentFixture<VideoPageComponent>;

  const video: IVideo = {
    kind: 'youtube#video',
    etag: 'kO9EyNuiSEuCw-n77B-5kgJIpNs',
    id: 'G0Cj6tGnaK8',
    snippet: {
      title: "Scream (1996) KILL COUNT: RECOUNT",
      categoryId: "10",
      channelId: "UCz9yS18zJGQObwUL_K-ICnw",
      channelTitle: "KarolGVEVO",
      description: "\"Stream “X SI VOLVEMOS” on your favorite platform: https://karolg.lnk.to/XSV!YTD \n\nSubscribe to my YouTube channel here: https://smarturl.it/SubscribeKarolG \n\nConnect with KAROL G on socials:\nInstagram: https://www.instagram.com/karolg/ \nTwitter: https://twitter.com/karolg \nFacebook: https://www.facebook.com/KarolGOficial \nTikTok: https://www.tiktok.com/@karolg \n\nShop Karol G Merch: https://bit.ly/3REHZp3\nLyrics:\nNo funcionamos,\nLo dimos todo pero no se nos dio,\nPor eso nos vamos,\nPero antes de irnos\n\nVamo ́ a hacerlo por última vez,\nBebé,\nQue en el amor no pero en la cama\nNos entendemos,\nEs una porno, a mí me encanta cómo\nLo hacemos,\nNo borraré tu contacto y estoy al\nTanto por si volvemos,\nPero así no…\n\nPor la orillita se me cuida\nPero llama cuando quieras\nQue te deje la cama destendida,\nLos bellaqueos no se olvidan,\nA nadie de confianza se le niega\nUn polvo de despedida, ¡eh!\nYo estoy puesta pa’l repeat\nTú pon la cama que yo pongo el cripy,\nPara variar en la playa, en RD,\nPunta Cana,\nLa ventana mirando la city,\nYa sé que en el amor somos un desastre,\nYo soy bandida y tú eres gangster,\nNo sé cuánto tiempo malgastaste\nIntentando algo serio,\nYa sé que no soy lo que pensaste\nPero desde que me besaste\nA mi malicia te enviciaste,\nEsto no es saludable, pero…\n\nVamo ́ a hacerlo por última vez, bebé,\nQue en el amor no pero en la cama\nNos entendemos,\nEs una porno, a mí me encanta cómo\nLo hacemos,\nNo borraré tu contacto y estoy al\nTanto por si volvemos,\nPero así no…\n\nNuestro amor ta ́ jodio, pero que sensación\ncuando en la cama se acaban los lío\n¿ será que el sexo contigo es mi adicción?\namores toxicos, solo sirven pa sin, sin\nsomos tan explícitos pero llego a su fin, so nasty\ndespídete desnuda con mi cel te voy grabando\nyo te digo adiós dentro de ti\nguarda este video para cuando te haga falta\ny estés mojadita pensando en mi\nVamo ́ a hacerlo por última vez, bebe\nque en el amor no pero en la cama nos entendemos\nes una porno, a mí me encanta como lo hacemos\nno borrare tu contacto y estoy al tanto por si volvemos\npero así no…\n\nBebé, regálame una noche que no\nTermine nunca,\nHoy es noche de sexo... ¿Sí vienes?\nLo supiste...mi Romeo, the king con La\nBichota.\n\n\n#KarolG #RomeoSantos #XSIVOLVEMOS #Visualizer\n\"\n\nMusic video by KAROL G, Romeo Santos performing X SI VOLVEMOS (Visualizer). Universal Music Latino; © 2023 UMG Recordings, Inc.\n\nhttp://vevo.ly/McYFhg",
      publishedAt: "2023-02-03T00:00:31Z",
      thumbnails: {
        default: {
          url: "",
          width: 100,
          height: 100
        }
      }
    }
  };
  const fakeVideoService = jasmine.createSpyObj(["getVideo"]);
  fakeVideoService.getVideo.and.returnValue(of(video));

  beforeEach(async () => {
    TestBed.overrideComponent(VideoPageComponent, {
        set: {
          providers: [
            {provide: VideoService, useValue: fakeVideoService}
          ]
        }
      }
    );
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [VideoPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get a video when component inits', () => {
    expect(component.video).toEqual(video);
  });

  it('should stop loading when a video has been received', () => {
    expect(component.loading).toEqual(false);
  });
});
