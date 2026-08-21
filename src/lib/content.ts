/**
 * The church's own words, carried over verbatim from countrysidebc.com — the
 * salvation tract and the statement of faith. Generated from a scrape of their
 * live pages so nothing was retyped or paraphrased. Wording is theirs; only the
 * emphasis artefacts left behind by their page builder have been tidied.
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "verse"; text: string; ref: string }
  | { kind: "prayer"; text: string }
  | { kind: "refs"; text: string };

export interface TractSection {
  /** Slug used for the in-page contents list. */
  id: string;
  heading: string;
  blocks: Block[];
}

export interface FaithArticle {
  id: string;
  title: string;
  blocks: Block[];
}

export const tractTitle = "How to Have Eternal Life — Guaranteed";
export const tractSubtitle =
  "The most crucial decision you will make in your lifetime.";

export const tractSections: TractSection[] = [
  {
    id: "where-can-i-find-eternal-life",
    heading: "Where Can I Find Eternal Life?",
    blocks: [
      { kind: "p", text: "Before you can have eternal life, you must sincerely desire to have it. You can search the world over; there is only one source of eternal life: The Scriptures, God’s Word. Nothing else in this world offers eternal life!" },
      { kind: "verse", text: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.", ref: "John 5:39" },
      { kind: "verse", text: "…thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.", ref: "II Timothy 3:15" },
      { kind: "verse", text: "In hope of eternal life, which God, that cannot lie, promised before the world began;", ref: "Titus 1:2" },
      { kind: "verse", text: "…Lord, to whom shall we go? thou hast the words of eternal life.", ref: "John 6:68" },
      { kind: "verse", text: "And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life. These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life …", ref: "I John 5:11-13" },
    ],
  },
  {
    id: "why-should-i-trust-the-bible",
    heading: "Why Should I Trust the Bible?",
    blocks: [
      { kind: "p", text: "Scripture is absolute truth!" },
      { kind: "verse", text: "And ye shall know the truth, and the truth shall make you free.", ref: "John 8:32" },
      { kind: "verse", text: "Sanctify them through thy truth: thy word is truth.", ref: "John 17:17" },
      { kind: "p", text: "Scripture is either absolutely true or absolutely false; there is no in-between! Consider the integrity and design of Scripture (the detail, accuracy, and precision of God’s Word authenticated by numerous already fulfilled prophecies) and harmony of Scripture (written over a period of 1500 years, penned by over forty different men without a single contradiction). Thus, the Bible distinguishes itself from all man-made literature. Mankind is incapable of this kind of perfection. It is neither an insult to intelligence nor an embarrassment to intellect to believe the Bible. There is no rational reason for not believing and trusting the Scriptures. It is, in fact, the Word of God and your only hope. “… it was impossible for God to lie…” (Hebrews 6:18)" },
      { kind: "p", text: "Truly ask yourself what would be more prudent: to consider the Bible while there is still time; or to never consider the Bible and realize too late it is true? Intellectual honesty demands serious consideration!" },
      { kind: "p", text: "A fascinating thing about God’s Word is that you do not need someone else to teach you. God will give understanding to the sincere heart of anyone desiring the truth:" },
      { kind: "verse", text: "…ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you…", ref: "I John 2:27" },
    ],
  },
  {
    id: "what-is-the-danger-of-self-reliance",
    heading: "What Is the Danger of Self-Reliance?",
    blocks: [
      { kind: "verse", text: "There is a way which seemeth right unto a man, but the end thereof are the ways of death.", ref: "Proverbs 14:12" },
      { kind: "p", text: "Many people have faith in their religion, but all that religion can tell you is how to live, not how to die! No religion accords any guarantee, only a false hope. Religion is all too often a distraction competing with the truth because all religions are man-made and performance-based, relying on what you do for yourself. Trusting in your own “works” to earn your way to eternal life is futile:" },
      { kind: "verse", text: "For I bear them record that they have a zeal of God (religion), but not according to knowledge. For they being ignorant of God’s righteousness, and going about to establish their own righteousness, have not submitted themselves unto the righteousness of God.", ref: "Romans 10:2-3" },
      { kind: "verse", text: "But we are all as an unclean thing, and all our righteousnesses are as filthy rags…", ref: "Isaiah 64:6" },
      { kind: "verse", text: "As it is written, There is none righteous, no not one…They are all gone out of the way, they are together become unprofitable; there is none that doeth good, no, not one.", ref: "Romans 3:10-12" },
      { kind: "verse", text: "Not by works of righteousness which we have done, but according to his mercy he saved us…", ref: "Titus 3:5" },
      { kind: "verse", text: "But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness.", ref: "Romans 4:5" },
      { kind: "verse", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", ref: "Ephesians 2:8-9" },
      { kind: "p", text: "Eternal life comes only by faith in God. Faith in yourself, your religion, your church, or anything other than Scripture, is “unprofitable.”" },
    ],
  },
  {
    id: "how-guilty-am-i",
    heading: "How Guilty Am I?",
    blocks: [
      { kind: "verse", text: "Wherefore, as by one man (Adam) sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:", ref: "Romans 5:12" },
      { kind: "verse", text: "For all have sinned, and come short of the glory of God;", ref: "Romans 3:23" },
      { kind: "verse", text: "For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.", ref: "James 2:10" },
      { kind: "verse", text: "…that every mouth may be stopped, and all the world may become guilty before God.", ref: "Romans 3:19" },
      { kind: "verse", text: "O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord…", ref: "Romans 7:24-25" },
    ],
  },
  {
    id: "what-is-the-consequence-of-my-decision",
    heading: "What Is the Consequence of My Decision?",
    blocks: [
      { kind: "verse", text: "For what shall it profit a man, if he shall gain the whole world, and lose his own soul? Or what shall a man give in exchange for his soul?", ref: "Mark 8:36-37" },
      { kind: "p", text: "Why would you gamble with your soul and dismiss God’s warning?" },
      { kind: "verse", text: "Moreover, brethren, I declare unto you the gospel … By which also ye are saved …For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:", ref: "I Corinthians 15:1-4" },
      { kind: "p", text: "The “gospel” is the death, burial, and resurrection of Christ. Anything added to it (e.g., works of any kind) or taken from it will pervert the Gospel, making it void. “If any man preach any other gospel unto you than that ye have received, let him be accursed.” (Galatians 1:9) You cannot afford to be wrong!" },
      { kind: "p", text: "“In flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ: Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power;”" },
      { kind: "p", text: "(II Thessalonians 1:8-9)" },
      { kind: "verse", text: "That they all might be damned who believed not the truth, but had pleasure in unrighteousness.", ref: "II Thessalonians 2:12" },
      { kind: "verse", text: "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.", ref: "John 3:36" },
    ],
  },
  {
    id: "who-is-my-only-hope-of-eternal-life",
    heading: "Who Is My Only Hope of Eternal Life?",
    blocks: [
      { kind: "verse", text: "… [The] Lord Jesus Christ, which is our hope;", ref: "I Timothy 1:1" },
      { kind: "verse", text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.", ref: "John 14:6" },
      { kind: "verse", text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", ref: "Acts 4:12" },
      { kind: "verse", text: "For there is one God, and one mediator between God and men, the man Christ Jesus;", ref: "I Timothy 2:5" },
      { kind: "p", text: "Please understand that biblical Christianity is not a religion, it is a person: The Lord Jesus Christ. True Christianity is a relationship, not a religion! The “gift of God” comes from receiving Jesus Christ by faith as your personal savior:" },
      { kind: "verse", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:", ref: "John 1:12" },
      { kind: "verse", text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", ref: "Romans 6:23" },
      { kind: "p", text: "A gift (the gift of eternal life) can either be received or rejected as you will it. You cannot work for a gift or earn it; salvation is strictly a free gift offered by God’s grace obtained through your faith. All that is required of you is a trusting faith because “we have access by faith into this grace” (Romans 5:2). Realize that what you could not do for yourself, God did for you. God, in His mercy, sent His Son ( “God was manifest in the flesh” – I Timothy 3:16) to die “for the sins of the whole world” (I John 2:2). Jesus paid the penalty (“wages”) of your sins fulfilling (satisfying) the law, making your redemption legal." },
      { kind: "verse", text: "For when we were yet without strength, in due time Christ died for the ungodly …But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", ref: "Romans 5:6-8" },
      { kind: "verse", text: "For he (God) hath made him (Jesus) to be sin for us, who knew no sin; that we might be made the righteousness of God in him.", ref: "II Corinthians 5:21" },
    ],
  },
  {
    id: "what-must-i-do-to-have-eternal-life",
    heading: "What Must I Do to Have Eternal Life?",
    blocks: [
      { kind: "verse", text: "…receive with meekness the engrafted word, which is able to save your souls.", ref: "James 1:21" },
      { kind: "verse", text: "God…now commandeth all men every where to repent:", ref: "Acts 17:30" },
      { kind: "verse", text: "… repentance from dead works (e.g., religion, self-righteousness) …", ref: "Hebrews 6:1" },
      { kind: "verse", text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", ref: "Romans 10:9" },
      { kind: "p", text: "The fact that Christ rose from the dead is confirmation that the payment for “the sins of the whole world” has been accepted and that the penalty is paid in full. Since Christ has already paid for your sins vicariously, the only sin you must acknowledge to receive eternal life is the sin of unbelief: “So we see they could not enter in because of unbelief.” (Hebrews 3:19). Eternal life comes when you repent (to turn or a change of heart) of your unbelief and by just a simple act of faith, believe on the resurrected Jesus: “… repent ye [‘from dead works’ ‘to salvation’], and believe the gospel.” (Mark 1:15) Eternal life then is your choice to freely receive or reject. If you see your need for a savior you must plead guilty with all the sincerity of your heart and call on the Lord to save you, trusting alone what Christ has done for you:" },
      { kind: "verse", text: "For godly sorrow (heart conviction) worketh repentance to salvation …", ref: "II Corinthians 7:10" },
      { kind: "verse", text: "The sorrows of death compassed me, and the pains of hell gat hold upon me: I found trouble and sorrow. Then called I upon the name of the LORD; O LORD, I beseech thee, deliver my soul.", ref: "Psalm 116:3-4" },
      { kind: "verse", text: "For whosoever shall call upon the name of the Lord shall be saved.", ref: "Romans 10:13" },
      { kind: "prayer", text: "Lord, I turn to you and call on your mercy with all sincerity of my heart a sinner in need of a savior, believing that Jesus Christ died for me and paid for all my sins. Come into my heart Lord Jesus and be my personal savior. Amen" },
    ],
  },
  {
    id: "how-can-i-be-sure-i-have-eternal-life",
    heading: "How Can I Be Sure I Have Eternal Life?",
    blocks: [
      { kind: "p", text: "Your heart will require reassurance that you are sincere. A good test to prove genuine faith is a new attitude and changed desires. You will love God, His Word, and His people." },
      { kind: "verse", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", ref: "II Corinthians 5:17" },
      { kind: "verse", text: "Examine yourselves, whether ye be in the faith; prove your own selves. Know ye not your own selves, how that Jesus Christ is in you…", ref: "II Corinthians 13:5" },
      { kind: "verse", text: "As newborn babes, desire the sincere milk of the word, that ye may grow thereby: If so be ye have tasted that the Lord is gracious.", ref: "I Peter 2:2-3" },
      { kind: "verse", text: "We know that we have passed from death unto life, because we love the brethren …", ref: "I John 3:14" },
      { kind: "verse", text: "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another…", ref: "Hebrews 10:25" },
      { kind: "p", text: "It is only natural to be grateful with a desire to please God and to grow in the knowledge of God and Jesus Christ. Tell your decision to someone that cares for your soul and find a Bible-believing church with which you can fellowship and learn more." },
    ],
  },
  {
    id: "the-choice-is-yours",
    heading: "The Choice Is Yours",
    blocks: [
      { kind: "p", text: "Do you see how foolish it is to allow pride, religion, anything or anybody, to keep you from the free gift of eternal life?" },
      { kind: "verse", text: "…And whosoever will, let him take the water of life freely.", ref: "Revelation 22:17" },
      { kind: "verse", text: "And whosoever liveth and believeth in me shall never die. Believest thou this?", ref: "John 11:26" },
    ],
  },
];

export const faithArticles: FaithArticle[] = [
  {
    id: "the-bible",
    title: "The Bible",
    blocks: [
      { kind: "p", text: "We believe the Holy Bible is the verbally inspired Word of God, and is the supreme authority, as found in the Authorized Version, the King James Bible. The King James Bible is inerrant, infallible, and inspired, and, therefore, is the sole authority for faith and practice. The sixty-six (66) books of the Old and New Testaments are the complete and divine revelation of God to man. And the Holy Bible (KJB) is the standard and guide of conduct and action for the believer and the church." },
      { kind: "refs", text: "Psalms 12:6-7, Proverbs 30:5-6, Matthew 4:4, Luke 4:4, II Timothy 3:16, II Peter 1:19-21" },
    ],
  },
  {
    id: "the-trinity",
    title: "The Trinity",
    blocks: [
      { kind: "p", text: "We believe in one Triune God: Father, Son, and Holy Spirit, each co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections." },
      { kind: "refs", text: "Deuteronomy 6:4; Matthew 28:19; II Corinthians 13:14; John 14:10, 26; I John 5:7-8" },
    ],
  },
  {
    id: "the-godhead",
    title: "The Godhead",
    blocks: [
      { kind: "p", text: "We believe that there is one, and only one, true, and living God, who is an intelligent, spiritual, and personal being, eternally existing in three persons: God the Father, God the Son, and God the Holy Spirit. God is sovereign and perfect in His being, possessing the attributes of omnipotence, omniscience, and omnipresence; He is absolutely holy in His character and, as the creator and supreme ruler of all creation, is worthy of all worship and adoration." },
      { kind: "refs", text: "Genesis 1:1; Deuteronomy 6:4; Psalm 83:18; Psalm 139:7-9; Matthew 28:19; John 5:17-18, John 10:30, John 15:26" },
    ],
  },
  {
    id: "the-lord-jesus-christ",
    title: "The Lord Jesus Christ",
    blocks: [
      { kind: "p", text: "We believe in the Lord Jesus Christ, who is God incarnate, the eternal Word and only begotten Son; that without any change in His divine Person, He became man through the miracle of the Virgin Birth, thus to continue forever as both true God and true man, that as man He was tempted in all points as we are, yet without sin; that as the perfect Lamb of God, He gave Himself in death by the shedding of His blood upon the Cross, bearing there the sin of the world, and suffering its full penalty of divine wrath in our stead; that He arose from the grave in a glorified body; that as our great High Priest He ascended into Heaven, there to appear before God as our Advocate and Intercessor." },
      { kind: "refs", text: "John 1:1, John 1:14, John 3:16; Matthew 1:18-25; Galatians 4:4-5; Philippians 2:6-10; Colossians 2:9; I Corinthians 15:3-4; II Corinthians 5:21; Hebrews 4:14-15; I Peter 1:18-19; I John 2:1-2" },
    ],
  },
  {
    id: "the-holy-spirit",
    title: "The Holy Spirit",
    blocks: [
      { kind: "p", text: "We believe in the Holy Spirit, who is the divine agent in nature, revelation, and redemption; that He convicts the world of sin, righteousness, and judgment; that He sanctifies, anoints, indwells, regenerates, seals, and is the Comforter and Teacher of all who come to God through Christ; that He further empowers, guides, teaches, sanctifies, and fills believers. We believe that the “signs of an apostle” ceased with the last Apostle." },
      { kind: "refs", text: "John 3:5, John 14:16-17, John 16:7-14; Romans 8:9; II Corinthians 3:18; Ephesians 1:13, Ephesians 5:18; Titus 3:5; Mark 16:17; Hebrews 2:4; I Corinthians13:8-10" },
    ],
  },
  {
    id: "man",
    title: "Man",
    blocks: [
      { kind: "p", text: "We believe that Adam was the direct creation of God, made in God’s image and likeness; and that by willful and voluntary transgression fell into a sinful state, the consequence of which all his progeny are born in sin and become dead in trespasses and sin, not by constraint, but of choice, and is thus alienated from life with God, and are therefore under the righteous judgment and wrath of God without defense or excuse; and is, of himself, utterly unable to remedy his lost condition." },
      { kind: "refs", text: "Genesis 1:27, Genesis 3:6; Psalm 51:5; Romans 3:10, 23, Romans 5:12; Galatians 3:22; Ephesians 2:1-3, 12" },
    ],
  },
  {
    id: "salvation",
    title: "Salvation",
    blocks: [
      { kind: "p", text: "We believe that salvation is the free gift of God to man, neither merited nor secured in part or in whole by any virtue or work of man, but received only by personal faith in the finished work of Christ. The basis upon which God saves and forgives guilty sinners is the substitutionary death and shed blood of Jesus Christ upon Calvary, and His bodily resurrection. We believe that, although not all men will be saved, salvation has been secured, and is available to all who will come to Christ through repentance and faith. We believe that those in Christ shall never perish; and that apart from Christ there is no possible salvation." },
      { kind: "refs", text: "John 1:12, John 3:16, 36, John 6:37, John 10:28, John 14:6, John 17:4; Acts 4:12; Romans 3:22-26, Romans 5:8; II Corinthians 7:10; Ephesians 1:7, Ephesians 2:8-9; Titus 3:5; I Peter 1:18-19, I Peter 3:18; II Peter 3:9" },
    ],
  },
  {
    id: "repentance-and-faith",
    title: "Repentance and Faith",
    blocks: [
      { kind: "p", text: "We believe that repentance and faith are solemn responsibilities, effected in our souls by the quickening Spirit of God; thereby, being deeply convicted of our sinful state and unbelief and by faith accepting the way of salvation through Jesus Christ, we turn to God receiving the Lord Jesus Christ, and openly confessing Him as our only and all-sufficient Savior." },
      { kind: "refs", text: "Acts 20:21; John16:8-11; II Corinthians 7:10; I Thessalonians 1:10; Luke 12:8, Luke 18:13; Romans 10:9-10; Psalm 51:1-4; Isaiah 55:6-7" },
    ],
  },
  {
    id: "christian-living",
    title: "Christian Living",
    blocks: [
      { kind: "p", text: "We believe that every believer should be separated in their daily life, not as a means of salvation but as its proper evidence and fruit of salvation; that all who claim to know Christ as Savior should live so as not to bring reproach on His name; that we therefore should set our affections on things above, not live in conformity to this present evil world, and engage in the faithful discharging of our solemn responsibility and privilege of bearing the gospel to a lost world; remembering that we will stand individually at the Judgment Seat of Christ and give account of the things done in our bodies, whether good or bad." },
      { kind: "refs", text: "Titus 2:11-14, Ephesians 2:10, Philippians 2:15, Colossians 3:1-2, Romans12:1-2, II Corinthians 5:18-20, I Corinthians 3:12-15, II Corinthians 5:9-10" },
    ],
  },
  {
    id: "the-family",
    title: "The Family",
    blocks: [
      { kind: "p", text: "We believe marriage was ordained by God as one male and one female becoming one flesh. We believe it is God’s design that a man and woman enter the marriage union for life." },
      { kind: "refs", text: "Genesis 2:18-25, Mark 10:3-9, Ephesians 5:22-32" },
      { kind: "p", text: "We believe God has provided for intimate sexual relations between man and woman within the covenant of marriage. Sexual relations outside the bounds of marriage (including but not limited to) sodomy, adultery, and fornication are sins against God. We believe acts that defile God’s human creation, such as gender modification and participation in the sexual degradation of others through pornography, are attacks against the family unit and are sins against God." },
      { kind: "refs", text: "Genesis 2:24; Leviticus 18:1-30, Leviticus 20:13; Romans 1:18-32; I Corinthians 6:6-10, I Corinthians 7:3-5; Hebrews 13:4; I Thessalonians 4:7" },
      { kind: "p", text: "We believe that men and women are equal in position before God but that God has ordained distinct and separate spiritual functions for men and women both in the home and in the church. The husband is to be the leader of the home and men are to be the leaders of the church. Accordingly, only men are eligible for licensure and ordination by the church." },
      { kind: "refs", text: "Galatians 3:28; I Timothy 2:8-15, I Timothy 3:4-5, 12" },
      { kind: "p", text: "We believe that God has ordained the family as the foundational institution of human society. The husband is to love his wife as Christ loves the church. The wife is to submit herself to the Scriptural leadership of her husband as the church submits to the headship of Christ." },
      { kind: "refs", text: "Genesis 1:26-28; Ephesians 5:21-33, Ephesians 6:1-4; Colossians 3:18-21; Hebrews 13:4; I Peter 3:1-7" },
      { kind: "p", text: "We believe children are a blessing from God and are to be taught Biblical and spiritual values by their parents, who rear them with loving discipline and bring them up to follow the example and instruction of our Lord." },
      { kind: "refs", text: "Genesis 2:18-25; Matthew 15:3-6; Genesis 3:16, Genesis 18:19; Deuteronomy 6:4-9, Deuteronomy 32:46; Psalm 78:5-6; Psalm 127:1-5; Proverbs 3:12, Proverbs 13:24, Proverbs 22:6; Ephesians 5:21-33, Ephesians 6:1-4; Colossians 3:18-21" },
      { kind: "p", text: "We believe in the sanctity of human life. We believe human life begins at conception, and from conception through the elderly adult years should be respected as a creation of God. We believe abortion, infanticide, euthanasia, suicide, assisted suicide, and other similar acts are murder and therefore against the will of God." },
      { kind: "refs", text: "Genesis 1:27, Exodus 20:13, Leviticus 19:32, Psalms 139:13-14, Isaiah 7:14 / Matthew 1:23" },
    ],
  },
  {
    id: "satan",
    title: "Satan",
    blocks: [
      { kind: "p", text: "We believe in the existence of Satan, who originally was created a holy and perfect being, but through pride and wicked ambition rebelled against God, thus becoming utterly depraved in character, the great adversary of God and His people, leader of all other fallen angels and unclean spirits, the deceiver and god of this present world; that his powers are vast, but strictly limited by the permissive will of God, that he was defeated at the Cross, and therefore his final doom is certain; that we are able to resist and overcome him only in the armor of God, by the blood of the Lamb, and through the power of the Holy Spirit." },
      { kind: "refs", text: "Isaiah 14:12-15; I Peter 5:8; II Corinthians 4:4; Ephesians 2:2; I John 3:8; Revelation 12:9-11, Revelation 20:10; Ephesians 6:10-18" },
    ],
  },
  {
    id: "the-second-coming-of-christ",
    title: "The Second Coming of Christ",
    blocks: [
      { kind: "p", text: "We believe in the imminent, physical, and literal return of the Lord Jesus Christ to rapture His Church (the “saved”) to meet Him in the air, wherein the dead in Christ shall be raised incorruptible and those living saints shall be translated into a glorified body; that they should not experience physical death. Following this event the earth will experience a period of judgment (Tribulation Period, or Seventieth Week of Daniel) that will culminate in the literal, physical, visible, glorious, and triumphant return of the Lord Jesus Christ (Second Advent) with His saints to establish a literal kingdom on earth, to reign a thousand years, and in fulfillment of His promised kingdom to His covenant people, Israel." },
      { kind: "refs", text: "John 14:3; I Thessalonians 4:13-17; I Corinthians 15:51-54; Philippians 3:20; Jeremiah 30:7; Matthew 24:15-21; Revelation 19:11-16, Revelation 20:1-6" },
    ],
  },
  {
    id: "heaven-and-hell",
    title: "Heaven and Hell",
    blocks: [
      { kind: "p", text: "We believe in the literal existence of both Heaven and Hell; that at death the souls of the saved go immediately to be with Christ. That likewise at death the souls of the unsaved go immediately to Hell where they are kept under punishment until the final day of judgment, at which time they will be raised to stand before the Great White Throne judgment, and then be cast into the Lake of Fire, the place of final, conscious, and everlasting punishment." },
      { kind: "refs", text: "John 14:2; Hebrews 9:24, Hebrews 10:34; I Peter 1:4; Revelation 4:1-2, Revelation 21:1-2; Mark 9:43-48; II Corinthians 5:8; Philippians 1:23; Luke 16:19-24; Revelation 20:13-14" },
    ],
  },
  {
    id: "the-church",
    title: "The Church",
    blocks: [
      { kind: "p", text: "We believe that the “general assembly and church of the firstborn” (the body of Christ) manifests itself on earth as visible, indigenous, independent, local churches. We believe that a local, New Testament church is an assembly of baptized believers associated together by a covenant of faith and fellowship of the gospel, whose purpose is the proclamation of the gospel, the instruction and edification of the saints, the observance of the ordinances; the faithful contending for the “faith once delivered to the saints”; that its Biblical offices are two, Bishop (pastor/teacher) and Deacon; that each local church has the absolute right of self-government without any outside interference, whether individual or ecclesiastical; the one and only Head of the church is Christ. We further believe in the authority and responsibility of the church to exercise New Testament church discipline upon offending members and that each member is subject to such discipline if, in the judgment of the church, the member is determined to be a reproach upon Christ and the church in either attitude, creed, or conduct. Therefore, any person desiring membership in a New Testament church willingly submits themselves to the disciplinary authority of the local church. Furthermore, we believe that in the event of differences and conflicts arising between believers, the Scripture requires that those differences and conflicts be settled between the believers involved or, if necessary, with the judgment of the church, without resorting to the secular court system." },
      { kind: "refs", text: "Acts 2:41-42; Matthew 28:19-20; Ephesians 4:11-12; I Corinthians 11:23-34; Jude 1:3-4; Acts 14:23, Acts 20:17-28; I Timothy 3:1-13; Acts 6:5, Acts 15:22, 25; Colossians 1:18; Ephesians 1:22-23, Ephesians 5:23-24; I Corinthians 5:4-7, 11-13; I Corinthians 6:1-8; Hebrews 12:23" },
    ],
  },
  {
    id: "church-ordinances",
    title: "Church Ordinances",
    blocks: [
      { kind: "p", text: "We believe that the ordinances of the church are two, Baptism and the Lord’s Supper. We believe that scriptural baptism is by immersion in water of a believer in the name of the Father, of the Son, and of the Holy Ghost; preformed under the authority of the local church; that baptism pictures the death, burial, and resurrection of the Lord Jesus Christ, and has no part in the salvation process but is simply the answer of a good conscience toward God and the believer’s identification with the same; that scriptural baptism is a pre-requisite to church membership and the participation in the Lord’s Supper." },
      { kind: "p", text: "We believe observing the Lord’s Supper, by sacred use of unleavened bread and the unleavened fruit of the vine, commemorates the broken body and shed blood of Christ. This observance is to always be preceded by solemn self-examination, has no part in the salvation process, and shows the Lord’s death “till He come”." },
      { kind: "refs", text: "Matthew 28:19-20, Acts 2:41-42, Romans 6:4-8, Matthew 26:26-30, I Corinthians 11:23-34" },
    ],
  },
];
