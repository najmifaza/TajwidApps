export interface TajwidMaterial {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  category: string;
}

export const tajwidData: TajwidMaterial[] = [
  {
    id: 1,
    slug: "hukum-nun-sukun-dan-tanwin",
    title: "Hukum Nun Sukun Dan Tanwin",
    image: "/assets/img/content-1.jpg",
    content: `
      <div class="tajwid-card">
        <h4>Hukum Nun Sukun Dan Tanwin</h4>
        <p class="mb-5">
          Dalam ilmu tajwid, hukum yang biasa dibahas oleh para ulama tajwid adalah mengenai hukum nun sukun
          <strong><span class="arabic-text">(نْ)</span></strong> dan tanwin
          <strong><span class="arabic-text">( ً ٍ ٌ )</span></strong>. Hukum nun sukun
          <strong><span class="arabic-text">(نْ)</span></strong> dan tanwin
          <strong><span class="arabic-text">( ً ٍ ٌ )</span></strong> itu ada <strong>5</strong> (lima) macam:
        </p>
      </div>

      <div class="tajwid-card">
        <h4>1. Idzhar <span class="arabic-text">(إِظْهَارٌ)</span></h4>
        <p>
          Idzhar artinya: menerangkan atau menjelaskan. Sedangkan Halqi artinya: Kerongkongan. Yaitu Apabila ada nun
          <strong><span class="arabic-text">(نْ)</span></strong> sukun atau tanwin
          <strong><span class="arabic-text">( ً ٍ ٌ )</span></strong>
          bertemu dengan salah satu huruf <em>Halqi</em> (tenggorokan) yang enam Yaitu: Hamzah, Ha', Ha, Kha, 'Ain dan Ghai
          <strong><span class="arabic-text">(ء هـ ح خ ع غ)</span></strong> maka hukum bacaannya adalah Izhar halqi
          <strong><span class="arabic-text">(إِظْهَار حَلْقِى)</span></strong>
          huruf yang enam diatas disebut dengan huruf Halqi karena <em>makhraj</em> atau tempat keluarnya suara dari mulut ada pada kerongkongan atau tenggorokan.
        </p>
        <p>Seperti:</p>
        <ul>
          <li><span class="arabic-text">أ. مَنْ آمَنَ , يَنْأَوْنَ , مَنْ رَسُوْلُ أَمِيْنٌ</span></li>
          <li><span class="arabic-text">ب. وَتَنْحِتُوْنَ , غَفُوْرٌ حَلِيْمٌ , عَلِيْمٌ حَلِيْمٌ</span></li>
          <li><span class="arabic-text">ج. مِنْ خَيْرٍ , وَإِنْ خِفْتُمْ , عَلَى رَفْرَفٍ خُضْرٍ</span></li>
          <li><span class="arabic-text">د. يَنْهَوْنَ , إِنْ هُوَ , أَسِحْرٌ هَذَا</span></li>
          <li><span class="arabic-text">هـ. مَنْ عَمِلَ , أَنْعَمْتَ , شَاكِرًا عَلِيْمًا</span></li>
          <li><span class="arabic-text">و. مِنْ غَيْرِ , مِنْ غِلٍّ , عَفُوًّا غَفُوْرًا</span></li>
        </ul>
        <p class="mt-3 p-3 bg-light rounded fst-italic text-muted small border-0">
          <strong>Keterangan:</strong> Nun sukun dan tanwin di atas harus dibaca dengan terang dan jelas. Sebab bertemu dengan huruf Halqi (tenggorokan).
        </p>
      </div>

      <div class="tajwid-card">
        <h4>2. Idgham Bighunnah <span class="arabic-text">(إِدْغَامٌ بِغُنَّةٍ)</span></h4>
        <p>
          Idgham artinya : Memasukkan atau mentasydidkan, Bighunnah artinya: dengan mendengungkan. Hal tersebut apabila ada Nun sukun atau tanwin bertemu dengan salah satu dari huruf Ya, Waw, Mim dan Nun
          <strong><span class="arabic-text">(ي و م ن)</span></strong> : maka hukum bacaanaya disebut <em>Idgham Bighunnah</em>.
          Prosesnya adalah nun sukun atau tanwin dimasukkan atau ditasydidkan kedalam salah satu huruf yang empat itu dengan suara didengungkan.
        </p>
        <p>Contoh:</p>
        <ul>
          <li><span class="arabic-text">أ : وَمَنْ يَعْمَلْ , أَنْ يَفْقَهُوْهُ ,وُجُوْهٌ يَوْمَئِذٍ</span></li>
          <li><span class="arabic-text">ب : وَمِنْ وَرَائِ , خَيْرٌ وَأَبْقَى , وَوَالِدٍ وَمَا وَلَدَ</span></li>
          <li><span class="arabic-text">ج : عَنْ مَنْ يَشَاءُ , بِسُلْطَانٍ مُبِيْنٍ , وَمَنْ مَعَهُ</span></li>
          <li><span class="arabic-text">د : حِطَّةٌ نَغْفِرْ لَكُمْ , لَنْ نَصْبِرَ , لَنْ نَدْخُلَهَا</span></li>
        </ul>
        <div class="alert alert-warning mt-4">
          <p class="mb-2">
            Akan tetapi, apabila Nun sukun dan tanwin tadi bertemu dengan salah satu huruf yang empat tersebut didalam satu perkataan (kalimat) maka bukanlah bacaan Idgham, tetapi dibaca dengan terang atau di<em>izhar</em>kan, Bacaan izhar ini disebut dengan
            <strong><span class="arabic-text">(إِظْهَارْ وَاجِبْ)</span></strong> atau
            <strong><span class="arabic-text">(إِظْهَارْ مُطْلَقْ)</span></strong> dinamakan izhar mutlaq dikaitkan dengan halqi (halkam) atau syafah (bibir). Contoh:
          </p>
          <p class="text-center py-2 bg-white rounded"><span class="arabic-text">الدُّنْيَا , بُنْيَانٌ , صِنْوَانٌ , قِنْوَانٌ</span></p>
        </div>
      </div>

      <div class="tajwid-card">
        <h4>3. Idgham Bila Ghunnah <span class="arabic-text">(إِدْغَامٌ بِلَا غُنَّةٍ)</span></h4>
        <p>
          Apabila ada Nun sukun dan tanwin bertemu dengan salah satu huruf lam <strong><span class="arabic-text">(ل)</span></strong> atau Ra <strong><span class="arabic-text">(ر)</span></strong> maka hukum bacaannya disebut: Idgham bila Ghunnah. Idgham artinya: memasukkan atau mentasydidkan. Dan Bila Ghunnah artinya dengan tidak mendengungkan. Contoh:
        </p>
        <ul>
          <li><span class="arabic-text">أ . مِنْ لَدُنْكَ , هُدًى لِلْمُتَّقِيْنَ , مَنْ لَمْ</span></li>
          <li><span class="arabic-text">ب . مِنْ رَبِّهِمْ , ثَمَرَةٍ رِزْقًا , غَفُوْرٌ رَحِيْمٌ</span></li>
        </ul>
      </div>

      <div class="tajwid-card">
        <h4>4. Iqlab <span class="arabic-text">(إِقْلَابٌ)</span></h4>
        <p>
          Iqlab artinya: membalik atau menukar. Maknanya huruf Nun atau Tanwin itu membacanya ketika itu dibalik (ditukar) menjadi Mim <strong><span class="arabic-text">(م)</span></strong>. Hal tersebut apabila ada Nun sukun atau tanwin bertemu dengan huruf Ba' <strong><span class="arabic-text">(ب)</span></strong> maka hukum bacaanya disebut Iqlab.
        </p>
        <p class="text-center py-3 bg-light rounded border"><span class="arabic-text">أَنْبِئُوْنِيْ, مِنْ بَعْدِ, خَبِيْرٌ بَصِيْرٌ, سَمِيْعٌ بَصِيْرٌ</span></p>
      </div>

      <div class="tajwid-card">
        <h4>5. Ikhfa Haqiqi <span class="arabic-text">(إِخْفَاءٌ حَقِيْقِيٌّ)</span></h4>
        <p>
          Apabila ada Nun sukun atau Tanwin bertemu dengan salah satu dari huruf yang 15 tersebut dibawah ini maka hukum bacaannya disebut Ikhfa Haqiqi. Ikhfa artinya: menyamarkan atau menyembunyikan, Haqiqi artinya Sungguh-sungguh atau benar. Cara membacanya adalah samar-samar. Maksud samar-samar adalah dibaca antara harus Idgham dan Izhar dengan huruf yang didepannya mukanya dengan mendengung. huruf yang 15 itu ialah:
        </p>
        <p class="text-center py-2 bg-light rounded mb-3"><span class="arabic-text">ت ، ث ، ج، د، ذ، ز، س، ش، ص، ض، ط، ظ، ف، ق ، ك</span></p>
        <p>Contohnya:</p>
        <ul>
          <li><span class="arabic-text">أ . وَمَنْ تَابَ , وَلَنْ تَفْعَلُوْا , جَنّٰتٍ تَجْرِيْ</span></li>
          <li><span class="arabic-text">ب . فَمَنْ ثَقُلَتْ , وَالْأُنْثَى , قَوْلًا ثَقِيْلًا</span></li>
        </ul>
      </div>

      <div class="tajwid-card" style="border-left: 5px solid var(--accent-color)">
        <h4>Latihan:</h4>
        <p>Tunjukkanlah hukum bacaan Izhar, Idgham, Iqlab dan Ikhfa yang terdapat dalam surat di bawah ini:</p>
        <p class="text-center lh-lg mt-3 p-3 bg-light rounded" dir="rtl" lang="ar">
          <span class="arabic-text">ٱلَّذِي جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًا وَٱلسَّمَآءَ بِنَآءً وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءً فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًا لَّكُمْ ۖ فَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًا وَأَنتُمْ تَعْلَمُونَ وَإِن كُنتُمْ فِى رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍ مِّن مِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَٰدِقِينَ</span>
        </p>
      </div>
    `,
    category: "Dasar",
  },
  {
    id: 2,
    slug: "hukum-mim-sukun",
    title: "Hukum Mim Sukun",
    image: "/assets/img/content-2.jpg",
    content: `
      <div class="tajwid-card">
        <h4>Hukum Mim Sukun</h4>
        <p class="mb-5">
          Setelah kita mempelajari hukum nun sukun <strong><span class="arabic-text">(نْ)</span></strong> dan tanwin <strong><span class="arabic-text">( ً ٍ ٌ )</span></strong>maka selanjutnya kita akan membahasa tentang hukum bacaan Mim sukun. hukum bacaan Mim sukun itu ada tiga macam:
        </p>
      </div>

      <div class="tajwid-card">
        <h4>1. Ikhfa Syafawi <span class="arabic-text">(إِخْفَاءْ شَفَوِيْ)</span></h4>
        <p>
          Apabila ada Mim sukun <strong><span class="arabic-text">(مْ)</span></strong> bertemu dengan huruf Ba <strong><span class="arabic-text">(ب)</span></strong>, maka hukum bacaannya adalah Ikhfa Syafawi. Ikhfa membunyikannya antara bunyi Mim <strong><span class="arabic-text">(م)</span></strong> dengan Ba <strong><span class="arabic-text">(ب)</span></strong> serta berdengung. Contoh:
        </p>
        <ul>
          <li><span class="arabic-text">أ. تَرْمِيهِمْ بِحِجَارَةٍنٌ</span></li>
          <li><span class="arabic-text">ب.وَهُمْ بِالْآخِرَةِ</span></li>
          <li><span class="arabic-text">ج. صُمٌّ بُكْمٌ</span></li>
        </ul>
      </div>

      <div class="tajwid-card">
        <h4>2. Idgham Mimi <span class="arabic-text">(إِدْغَامْ مِيْمِيْ)</span></h4>
        <p>Apabila ada mim sukun bertemu dengan mim maka hukum bacaannya disebut idhgham mimi dan boleh juga disebut idgham mutamatsilain.</p>
        <p>Contoh:</p>
        <ul>
          <li><span class="arabic-text">أ. وَمِنْهُمْ مَنْ يَقُولُ</span></li>
          <li><span class="arabic-text">ب. وَلَكُمْ مَا سَأَلْتُمْ</span></li>
          <li><span class="arabic-text">ج. وَمَا لَهُمْ مِنَ اللَّهِمٌ</span></li>
        </ul>
      </div>

      <div class="tajwid-card">
        <h4>3. Izhar Syafawi <span class="arabic-text">(إِظْهَارْ شَفَوِيْ)</span></h4>
        <p>
          Apabila ada Mim sukun bertemu dengan salah satu huruf hijaiyyah yang 26, yakni semua huruf hijaiyyah selain Mim <strong><span class="arabic-text">(م)</span></strong> atau dan ba <strong><span class="arabic-text">(ب)</span></strong> maka hukum bacaannya disebut Izhar Syafawi tidak boleh didengungkan, tetapi harus dengan jelas dan nafas tidak putus.
        </p>
        <p>Contoh:</p>
        <ul>
          <li><span class="arabic-text">أ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</span></li>
          <li><span class="arabic-text">ب.خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ أَبْصَارِهِمْ</span></li>
        </ul>
      </div>

      <div class="tajwid-card" style="border-left: 5px solid var(--accent-color)">
        <h4>Latihan:</h4>
        <p>Terangkanlah hukum bacaan Mim sukun yang terdapat dalam ayat tersebut di bawah ini:</p>
        <p class="text-center lh-lg mt-3 p-3 bg-light rounded" dir="rtl" lang="ar">
          <span class="arabic-text">فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ</span>
        </p>
      </div>
    `,
    category: "Dasar",
  },
];
