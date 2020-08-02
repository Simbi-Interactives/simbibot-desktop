import { Component, ViewChild } from "@angular/core";
import { Slides } from 'ionic-angular'
import { config } from "../../config";

const sweetSixteen = {
    introduction: { key: 'intro', title: 'Introduction', summary: "<p>Aliya - a 16 year old girl and protagonist of the story</p><p> Mr Bello - Aliya’s dad </p><p> Mrs Bello - Aliya’s mother </p><p> Tokunbo Alabi - Aliya’s Classmate </p><p> Sogo - Aliya’s Classmate </p><p> Akin - Aliya’s Classmate </p><p> Grace - Aliya’s Roommate </p><p>Aunt Molara - Aliya’s mother younger sister</p><p> Miss Salako - Aliya’s Mathematics teacher </p><p> Big Mummy - Aliya’s grandmother </p><p> Bunmi - Aliya’s senior and bully </p>" },
    chapters: [
        { key: 'chapter', title: 'Chapter 1', summary: "The novel introduces us to Aliya, a young girl of 16 years old who before reaching this age has always wanted to be an adult and referred to as one. She is an only child who has a father who is a journalist, and a mother who is a nurse . She has a close relationship with her father, compared to her mother and she tells him everything. <p>This helps her father to guide her smoothly in the affairs of her life. One of the things she tells him is her first encounter with a boy who claims he likes her. Being the first time she is at the receiving end of such gestures, she doesn't know what to feel and her dad is quick to put her through. Aliya's father's advice to her is also applicable to young adults. He advises that a recipient of a gift should not feel obliged to do anything because they feel indebted.</p><p> Also, gifts don't mean the giver really loves the other person and relationships shouldn't be based on material benefits. On her sixteenth birthday, she receives a birthday card, a digital camera and a 16-page letter detailing her life journey, each page for each year.</p>" },
        { key: 'chapter', title: 'Chapter 2', summary: "This chapter is a flashback as contained in the 16-page letter. Aliya is 12 years old and has just returned home from the boarding house when she goes on a drive with her father. During the drive, Aliya sees some girls hawking and she envies their freedom. She feels they are free to go around, meet people and have fun but her father cautions her, explaining that things don't always seem like how they look. <p>Though Aliya is born into a comfortable home, she isn't allowed the freedom of going wherever she likes. This situation explains the irony of life as no one has it all. Although Aliya is born with a silver spoon, she is not afforded the luxury of going wherever she wants or meet other people randomly. She lives in a high fenced house and also goes to a boarding school. On the other hand, the girls hawking on the streets may seem free and may be having fun but in Mr. Bello's words, 'they would not mind trading places' with Aliya in the air-conditioned car.</p> <p>Then, another disparity that exists between rich and poor children is the fact that rich children are naturally expected to do better in life because they have all the comfort in the world. However, the zeal, willingness, determination and desire to become great which propels some poor children is usually enough to make them eventually great.</p><p> During this drive, Mr. Bello also seizes the opportunity of the informal atmosphere to give his daughter sex education. A few days earlier, Aliya had seen her menstrual period for the first time and her father deems it fit she needs to learn about this important aspect of a woman's life. He teaches that menstruation is the body's way of telling a girl that she is biologically ready to be a mother, which means if she has unprotected sexual intercourse with a guy she could become pregnant. It is obvious that this is the first time Mr. Bello is having a discussion about sex with his daughter but surprisingly she already knows so much about the subject.</p><p> This is an indication that in the present age and century we live in, sex is no longer a hidden issue that is only discussed in hush tones, but it is everywhere. Aliya already learns about sex from the TV, friends, magazines, books and movies. She already has the basic knowledge of what sex is all about so her father gives her guides concerning sex and other things he refers to as filth, which can corrupt the beautiful room which is her mind. He advises her not to watch movies scenes that depict sex and also be watchful about the friends she keeps.<p>" },
        { key: 'chapter', title: 'Chapter 3', summary: "Aliya attempts severally to make her dad’s tea but she doesn't get it right until her mother puts her through. In this chapter she learns to make his tea perfectly and while he has his tea on a Saturday morning, she has a discussion with him concerning future ambition and other things.<p> Aliya informs her father she doesn't want to be a doctor anymore but a lawyer. In previous years, Aliya had wanted to be a pilot, then a musician, a songwriter and afterwards a fashion designer. Now she wants to be a lawyer. This depicts the indecision that comes with choosing a career at a young age. According to Mr. Bello, it doesn't matter what the choice of career is, what matters is having love and passion for what one does and only then can one be successful.</p><p> This leads to the discussion about parents choosing their children's career. This is not always a good idea as such child is only pursuing his/her parents' dream and not his/her dream. This in the end will only spell doom for both parties and lead to a waste of everyone's time if the child decides to follow his dreams afterwards. Mr. Bello is of the opinion that children are educated in order to be able to think for themselves and parents must learn to listen to them.</p><p> Afterwards Mr. Bello laments about the negative effects of technology on the young generation. Technology in his words, has a lot of effect on reading habits as most young people prefer visiting the social media and surfing the internet than reading books. This has reduced their thinking capability, spelling and language skills.<p>" },
        { key: 'chapter', title: 'Chapter 4', summary: "This chapter is about the Gandhi test gotten from the words of Mahatma Gandhi - an Indian who fought for the independence of his country from Great Britain.The test is that \"you can tell that what you are doing is good or bad if you want other people to know about it or not\". <p>This statement explains how a person can make morally right decisions. If a person is doing something and he wouldn't mind if other people know about it then what the person is doing is right but if such person doesn't want other people to know about what he is doing, then such action is most likely wrong.</p> <p>However, this doesn't apply to some people who Mr. Bello refers to as animals. This kind of people do not have a sense of shame as they do anything, whether right or wrong, without minding what others would think about them. Mr. Bello further explains to his daughter that before she makes decisions she should always be mindful that people are watching.</p>" },
        { key: 'chapter', title: 'Chapter 5', summary: "Aliya, now 16 years old, considers herself old enough to be in a relationship with a guy. She broaches the issue with her dad. Her father gives her a step by step explanation about what having a boyfriend entails. He explains that what most young people have towards the opposite sex is not love but infatuation which is often short-lived.<p> Thus young adults should thread softly when it comes to relationships because it may end up distracting them from their studies and also affect other areas of their lives. Aliya then reflects on the likeness she has for Bobo, how bad she felt when he left for Ireland and how horribly jealous she felt when she saw him with another girl. </p><p>Mr. Bello further counsels his child that it is best to wait for the right time before taking some steps in life. For most of the good things in life and luxuries, the price one is required to pay is the time one has to wait and in the end, it is always worth the wait. Aliya then tells her father about two students caught having sex in school by the school security. They were suspended indefinitely from school and Aliya explains how she feels embarrassed for the girl.<p>" },
        { key: 'chapter', title: 'Chapter 6', summary: "Boko Haram, the terrorist sect has just bombed a local market and the Bello family watches this news on the TV. Everyone expresses displeasure for the evil act of these terrorists and condemns them. During this, Aliya asks her dad if it is true that all Muslims will go to hell, because Muslims do not believe in Jesus and they like to kill people. <p>Mr. Bello calmly answers his daughter by explaining that it is wrong to judge or criticize other people's belief or faith because everyone is entitled to his or her faith. He also explains that the beauty of the world is because of the diversity in religion, people, religion, culture, tribe and colour. However, a set of ideas that people have about what someone or something is, especially an idea that is wrong, is known as stereotype. Stereotype is a constant act in our society, as Aliya, herself, is also stereotypical not long after, in this chapter.</p><p> It is wrong to have misconceptions or discriminating towards people, especially in instances where people are generally condemned for the misdeeds of few people.Also, stereoscopic people are not usually bad persons but are victims of bad thinking and circumstances. Thus, they shouldn't be condemned because of their attitude but, rather corrected</p>" },
        { key: 'chapter', title: 'Chapter 7', summary: "After listening to a story about a man who nursed his torturer back to health instead of leaving him to die, Aliya wonders if she can ever forgive those who have wronged her. She talks to her dad about how she has been feeling ugly and not have enough self-esteem concerning her shape and physique after one of her teachers and another student, Bunmi, who constantly call her FAT and pick on her. <p>This is known as body shaming, as they make negative comments about her weight and shape. Her father condemns this act but explains to her how to develop enough self esteem such that people's words don't hurt her. Mr Bello quoted Gandhi by saying, “nobody can hurt her without permission.” He teaches her that what she feels about herself is more important than how other people make her feel and she should have confidence in how she looks. Moreover, beauty is neither fat nor slim but however one looks is beautiful, the person just has to be confident about his/her physical appearance.</p><p> Beauty is also never enough but having a good character is best. Mr. Bello ends the conversation with a story which teaches that he has bestowed his intelligence and guidance to his daughter, and it is her responsibility to do the same for her children too.</p>" },

    ],
    practice: { key: 'practice', title: 'Possible Questions and Answers' },
    questions: [
        { question: "<p>Mr Bello is a/an ------------- by profession from the novel.<p>", options: "<p>A.Musician		B. Dentist	C. Journalist		D. Nurse</p>", answer: "C" },
        { question: "<p>----------- is the protagonist in the novel, sweet sixteen.<p>", options: "<p>A.Aliya	B. Mr Bello		C. Akin		D. Aunt Molara</p>", answer: "A" },
        { question: "<p>Aliya was referred to as ------- by her father.<p>", options: "<p>A.Omalincha 	B. First lady 		C. Journalist		D. Bookworm</p>", answer: "B" },
        { question: "<p>Who is the author of the book, “Sweet Sixteen?”.<p>", options: "<p>A.Bolade Abdullahi		B. Bolaji Abdullahi	C. Cyprian Ekwensi		D. Chimamanda Adichie</p>", answer: "B" },
        { question: "<p>What health condition is Aliya suffering from?.<p>", options: "<p>A.Asthma	B. Cancer	C. Sickle Cell Anemia 	D. Autism</p>", answer: "A" },
        { question: "<p>According to the sweet sixteen novel, which of these societies has “Fat-farms”, where girls were force-fed to fatten them up in the novel?.<p>", options: "<p>A.Nigeria		B. Mauritius		C. Mauritania		D. Ireland</p>", answer: "C" },
        { question: "<p>Who constantly calls Aliya fat?.<p>", options: "<p>A.Sogo	B. Grace	C. Bunmi	D. Akin</p>", answer: "C" },
        { question: "<p>In the novel, who often jokes that she was surprised Aliya’s father didn’t name her “Chelsea?”.<p>", options: "<p>A.Aliya’s mother	B. Aunt Molara	C.Miss Salako	D. Big mummy</p>", answer: "A" },
        { question: "<p>According to the novel,which of these characters is describe as a gold medalist?.<p>", options: "<p>A.Sogo	B. Aliya		C. Bunmi	D. Akin</p>", answer: "D" },
        { question: "<p>What lesson was Gandhi’s test to teach Aliya?.<p>", options: "<p>A.Beauty is nothing 	B. Contentment is wealth 		C. Beauty in the eyes of the beholder		D. Strategic thinking</p>", answer: "B" },
        { question: "<p>Whenever Aliya’s mom stops being angry, she...?.<p>", options: "<p>A.Shouts and screams	B. Sings around the house		C. Sits in surreality	D. Cooks</p>", answer: "B" },
        { question: "<p>Which of these inscription was on the spiral bond document gift from Aliya’s father on her sixteenth birthday?.<p>", options: "<p>A.Letter to my daughter		B. Happy birthday daughter		C. With love from daddy	D. Happy Sixteenth</p>", answer: "A" },
        { question: "<p>Choose the option opposite in meaning to the word underlined.<p><p><strong>Grace was a snob to people</strong></p>", options: "<p>A.Receptive	B. Considerate		C. Arrogant		D. Huffy</p>", answer: "A" },
        { question: "<p>Choose the option opposite in meaning to the word underlined.<p><p><strong>Contentment is wealth</strong></p>", options: "<p>A.Courteousness	B. Satisfaction	C. Agitation		D. Greed</p>", answer: "B" },
        { question: "<p>Who gave Aliya a valentine gift?</p>", options: "<p>A.Akin		B. Tokunbo		C. Zak		D. Mr Bello</p>", answer: "B" },
        { question: "<p>One of the following people made these statements</p><p><i>“Nobody can hurt me without my permission”</i></p>", options: "<p>A.Chinua Achebe	B. Mr Bello		C. Mahatma Gandhi		D. Muhammad Ali</p>", answer: "C" },
        { question: "<p>One of the following people made these statements</p><p><i>“Hating people because of their colour is wrong”</i></p>", options: "<p>A.Fela Kuti		B. Ali Bongo	C. Mrs Bello		D. Muhammad Ali</p>", answer: "D" },
    ]
}


@Component({
    selector: "page-storybook",
    templateUrl: "storybook.html"
})

export class StoryBookPage {
    config: any;
    currentIndex: number = 0;
    showContent: string = '';
    selectedContent: any = null;
    storybook = sweetSixteen
    pager: boolean = true;

    @ViewChild('myslides') slides: Slides;


    constructor() {
        this.config = config;
    }

    ionViewDidLoad() {
        // console.log(this.slides.getActiveIndex());
        this.currentIndex = this.slides.getActiveIndex();
        this.lockSwipe(true);
    }


    lockSwipe(condition: boolean) {
        this.slides.lockSwipes(condition);
    }

    onSlideChanged() {
        this.currentIndex = this.slides.getActiveIndex();

        if (this.currentIndex == 0) return this.lockSwipe(true);
        this.pager = false;
        // console.log('slide  changed ', this.currentIndex)
    }

    slideChanged() {
        console.log('slide  changed ', this.slides.getActiveIndex())
    }

    openFirst() {
        this.lockSwipe(false);
        this.selectedContent = this.storybook.introduction
        this.slides.slideTo(1);
        this.currentIndex = 1;
    }

    openLast() {
        this.lockSwipe(false);
        this.selectedContent = this.storybook.practice
        this.slides.slideTo(this.storybook.chapters.length + 2)
        // this.currentIndex = thi;
    }

    slideNext() {
        this.currentIndex = this.slides.getActiveIndex();
        // console.log('next ', this.slides.getActiveIndex())
        if (this.slides.isEnd()) {
            // console.log('end ', this.currentIndex)
            return null;
        }

        this.slides.slideNext();
    }

    openChapter(index) {
        const chapter = this.storybook.chapters[index];

        this.showContent = chapter.key;
        this.selectedContent = chapter;

        this.lockSwipe(false)
        this.slides.slideTo(index + 2)
        // this.lockSwipe(true);
    }

    goBack() {
        this.showContent = '';
        this.selectedContent = null;

        // this.lockSwipe(false)
        this.slides.slidePrev();
        // this.lockSwipe(true);
    }

}
