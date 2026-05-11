import { Grade, Question, Subject, TopicSlide, Unit } from '@/types/curriculum';

type SubjectSeed = {
  id: string;
  name: string;
  icon: string;
  color: string;
  grades: number[];
  themes: string[];
  skill: string;
};

export const grades: Grade[] = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  level: index < 4 ? 'primary' : 'middle',
  label: `${index + 1}. Sınıf`,
}));

const subjectSeeds: SubjectSeed[] = [
  {
    id: 'turkce',
    name: 'Türkçe',
    icon: '📖',
    color: 'primary',
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    themes: ['Okuma Anlama', 'Dil Bilgisi', 'Yazma Becerileri', 'Söz Varlığı', 'Dinleme ve Konuşma'],
    skill: 'metinleri anlamlandırma ve doğru Türkçe kullanma',
  },
  {
    id: 'matematik',
    name: 'Matematik',
    icon: '🔢',
    color: 'info',
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    themes: ['Sayılar ve İşlemler', 'Problemler', 'Kesirler ve Oranlar', 'Geometri', 'Veri ve Olasılık'],
    skill: 'sayısal düşünme ve problem çözme',
  },
  {
    id: 'hayat-bilgisi',
    name: 'Hayat Bilgisi',
    icon: '🌍',
    color: 'warning',
    grades: [1, 2, 3],
    themes: ['Okulumuzda Hayat', 'Evimizde Hayat', 'Sağlıklı Hayat', 'Güvenli Hayat', 'Doğa ve Çevre'],
    skill: 'günlük yaşamda bilinçli karar verme',
  },
  {
    id: 'fen',
    name: 'Fen Bilimleri',
    icon: '🔬',
    color: 'success',
    grades: [4, 5, 6, 7, 8],
    themes: ['Canlılar ve Yaşam', 'Madde ve Özellikleri', 'Kuvvet ve Hareket', 'Dünya ve Evren', 'Elektrik ve Enerji'],
    skill: 'bilimsel gözlem yapma ve neden-sonuç kurma',
  },
  {
    id: 'sosyal',
    name: 'Sosyal Bilgiler',
    icon: '🏛️',
    color: 'accent',
    grades: [5, 6, 7, 8],
    themes: ['Birey ve Toplum', 'Kültür ve Miras', 'İnsanlar, Yerler ve Çevreler', 'Üretim ve Tüketim', 'Etkin Vatandaşlık'],
    skill: 'toplumsal olayları yorumlama',
  },
  {
    id: 'ingilizce',
    name: 'İngilizce',
    icon: '🇬🇧',
    color: 'destructive',
    grades: [5, 6, 7, 8],
    themes: ['Everyday English', 'Vocabulary Builder', 'Grammar in Use', 'Reading Skills', 'Speaking Practice'],
    skill: 'temel İngilizce iletişim kurma',
  },
];

export const subjects: Subject[] = subjectSeeds.map(({ id, name, icon, color, grades }) => ({
  id,
  name,
  icon,
  color,
  grades,
}));

function getSeed(subjectId: string): SubjectSeed | undefined {
  return subjectSeeds.find(subject => subject.id === subjectId);
}

function levelPhrase(gradeId: number): string {
  if (gradeId <= 4) return 'temel örneklerle';
  if (gradeId <= 8) return 'kademeli alıştırmalarla';
  return 'analitik örneklerle';
}

function unitId(subjectId: string, gradeId: number, order: number): string {
  return `${subjectId}-${gradeId}-u${order}`;
}

function makeUnits(): Unit[] {
  return subjectSeeds.flatMap(subject =>
    subject.grades.flatMap(gradeId =>
      subject.themes.map((theme, index) => ({
        id: unitId(subject.id, gradeId, index + 1),
        subjectId: subject.id,
        gradeId,
        order: index + 1,
        title: theme,
        description: `${gradeId}. sınıf düzeyinde ${subject.skill} için ${levelPhrase(gradeId)} çalışma.`,
      })),
    ),
  );
}

export const units: Unit[] = makeUnits();

function makeSlidesForUnit(unit: Unit): TopicSlide[] {
  const subject = getSeed(unit.subjectId);
  const subjectName = subject?.name ?? 'Ders';
  const skill = subject?.skill ?? 'konuyu öğrenme';

  return [
    {
      id: `${unit.id}-s1`,
      unitId: unit.id,
      order: 1,
      title: `${unit.title} Nedir?`,
      content: `${unit.title}, ${subjectName} dersinde ${skill} becerisini güçlendiren temel başlıklardan biridir. Bu bölümde kavramı kısa açıklamalarla tanıyacak ve günlük örneklerle ilişkilendireceksin.`,
      example: `${unit.gradeId}. sınıf hedefi: Konunun ana fikrini fark et ve bir örnekle açıkla.`,
    },
    {
      id: `${unit.id}-s2`,
      unitId: unit.id,
      order: 2,
      title: 'Temel Kavramlar',
      content: `Önce ana kavramları ayırmak gerekir. Kavram, örnek, kural ve istisna arasındaki farkı gördüğünde sorular daha anlaşılır hale gelir.`,
      example: `Kendine sor: "Bu bilgi neyi anlatıyor, nerede kullanılır, hangi örnekle görünür olur?"`,
    },
    {
      id: `${unit.id}-s3`,
      unitId: unit.id,
      order: 3,
      title: 'Adım Adım Uygulama',
      content: `Soruyu çözerken önce verilenleri belirle, sonra isteneni bul ve son olarak cevabını kontrol et. Bu üç adım çoğu hatayı erkenden yakalar.`,
      example: `1. Verileni işaretle\n2. İstenen sonucu yaz\n3. Cevabın konu ile uyumunu kontrol et`,
    },
    {
      id: `${unit.id}-s4`,
      unitId: unit.id,
      order: 4,
      title: 'Mini Tekrar',
      content: `${unit.title} çalışırken başarı için kısa tekrar çok önemlidir. Şimdi öğrendiklerini birkaç soruyla yoklayacak ve bir sonraki üniteye hazır olup olmadığını göreceksin.`,
      example: `Hazırsan alıştırmaya geç ve en az %60 hedefle.`,
    },
  ];
}

export const slides: TopicSlide[] = units.flatMap(makeSlidesForUnit);

function makeQuestionsForUnit(unit: Unit): Question[] {
  const subject = getSeed(unit.subjectId);
  const subjectName = subject?.name ?? 'Ders';
  const skill = subject?.skill ?? 'konuyu öğrenme';

  return [
    {
      id: `${unit.id}-q1`,
      unitId: unit.id,
      text: `${unit.title} ünitesinin ana amacı aşağıdakilerden hangisidir?`,
      options: [
        `${skill} becerisini geliştirmek`,
        'Konuyla ilgisiz bilgileri ezberlemek',
        'Sadece önceki sınıfları tekrar etmek',
        'Dersi tamamen atlamak',
      ],
      correctIndex: 0,
      explanation: `${unit.title}, ${subjectName} içinde ${skill} becerisini desteklemek için çalışılır.`,
    },
    {
      id: `${unit.id}-q2`,
      unitId: unit.id,
      text: `Bir ${unit.gradeId}. sınıf öğrencisi ${unit.title} sorusuna başlarken ilk olarak ne yapmalıdır?`,
      options: [
        'Verilenleri ve isteneni belirlemelidir',
        'Seçenekleri rastgele işaretlemelidir',
        'Soru kökünü okumadan cevaplamalıdır',
        'Açıklamayı en sona bırakmadan ezberlemelidir',
      ],
      correctIndex: 0,
      explanation: `Soruyu anlamak için ilk adım verilenleri ve isteneni ayırmaktır.`,
    },
    {
      id: `${unit.id}-q3`,
      unitId: unit.id,
      text: `${unit.title} çalışırken en etkili tekrar yöntemi hangisidir?`,
      options: [
        'Kısa not alıp örnek çözmek',
        'Konuyu hiç tekrar etmemek',
        'Sadece başlığı okumak',
        'Yanlışları görmezden gelmek',
      ],
      correctIndex: 0,
      explanation: `Kısa not ve örnek çözümü birlikte kullanmak öğrenmeyi kalıcı hale getirir.`,
    },
    {
      id: `${unit.id}-q4`,
      unitId: unit.id,
      text: `Aşağıdaki davranışlardan hangisi ${subjectName} dersinde öğrenmeyi güçlendirir?`,
      options: [
        'Yanlış cevabın nedenini incelemek',
        'Yanlışı silip devam etmek',
        'Sadece kolay soruları çözmek',
        'Geri bildirimleri okumamak',
      ],
      correctIndex: 0,
      explanation: `Yanlışın nedenini görmek, aynı hatayı tekrar yapmamak için en güvenilir yoldur.`,
    },
    {
      id: `${unit.id}-q5`,
      unitId: unit.id,
      text: `${unit.title} konusunda zorlanan biri için en iyi sonraki adım nedir?`,
      options: [
        'Kavramları tekrar edip yeni bir örnek denemek',
        'Üniteyi tamamen bırakmak',
        'Rastgele cevaplarla ilerlemek',
        'Sadece sonucu ezberlemek',
      ],
      correctIndex: 0,
      explanation: `Zorlanınca kavrama dönmek ve örnek çözmek konuyu sağlamlaştırır.`,
    },
    {
      id: `${unit.id}-q6`,
      unitId: unit.id,
      text: `${unit.title} için iyi hazırlanmış bir cevap hangi özelliği taşır?`,
      options: [
        'Gerekçesi açık ve konu ile uyumludur',
        'Kısa ama konudan bağımsızdır',
        'Sadece tahmine dayanır',
        'Soru kökünü dikkate almaz',
      ],
      correctIndex: 0,
      explanation: `Doğru cevap yalnızca sonuç değil, konu ile uyumlu gerekçe de içerir.`,
    },
    {
      id: `${unit.id}-q7`,
      unitId: unit.id,
      text: `Bu ünitede %60 başarı hedefi ne anlama gelir?`,
      options: [
        'Temel düzeyde hazır olduğunu gösterir',
        'Konuyu hiç bilmediğini gösterir',
        'Tüm soruları yanlış yaptığını gösterir',
        'Bir sonraki üniteye asla geçemeyeceğini gösterir',
      ],
      correctIndex: 0,
      explanation: `%60 ve üzeri skor, temel kazanımların büyük kısmının anlaşıldığını gösterir.`,
    },
  ];
}

export const questions: Question[] = units.flatMap(makeQuestionsForUnit);

function mergeById<T extends { id: string }>(baseItems: T[], overrideItems: T[]): T[] {
  const merged = new Map<string, T>();

  for (const item of baseItems) merged.set(item.id, item);
  for (const item of overrideItems) merged.set(item.id, item);

  return Array.from(merged.values());
}

export function mergeUnits(remoteUnits: Unit[]): Unit[] {
  return mergeById(units, remoteUnits);
}

export function mergeSlides(remoteSlides: TopicSlide[]): TopicSlide[] {
  return mergeById(slides, remoteSlides);
}

export function mergeQuestions(remoteQuestions: Question[]): Question[] {
  return mergeById(questions, remoteQuestions);
}

export function getSubjectsForGrade(gradeId: number): Subject[] {
  return subjects.filter(subject => subject.grades.includes(gradeId));
}

export function getUnitsForSubjectAndGrade(subjectId: string, gradeId: number, sourceUnits: Unit[] = units): Unit[] {
  return sourceUnits
    .filter(unit => unit.subjectId === subjectId && unit.gradeId === gradeId)
    .sort((a, b) => a.order - b.order);
}

export function getSlidesForUnit(unitId: string, sourceSlides: TopicSlide[] = slides): TopicSlide[] {
  return sourceSlides.filter(slide => slide.unitId === unitId).sort((a, b) => a.order - b.order);
}

export function getQuestionsForUnit(unitId: string, sourceQuestions: Question[] = questions): Question[] {
  return sourceQuestions.filter(question => question.unitId === unitId);
}
