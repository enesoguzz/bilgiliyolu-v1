import { Question, TopicSlide, Unit } from '@/types/curriculum';

export type PracticeExam = {
  id: string;
  gradeId: number;
  title: string;
  questions: Question[];
};

export const pdfUnits: Unit[] = [
  {
    "id": "turkce-2-pdf-u1",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 1,
    "title": "S?zc?kte Anlam",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? S?zc?kte Anlam ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u2",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 2,
    "title": "Z?t ve E? Anlam",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Z?t ve E? Anlam ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u3",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 3,
    "title": "Okudu?unu Anlama",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Okudu?unu Anlama ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u4",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 4,
    "title": "Metin S?ralama",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin S?ralama ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u5",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 5,
    "title": "G?rsel Okuma",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? G?rsel Okuma ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u6",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 6,
    "title": "Noktalama",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Noktalama ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u7",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 7,
    "title": "Yaz?m Kurallar?",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Yaz?m Kurallar? ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u8",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 8,
    "title": "Metin T?rleri",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin T?rleri ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u9",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 9,
    "title": "Ana Fikir",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Ana Fikir ?nitesi."
  },
  {
    "id": "turkce-2-pdf-u10",
    "subjectId": "turkce",
    "gradeId": 2,
    "order": 10,
    "title": "Dil Bilgisi",
    "description": "2. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Dil Bilgisi ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u1",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 1,
    "title": "Do?al Say?lar",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Do?al Say?lar ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u2",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 2,
    "title": "Toplama ?lemi",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Toplama ?lemi ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u3",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 3,
    "title": "?karma ?lemi",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?karma ?lemi ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u4",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 4,
    "title": "?arpma ?lemi",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?arpma ?lemi ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u5",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 5,
    "title": "B?lme ?lemi",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? B?lme ?lemi ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u6",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 6,
    "title": "Kesirler",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Kesirler ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u7",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 7,
    "title": "Geometri",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Geometri ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u8",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 8,
    "title": "?l?me",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?l?me ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u9",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 9,
    "title": "Veri ve Grafik",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Veri ve Grafik ?nitesi."
  },
  {
    "id": "matematik-2-pdf-u10",
    "subjectId": "matematik",
    "gradeId": 2,
    "order": 10,
    "title": "Problem ?zme",
    "description": "2. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Problem ?zme ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 1,
    "title": "Okulumuzda Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Okulumuzda Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 2,
    "title": "Evimizde Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Evimizde Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 3,
    "title": "Sa?l?kl? Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Sa?l?kl? Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 4,
    "title": "G?venli Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? G?venli Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 5,
    "title": "Do?ada Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Do?ada Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 6,
    "title": "?lkemizde Hayat",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? ?lkemizde Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 7,
    "title": "Kaynaklar? Koruma",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Kaynaklar? Koruma ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 8,
    "title": "Trafik ve Kurallar",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Trafik ve Kurallar ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 9,
    "title": "Aile ve Sorumluluk",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Aile ve Sorumluluk ?nitesi."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10",
    "subjectId": "hayat-bilgisi",
    "gradeId": 2,
    "order": 10,
    "title": "G?nl?k Ya?am Becerileri",
    "description": "2. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? G?nl?k Ya?am Becerileri ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u1",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 1,
    "title": "S?zc?kte Anlam",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? S?zc?kte Anlam ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u2",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 2,
    "title": "Z?t ve E? Anlam",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Z?t ve E? Anlam ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u3",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 3,
    "title": "Okudu?unu Anlama",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Okudu?unu Anlama ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u4",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 4,
    "title": "Metin S?ralama",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin S?ralama ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u5",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 5,
    "title": "G?rsel Okuma",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? G?rsel Okuma ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u6",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 6,
    "title": "Noktalama",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Noktalama ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u7",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 7,
    "title": "Yaz?m Kurallar?",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Yaz?m Kurallar? ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u8",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 8,
    "title": "Metin T?rleri",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin T?rleri ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u9",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 9,
    "title": "Ana Fikir",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Ana Fikir ?nitesi."
  },
  {
    "id": "turkce-3-pdf-u10",
    "subjectId": "turkce",
    "gradeId": 3,
    "order": 10,
    "title": "Dil Bilgisi",
    "description": "3. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Dil Bilgisi ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u1",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 1,
    "title": "Do?al Say?lar",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Do?al Say?lar ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u2",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 2,
    "title": "Toplama ?lemi",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Toplama ?lemi ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u3",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 3,
    "title": "?karma ?lemi",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?karma ?lemi ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u4",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 4,
    "title": "?arpma ?lemi",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?arpma ?lemi ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u5",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 5,
    "title": "B?lme ?lemi",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? B?lme ?lemi ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u6",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 6,
    "title": "Kesirler",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Kesirler ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u7",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 7,
    "title": "Geometri",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Geometri ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u8",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 8,
    "title": "?l?me",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?l?me ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u9",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 9,
    "title": "Veri ve Grafik",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Veri ve Grafik ?nitesi."
  },
  {
    "id": "matematik-3-pdf-u10",
    "subjectId": "matematik",
    "gradeId": 3,
    "order": 10,
    "title": "Problem ?zme",
    "description": "3. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Problem ?zme ?nitesi."
  },
  {
    "id": "fen-3-pdf-u1",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 1,
    "title": "Yer Kabu?u ve D?nya",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Yer Kabu?u ve D?nya ?nitesi."
  },
  {
    "id": "fen-3-pdf-u2",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 2,
    "title": "Besinlerimiz",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Besinlerimiz ?nitesi."
  },
  {
    "id": "fen-3-pdf-u3",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 3,
    "title": "Kuvvetin Etkileri",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Kuvvetin Etkileri ?nitesi."
  },
  {
    "id": "fen-3-pdf-u4",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 4,
    "title": "Maddenin ?zellikleri",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Maddenin ?zellikleri ?nitesi."
  },
  {
    "id": "fen-3-pdf-u5",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 5,
    "title": "Ayd?nlatma ve Ses",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Ayd?nlatma ve Ses ?nitesi."
  },
  {
    "id": "fen-3-pdf-u6",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 6,
    "title": "?nsan ve ?evre",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? ?nsan ve ?evre ?nitesi."
  },
  {
    "id": "fen-3-pdf-u7",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 7,
    "title": "Basit Elektrik Devreleri",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Basit Elektrik Devreleri ?nitesi."
  },
  {
    "id": "fen-3-pdf-u8",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 8,
    "title": "Canl?lar ve Ya?am",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Canl?lar ve Ya?am ?nitesi."
  },
  {
    "id": "fen-3-pdf-u9",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 9,
    "title": "D?nya ve Evren",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? D?nya ve Evren ?nitesi."
  },
  {
    "id": "fen-3-pdf-u10",
    "subjectId": "fen",
    "gradeId": 3,
    "order": 10,
    "title": "Bilimsel S?re?ler",
    "description": "3. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Bilimsel S?re?ler ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 1,
    "title": "Okulumuzda Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Okulumuzda Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 2,
    "title": "Evimizde Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Evimizde Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 3,
    "title": "Sa?l?kl? Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Sa?l?kl? Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 4,
    "title": "G?venli Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? G?venli Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 5,
    "title": "Do?ada Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Do?ada Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 6,
    "title": "?lkemizde Hayat",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? ?lkemizde Hayat ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 7,
    "title": "Kaynaklar? Koruma",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Kaynaklar? Koruma ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 8,
    "title": "Trafik ve Kurallar",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Trafik ve Kurallar ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 9,
    "title": "Aile ve Sorumluluk",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? Aile ve Sorumluluk ?nitesi."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10",
    "subjectId": "hayat-bilgisi",
    "gradeId": 3,
    "order": 10,
    "title": "G?nl?k Ya?am Becerileri",
    "description": "3. s?n?f Hayat Bilgisi ?al?ma kitab?ndan uyarlanm? G?nl?k Ya?am Becerileri ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u1",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 1,
    "title": "S?zc?kte Anlam",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? S?zc?kte Anlam ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u2",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 2,
    "title": "Z?t ve E? Anlam",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Z?t ve E? Anlam ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u3",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 3,
    "title": "Okudu?unu Anlama",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Okudu?unu Anlama ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u4",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 4,
    "title": "Metin S?ralama",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin S?ralama ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u5",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 5,
    "title": "G?rsel Okuma",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? G?rsel Okuma ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u6",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 6,
    "title": "Noktalama",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Noktalama ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u7",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 7,
    "title": "Yaz?m Kurallar?",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Yaz?m Kurallar? ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u8",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 8,
    "title": "Metin T?rleri",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Metin T?rleri ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u9",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 9,
    "title": "Ana Fikir",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Ana Fikir ?nitesi."
  },
  {
    "id": "turkce-4-pdf-u10",
    "subjectId": "turkce",
    "gradeId": 4,
    "order": 10,
    "title": "Dil Bilgisi",
    "description": "4. s?n?f T?rk?e ?al?ma kitab?ndan uyarlanm? Dil Bilgisi ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u1",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 1,
    "title": "Do?al Say?lar",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Do?al Say?lar ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u2",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 2,
    "title": "Toplama ?lemi",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Toplama ?lemi ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u3",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 3,
    "title": "?karma ?lemi",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?karma ?lemi ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u4",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 4,
    "title": "?arpma ?lemi",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?arpma ?lemi ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u5",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 5,
    "title": "B?lme ?lemi",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? B?lme ?lemi ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u6",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 6,
    "title": "Kesirler",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Kesirler ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u7",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 7,
    "title": "Geometri",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Geometri ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u8",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 8,
    "title": "?l?me",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? ?l?me ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u9",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 9,
    "title": "Veri ve Grafik",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Veri ve Grafik ?nitesi."
  },
  {
    "id": "matematik-4-pdf-u10",
    "subjectId": "matematik",
    "gradeId": 4,
    "order": 10,
    "title": "Problem ?zme",
    "description": "4. s?n?f Matematik ?al?ma kitab?ndan uyarlanm? Problem ?zme ?nitesi."
  },
  {
    "id": "fen-4-pdf-u1",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 1,
    "title": "Yer Kabu?u ve D?nya",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Yer Kabu?u ve D?nya ?nitesi."
  },
  {
    "id": "fen-4-pdf-u2",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 2,
    "title": "Besinlerimiz",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Besinlerimiz ?nitesi."
  },
  {
    "id": "fen-4-pdf-u3",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 3,
    "title": "Kuvvetin Etkileri",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Kuvvetin Etkileri ?nitesi."
  },
  {
    "id": "fen-4-pdf-u4",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 4,
    "title": "Maddenin ?zellikleri",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Maddenin ?zellikleri ?nitesi."
  },
  {
    "id": "fen-4-pdf-u5",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 5,
    "title": "Ayd?nlatma ve Ses",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Ayd?nlatma ve Ses ?nitesi."
  },
  {
    "id": "fen-4-pdf-u6",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 6,
    "title": "?nsan ve ?evre",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? ?nsan ve ?evre ?nitesi."
  },
  {
    "id": "fen-4-pdf-u7",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 7,
    "title": "Basit Elektrik Devreleri",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Basit Elektrik Devreleri ?nitesi."
  },
  {
    "id": "fen-4-pdf-u8",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 8,
    "title": "Canl?lar ve Ya?am",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Canl?lar ve Ya?am ?nitesi."
  },
  {
    "id": "fen-4-pdf-u9",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 9,
    "title": "D?nya ve Evren",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? D?nya ve Evren ?nitesi."
  },
  {
    "id": "fen-4-pdf-u10",
    "subjectId": "fen",
    "gradeId": 4,
    "order": 10,
    "title": "Bilimsel S?re?ler",
    "description": "4. s?n?f Fen Bilimleri ?al?ma kitab?ndan uyarlanm? Bilimsel S?re?ler ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u1",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 1,
    "title": "Herkesin Bir Kimli?i Var",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Herkesin Bir Kimli?i Var ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u2",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 2,
    "title": "K?lt?r ve Miras",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? K?lt?r ve Miras ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u3",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 3,
    "title": "Ya?ad?m?z Yer",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Ya?ad?m?z Yer ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u4",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 4,
    "title": "Teknoloji ve Toplum",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Teknoloji ve Toplum ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u5",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 5,
    "title": "?retim ve T?ketim",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? ?retim ve T?ketim ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u6",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 6,
    "title": "Etkin Vatanda?l?k",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Etkin Vatanda?l?k ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u7",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 7,
    "title": "?nsanlar ve Y?netim",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? ?nsanlar ve Y?netim ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u8",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 8,
    "title": "Ge?mi?ten Bug?ne",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Ge?mi?ten Bug?ne ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u9",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 9,
    "title": "Kaynaklar?m?z",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Kaynaklar?m?z ?nitesi."
  },
  {
    "id": "sosyal-4-pdf-u10",
    "subjectId": "sosyal",
    "gradeId": 4,
    "order": 10,
    "title": "Bilim ve De?i?im",
    "description": "4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndan uyarlanm? Bilim ve De?i?im ?nitesi."
  }
];

export const pdfSlides: TopicSlide[] = [
  {
    "id": "turkce-2-pdf-u1-s1",
    "unitId": "turkce-2-pdf-u1",
    "order": 1,
    "title": "S?zc?kte Anlam Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u1-s2",
    "unitId": "turkce-2-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u1-s3",
    "unitId": "turkce-2-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u1-s4",
    "unitId": "turkce-2-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u2-s1",
    "unitId": "turkce-2-pdf-u2",
    "order": 1,
    "title": "Z?t ve E? Anlam Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u2-s2",
    "unitId": "turkce-2-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u2-s3",
    "unitId": "turkce-2-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u2-s4",
    "unitId": "turkce-2-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u3-s1",
    "unitId": "turkce-2-pdf-u3",
    "order": 1,
    "title": "Okudu?unu Anlama Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u3-s2",
    "unitId": "turkce-2-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u3-s3",
    "unitId": "turkce-2-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u3-s4",
    "unitId": "turkce-2-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u4-s1",
    "unitId": "turkce-2-pdf-u4",
    "order": 1,
    "title": "Metin S?ralama Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u4-s2",
    "unitId": "turkce-2-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u4-s3",
    "unitId": "turkce-2-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u4-s4",
    "unitId": "turkce-2-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u5-s1",
    "unitId": "turkce-2-pdf-u5",
    "order": 1,
    "title": "G?rsel Okuma Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u5-s2",
    "unitId": "turkce-2-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u5-s3",
    "unitId": "turkce-2-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u5-s4",
    "unitId": "turkce-2-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u6-s1",
    "unitId": "turkce-2-pdf-u6",
    "order": 1,
    "title": "Noktalama Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u6-s2",
    "unitId": "turkce-2-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u6-s3",
    "unitId": "turkce-2-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u6-s4",
    "unitId": "turkce-2-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u7-s1",
    "unitId": "turkce-2-pdf-u7",
    "order": 1,
    "title": "Yaz?m Kurallar? Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u7-s2",
    "unitId": "turkce-2-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u7-s3",
    "unitId": "turkce-2-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u7-s4",
    "unitId": "turkce-2-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u8-s1",
    "unitId": "turkce-2-pdf-u8",
    "order": 1,
    "title": "Metin T?rleri Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u8-s2",
    "unitId": "turkce-2-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u8-s3",
    "unitId": "turkce-2-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u8-s4",
    "unitId": "turkce-2-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u9-s1",
    "unitId": "turkce-2-pdf-u9",
    "order": 1,
    "title": "Ana Fikir Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u9-s2",
    "unitId": "turkce-2-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u9-s3",
    "unitId": "turkce-2-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u9-s4",
    "unitId": "turkce-2-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-2-pdf-u10-s1",
    "unitId": "turkce-2-pdf-u10",
    "order": 1,
    "title": "Dil Bilgisi Nedir?",
    "content": "Bu ?nitede 2. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-2-pdf-u10-s2",
    "unitId": "turkce-2-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-2-pdf-u10-s3",
    "unitId": "turkce-2-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-2-pdf-u10-s4",
    "unitId": "turkce-2-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u1-s1",
    "unitId": "matematik-2-pdf-u1",
    "order": 1,
    "title": "Do?al Say?lar Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u1-s2",
    "unitId": "matematik-2-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u1-s3",
    "unitId": "matematik-2-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u1-s4",
    "unitId": "matematik-2-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u2-s1",
    "unitId": "matematik-2-pdf-u2",
    "order": 1,
    "title": "Toplama ?lemi Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u2-s2",
    "unitId": "matematik-2-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u2-s3",
    "unitId": "matematik-2-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u2-s4",
    "unitId": "matematik-2-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u3-s1",
    "unitId": "matematik-2-pdf-u3",
    "order": 1,
    "title": "?karma ?lemi Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u3-s2",
    "unitId": "matematik-2-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u3-s3",
    "unitId": "matematik-2-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u3-s4",
    "unitId": "matematik-2-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u4-s1",
    "unitId": "matematik-2-pdf-u4",
    "order": 1,
    "title": "?arpma ?lemi Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u4-s2",
    "unitId": "matematik-2-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u4-s3",
    "unitId": "matematik-2-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u4-s4",
    "unitId": "matematik-2-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u5-s1",
    "unitId": "matematik-2-pdf-u5",
    "order": 1,
    "title": "B?lme ?lemi Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u5-s2",
    "unitId": "matematik-2-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u5-s3",
    "unitId": "matematik-2-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u5-s4",
    "unitId": "matematik-2-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u6-s1",
    "unitId": "matematik-2-pdf-u6",
    "order": 1,
    "title": "Kesirler Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u6-s2",
    "unitId": "matematik-2-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u6-s3",
    "unitId": "matematik-2-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u6-s4",
    "unitId": "matematik-2-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u7-s1",
    "unitId": "matematik-2-pdf-u7",
    "order": 1,
    "title": "Geometri Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u7-s2",
    "unitId": "matematik-2-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u7-s3",
    "unitId": "matematik-2-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u7-s4",
    "unitId": "matematik-2-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u8-s1",
    "unitId": "matematik-2-pdf-u8",
    "order": 1,
    "title": "?l?me Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u8-s2",
    "unitId": "matematik-2-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u8-s3",
    "unitId": "matematik-2-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u8-s4",
    "unitId": "matematik-2-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u9-s1",
    "unitId": "matematik-2-pdf-u9",
    "order": 1,
    "title": "Veri ve Grafik Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u9-s2",
    "unitId": "matematik-2-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u9-s3",
    "unitId": "matematik-2-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u9-s4",
    "unitId": "matematik-2-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-2-pdf-u10-s1",
    "unitId": "matematik-2-pdf-u10",
    "order": 1,
    "title": "Problem ?zme Nedir?",
    "content": "Bu ?nitede 2. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-2-pdf-u10-s2",
    "unitId": "matematik-2-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-2-pdf-u10-s3",
    "unitId": "matematik-2-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-2-pdf-u10-s4",
    "unitId": "matematik-2-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-s1",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "order": 1,
    "title": "Okulumuzda Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-s2",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-s3",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-s4",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-s1",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "order": 1,
    "title": "Evimizde Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-s2",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-s3",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-s4",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-s1",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "order": 1,
    "title": "Sa?l?kl? Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-s2",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-s3",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-s4",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-s1",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "order": 1,
    "title": "G?venli Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-s2",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-s3",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-s4",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-s1",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "order": 1,
    "title": "Do?ada Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-s2",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-s3",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-s4",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-s1",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "order": 1,
    "title": "?lkemizde Hayat Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-s2",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-s3",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-s4",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-s1",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "order": 1,
    "title": "Kaynaklar? Koruma Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-s2",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-s3",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-s4",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-s1",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "order": 1,
    "title": "Trafik ve Kurallar Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-s2",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-s3",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-s4",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-s1",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "order": 1,
    "title": "Aile ve Sorumluluk Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-s2",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-s3",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-s4",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-s1",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "order": 1,
    "title": "G?nl?k Ya?am Becerileri Nedir?",
    "content": "Bu ?nitede 2. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-s2",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-s3",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-s4",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u1-s1",
    "unitId": "turkce-3-pdf-u1",
    "order": 1,
    "title": "S?zc?kte Anlam Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u1-s2",
    "unitId": "turkce-3-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u1-s3",
    "unitId": "turkce-3-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u1-s4",
    "unitId": "turkce-3-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u2-s1",
    "unitId": "turkce-3-pdf-u2",
    "order": 1,
    "title": "Z?t ve E? Anlam Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u2-s2",
    "unitId": "turkce-3-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u2-s3",
    "unitId": "turkce-3-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u2-s4",
    "unitId": "turkce-3-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u3-s1",
    "unitId": "turkce-3-pdf-u3",
    "order": 1,
    "title": "Okudu?unu Anlama Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u3-s2",
    "unitId": "turkce-3-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u3-s3",
    "unitId": "turkce-3-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u3-s4",
    "unitId": "turkce-3-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u4-s1",
    "unitId": "turkce-3-pdf-u4",
    "order": 1,
    "title": "Metin S?ralama Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u4-s2",
    "unitId": "turkce-3-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u4-s3",
    "unitId": "turkce-3-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u4-s4",
    "unitId": "turkce-3-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u5-s1",
    "unitId": "turkce-3-pdf-u5",
    "order": 1,
    "title": "G?rsel Okuma Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u5-s2",
    "unitId": "turkce-3-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u5-s3",
    "unitId": "turkce-3-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u5-s4",
    "unitId": "turkce-3-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u6-s1",
    "unitId": "turkce-3-pdf-u6",
    "order": 1,
    "title": "Noktalama Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u6-s2",
    "unitId": "turkce-3-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u6-s3",
    "unitId": "turkce-3-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u6-s4",
    "unitId": "turkce-3-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u7-s1",
    "unitId": "turkce-3-pdf-u7",
    "order": 1,
    "title": "Yaz?m Kurallar? Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u7-s2",
    "unitId": "turkce-3-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u7-s3",
    "unitId": "turkce-3-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u7-s4",
    "unitId": "turkce-3-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u8-s1",
    "unitId": "turkce-3-pdf-u8",
    "order": 1,
    "title": "Metin T?rleri Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u8-s2",
    "unitId": "turkce-3-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u8-s3",
    "unitId": "turkce-3-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u8-s4",
    "unitId": "turkce-3-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u9-s1",
    "unitId": "turkce-3-pdf-u9",
    "order": 1,
    "title": "Ana Fikir Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u9-s2",
    "unitId": "turkce-3-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u9-s3",
    "unitId": "turkce-3-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u9-s4",
    "unitId": "turkce-3-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-3-pdf-u10-s1",
    "unitId": "turkce-3-pdf-u10",
    "order": 1,
    "title": "Dil Bilgisi Nedir?",
    "content": "Bu ?nitede 3. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-3-pdf-u10-s2",
    "unitId": "turkce-3-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-3-pdf-u10-s3",
    "unitId": "turkce-3-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-3-pdf-u10-s4",
    "unitId": "turkce-3-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u1-s1",
    "unitId": "matematik-3-pdf-u1",
    "order": 1,
    "title": "Do?al Say?lar Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u1-s2",
    "unitId": "matematik-3-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u1-s3",
    "unitId": "matematik-3-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u1-s4",
    "unitId": "matematik-3-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u2-s1",
    "unitId": "matematik-3-pdf-u2",
    "order": 1,
    "title": "Toplama ?lemi Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u2-s2",
    "unitId": "matematik-3-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u2-s3",
    "unitId": "matematik-3-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u2-s4",
    "unitId": "matematik-3-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u3-s1",
    "unitId": "matematik-3-pdf-u3",
    "order": 1,
    "title": "?karma ?lemi Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u3-s2",
    "unitId": "matematik-3-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u3-s3",
    "unitId": "matematik-3-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u3-s4",
    "unitId": "matematik-3-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u4-s1",
    "unitId": "matematik-3-pdf-u4",
    "order": 1,
    "title": "?arpma ?lemi Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u4-s2",
    "unitId": "matematik-3-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u4-s3",
    "unitId": "matematik-3-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u4-s4",
    "unitId": "matematik-3-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u5-s1",
    "unitId": "matematik-3-pdf-u5",
    "order": 1,
    "title": "B?lme ?lemi Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u5-s2",
    "unitId": "matematik-3-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u5-s3",
    "unitId": "matematik-3-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u5-s4",
    "unitId": "matematik-3-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u6-s1",
    "unitId": "matematik-3-pdf-u6",
    "order": 1,
    "title": "Kesirler Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u6-s2",
    "unitId": "matematik-3-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u6-s3",
    "unitId": "matematik-3-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u6-s4",
    "unitId": "matematik-3-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u7-s1",
    "unitId": "matematik-3-pdf-u7",
    "order": 1,
    "title": "Geometri Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u7-s2",
    "unitId": "matematik-3-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u7-s3",
    "unitId": "matematik-3-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u7-s4",
    "unitId": "matematik-3-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u8-s1",
    "unitId": "matematik-3-pdf-u8",
    "order": 1,
    "title": "?l?me Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u8-s2",
    "unitId": "matematik-3-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u8-s3",
    "unitId": "matematik-3-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u8-s4",
    "unitId": "matematik-3-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u9-s1",
    "unitId": "matematik-3-pdf-u9",
    "order": 1,
    "title": "Veri ve Grafik Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u9-s2",
    "unitId": "matematik-3-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u9-s3",
    "unitId": "matematik-3-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u9-s4",
    "unitId": "matematik-3-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-3-pdf-u10-s1",
    "unitId": "matematik-3-pdf-u10",
    "order": 1,
    "title": "Problem ?zme Nedir?",
    "content": "Bu ?nitede 3. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-3-pdf-u10-s2",
    "unitId": "matematik-3-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-3-pdf-u10-s3",
    "unitId": "matematik-3-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-3-pdf-u10-s4",
    "unitId": "matematik-3-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u1-s1",
    "unitId": "fen-3-pdf-u1",
    "order": 1,
    "title": "Yer Kabu?u ve D?nya Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u1-s2",
    "unitId": "fen-3-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u1-s3",
    "unitId": "fen-3-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u1-s4",
    "unitId": "fen-3-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u2-s1",
    "unitId": "fen-3-pdf-u2",
    "order": 1,
    "title": "Besinlerimiz Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u2-s2",
    "unitId": "fen-3-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u2-s3",
    "unitId": "fen-3-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u2-s4",
    "unitId": "fen-3-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u3-s1",
    "unitId": "fen-3-pdf-u3",
    "order": 1,
    "title": "Kuvvetin Etkileri Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u3-s2",
    "unitId": "fen-3-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u3-s3",
    "unitId": "fen-3-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u3-s4",
    "unitId": "fen-3-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u4-s1",
    "unitId": "fen-3-pdf-u4",
    "order": 1,
    "title": "Maddenin ?zellikleri Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u4-s2",
    "unitId": "fen-3-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u4-s3",
    "unitId": "fen-3-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u4-s4",
    "unitId": "fen-3-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u5-s1",
    "unitId": "fen-3-pdf-u5",
    "order": 1,
    "title": "Ayd?nlatma ve Ses Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u5-s2",
    "unitId": "fen-3-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u5-s3",
    "unitId": "fen-3-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u5-s4",
    "unitId": "fen-3-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u6-s1",
    "unitId": "fen-3-pdf-u6",
    "order": 1,
    "title": "?nsan ve ?evre Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u6-s2",
    "unitId": "fen-3-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u6-s3",
    "unitId": "fen-3-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u6-s4",
    "unitId": "fen-3-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u7-s1",
    "unitId": "fen-3-pdf-u7",
    "order": 1,
    "title": "Basit Elektrik Devreleri Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u7-s2",
    "unitId": "fen-3-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u7-s3",
    "unitId": "fen-3-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u7-s4",
    "unitId": "fen-3-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u8-s1",
    "unitId": "fen-3-pdf-u8",
    "order": 1,
    "title": "Canl?lar ve Ya?am Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u8-s2",
    "unitId": "fen-3-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u8-s3",
    "unitId": "fen-3-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u8-s4",
    "unitId": "fen-3-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u9-s1",
    "unitId": "fen-3-pdf-u9",
    "order": 1,
    "title": "D?nya ve Evren Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u9-s2",
    "unitId": "fen-3-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u9-s3",
    "unitId": "fen-3-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u9-s4",
    "unitId": "fen-3-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-3-pdf-u10-s1",
    "unitId": "fen-3-pdf-u10",
    "order": 1,
    "title": "Bilimsel S?re?ler Nedir?",
    "content": "Bu ?nitede 3. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-3-pdf-u10-s2",
    "unitId": "fen-3-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-3-pdf-u10-s3",
    "unitId": "fen-3-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-3-pdf-u10-s4",
    "unitId": "fen-3-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-s1",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "order": 1,
    "title": "Okulumuzda Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-s2",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-s3",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-s4",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-s1",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "order": 1,
    "title": "Evimizde Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-s2",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-s3",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-s4",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-s1",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "order": 1,
    "title": "Sa?l?kl? Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-s2",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-s3",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-s4",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-s1",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "order": 1,
    "title": "G?venli Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-s2",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-s3",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-s4",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-s1",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "order": 1,
    "title": "Do?ada Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-s2",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-s3",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-s4",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-s1",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "order": 1,
    "title": "?lkemizde Hayat Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-s2",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-s3",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-s4",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-s1",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "order": 1,
    "title": "Kaynaklar? Koruma Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-s2",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-s3",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-s4",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-s1",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "order": 1,
    "title": "Trafik ve Kurallar Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-s2",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-s3",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-s4",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-s1",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "order": 1,
    "title": "Aile ve Sorumluluk Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-s2",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-s3",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-s4",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-s1",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "order": 1,
    "title": "G?nl?k Ya?am Becerileri Nedir?",
    "content": "Bu ?nitede 3. s?n?f Hayat Bilgisi ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-s2",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-s3",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-s4",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u1-s1",
    "unitId": "turkce-4-pdf-u1",
    "order": 1,
    "title": "S?zc?kte Anlam Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u1-s2",
    "unitId": "turkce-4-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u1-s3",
    "unitId": "turkce-4-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u1-s4",
    "unitId": "turkce-4-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u2-s1",
    "unitId": "turkce-4-pdf-u2",
    "order": 1,
    "title": "Z?t ve E? Anlam Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u2-s2",
    "unitId": "turkce-4-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u2-s3",
    "unitId": "turkce-4-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u2-s4",
    "unitId": "turkce-4-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u3-s1",
    "unitId": "turkce-4-pdf-u3",
    "order": 1,
    "title": "Okudu?unu Anlama Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u3-s2",
    "unitId": "turkce-4-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u3-s3",
    "unitId": "turkce-4-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u3-s4",
    "unitId": "turkce-4-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u4-s1",
    "unitId": "turkce-4-pdf-u4",
    "order": 1,
    "title": "Metin S?ralama Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u4-s2",
    "unitId": "turkce-4-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u4-s3",
    "unitId": "turkce-4-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u4-s4",
    "unitId": "turkce-4-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u5-s1",
    "unitId": "turkce-4-pdf-u5",
    "order": 1,
    "title": "G?rsel Okuma Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u5-s2",
    "unitId": "turkce-4-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u5-s3",
    "unitId": "turkce-4-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u5-s4",
    "unitId": "turkce-4-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u6-s1",
    "unitId": "turkce-4-pdf-u6",
    "order": 1,
    "title": "Noktalama Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u6-s2",
    "unitId": "turkce-4-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u6-s3",
    "unitId": "turkce-4-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u6-s4",
    "unitId": "turkce-4-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u7-s1",
    "unitId": "turkce-4-pdf-u7",
    "order": 1,
    "title": "Yaz?m Kurallar? Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u7-s2",
    "unitId": "turkce-4-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u7-s3",
    "unitId": "turkce-4-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u7-s4",
    "unitId": "turkce-4-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u8-s1",
    "unitId": "turkce-4-pdf-u8",
    "order": 1,
    "title": "Metin T?rleri Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u8-s2",
    "unitId": "turkce-4-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u8-s3",
    "unitId": "turkce-4-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u8-s4",
    "unitId": "turkce-4-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u9-s1",
    "unitId": "turkce-4-pdf-u9",
    "order": 1,
    "title": "Ana Fikir Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u9-s2",
    "unitId": "turkce-4-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u9-s3",
    "unitId": "turkce-4-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u9-s4",
    "unitId": "turkce-4-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "turkce-4-pdf-u10-s1",
    "unitId": "turkce-4-pdf-u10",
    "order": 1,
    "title": "Dil Bilgisi Nedir?",
    "content": "Bu ?nitede 4. s?n?f T?rk?e ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "turkce-4-pdf-u10-s2",
    "unitId": "turkce-4-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "turkce-4-pdf-u10-s3",
    "unitId": "turkce-4-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "turkce-4-pdf-u10-s4",
    "unitId": "turkce-4-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u1-s1",
    "unitId": "matematik-4-pdf-u1",
    "order": 1,
    "title": "Do?al Say?lar Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u1-s2",
    "unitId": "matematik-4-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u1-s3",
    "unitId": "matematik-4-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u1-s4",
    "unitId": "matematik-4-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u2-s1",
    "unitId": "matematik-4-pdf-u2",
    "order": 1,
    "title": "Toplama ?lemi Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u2-s2",
    "unitId": "matematik-4-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u2-s3",
    "unitId": "matematik-4-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u2-s4",
    "unitId": "matematik-4-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u3-s1",
    "unitId": "matematik-4-pdf-u3",
    "order": 1,
    "title": "?karma ?lemi Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u3-s2",
    "unitId": "matematik-4-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u3-s3",
    "unitId": "matematik-4-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u3-s4",
    "unitId": "matematik-4-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u4-s1",
    "unitId": "matematik-4-pdf-u4",
    "order": 1,
    "title": "?arpma ?lemi Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u4-s2",
    "unitId": "matematik-4-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u4-s3",
    "unitId": "matematik-4-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u4-s4",
    "unitId": "matematik-4-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u5-s1",
    "unitId": "matematik-4-pdf-u5",
    "order": 1,
    "title": "B?lme ?lemi Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u5-s2",
    "unitId": "matematik-4-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u5-s3",
    "unitId": "matematik-4-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u5-s4",
    "unitId": "matematik-4-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u6-s1",
    "unitId": "matematik-4-pdf-u6",
    "order": 1,
    "title": "Kesirler Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u6-s2",
    "unitId": "matematik-4-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u6-s3",
    "unitId": "matematik-4-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u6-s4",
    "unitId": "matematik-4-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u7-s1",
    "unitId": "matematik-4-pdf-u7",
    "order": 1,
    "title": "Geometri Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u7-s2",
    "unitId": "matematik-4-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u7-s3",
    "unitId": "matematik-4-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u7-s4",
    "unitId": "matematik-4-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u8-s1",
    "unitId": "matematik-4-pdf-u8",
    "order": 1,
    "title": "?l?me Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u8-s2",
    "unitId": "matematik-4-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u8-s3",
    "unitId": "matematik-4-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u8-s4",
    "unitId": "matematik-4-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u9-s1",
    "unitId": "matematik-4-pdf-u9",
    "order": 1,
    "title": "Veri ve Grafik Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u9-s2",
    "unitId": "matematik-4-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u9-s3",
    "unitId": "matematik-4-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u9-s4",
    "unitId": "matematik-4-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "matematik-4-pdf-u10-s1",
    "unitId": "matematik-4-pdf-u10",
    "order": 1,
    "title": "Problem ?zme Nedir?",
    "content": "Bu ?nitede 4. s?n?f Matematik ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "matematik-4-pdf-u10-s2",
    "unitId": "matematik-4-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "matematik-4-pdf-u10-s3",
    "unitId": "matematik-4-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "matematik-4-pdf-u10-s4",
    "unitId": "matematik-4-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u1-s1",
    "unitId": "fen-4-pdf-u1",
    "order": 1,
    "title": "Yer Kabu?u ve D?nya Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u1-s2",
    "unitId": "fen-4-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u1-s3",
    "unitId": "fen-4-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u1-s4",
    "unitId": "fen-4-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u2-s1",
    "unitId": "fen-4-pdf-u2",
    "order": 1,
    "title": "Besinlerimiz Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u2-s2",
    "unitId": "fen-4-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u2-s3",
    "unitId": "fen-4-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u2-s4",
    "unitId": "fen-4-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u3-s1",
    "unitId": "fen-4-pdf-u3",
    "order": 1,
    "title": "Kuvvetin Etkileri Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u3-s2",
    "unitId": "fen-4-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u3-s3",
    "unitId": "fen-4-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u3-s4",
    "unitId": "fen-4-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u4-s1",
    "unitId": "fen-4-pdf-u4",
    "order": 1,
    "title": "Maddenin ?zellikleri Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u4-s2",
    "unitId": "fen-4-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u4-s3",
    "unitId": "fen-4-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u4-s4",
    "unitId": "fen-4-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u5-s1",
    "unitId": "fen-4-pdf-u5",
    "order": 1,
    "title": "Ayd?nlatma ve Ses Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u5-s2",
    "unitId": "fen-4-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u5-s3",
    "unitId": "fen-4-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u5-s4",
    "unitId": "fen-4-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u6-s1",
    "unitId": "fen-4-pdf-u6",
    "order": 1,
    "title": "?nsan ve ?evre Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u6-s2",
    "unitId": "fen-4-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u6-s3",
    "unitId": "fen-4-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u6-s4",
    "unitId": "fen-4-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u7-s1",
    "unitId": "fen-4-pdf-u7",
    "order": 1,
    "title": "Basit Elektrik Devreleri Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u7-s2",
    "unitId": "fen-4-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u7-s3",
    "unitId": "fen-4-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u7-s4",
    "unitId": "fen-4-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u8-s1",
    "unitId": "fen-4-pdf-u8",
    "order": 1,
    "title": "Canl?lar ve Ya?am Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u8-s2",
    "unitId": "fen-4-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u8-s3",
    "unitId": "fen-4-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u8-s4",
    "unitId": "fen-4-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u9-s1",
    "unitId": "fen-4-pdf-u9",
    "order": 1,
    "title": "D?nya ve Evren Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u9-s2",
    "unitId": "fen-4-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u9-s3",
    "unitId": "fen-4-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u9-s4",
    "unitId": "fen-4-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "fen-4-pdf-u10-s1",
    "unitId": "fen-4-pdf-u10",
    "order": 1,
    "title": "Bilimsel S?re?ler Nedir?",
    "content": "Bu ?nitede 4. s?n?f Fen Bilimleri ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "fen-4-pdf-u10-s2",
    "unitId": "fen-4-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "fen-4-pdf-u10-s3",
    "unitId": "fen-4-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "fen-4-pdf-u10-s4",
    "unitId": "fen-4-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u1-s1",
    "unitId": "sosyal-4-pdf-u1",
    "order": 1,
    "title": "Herkesin Bir Kimli?i Var Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u1-s2",
    "unitId": "sosyal-4-pdf-u1",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u1-s3",
    "unitId": "sosyal-4-pdf-u1",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u1-s4",
    "unitId": "sosyal-4-pdf-u1",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u2-s1",
    "unitId": "sosyal-4-pdf-u2",
    "order": 1,
    "title": "K?lt?r ve Miras Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u2-s2",
    "unitId": "sosyal-4-pdf-u2",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u2-s3",
    "unitId": "sosyal-4-pdf-u2",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u2-s4",
    "unitId": "sosyal-4-pdf-u2",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u3-s1",
    "unitId": "sosyal-4-pdf-u3",
    "order": 1,
    "title": "Ya?ad?m?z Yer Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u3-s2",
    "unitId": "sosyal-4-pdf-u3",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u3-s3",
    "unitId": "sosyal-4-pdf-u3",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u3-s4",
    "unitId": "sosyal-4-pdf-u3",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u4-s1",
    "unitId": "sosyal-4-pdf-u4",
    "order": 1,
    "title": "Teknoloji ve Toplum Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u4-s2",
    "unitId": "sosyal-4-pdf-u4",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u4-s3",
    "unitId": "sosyal-4-pdf-u4",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u4-s4",
    "unitId": "sosyal-4-pdf-u4",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u5-s1",
    "unitId": "sosyal-4-pdf-u5",
    "order": 1,
    "title": "?retim ve T?ketim Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u5-s2",
    "unitId": "sosyal-4-pdf-u5",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u5-s3",
    "unitId": "sosyal-4-pdf-u5",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u5-s4",
    "unitId": "sosyal-4-pdf-u5",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u6-s1",
    "unitId": "sosyal-4-pdf-u6",
    "order": 1,
    "title": "Etkin Vatanda?l?k Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u6-s2",
    "unitId": "sosyal-4-pdf-u6",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u6-s3",
    "unitId": "sosyal-4-pdf-u6",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u6-s4",
    "unitId": "sosyal-4-pdf-u6",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u7-s1",
    "unitId": "sosyal-4-pdf-u7",
    "order": 1,
    "title": "?nsanlar ve Y?netim Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u7-s2",
    "unitId": "sosyal-4-pdf-u7",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u7-s3",
    "unitId": "sosyal-4-pdf-u7",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u7-s4",
    "unitId": "sosyal-4-pdf-u7",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u8-s1",
    "unitId": "sosyal-4-pdf-u8",
    "order": 1,
    "title": "Ge?mi?ten Bug?ne Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u8-s2",
    "unitId": "sosyal-4-pdf-u8",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u8-s3",
    "unitId": "sosyal-4-pdf-u8",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u8-s4",
    "unitId": "sosyal-4-pdf-u8",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u9-s1",
    "unitId": "sosyal-4-pdf-u9",
    "order": 1,
    "title": "Kaynaklar?m?z Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u9-s2",
    "unitId": "sosyal-4-pdf-u9",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u9-s3",
    "unitId": "sosyal-4-pdf-u9",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u9-s4",
    "unitId": "sosyal-4-pdf-u9",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  },
  {
    "id": "sosyal-4-pdf-u10-s1",
    "unitId": "sosyal-4-pdf-u10",
    "order": 1,
    "title": "Bilim ve De?i?im Nedir?",
    "content": "Bu ?nitede 4. s?n?f Sosyal Bilgiler ?al?ma kitab?ndaki sorulara haz?rlanacaks?n.",
    "example": "?nce soru k?k?n? dikkatle oku, sonra se?enekleri tek tek kar?la?t?r."
  },
  {
    "id": "sosyal-4-pdf-u10-s2",
    "unitId": "sosyal-4-pdf-u10",
    "order": 2,
    "title": "Dikkat Et",
    "content": "Sorular ?al?ma kitab?ndaki yap?ya yak?n tutuldu. Alt? ?izili kelimeler, i?lem ad?mlar? ve verilen bilgiler cevap i?in ipucu verir.",
    "example": "Anahtar kelimeleri i?aretlemek do?ru cevab? bulmay? kolayla?t?r?r."
  },
  {
    "id": "sosyal-4-pdf-u10-s3",
    "unitId": "sosyal-4-pdf-u10",
    "order": 3,
    "title": "Nas?l ?zerim?",
    "content": "?nce verilenleri belirle, sonra isteneni bul. Emin olmad?n se?enekleri eleyerek ilerle.",
    "example": "Yanl? se?enekler de konuya yak?n olabilir; bu y?zden hepsini oku."
  },
  {
    "id": "sosyal-4-pdf-u10-s4",
    "unitId": "sosyal-4-pdf-u10",
    "order": 4,
    "title": "Mini Tekrar",
    "content": "K?sa tekrar?n ard?ndan 10 soruluk testle konuyu peki?tireceksin.",
    "example": "Haz?rsan teste ge? ve en az %60 ba?ar? hedefle."
  }
];

export const pdfQuestions: Question[] = [
  {
    "id": "turkce-2-pdf-u1-q1",
    "unitId": "turkce-2-pdf-u1",
    "text": "Bahar geldi. Sürüler yaylalarına döndü. Yamaçlardaki tüm ağaçlar çeşit çeşit renklere büründü. Bu, baharın tabiat üzerinde meydana getirdiği renk cümbüşüydü. Bu metindeki altı çizili ifadenin anlamı aşağıdakilerden hangisidir...",
    "options": [
      "Her yerin tek renge boyanmış olma durumu",
      "Türlü renklerin oluşturduğu karışım",
      "Renkleri inceleyen bilim dalı",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Türlü renklerin oluşturduğu karışım"
  },
  {
    "id": "turkce-2-pdf-u1-q2",
    "unitId": "turkce-2-pdf-u1",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi, anlam bakımından diğerlerinden farklıdır...",
    "options": [
      "Ayağındaki çorabın biri hâlâ yaştı.",
      "İki yaşında konuşmaya başladı.",
      "...aç yaşındasınız... sorusu, onu şaşırttı.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ayağındaki çorabın biri hâlâ yaştı."
  },
  {
    "id": "turkce-2-pdf-u1-q3",
    "unitId": "turkce-2-pdf-u1",
    "text": "...Dolu... kelimesi aşağıdakilerin hangisinde diğerlerinden farklı anlamda kullanılmıştır...",
    "options": [
      "Otobüs çok dolu olduğu için binemedi.",
      "Dolu çekmecenin içinde aradığını bulamadı.",
      "Sabaha kadar yağan dolu beni bir türlü uyutmadı.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sabaha kadar yağan dolu beni bir türlü uyutmadı."
  },
  {
    "id": "turkce-2-pdf-u1-q4",
    "unitId": "turkce-2-pdf-u1",
    "text": "...Geçmek££... kelimesi aşağıdakilerin hangisinde ...geride bırakmak££... anlamında kullanılmıştır...",
    "options": [
      "Yavaş yavaş bu hırs geçer.",
      "Bu titizlik ona ailesinden geçmiş.",
      "Bizim yelkenli, öbür tekneyi geçti.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bizim yelkenli, öbür tekneyi geçti."
  },
  {
    "id": "turkce-2-pdf-u1-q5",
    "unitId": "turkce-2-pdf-u1",
    "text": "...Acı... kelimesi aşağıdaki cümlelerin hangisinde ...kırıcı, üzücü... anlamında kullanılmıştır...",
    "options": [
      "Acı kahvesini yudumluyordu.",
      "Acı söz insanı incitir.",
      "Acı poyraz kuvvetle esiyordu.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Acı söz insanı incitir."
  },
  {
    "id": "turkce-2-pdf-u1-q6",
    "unitId": "turkce-2-pdf-u1",
    "text": "...alkmak... kelimesi, aşağıdakilerin hangisinde ...yukarı doğru yükselmek... anlamında kullanılmıştır...",
    "options": [
      "Çocuklar odada tepiştikçe toz kalkıyor.",
      "Öğleye geliyordu ama Hilal daha yeni kalkmıştı.",
      "ar kalkınca köylere ulaşım kolaylaştı.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Çocuklar odada tepiştikçe toz kalkıyor."
  },
  {
    "id": "turkce-2-pdf-u1-q7",
    "unitId": "turkce-2-pdf-u1",
    "text": "...Açık... kelimesi, aşağıdakilerin hangisinde ...engelsiz, serbest... anlamında kullanılmıştır...",
    "options": [
      "Açıklarda yüzmek her zaman tehlikelidir.",
      "Olumsuz hava şartlarına rağmen yol açıktı.",
      "Geceleri burada açık bir lokanta bulabiliriz.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Olumsuz hava şartlarına rağmen yol açıktı."
  },
  {
    "id": "turkce-2-pdf-u1-q8",
    "unitId": "turkce-2-pdf-u1",
    "text": "Aşağıdaki cümlelerin hangisinde ...birlikte, beraberce... anlamına gelen bir söz kullanılmıştır...",
    "options": [
      "Bahçıvanla sabahtan beri baş başa çalıştık.",
      "Her biri kendi evinde gece gündüz çalışıyordu.",
      "Aynı ses tonuyla defalarca şiir okuyabiliyordu.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bahçıvanla sabahtan beri baş başa çalıştık."
  },
  {
    "id": "turkce-2-pdf-u1-q9",
    "unitId": "turkce-2-pdf-u1",
    "text": "emal’in çalışma azmini arttıran, babasının sağlığındaki iyiye doğru gidişti. Doktorunun dediği gibi, babasında ...mucizevi bir değişiklik... olmuştu. Artık hastalığından kurtulmuş sayılırdı. Doktorun bunu söylediği gün, evde gerçekten bir bayram havası esmişti. Bu metne göre ...mucizevi... kelimesinin anlamı aşağıdakilerden hangisidir...",
    "options": [
      "Olması beklenen, şaşkınlık uyandırmayan",
      "Yeterli, yetecek miktarda olan",
      "Olağanüstü niteliklere sahip",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Olağanüstü niteliklere sahip"
  },
  {
    "id": "turkce-2-pdf-u1-q10",
    "unitId": "turkce-2-pdf-u1",
    "text": "arış Numaralanmış kelimelerin sözlük sırasına göre dizilişi aşağıdakilerden hangisidir...",
    "options": [
      "1 - 3 - 4 - 2",
      "3 - 2 - 1 - 4",
      "3 - 1 - 4 - 2",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3 - 1 - 4 - 2"
  },
  {
    "id": "turkce-2-pdf-u2-q1",
    "unitId": "turkce-2-pdf-u2",
    "text": "Sabah - Sandalye - ★ - Sepet Bu kelimeler alfabetik olarak sıralandığında ★ olan yere aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "Saman",
      "Sandık",
      "Sergi",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Sandık"
  },
  {
    "id": "turkce-2-pdf-u2-q2",
    "unitId": "turkce-2-pdf-u2",
    "text": "Beyaz örtünün üstündeki siyah leke dikkat çekiyordu. Bu cümledeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerin hangisinde vardır...",
    "options": [
      "Sağlık - sıhhat",
      "Sıcak - soğuk",
      "Tamir - onarım",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Sıcak - soğuk"
  },
  {
    "id": "turkce-2-pdf-u2-q3",
    "unitId": "turkce-2-pdf-u2",
    "text": "Bugün hava soğuk olduğundan bahçeye çıkamadık. Bu cümledeki altı çizili kelimenin karşıt anlamlısı aşağıdakilerin hangisinde kullanılmıştır...",
    "options": [
      "Bu yaz havanın çok sıcak olacağı söyleniyor.",
      "Sabah dışarı çıktığımda hava çok serindi.",
      "Bacaklarımın ağrısı yağmurlu havalarda artıyor.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bu yaz havanın çok sıcak olacağı söyleniyor."
  },
  {
    "id": "turkce-2-pdf-u2-q4",
    "unitId": "turkce-2-pdf-u2",
    "text": "Hayat, kendiliğinden ne iyi ne de kötüdür; ona iyiliği kötülüğü katan sizsiniz. Bu cümledeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerin hangisinde vardır...",
    "options": [
      "doğru - dürüst",
      "vakit - zaman",
      "var - yok",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: var - yok"
  },
  {
    "id": "turkce-2-pdf-u2-q5",
    "unitId": "turkce-2-pdf-u2",
    "text": "Yaşıtlarına göre uzun bir çocuktu. Bu cümledeki altı çizili kelimenin karşıt anlamlısı aşağıdakilerin hangisinde kullanılmıştır...",
    "options": [
      "Arkadaşımın çok zayıf bir kedisi vardı.",
      "ısa olmasına rağmen her yere yetişiyordu.",
      "Evin küçük bahçesinde meyve ağaçları vardı.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: ısa olmasına rağmen her yere yetişiyordu."
  },
  {
    "id": "turkce-2-pdf-u2-q6",
    "unitId": "turkce-2-pdf-u2",
    "text": "öyün üst tarafındaki kulübenin önünde ateş yanıyor. Bu cümledeki altı çizili kelimenin zıt anlamlısı aşağıdakilerden hangisidir...",
    "options": [
      "Arka",
      "Yan",
      "Alt",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Alt"
  },
  {
    "id": "turkce-2-pdf-u2-q7",
    "unitId": "turkce-2-pdf-u2",
    "text": "Biz Uğur ile farklı mahallelerde oturuyoruz. Bu cümledeki altı çizili kelimenin karşıtı aşağıdakilerden hangisidir...",
    "options": [
      "Yakın",
      "Aynı",
      "Değişik",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Aynı"
  },
  {
    "id": "turkce-2-pdf-u2-q8",
    "unitId": "turkce-2-pdf-u2",
    "text": "Aşağıdaki cümlelerin hangisinde zıt anlamlı kelimeler bir arada kullanılmıştır...",
    "options": [
      "Bahçeden içeri girdiğimizde meyve ağaçlarını gördük.",
      "Ablam ve ben her sabah kedileri besleriz.",
      "uş Cenneti’nde yer gök kuşlarla doluydu.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: uş Cenneti’nde yer gök kuşlarla doluydu."
  },
  {
    "id": "turkce-2-pdf-u2-q9",
    "unitId": "turkce-2-pdf-u2",
    "text": "Aşağıdaki cümlelerin hangisinde zıt anlamlı kelimeler bir arada kullanılmamıştır...",
    "options": [
      "Soğukta kalan bebeğin minicik elleri buz gibiydi.",
      "Sabah erken kalkmalı, akşam erken yatmalıyız.",
      "Ben dışarı çıkarken babam içeri girdi. LILARINI TAHMİN EDER.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Soğukta kalan bebeğin minicik elleri buz gibiydi."
  },
  {
    "id": "turkce-2-pdf-u2-q10",
    "unitId": "turkce-2-pdf-u2",
    "text": "Aşağıdaki kelime çiftlerinden hangisi eş anlamlıdır...",
    "options": [
      "Uzun - ısa",
      "Zor - olay",
      "Güçlü - uvvetli",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Güçlü - uvvetli"
  },
  {
    "id": "turkce-2-pdf-u3-q1",
    "unitId": "turkce-2-pdf-u3",
    "text": "Aşağıdaki eşleştirmelerden hangisi aralarındaki anlam ilişkisine göre farklıdır...",
    "options": [
      "Güzel - çirkin",
      "Yumuşak - sert",
      "ötü - fena",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: ötü - fena"
  },
  {
    "id": "turkce-2-pdf-u3-q2",
    "unitId": "turkce-2-pdf-u3",
    "text": "Zaman, birçok şeyi değiştirir ama eski dostları değiştirmez. Her vakit bahane bulur işini yapmayan. Altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerin hangisinde vardır...",
    "options": [
      "Bardak - Cam",
      "Fakir - Yoksul",
      "Tarla - Toprak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Fakir - Yoksul"
  },
  {
    "id": "turkce-2-pdf-u3-q3",
    "unitId": "turkce-2-pdf-u3",
    "text": "Aşağıdakilerin hangisinde altı çizili kelimenin eş anlamlısı yay ayraç ( ) içinde doğru verilmiştir...",
    "options": [
      "Ben hür doğdum, hür yaşarım. (özgür)",
      "Bu masayı biraz ileri çekelim. (geri)",
      "Bazı yerlerde mola verdik. (durak) SORULARI CEVAPLAR.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ben hür doğdum, hür yaşarım. (özgür)"
  },
  {
    "id": "turkce-2-pdf-u3-q4",
    "unitId": "turkce-2-pdf-u3",
    "text": "Aşağıdaki yüz ifadelerinin hangisinden kişinin ...mutlu... olduğu anlaşılır...",
    "options": [
      "B)",
      "2. Bu afişte verilen mesaj aşağıdakilerden hangisidir...",
      "Emniyet kemeri, arka koltukta da takılmalıdır.",
      "Emniyet kemeri, sizin en yakın arkadaşınızdır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "turkce-2-pdf-u3-q5",
    "unitId": "turkce-2-pdf-u3",
    "text": "Aşağıdaki yüz ifadelerinden hangisi, yay ayraç ( ) içinde verilen duyguya uygundur...",
    "options": [
      "(Öfke)",
      "(orku)",
      "(Üzüntü) 5. T.C. TARIM VE ORMAN BAANLIĞI Bu afişte verilen mesaj, aşağıdakilerden hangisidir...",
      "Ormanları, fidanlar dikerek koruyabiliriz."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: (orku)"
  },
  {
    "id": "turkce-2-pdf-u3-q6",
    "unitId": "turkce-2-pdf-u3",
    "text": "Yeni demirleyen ...oleksiyoncu££... adlı gemi yazlıktaki çocukların dikkatini çeker. Geminin kaptanı da onlara çok gizemli gelir. Çocukların gemiye çıkmak istediklerini gören kaptan onlara beklemedikleri bir davette bulunur. Bu metni en iyi ifade eden görsel aşağıdakilerden hangisidir...",
    "options": [
      "B)",
      "8. Olayların oluş sırasına göre, bu görsellerin dizilişi aşağıdakilerden hangisidir...",
      "4 - 1 - 2 - 3",
      "4 - 1 - 3 - 2"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 8. Olayların oluş sırasına göre, bu görsellerin dizilişi aşağıdakilerden hangisidir..."
  },
  {
    "id": "turkce-2-pdf-u3-q7",
    "unitId": "turkce-2-pdf-u3",
    "text": "Bu tür palyaçolar abartılı hareketleri ile halk arasında en sevilen palyaçolardır. Makyajları da beyaz yüzlü palyaçolardan farklıdır. Onlar, yüzlerine beyaz boya sürmek yerine ten rengi boyalar sürerler. Makyajlarında gösterişli renkler tercih ederler. Makyajla ağızlarını kocaman, gözlerini büyük gösterirler. Burunlarını ise kırmızıya boyarlar. Bu metinde sözü edilen palyaço görseli aşağıdakilerden hangisidir...",
    "options": [
      "B)",
      "D)",
      "B)",
      "D)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "turkce-2-pdf-u3-q8",
    "unitId": "turkce-2-pdf-u3",
    "text": "ırgızlar, geçmişte belirli bir yurtta yaşamadan, sürekli yer değiştirerek göçebe bir hayat sürmüşlerdi. ültürleri de bu hayat tarzıyla şekillenmişti. ırgız erkekleri, çadır kurup at yetiştirir ve dericilik işleriyle uğraşırdı. adınları ise kilim dokuyup, el işi yaparak geçimlerini sağlardı. Geçim kaynaklarından biri de küçükbaş hayvancılıktı. Aşağıdaki görsellerden hangisi bu metinde anlatılanlarla ilgili değildir...",
    "options": [
      "A)",
      "C)",
      "B)",
      "B)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "turkce-2-pdf-u3-q9",
    "unitId": "turkce-2-pdf-u3",
    "text": "urutulmuş incirler üst üste konur ve bıçakla ince ince doğranır. Numaralanmış cümleler olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "2 - 1 - 3 - 4",
      "2 - 1 - 4 - 3",
      "2 - 4 - 1 - 3 Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 2 - 1 - 3 - 4"
  },
  {
    "id": "turkce-2-pdf-u3-q10",
    "unitId": "turkce-2-pdf-u3",
    "text": "Ağzına değen kuru ot parçalarından birkaçını kopardı. Numaralanmış cümleler, olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "2 - 4 - 1 - 3",
      "1 - 3 - 2 - 4",
      "3 - 2 - 4 - 1 ( ted 12.soru)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3 - 2 - 4 - 1 ( ted 12.soru)"
  },
  {
    "id": "turkce-2-pdf-u4-q1",
    "unitId": "turkce-2-pdf-u4",
    "text": "Onlarla uzun süre yüzme yarışı yaptı. Numaralanmış cümleler, olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "2 - 3 - 1 - 4",
      "2 - 4 - 1 - 3",
      "2 - 1 - 4 - 3",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 2 - 4 - 1 - 3"
  },
  {
    "id": "turkce-2-pdf-u4-q2",
    "unitId": "turkce-2-pdf-u4",
    "text": "Yeliz evden çıktıktan - - - - bahçede biraz yürüdü. - - - - saksıların içinden fesleğen yapraklarını kopardı. - - - - birkaç yaprağı parmaklarının arasında ezdi. Bu metinde boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir...",
    "options": [
      "sonra - Önce - Sonra",
      "önce - Önce - Sonra",
      "önce - Sonra - Daha sonra",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: önce - Önce - Sonra"
  },
  {
    "id": "turkce-2-pdf-u4-q3",
    "unitId": "turkce-2-pdf-u4",
    "text": "Veteriner önce Pati’nin kulaklarını muayene etmiş. Numaralanmış cümleler olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "2 - 1 - 4 - 3",
      "2 - 4 - 1 - 3",
      "3 - 2 - 1 - 4 NUSUNU BELİRLER.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3 - 2 - 1 - 4 NUSUNU BELİRLER."
  },
  {
    "id": "turkce-2-pdf-u4-q4",
    "unitId": "turkce-2-pdf-u4",
    "text": "Güneş sistemindeki dokuz gezegen arasında, kuşkusuz en çok merak edileni Mars’tır. ırmızı rengiyle eski çağlardan bu yana ilgi çeken bu gezegen, yirminci yüzyılda da sulama kanallarına benzeyen yüzey şekilleriyle dikkat çekmiş, bu yüzden de bilim kurgu romanlarında sıkça yer almıştır. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Güneş sistemi",
      "Mars gezegeni",
      "Bilim kurgu romanları",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Mars gezegeni"
  },
  {
    "id": "turkce-2-pdf-u4-q5",
    "unitId": "turkce-2-pdf-u4",
    "text": "Elektronik kitaplar, normal kitaplara göre daha avantajlılar çünkü dağıtım masrafı olmadığı için hesaplılar ve kâğıda basılmadıkları için ağaçlar kesilmiyor. İstediğiniz an, istediğiniz kitaba erişebilmeniz de mümkün. Üstelik yazı boyutunu küçültüp büyütebilir ve ekran parlaklığını da ayarlayabiliriz. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Eğitimdeki gelişmeler",
      "Elektronik kitaplar",
      "Bilgiye ulaşmanın yolları",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Eğitimdeki gelişmeler"
  },
  {
    "id": "turkce-2-pdf-u4-q6",
    "unitId": "turkce-2-pdf-u4",
    "text": "Çöller dünya üzerindeki en kurak bölgelerdir; kumlu, kayalıklı ya da çakıllı olabilir. Sadece yırtıcı hayvanlar burada barınabilir. Çöl hayvanları çetin koşullarla mücadele edecek pek çok yol üretmişlerdir. Pek çoğu uzun süre susuz yaşayabilmektedir. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Çölde yaşam",
      "Susuzluk ve hayvanlar",
      "Dünyadaki çöller",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Susuzluk ve hayvanlar"
  },
  {
    "id": "turkce-2-pdf-u4-q7",
    "unitId": "turkce-2-pdf-u4",
    "text": "Derelerde, göllerde Göklerimde sen varsın. Bulut bulut yükselir, Yağmur olur yağarsın. Bu şiirin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Gökyüzü",
      "Dünya",
      "Su",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gökyüzü"
  },
  {
    "id": "turkce-2-pdf-u4-q8",
    "unitId": "turkce-2-pdf-u4",
    "text": "Ağrı Dağı’na özellikle Nuh’un gemisi efsanesi sayesinde binlerce dağcı tırmanıyor. Ağrı Dağı, yüksek ama aynı zamanda tırmanması kolay bir dağdır. Dedegöl Dağları da sportif kaya tırmanışının merkezi olma yolunda ilerliyor. Aladağlar ise onlarca zirvesiyle âdeta bir tırmanma bahçesi. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Türkiye’de dağcılığa uygun dağlar",
      "Dağların turizme etkisi",
      "Dağcılık sporunun zorlukları",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dağların turizme etkisi"
  },
  {
    "id": "turkce-2-pdf-u4-q9",
    "unitId": "turkce-2-pdf-u4",
    "text": "Bir fotoğrafçı için kış mevsimi ilgi çekicidir. ış şartları eşsiz güzellikler sunan doğayı, fotoğraflanmaya değer kılar. Etkilendiğimiz çoğu manzara fotoğrafı, böyle havalarda çekilmiştir. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "ış mevsimi",
      "Fotoğrafçılığın zorlukları",
      "ış fotoğrafları",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Fotoğrafçılığın zorlukları"
  },
  {
    "id": "turkce-2-pdf-u4-q10",
    "unitId": "turkce-2-pdf-u4",
    "text": "Severek isteyerek ...Başarırım... diyerek Her zora göğüs germek Ne güzel oh, ne iyi Seller gibi taşarak Binbir engel aşarak azanmak uğraşarak Ne güzel oh, ne iyi Bu şiirin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Anlayışlı olmak",
      "Azimli olmak",
      "Yardımsever olmak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Azimli olmak"
  },
  {
    "id": "turkce-2-pdf-u5-q1",
    "unitId": "turkce-2-pdf-u5",
    "text": "Atalarım, gökten yere İndirmişler ay yıldızı Bir buluta sarmışlar ki Rengi şafaktan kırmızı Bu şiirin konusu aşağıdakilerin hangisidir...",
    "options": [
      "Bayrak",
      "Vatan",
      "Renkler İLGİLİ SORULARI CEVAPLAR.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bayrak"
  },
  {
    "id": "turkce-2-pdf-u5-q2",
    "unitId": "turkce-2-pdf-u5",
    "text": "Her yerden daha güzel, Bizim için burası. Okul, sevgili okul, Neşe bilgi yuvası. Bu şiire göre okul için aşağıdakilerden hangisi söylenemez...",
    "options": [
      "Güzel olduğu",
      "Çocukları mutlu ettiği",
      "alabalık olduğu",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: alabalık olduğu"
  },
  {
    "id": "turkce-2-pdf-u5-q3",
    "unitId": "turkce-2-pdf-u5",
    "text": "Merhaba çocuklar, sizi gördüğüm için çok sevinçliyim. Bu yıl beni daha zevkle okuyacağınıza inanıyorum. Hatta sizinle daha iyi arkadaş olacağız. Beni daha çok seveceksiniz. Bu metinde konuşan aşağıdakilerden hangisidir...",
    "options": [
      "Arkadaş",
      "itap",
      "Oyun",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Arkadaş"
  },
  {
    "id": "turkce-2-pdf-u5-q4",
    "unitId": "turkce-2-pdf-u5",
    "text": "Yaz tatilini dayımlarda geçiriyordum. Onlar bir kıyı kasabasında oturuyordu. Orada birçok arkadaşım vardı. Hemen her gün onlarla buluşuyor, oyunlar oynuyorduk. Ama denize giremiyorduk. Çünkü deniz pisti. Bu duruma çok üzülüyordum. Bu metne göre çocuk neye üzülmektedir...",
    "options": [
      "Arkadaşının az olmasına",
      "Oyun oynayamadığına",
      "Denizin pis olmasına",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Denizin pis olmasına"
  },
  {
    "id": "turkce-2-pdf-u5-q5",
    "unitId": "turkce-2-pdf-u5",
    "text": "Sokakta oynayan çocukların topu çöplüğe kaçtı. Çöplükte yaşayan bir mikrop da hemen topun üzerine çıkıverdi. Çöplüğe kaçan topu Ahmet almaya geldi. Mikrop topun üzerinden Ahmet’in eline geçti. Ahmet eve dönünce ellerini yıkamadan yemeğe oturdu. Mikrop da yediği ekmeğe geçerek ağzından içeri girdi. Bu metne göre Ahmet’in yaptığı hatalı davranış nedir...",
    "options": [
      "Annesinin sözünü dinlememesi",
      "Topu çöplüğe atması",
      "Ellerini yıkamadan yemek yemesi",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Topu çöplüğe atması"
  },
  {
    "id": "turkce-2-pdf-u5-q6",
    "unitId": "turkce-2-pdf-u5",
    "text": "Çok üretip az harca, Rastgele lamba açma, Suyu boşa akıtma, Geleceği unutma. Bu şiirde aşağıdakilerden hangisi öğütlenmemiştir...",
    "options": [
      "Tutumlu olmak",
      "Mutlu olmak",
      "Çalışkan olmak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tutumlu olmak"
  },
  {
    "id": "turkce-2-pdf-u5-q7",
    "unitId": "turkce-2-pdf-u5",
    "text": "Sabah artık gözünü erken açar, Ta uzakta meleşirler kuzular, Her kuşun, her kuzunun neşesi var; Ey çocuklar! Sevinin geldi bahar. Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Bahar sevinci",
      "Hayvan sevgisi",
      "Doğaya özlem",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Doğaya özlem"
  },
  {
    "id": "turkce-2-pdf-u5-q8",
    "unitId": "turkce-2-pdf-u5",
    "text": "Büyükler çoğu kez oyun konusunda pek de anlayışlı olamıyorlar. Üstünüz başınız kirlenir, düşersiniz, diye oynamayı yasaklamaya çalışıyorlar. Oysa oyun oynamak çocuk için bir ihtiyaçtır. Çünkü çocuk; arkadaşlığı, dayanışmayı, özveriyi ve karşılaştığı zorlukları aşmayı hep oyunda öğrenir. Bu metinde, asıl anlatılmak istenen aşağıdakilerden hangisidir...",
    "options": [
      "Oyun oynarken dikkatli olmak gerekir.",
      "Oyuncaklarımızı arkadaşlarımızla paylaşmalıyız.",
      "Oyun, çocukları hayata hazırlayan bir araçtır.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Oyuncaklarımızı arkadaşlarımızla paylaşmalıyız."
  },
  {
    "id": "turkce-2-pdf-u5-q9",
    "unitId": "turkce-2-pdf-u5",
    "text": "Sarıkamış’ı duymuşsunuzdur. Burası, etrafı ormanlarla çevrili; havası, suyu sağlık kaynağı olan şirin bir ilçemizdir. İşte bu ilçemizde, geçen yıllara kadar sel nedir bilinmezdi. Ama son yıllarda şiddetli bir yağmur yağdı mı hemen şehrin bazı semtleri sel altında kalıyor. Bunun sebebini herkes biliyor; bu durum, çevredeki ormanları seneden seneye tüketmenin bir sonucudur. Aşağıdakilerden hangisi metinde belirtilen ...sorun...un çözümlerinden biri değildir...",
    "options": [
      "Ağaçların çokça bulunduğu alanlara yerleşmek",
      "Ağaçlandırma çalışmaları için halkı teşvik etmek",
      "Ağaçların bilinçsizce kesilmesini engelleyici tedbirler almak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Ağaçların bilinçsizce kesilmesini engelleyici tedbirler almak"
  },
  {
    "id": "turkce-2-pdf-u5-q10",
    "unitId": "turkce-2-pdf-u5",
    "text": "İnsanların çoğu, kendi hatalarının görülmesini, bilinmesini asla istemezler. endilerine yapılacak uyarılar karşısında sevinmeleri gerekirken hemen kırılırlar, gücenirler. Ama başkalarının hatalarını yanlış ve gülünç yönlerini dinlemekten de ne yazık ki pek hoşlanırlar. Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir...",
    "options": [
      "İnsanların hatalarını görmezlikten gelmeliyiz.",
      "Her insanın iyi bir dosta ihtiyacı vardır.",
      "Birçok insan, kendi hataları yerine başkalarının hatalarıyla ilgilenir.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Birçok insan, kendi hataları yerine başkalarının hatalarıyla ilgilenir."
  },
  {
    "id": "turkce-2-pdf-u6-q1",
    "unitId": "turkce-2-pdf-u6",
    "text": "Sabah olur doğarsın. Yıldızlarsın her yanı. Fakat neden batarsın, Her gün akşam zamanı... Bu şiirde seslenilen varlık aşağıdakilerden hangisidir...",
    "options": [
      "Güneş",
      "Dünya",
      "Ay",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dünya"
  },
  {
    "id": "turkce-2-pdf-u6-q2",
    "unitId": "turkce-2-pdf-u6",
    "text": "Soğuk havanın doğrudan ciğerlere çekilmesiyle solunum yolu hastalıkları artış gösteriyor. Ağız ve burnu kapatacak şekilde takılan giysiler, filtre görevi yaptığından insan vücuduna oldukça faydası var. Ancak bu giysiler, temizliğine dikkat edilmediğinde solunum yolu hastalıklarına neden oluyor. Bu metinde belirtilen ...sorun...un en etkili çözümü aşağıdakilerden hangisidir...",
    "options": [
      "alabalık ortamlardan uzak yerleri tercih etmek",
      "Hastane, sağlık ocağı gibi yerlerde uzun süre kalmamak",
      "Atkı, bere, eldiven gibi giysileri temiz tutarak kullanmak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: alabalık ortamlardan uzak yerleri tercih etmek"
  },
  {
    "id": "turkce-2-pdf-u6-q3",
    "unitId": "turkce-2-pdf-u6",
    "text": "Aşağıdaki cümlelerden hangisinde ...Ne zaman... sorusunun cevabı vardır...",
    "options": [
      "Zaman çok hızlı geçiyor.",
      "Yarın akşam bize gelecekler.",
      "Ne zaman geleceğini söyledi. 13. Edirne’nin topraklarına hayat veren Meriç Nehri’nde sular çekilmeye başladı. Yağışların bol olduğu dönemlerde yatağına sığmayan Meriç, şimdi sessiz ve sakin akıyor. Bulgaristan’ın suyu barajlarda toplaması, nehrin suyunu geçtiğimiz yıl aynı döneme göre azalttı. Nehir yatağında kum adacıkları oluştu. Bu habere göre Meriç Nehri’yle ilgili olarak aşağıdakilerden hangisi söylenemez...",
      "um adacıkları oluşmasının nedeni, nehrin ülkemize gelmeden barajlarda toplanmasıdır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Ne zaman geleceğini söyledi. 13. Edirne’nin topraklarına hayat veren Meriç Nehri’nde sular çekilmeye başladı. Yağışların bol olduğu dönemlerde yatağına sığmayan Meriç, şimdi sessiz"
  },
  {
    "id": "turkce-2-pdf-u6-q4",
    "unitId": "turkce-2-pdf-u6",
    "text": "Avucumun içi gibi bilirim şimdi Trakya’yı, Anadolu’yu. Havası nefesim, toprağı ekmeğim. asabaları köyleri ne hâldedir, Nasıl geçinir insanları bilirim Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Umut",
      "Yalnızlık",
      "Vatan sevgisi",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Umut"
  },
  {
    "id": "turkce-2-pdf-u6-q5",
    "unitId": "turkce-2-pdf-u6",
    "text": "Tolga ve kardeşi Ufuk yıllardır tenis oynuyorlar. Bu cümleye göre Tolga ve Ufuk’la ilgili aşağıdakilerden hangisi kesinlikle doğrudur...",
    "options": [
      "En sevdikleri spor tenistir.",
      "En az iki kardeştirler.",
      "Bütün aile sporla ilgilenmektedir.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bütün aile sporla ilgilenmektedir."
  },
  {
    "id": "turkce-2-pdf-u6-q6",
    "unitId": "turkce-2-pdf-u6",
    "text": "Çiçek açmış meyve ağaçlarıyla dolu bir bahçede yürüyorduk. Çiçeklerden gelen hoş kokular ve bahçenin yakınında bulunan deredeki suyun sesi beni rahatlatıyordu. Bu metinde hangi duyu organı ile algılanan bir ayrıntı yoktur...",
    "options": [
      "İşitme",
      "oklama",
      "Tatma",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İşitme"
  },
  {
    "id": "turkce-2-pdf-u6-q7",
    "unitId": "turkce-2-pdf-u6",
    "text": "İki kardeş çok heyecanlıydı. Uzun süredir istedikleri köpek akşam onlarda olacaktı. Heyecanlı bekleyiş bütün gün sürdü. Akşam oldu, kapı çaldı. Bu metnin, aşağıdakilerden hangisi ile tamamlanması uygun olmaz...",
    "options": [
      "Evde bütün gün odalarını toplamışlardı.",
      "Bekledikleri misafir yerine arkadaşları Müge gelmişti.",
      "Babaları karşılarındaydı ancak köpek yoktu.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Babaları karşılarındaydı ancak köpek yoktu."
  },
  {
    "id": "turkce-2-pdf-u6-q8",
    "unitId": "turkce-2-pdf-u6",
    "text": "Tavşan ile kaplumbağa hep yarışırlar. Bu cümleye göre tavşan ve kaplumbağayla ilgili aşağıdakilerden hangisi kesinlikle doğrudur...",
    "options": [
      "Yarış dışında bir şey yapmazlar.",
      "İkisi daha önce de yarışmıştır.",
      "Diğer hayvanlar onları izler.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: İkisi daha önce de yarışmıştır."
  },
  {
    "id": "turkce-2-pdf-u6-q9",
    "unitId": "turkce-2-pdf-u6",
    "text": "Yeryüzündeki her canlı yaşamalı, hiçbir canlı öldürülmemelidir. Oysaki savaşlar insanlara ölüm ve yokluk getirmiştir. Savaşların olmadığı bir dünyaya hep özlem duyulmuştur. Bu metinden aşağıdakilerin hangisi çıkarılamaz...",
    "options": [
      "Barışın egemen olduğu bir dünya istenmektedir.",
      "Savaşlar insanlara çok zarar vermiştir.",
      "Açlık dünyadaki çözülmesi gereken en önemli sorundur.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Açlık dünyadaki çözülmesi gereken en önemli sorundur."
  },
  {
    "id": "turkce-2-pdf-u6-q10",
    "unitId": "turkce-2-pdf-u6",
    "text": "Erkenci küçük kurbağa, yosun kokan gölün içine daldı. Bu sırada bir yaban kazı da öterek gölün üzerinden telaşla uçup gitti. Bu metinde hangi duyuyla ilgili bir ayrıntı yoktur...",
    "options": [
      "Tatma",
      "oklama",
      "İşitme",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: İşitme"
  },
  {
    "id": "turkce-2-pdf-u7-q1",
    "unitId": "turkce-2-pdf-u7",
    "text": "Burak güneş doğarken uyanmıştı. Çok mutluydu. üçük köpeği artopu, birden yatağına atlayarak onunla oynamaya başladı. Burak bugün teyzesinin yanına İzmir’e gidecekti. Teyzesini göreceğini düşündükçe heyecandan yerinde duramıyordu. öpeğini Ankara’da bırakacak olması ise onu üzüyordu. Bu metinde Burak’la ilgili aşağıdakilerin hangisinden söz edilmiştir...",
    "options": [
      "Teyzesiyle beraber Ankara’ya gideceğinden",
      "İzmir’e gideceği için üzüldüğünden",
      "Ankara’da kalacak olan köpeği için üzüldüğünden",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: İzmir’e gideceği için üzüldüğünden"
  },
  {
    "id": "turkce-2-pdf-u7-q2",
    "unitId": "turkce-2-pdf-u7",
    "text": "Yeşil Bursa’da konuk bir garip kuş Otur denmiş oracıkta oturmuş Ta yüreğinden bir türkü tutturmuş Ne güzel şey dünyada hür olmak hür Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Ümitsizlik",
      "Özgürlük",
      "Hayvan sevgisi",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hayvan sevgisi"
  },
  {
    "id": "turkce-2-pdf-u7-q3",
    "unitId": "turkce-2-pdf-u7",
    "text": "Çocuklar çadırın içinde sohbet ediyorlardı. Yandaki çadırda sesler kesilmişti. Sadece kampın yakınındaki derenin şırıltısı duyuluyordu. Yavaş yavaş akşam serinliği hissedilmeye başlamıştı. Bu metinde hangi duyuyla ilgili bir ayrıntı yoktur...",
    "options": [
      "Görme",
      "oklama",
      "Dokunma",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Görme"
  },
  {
    "id": "turkce-2-pdf-u7-q4",
    "unitId": "turkce-2-pdf-u7",
    "text": "Ne çok spor dalı var. Ben hepsini yaparım Yüzerim, koşarım, Tavşan gibi zıplarım, Harika top oynarım, Bisiklete binerim. Bu şiirde aşağıdaki spor dallarının hangisinden bahsedilmemiştir...",
    "options": [
      "Atletizm",
      "Yüzme",
      "Güreş",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yüzme"
  },
  {
    "id": "turkce-2-pdf-u7-q5",
    "unitId": "turkce-2-pdf-u7",
    "text": "Çöller hemen hemen hiç yağmur yağmayan alanlardır. Genellikle sıcak ve çoraktır. Çoğu kayalıktır, sadece birkaçı kumla kaplıdır. Çölde gündüzleri keseli fare gibi birçok canlı yer altına sığınır. Hayvanlar geceleyin hava daha serin olduğundan beslenmek için dışarı çıkar. Bu metinde çöllerle ilgili aşağıdakilerden hangisine değinilmemiştir...",
    "options": [
      "Hayvanların yiyeceklerini zor bulduğuna",
      "Genellikle yağış almadığına",
      "Çoğunun kayalıklarla kaplı olduğuna",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Çoğunun kayalıklarla kaplı olduğuna"
  },
  {
    "id": "turkce-2-pdf-u7-q6",
    "unitId": "turkce-2-pdf-u7",
    "text": "Yaylasına, ırmağına, Yedi bölge toprağına Ay yıldızlı bayrağına Aşığım ben Türkiye’min. Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Doğa sevgisi",
      "Vatan sevgisi",
      "Umut",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Doğa sevgisi"
  },
  {
    "id": "turkce-2-pdf-u7-q7",
    "unitId": "turkce-2-pdf-u7",
    "text": "Merve televizyon habercisi. itapları tanıtıyor, eleştiriler yapıyor, izleyicilere sevdiği eserleri öneriyor. Halk ona güveniyor. Her hafta milyonlarca kişi onun programını izliyor. Bir kitap hakkında olumlu şeyler söylediğinde insanlar o kitabı almaya başlıyor. Bu metinde Merve’yle ilgili aşağıdakilerin hangisine değinilmemiştir...",
    "options": [
      "Birçok kişinin ona güvendiğine",
      "İnsanlar üzerinde etkili olduğuna",
      "Yazar olarak tanındığına",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yazar olarak tanındığına"
  },
  {
    "id": "turkce-2-pdf-u7-q8",
    "unitId": "turkce-2-pdf-u7",
    "text": "Neler olmaz ki yaz geldiğinde! Yumuşak çimenler okşar ayaklarımızı. ozalaklar büyür, genişler, çıtır çıtır çatlar. Çağla yeşili yaprakların damarları belirginleşir. Sıcak rüzgâr dolaşır yapraklar arasında. uşlar cıvıldaşır. Güneş deniz üstünde pırıl pırıl yanar. Bir şölen yeri gibidir doğa. Bu metnin anlatımında aşağıdaki duyuların hangisinden yararlanılmamıştır...",
    "options": [
      "oklama",
      "Duyma",
      "Dokunma",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Duyma"
  },
  {
    "id": "turkce-2-pdf-u7-q9",
    "unitId": "turkce-2-pdf-u7",
    "text": "Gökyüzünü bir anda kara kara yağmur bulutları kapladı. Bu cümleye göre aşağıdakilerden hangisi kesinlikle doğrudur...",
    "options": [
      "Hava kapalıdır.",
      "Yağmur yağmaktadır.",
      "Soğuk bir gündür.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Soğuk bir gündür."
  },
  {
    "id": "turkce-2-pdf-u7-q10",
    "unitId": "turkce-2-pdf-u7",
    "text": "İnsanlar için en iyi dinlenme yöntemi uykudur. Uykusuz insan o kadar yorgun olur ki parmağını uzatıp kendi burnuna dokunacak hâli bile olmaz. Uykusuzluk bedenin zayıf düşmesine, çabuk yorulmasına, hafızanın zayıflamasına ve sağlığın bozulmasına neden olur. Bu metinden aşağıdakilerin hangisi çıkarılamaz...",
    "options": [
      "Uykusuzluk hastalıklara yol açar.",
      "Uyku insanlara dinçlik verir.",
      "Uyku insanların mutlu olmasını sağlar.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Uykusuzluk hastalıklara yol açar."
  },
  {
    "id": "turkce-2-pdf-u8-q1",
    "unitId": "turkce-2-pdf-u8",
    "text": "Bir elin nesi var, iki elin sesi var. Bu sözle vurgulanmak istenen kavram aşağıdakilerden hangisidir...",
    "options": [
      "Anlaşmazlık",
      "£Birliktelik",
      "Övgü",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: £Birliktelik"
  },
  {
    "id": "turkce-2-pdf-u8-q2",
    "unitId": "turkce-2-pdf-u8",
    "text": "Yunuslar hiçbir zaman tam bir uykuya dalmaz. Beyinlerinin bir yarısı uyurken diğer yarısı uyanıktır. Ayrıca beyinlerinin sol yarısı uyuyorsa sağ gözleri, sağ yarısı uyuyorsa sol gözleri kapalıdır. Yani yunuslar uyurken bir gözleri açık kalır. Bunun sonucunda yunuslar, yaklaşan tehlikeleri görebilirler. Bu metne göre yunusların uyurken tek gözünün açık kalmasının nedeni aşağıdakilerden hangisidir...",
    "options": [
      "Beyinlerinin yarısının uyanık kalması",
      "Göz yapılarının daha büyük olması",
      "Çevreden gelebilecek zararları görmesi",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Çevreden gelebilecek zararları görmesi"
  },
  {
    "id": "turkce-2-pdf-u8-q3",
    "unitId": "turkce-2-pdf-u8",
    "text": "Sema ormanda yürürken yere gerilmiş bir sürü ip gözüne çarptı. İpler, örümcek ağı gibiydi. Toprağa çakılmış küçük tahta parçalarının aralarına gerilmişti. Yere düşmüş bir merdiven gibi görünüyordu. Bu metinde aşağıdaki sorulardan hangisinin cevabı yoktur...",
    "options": [
      "İpleri tahtalara kim germiştir...",
      "Tahta parçaları nereye çakılmıştır...",
      "İpler neye benzemektedir...",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Tahta parçaları nereye çakılmıştır..."
  },
  {
    "id": "turkce-2-pdf-u8-q4",
    "unitId": "turkce-2-pdf-u8",
    "text": "Ormanda yürümeyi seven biri olarak her fırsatta doğayı gözlemlerim. Uzun ağaçlardan uçan kuşlara, görkemli dağlardan minik böceklere kadar her şeyi incelerim. Doğa hakkında araştırma yapıp notlar almak insanlara çok kıymetli bilgiler verir. Bu sözleri söyleyen biriyle ilgili aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Meraklı",
      "Telaşlı",
      "Sabırsız",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Meraklı"
  },
  {
    "id": "turkce-2-pdf-u8-q5",
    "unitId": "turkce-2-pdf-u8",
    "text": "Sahneye çıktığımda birden alkış sesleri yükseldi. Gülümsedim ve gitarımla ilk notanın sesini çıkardım. Ondan sonra her şey kendiliğinden geldi. Ben gitarımı çaldıkça alkış arttı. Alkış arttıkça kalp atışlarım normale dönmeye başladı. Bu sözleri söyleyen biriyle ilgili aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Şüpheci",
      "Heyecanlı",
      "Utangaç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Şüpheci"
  },
  {
    "id": "turkce-2-pdf-u8-q6",
    "unitId": "turkce-2-pdf-u8",
    "text": "Güldüren Oyun’da oyuncular halka şeklinde oturur. Aralarından biri rastgele lider seçilir. Halkanın ortasında bulunan lider, komik bir hareket yapar. Diğer oyuncular da aynı hareketi tekrar eder. Gülen ya da gürültü yapan oyuncular yanar. En sona kalan oyuncu hiçbir ses çıkarmazsa sonraki turun lideri olur. Bu metinde ...Güldüren Oyun... ile ilgili aşağıdakilerin hangisine değinilmemiştir...",
    "options": [
      "aç kişiyle oynandığına",
      "Liderin nerede bulunduğuna",
      "Oyuncuların ne şekilde elendiğine İÇERİĞİNE UYGUN BAŞLI / BAŞLILAR BELİRLER.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Oyuncuların ne şekilde elendiğine İÇERİĞİNE UYGUN BAŞLI / BAŞLILAR BELİRLER."
  },
  {
    "id": "turkce-2-pdf-u8-q7",
    "unitId": "turkce-2-pdf-u8",
    "text": "Canlıların yaşamını sürdürmesi için beslenmeye ihtiyaçları vardır. Beslenmek, karın doyurmak değildir. Sağlıklı olmak için dengeli beslenmeliyiz. Dengeli beslenmek için her besin grubundan yeterince tüketmeliyiz. Bu metnin başlığı aşağıdakilerden hangisidir...",
    "options": [
      "Dengeli Beslenme",
      "Spor Yapma",
      "Canlılar 006 18.SORU) HİÂYE UNSURLARINI BELİRLER.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Spor Yapma"
  },
  {
    "id": "turkce-2-pdf-u8-q8",
    "unitId": "turkce-2-pdf-u8",
    "text": "Oyuncular yerlerinde duramıyordu. Oyun alanının kenarında sabırsızlıkla bekliyorlardı. Bir taraftan da takım kaptanının kim olacağını tartışıyorlardı. Bu tartışmanın sonunda takım kaptanı olarak erim’i seçtiler. erim, bunu duyunca çok heyecanlandı. Bu metindeki altı çizili ifade hikâyenin hangi ögesidir...",
    "options": [
      "Olay",
      "Yer",
      "Zaman( 12.SORU)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Zaman( 12.SORU)"
  },
  {
    "id": "turkce-2-pdf-u8-q9",
    "unitId": "turkce-2-pdf-u8",
    "text": "Ben başka yoldan vapur iskelesine gitmek istedim. Ama yolu çok uzun, kendimi çok yorgun buldum. Ağacın altında bir süre dinlendim. Bu metindeki altı çizili ifade hikâyenin hangi ögesini bildirmektedir...",
    "options": [
      "Ana karakter",
      "Yer",
      "Olay ( 6 SORU)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ana karakter"
  },
  {
    "id": "turkce-2-pdf-u8-q10",
    "unitId": "turkce-2-pdf-u8",
    "text": "Tavşan, sabah olunca övünmeye başladı. Ona göre en hızlı koşan kendisiydi. iminle yarışsa rahatlıkla kazanabilirdi. ...Benimle yarışmak isteyen var mı... Varsa yarışa hazırım.... dedi. Bunun üzerine diğer hayvanlar arasında bir uğultu başladı ama kimse onun karşısına çıkmaya cesaret edemedi. Bu metinde hikâye unsurlarından hangisi belirgin değildir...",
    "options": [
      "Ana karakter",
      "Yer",
      "Olay ( 17.SORU)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ana karakter"
  },
  {
    "id": "turkce-2-pdf-u9-q1",
    "unitId": "turkce-2-pdf-u9",
    "text": "Uçsuz bucaksız gökyüzü, deniz, bulutlar ve parlayan güneş Cansu’nun nefesini kesmişti. Denizin tepeden görünüşü, güneş ışınlarının suyun üzerinde dans edişi onu kendinden geçirmişti. Ne de olsa ilk kez bu yaz tatilinde görmüştü bu güzelliği. Bu metindeki altı çizili söz hikâyenin hangi unsurudur...",
    "options": [
      "Ana karakter",
      "Yer",
      "Zaman ( 8.SORU",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yer"
  },
  {
    "id": "turkce-2-pdf-u9-q2",
    "unitId": "turkce-2-pdf-u9",
    "text": "Tarık Bey, harıl harıl resmini bitirmeye çalışıyordu. Bugün çok çalışmıştı. Bir yandan fırçasıyla ince dokunuşlar yapıyor, bir yandan da arkadaşının sorularına cevap vermeye çalışıyordu. O kadar yoğundu ki yemek yemeye dahi fırsat bulamıyordu. Çünkü iki gün sonra, katılmayı çok istediği resim yarışması vardı. Bu metinde aşağıdaki hikâye unsurlarından hangisi yoktur...",
    "options": [
      "Ana karakter",
      "Yer",
      "Olay ( 9.SORU)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ana karakter"
  },
  {
    "id": "turkce-2-pdf-u9-q3",
    "unitId": "turkce-2-pdf-u9",
    "text": "Rıza, pencerenin önünde dışarıyı seyrediyormuş. Bahçedeki elma ağacının dalında minik bir serçe görmüş. Serçenin acıkmış olabileceğini düşünerek mutfağa koşmuş. Bir kaba ekmek kırıntısı koyarak ağacın altına bırakmış. Bu metinde aşağıdaki hikâye unsurlarından hangisi yoktur...",
    "options": [
      "Olay",
      "Yer",
      "Zaman ( 8.SORU)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay"
  },
  {
    "id": "turkce-2-pdf-u9-q4",
    "unitId": "turkce-2-pdf-u9",
    "text": "Ne kadar güzelsin Ne kadar başka Yaşamak isterdim dallarında Adarsam, Sana adarım kendimi Büyürüm meyvelerinde. Bu dizelerde sözü edilen varlık aşağıdakilerden hangisidir...",
    "options": [
      "Ağaç",
      "Güneş",
      "Ev",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Ev"
  },
  {
    "id": "turkce-2-pdf-u9-q5",
    "unitId": "turkce-2-pdf-u9",
    "text": "Bu seneki bilim şenliği, gelecek hafta okulumuzda yapılacak. Bu cümlede aşağıdaki sorulardan hangisinin cevabı yoktur...",
    "options": [
      "Ne zaman...",
      "Niçin...",
      "Nerede... İŞARETLERİN ANLAMLARINI AVRAR. 1. Bu trafik işaret levhasının anlamı aşağıdakilerden hangisidir...",
      "Dikkat"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Niçin..."
  },
  {
    "id": "turkce-2-pdf-u9-q6",
    "unitId": "turkce-2-pdf-u9",
    "text": "Atatürk, çocukları - - - - çağırdı... Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilemez...",
    "options": [
      "kim",
      "nereye",
      "niçin",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: nereye"
  },
  {
    "id": "turkce-2-pdf-u9-q7",
    "unitId": "turkce-2-pdf-u9",
    "text": "Bu akşam Ayşe yemeğini - - - - Bu cümle aşağıdakilerden hangisiyle tamamlanamaz...",
    "options": [
      "iştahla yedi.",
      "hemen bitirdi.",
      "çünkü dokunmadı.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: çünkü dokunmadı."
  },
  {
    "id": "turkce-2-pdf-u9-q8",
    "unitId": "turkce-2-pdf-u9",
    "text": "Ağaçtaki - - - - elmaları tek tek topladı. Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilemez...",
    "options": [
      "çiçekli",
      "ekşi",
      "kırmızı",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: ekşi"
  },
  {
    "id": "turkce-2-pdf-u9-q9",
    "unitId": "turkce-2-pdf-u9",
    "text": "Anneme yardım ediyorum çünkü - - - - Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilemez...",
    "options": [
      "o çok yoruluyor.",
      "artık büyüdüm.",
      "tembel biriyim.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: tembel biriyim."
  },
  {
    "id": "turkce-2-pdf-u9-q10",
    "unitId": "turkce-2-pdf-u9",
    "text": "özgürlüğü için Numaralanmış kelimelerle anlamlı ve kurallı bir cümle kurulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "4 - 3 - 1 - 2",
      "3 - 1 - 4 - 2",
      "2 - 3 - 4 - 1",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4 - 3 - 1 - 2"
  },
  {
    "id": "turkce-2-pdf-u10-q1",
    "unitId": "turkce-2-pdf-u10",
    "text": "...Sağlıklı yaşamayı herkes ister fakat - - - -... cümlesinde altı çizili kelime dikkate alındığında, boş bırakılan yere aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "insanlar bu düşüncelerini herkese anlatırlar.",
      "kimse spor salonlarından çıkmak istemez.",
      "kimse bunun için yeteri kadar çaba göstermez.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: kimse spor salonlarından çıkmak istemez."
  },
  {
    "id": "turkce-2-pdf-u10-q2",
    "unitId": "turkce-2-pdf-u10",
    "text": "Aşağıdakilerden hangisi cümle değildir...",
    "options": [
      "Senin bu hâlin ne olacak",
      "Bir de ne göreyim",
      "Bana yardım ettiğiniz için",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bir de ne göreyim"
  },
  {
    "id": "turkce-2-pdf-u10-q3",
    "unitId": "turkce-2-pdf-u10",
    "text": "öğrencilere Numaralanmış kelimelerle anlamlı ve kurallı bir cümle kurulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "1 - 4 - 3 - 2",
      "2 - 4 - 1 - 3",
      "3 - 1 - 2 - 4",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 4 - 3 - 2"
  },
  {
    "id": "turkce-2-pdf-u10-q4",
    "unitId": "turkce-2-pdf-u10",
    "text": "Şiir yazmak istiyorum ama - - - - . Bu cümle aşağıdakilerden hangisi ile tamamlanır...",
    "options": [
      "bugün yazacağım",
      "defterim çok güzel",
      "kalemimi bulamıyorum",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: kalemimi bulamıyorum"
  },
  {
    "id": "turkce-2-pdf-u10-q5",
    "unitId": "turkce-2-pdf-u10",
    "text": "Yağmurda ıslanıp hasta olmamak - - - - evlerine döndüler. Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "için",
      "çünkü",
      "fakat",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: için"
  },
  {
    "id": "turkce-2-pdf-u10-q6",
    "unitId": "turkce-2-pdf-u10",
    "text": "bir Numaralanmış kelimelerle anlamlı ve kurallı bir cümle kurulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "1 - 3 - 4 - 2 - 5",
      "2 - 5 - 4 - 1 - 3",
      "4 - 2 - 5 - 1 - 32016ED",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 4 - 2 - 5 - 1 - 32016ED"
  },
  {
    "id": "turkce-2-pdf-u10-q7",
    "unitId": "turkce-2-pdf-u10",
    "text": "gözlerinden akan yaş Numaralanmış kelime gruplarıyla kurallı ve anlamlı bir cümle oluşturulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "2 - 4 - 3 - 1",
      "2 - 3 - 1 - 4",
      "2 - 1 - 4 - 3",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 2 - 3 - 1 - 4"
  },
  {
    "id": "turkce-2-pdf-u10-q8",
    "unitId": "turkce-2-pdf-u10",
    "text": "siz de Numaralanmış kelime gruplarıyla kurallı ve anlamlı bir cümle oluşturulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "3 - 1 - 4 - 2",
      "3 - 2 - 4 - 1",
      "3 - 4 - 1 - 2",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3 - 4 - 1 - 2"
  },
  {
    "id": "turkce-2-pdf-u10-q9",
    "unitId": "turkce-2-pdf-u10",
    "text": "yeni Numaralanmış kelimelerle anlamlı ve kurallı bir cümle oluşturulduğunda sıralama aşağıdakilerden hangisi olur...",
    "options": [
      "2 - 4 - 1 - 3 - 5",
      "2 - 5 - 3 - 4 - 1",
      "2 - 1 - 4 - 3 - 5 Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2 - 1 - 4 - 3 - 5 Ç"
  },
  {
    "id": "turkce-2-pdf-u10-q10",
    "unitId": "turkce-2-pdf-u10",
    "text": "rüzgârla - - - - - - - - - - - - - - - - yoludur. Anlamlı bir cümle oluşturmak için numaralanmış kelimeler, yukarıdaki boşluklara hangi sırayla yerleştirilmelidir...",
    "options": [
      "1 - 4 - 3 - 2",
      "2 - 4 - 3 - 1",
      "3 - 4 - 2 - 1",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 2 - 4 - 3 - 1"
  },
  {
    "id": "matematik-2-pdf-u1-q1",
    "unitId": "matematik-2-pdf-u1",
    "text": "Bir durakta öğrenciler tek sıraya girmiş, otobüs beklemektedir. emal baştan 17. sırada, Hüseyin sondan 6. sıradadır. emal ile Hüseyin arasında 1 kişi bulunmaktadır. Buna göre, bu sırada en fazla kaç kişi vardır...",
    "options": [
      "18",
      "20",
      "24 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 24 ()"
  },
  {
    "id": "matematik-2-pdf-u1-q2",
    "unitId": "matematik-2-pdf-u1",
    "text": "Hatice’nin dayısı 45, halası 38, amcası 52 ve teyzesi 39 yaşındadır. Hatice’nin akrabalarının yaşlarına göre, büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir...",
    "options": [
      "Amcası, dayısı, teyzesi, halası",
      "Dayısı, teyzesi, halası, amcası",
      "Teyzesi, halası, dayısı, amcası",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Amcası, dayısı, teyzesi, halası"
  },
  {
    "id": "matematik-2-pdf-u1-q3",
    "unitId": "matematik-2-pdf-u1",
    "text": "13’ten başlanarak ileriye doğru ritmik sayma yapılacaktır. Aşağıdaki ritmik saymalardan hangisi yapılırsa 22 sayısı söylenir...",
    "options": [
      "İkişer",
      "Üçer",
      "Dörder",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Üçer"
  },
  {
    "id": "matematik-2-pdf-u1-q4",
    "unitId": "matematik-2-pdf-u1",
    "text": "Aşağıdaki sayılardan hangisinin en yakın olduğu onluk, 80 değildir...",
    "options": [
      "79",
      "83",
      "86 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 86 ()"
  },
  {
    "id": "matematik-2-pdf-u1-q5",
    "unitId": "matematik-2-pdf-u1",
    "text": "dir. Bu sınıfta kaç öğrenci vardır...",
    "options": [
      "19",
      "21",
      "22 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 21"
  },
  {
    "id": "matematik-2-pdf-u1-q6",
    "unitId": "matematik-2-pdf-u1",
    "text": "Serdar Öğretmen, aşağıda ağırlıkları verilen öğrencileri en ağırından en hafife doğru sıralayarak bir tablo hazırlayacaktır. Arda: 30 kilogram Emel : 29 kilogram Ege : 32 kilogram Buna göre, tabloda baştan ikinci sıradaki öğrenci kim olur...",
    "options": [
      "Arda",
      "Emel",
      "Ege ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Arda"
  },
  {
    "id": "matematik-2-pdf-u1-q7",
    "unitId": "matematik-2-pdf-u1",
    "text": "Ufuk’un 15 tane kırmızı misketi, kırmızı misketlerinin sayısından daha fazla sayıda mavi misketi vardır. Buna göre, Ufuk’un mavi misketlerinin sayısı aşağıdakilerden hangisi olabilir...",
    "options": [
      "14",
      "15",
      "16 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 16 ()"
  },
  {
    "id": "matematik-2-pdf-u1-q8",
    "unitId": "matematik-2-pdf-u1",
    "text": "Onlar basamağındaki rakamın basamak değeri 40 olan iki basamaklı en büyük doğal sayı kaçtır...",
    "options": [
      "49",
      "44",
      "40 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 49"
  },
  {
    "id": "matematik-2-pdf-u1-q9",
    "unitId": "matematik-2-pdf-u1",
    "text": "4 8 12 16 20 Adımları arasındaki farkı sabit olan yukarıdaki sayı örüntüsünün kuralı kullanılarak 71 52 3Y_ örüntüsü oluşturuluyor. +Y_ ve +Y_ birer doğal sayı olduğuna göre, +Y_ işleminin sonucu kaçtır...",
    "options": [
      "34",
      "32",
      "30 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 30 ()"
  },
  {
    "id": "matematik-2-pdf-u1-q10",
    "unitId": "matematik-2-pdf-u1",
    "text": "Emre 11’den başlayarak ileriye doğru dörder ritmik, Erdem ise 35’ten başlayarak geriye doğru dörder ritmik sayıyor. Aynı sırada hangi sayıyı söylerler...",
    "options": [
      "19",
      "23",
      "27 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 23"
  },
  {
    "id": "matematik-2-pdf-u2-q1",
    "unitId": "matematik-2-pdf-u2",
    "text": "Bir bilet kuyruğunda 14 kişi vardır. uyrukta Ömer’den önce 3 kişi, Enes’ten sonra 2 kişi olduğuna göre, Ömer ile Enes arasında kaç kişi vardır...",
    "options": [
      "9 (Ç) 20. 12 15 18 21 27 Çocukların ellerindeki kartlarda yazılı olan sayılar, adımları arasındaki fark sabit olan bir sayı örüntüsü oluşturmaktadır. Elindeki kartı ters çevirmiş olan çocuğun kartında yazan sayı kaçtır...",
      "23",
      "24",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9 (Ç) 20. 12 15 18 21 27 Çocukların ellerindeki kartlarda yazılı olan sayılar, adımları arasındaki fark sabit olan bir sayı örüntüsü oluşturmaktadır. Elindeki kartı ters çevirmiş o"
  },
  {
    "id": "matematik-2-pdf-u2-q2",
    "unitId": "matematik-2-pdf-u2",
    "text": "Merve her seferinde son yazdığı sayıya 6 ekleyerek bir örüntü oluşturuyor. İlk yazdığı sayı 11 olduğuna göre, beşinci yazdığı sayı kaçtır...",
    "options": [
      "35",
      "41",
      "47 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 41"
  },
  {
    "id": "matematik-2-pdf-u2-q3",
    "unitId": "matematik-2-pdf-u2",
    "text": "Mehmet 4’ten başlayarak ileriye doğru beşer ritmik sayıyor. Onuncu sayıyı söyledikten sonra ileriye doğru ikişer ritmik saymaya devam ediyor. Buna göre, Mehmet’in on sekizinci sayışta söylediği sayı kaçtır...",
    "options": [
      "65",
      "75",
      "86 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 65"
  },
  {
    "id": "matematik-2-pdf-u2-q4",
    "unitId": "matematik-2-pdf-u2",
    "text": "2 onluk, 3 birlik sayısı aşağıda modellenmiştir. 2 onluk, 3 birlik Buna göre, aşağıdakilerden hangisi 54 sayısını gösterir...",
    "options": [
      "B)",
      "(Ç) 27. 10 20 40 50 70 32 1468 23 4454 Görseldeki balonlar üzerinde yazan doğal sayıların en yakın olduğu onluğa bağlanacaktır. Buna göre, üzerinde hangi doğal sayının yazdığı balon açıkta kalır...",
      "32",
      "44"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: (Ç) 27. 10 20 40 50 70 32 1468 23 4454 Görseldeki balonlar üzerinde yazan doğal sayıların en yakın olduğu onluğa bağlanacaktır. Buna göre, üzerinde hangi doğal sayının yazdığı balo"
  },
  {
    "id": "matematik-2-pdf-u2-q5",
    "unitId": "matematik-2-pdf-u2",
    "text": "Onur sınıf listesinde baştan 8, sondan 10. sıradadır. Sınıf mevcudu kaçtır...",
    "options": [
      "16",
      "17",
      "18 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 16"
  },
  {
    "id": "matematik-2-pdf-u2-q6",
    "unitId": "matematik-2-pdf-u2",
    "text": "Sevda 36’dan başlayıp 8’e kadar geriye doğru dörder ritmik sayıyor. Aylin ise 9’dan başlayıp 30’a kadar ileriye doğru üçer ritmik sayıyor. Buna göre, hangi sayıları her ikisi de söylemiştir...",
    "options": [
      "21 ve 28",
      "18 ve 30",
      "12 ve 24 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 12 ve 24 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u2-q7",
    "unitId": "matematik-2-pdf-u2",
    "text": "17 24 32 34 47 53 Poyraz verilen her bir sayının en yakın olduğu onluğu defterine yazıyor. Poyraz aşağıdaki sayılardan hangisini defterine yazmamıştır...",
    "options": [
      "20",
      "30",
      "40 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 20"
  },
  {
    "id": "matematik-2-pdf-u2-q8",
    "unitId": "matematik-2-pdf-u2",
    "text": "Alya, 4’ten başlayarak ileriye doğru dörder ritmik sayıyor. Berk, 30’dan başlayarak geriye doğru beşer ritmik sayıyor. Alya’nın söylediği beşinci sayı ile Berk’in söylediği kaçıncı sayı birbirine eşittir...",
    "options": [
      "Üçüncü",
      "Dördüncü",
      "Beşinci (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dördüncü"
  },
  {
    "id": "matematik-2-pdf-u2-q9",
    "unitId": "matematik-2-pdf-u2",
    "text": "Funda 19’dan başlayıp ileriye doğru dörder ritmik sayıyor. Funda bu saymada aşağıdaki sayılardan hangisini söyler...",
    "options": [
      "39",
      "36",
      "32 (Ç) 33. Onlar basamağı Birler basamağı Eray, abaküs modelindeki çubuklardan birine iki boncuk daha ekliyor. Buna göre, Eray’ın elde ettiği sayı aşağıdakilerden hangisi olabilir...",
      "96"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 32 (Ç) 33. Onlar basamağı Birler basamağı Eray, abaküs modelindeki çubuklardan birine iki boncuk daha ekliyor. Buna göre, Eray’ın elde ettiği sayı aşağıdakilerden hangisi olabilir."
  },
  {
    "id": "matematik-2-pdf-u2-q10",
    "unitId": "matematik-2-pdf-u2",
    "text": "İki basamaklı bir doğal sayının rakamlarının basamak değerleri farkı 23’tür. Buna göre, bu doğal sayı aşağıdakilerden hangisidir...",
    "options": [
      "33",
      "35",
      "37",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 37"
  },
  {
    "id": "matematik-2-pdf-u3-q1",
    "unitId": "matematik-2-pdf-u3",
    "text": "İki basamaklı bir doğal sayının rakamlarının basamak değerleri 40 ve 5’tir. Buna göre, bu sayının sayı blokları ile modellenmiş şekli aşağıdakilerden hangisidir...",
    "options": [
      "A)",
      "36. Yukarıdaki bloklarla modellenen sayının onlar ve birler basamağındaki rakamların yerleri değiştiriliyor. Buna göre, elde edilen sayının onlar basamağındaki rakamın basamak değeri kaçtır...",
      "50",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: A)"
  },
  {
    "id": "matematik-2-pdf-u3-q2",
    "unitId": "matematik-2-pdf-u3",
    "text": "7 11 15 23 Verilen sayı örüntüsünde boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi gelir...",
    "options": [
      "19 ve 27",
      "18 ve 27",
      "19 ve 26",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 19 ve 27"
  },
  {
    "id": "matematik-2-pdf-u3-q3",
    "unitId": "matematik-2-pdf-u3",
    "text": "Görseldeki misketlerin üzerinde sayılar yazmaktadır. 47 44 46 Ömer, en yakın olduğu onluk 50 olan sayıların yazdığı misketleri arkadaşlarına vermiştir. Buna göre, aşağıdakilerden hangisi Ömer’in arkadaşlarına verdiği misketlerden biri değildir...",
    "options": [
      "47 44 46",
      "47 44 46",
      "47 44 46 () 40. Görseldeki ördek sayısı aşağıdaki abaküslerden hangisi ile gösterilir... Onluk",
      "B)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 47 44 46"
  },
  {
    "id": "matematik-2-pdf-u3-q4",
    "unitId": "matematik-2-pdf-u3",
    "text": "2. 3. 5.4. Emre ............ ............ ............ ............ Görseldeki yemekhane sırasında Ömer, Merve’den sonra Murat’tan öncedir. Ayşe ise Emre’den sonra Merve’den öncedir. Buna göre, Ömer kaçıncı sıradadır...",
    "options": [
      "4 (Ç) 42. Bloklarla modellenen sayı aşağıdaki tablolardan hangisi ile gösterilebilir...",
      "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 40 5",
      "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 4",
      "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 5 (Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 4"
  },
  {
    "id": "matematik-2-pdf-u3-q5",
    "unitId": "matematik-2-pdf-u3",
    "text": "Balonların üzerinde yazan sayılar adımları arasındaki farkı sabit olan bir sayı örüntüsü oluşturmaktadır. 25 21 17 9 5 Buna göre, boş bırakılan balona aşağıdakilerden hangisi yazılmalıdır...",
    "options": [
      "12",
      "13",
      "14 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 14 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u3-q6",
    "unitId": "matematik-2-pdf-u3",
    "text": "Görseldeki çiçeğin yapraklarındaki sayılar en yakın onluğa yuvarlanacaktır. Yuvarlama sonucu 40 olan yaprakların hepsi maviye boyanacaktır. Buna göre, bu çiçeğin boyandıktan sonraki görüntüsü aşağıdakilerden hangisidir...",
    "options": [
      "B)",
      "D)32",
      "B)",
      "D)32"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "matematik-2-pdf-u3-q7",
    "unitId": "matematik-2-pdf-u3",
    "text": "Bir etkinlikte, verilen sayılar en yakın onluğa yuvarlandığında elde edilen sayının yazdığı elma boyanacaktır. Örneğin; Verilen sayı = 32 30 40 Verilen sayı = 32 Bu etkinliğe göre, aşağıdakilerden hangisi yanlış boyanmıştır... 20 30 Verilen sayı = 25 50 60 Verilen sayı = 54 Verilen sayı = 48A)",
    "options": [
      "B) 47. Görseldeki sayısının onlar ve birler basamağına ayrılmış gösterimi aşağıdakilerden hangisidir...",
      "Onlar Basamağı Birler Basamağı 2 8",
      "Onlar Basamağı Birler Basamağı 2 7",
      "Onlar Basamağı Birler Basamağı 7 2"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Onlar Basamağı Birler Basamağı 2 7"
  },
  {
    "id": "matematik-2-pdf-u3-q8",
    "unitId": "matematik-2-pdf-u3",
    "text": "Görseldeki arabaların üzerinde yazan sayılar azalan bir sayı örüntüsü oluşturmaktadır. 46 43 40 34★ Buna göre, ★ yerine aşağıdakilerden hangisi yazılmalıdır...",
    "options": [
      "38",
      "37",
      "36",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 38"
  },
  {
    "id": "matematik-2-pdf-u3-q9",
    "unitId": "matematik-2-pdf-u3",
    "text": "Bir okul servisi birinci gün 23 öğrenci taşımıştır. İkinci gün 29, üçüncü gün 32 öğrenci taşımıştır. Bu okul servisi için her gün taşınan yolcu sayısı en yakın onluğa yuvarlanarak bu üç gün için tahmini toplam yolcu sayısı hesaplanacaktır. Buna göre, bu servisin üç gündeki tahmini toplam yolcu sayısı aşağıdakilerden hangisidir...",
    "options": [
      "60",
      "70",
      "80 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 70"
  },
  {
    "id": "matematik-2-pdf-u3-q10",
    "unitId": "matematik-2-pdf-u3",
    "text": "Sağlık taraması yapılan bir köyde, 24 çocuğun kızamık hastalığına yakalandığı görülmüştür. Bu taramadan bir hafta sonra kızamık hastalığına yakalanan çocukların toplam sayısı 59 olmuştur. Bu bir haftada kızamık hastalığına kaç çocuk daha yakalanmıştır...",
    "options": [
      "15",
      "25",
      "35 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 35 ()"
  },
  {
    "id": "matematik-2-pdf-u4-q1",
    "unitId": "matematik-2-pdf-u4",
    "text": "Yandaki toplama 39 + işleminde verilmeyen toplanan kaçtır...",
    "options": [
      "52",
      "48",
      "38 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 48"
  },
  {
    "id": "matematik-2-pdf-u4-q2",
    "unitId": "matematik-2-pdf-u4",
    "text": "Bir okuldaki satranç kulübünün üye sayısı 38’dir. Bu kulübe 29 kişi daha üye oluyor. Buna göre, kulübün yeni üye sayısı kaç olur...",
    "options": [
      "58",
      "57",
      "67 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 57"
  },
  {
    "id": "matematik-2-pdf-u4-q3",
    "unitId": "matematik-2-pdf-u4",
    "text": "Bir sınıftaki kız öğrencilerin sayısı 9’dur. Erkek öğrencilerin sayısı, kız öğrencilerin sayısından 5 fazladır. Buna göre, bu sınıfta kaç öğrenci vardır...",
    "options": [
      "23",
      "28",
      "32 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 23"
  },
  {
    "id": "matematik-2-pdf-u4-q4",
    "unitId": "matematik-2-pdf-u4",
    "text": "30 70>+= işleminde > yerine aşağıdaki sayılardan hangisi yazılmalıdır...",
    "options": [
      "30",
      "40",
      "50 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 50 ()"
  },
  {
    "id": "matematik-2-pdf-u4-q5",
    "unitId": "matematik-2-pdf-u4",
    "text": "Bir sınıfta 16 kız öğrenci vardır. Bu sınıftaki erkek öğrencilerin sayısı, kız öğrencilerin sayısından 6 fazladır. Buna göre, bu sınıfta kaç öğrenci vardır...",
    "options": [
      "38",
      "36",
      "34 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 38"
  },
  {
    "id": "matematik-2-pdf-u4-q6",
    "unitId": "matematik-2-pdf-u4",
    "text": "38+TY = 23 76Y += olduğuna göre, T kaçtır...",
    "options": [
      "13",
      "15",
      "18 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 15"
  },
  {
    "id": "matematik-2-pdf-u4-q7",
    "unitId": "matematik-2-pdf-u4",
    "text": "18 21 13 _++ = 81+=_ 4 olduğuna göre, 4 yerine hangi sayı yazılmalıdır...",
    "options": [
      "19",
      "29",
      "38 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 19"
  },
  {
    "id": "matematik-2-pdf-u4-q8",
    "unitId": "matematik-2-pdf-u4",
    "text": "Melis 47 liraya bir kitap, 45 liraya oyuncak satın aldı. Melis, bir kitap ve bir oyuncak için kaç lira ödemiştir...",
    "options": [
      "82",
      "87",
      "92 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 92 ()"
  },
  {
    "id": "matematik-2-pdf-u4-q9",
    "unitId": "matematik-2-pdf-u4",
    "text": "19 78+=_ 11 x+= _ olduğuna göre, x yerine hangi sayı yazılmalıdır...",
    "options": [
      "70",
      "48",
      "30 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 48"
  },
  {
    "id": "matematik-2-pdf-u4-q10",
    "unitId": "matematik-2-pdf-u4",
    "text": "34 sayısının onlar basamağındaki rakamın basamak değeri ile 59 sayısının birler basamağındaki rakamın basamak değerinin toplamı kaçtır...",
    "options": [
      "39",
      "54",
      "80 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 80 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u5-q1",
    "unitId": "matematik-2-pdf-u5",
    "text": "23 45 += += Verilenlere göre, 4 kaçtır...",
    "options": [
      "41",
      "77",
      "87 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 41"
  },
  {
    "id": "matematik-2-pdf-u5-q2",
    "unitId": "matematik-2-pdf-u5",
    "text": "49 + Yukarıdaki toplama işleminde kaçtır...",
    "options": [
      "43",
      "37",
      "35 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 37"
  },
  {
    "id": "matematik-2-pdf-u5-q3",
    "unitId": "matematik-2-pdf-u5",
    "text": "Bir satıcı 35 sarı ve 24 kırmızı balon satıyor. Sattığı kırmızı balonlardan 8 tane fazla mavi balon satıyor. Bu satıcı kaç balon satmıştır...",
    "options": [
      "67",
      "80",
      "91 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 67"
  },
  {
    "id": "matematik-2-pdf-u5-q4",
    "unitId": "matematik-2-pdf-u5",
    "text": "Selen, her birinde 30 yumurta bulunan 2 koli yumurta alıyor. Taşırken yumurtaların bir kısmı kırılıyor. Geriye 48 yumurta kaldığına göre, kaç yumurta kırılmıştır...",
    "options": [
      "12",
      "18",
      "22 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 18"
  },
  {
    "id": "matematik-2-pdf-u5-q5",
    "unitId": "matematik-2-pdf-u5",
    "text": "Mehmet 40’tan başlayıp geriye doğru beşer ritmik sayıyor. Hülya da 21’den başlayıp ileriye doğru üçer ritmik sayıyor. Mehmet ve Hülya’nın söyledikleri üçüncü sayıların toplamı kaçtır...",
    "options": [
      "45",
      "57",
      "61 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 57"
  },
  {
    "id": "matematik-2-pdf-u5-q6",
    "unitId": "matematik-2-pdf-u5",
    "text": "erem’in 16 tane cevizi vardır. Onur’un cevizlerinin sayısı erem’in cevizlerinin sayısından 21 fazladır. erem ve Onur’un cevizlerinin toplam sayısı kaçtır...",
    "options": [
      "53",
      "42",
      "37 (Ç) 22. Verilen sayı bloklarına aşağıdakilerden hangisinde verilen sayı blokları eklenirse 47 sayısı elde edilir...",
      "D)A)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 42"
  },
  {
    "id": "matematik-2-pdf-u5-q7",
    "unitId": "matematik-2-pdf-u5",
    "text": "adım Verilen işlemler 1. adımdaki gibi devam ettiriliyor. Buna göre, ... yerine gelmesi gereken sayı kaçtır...",
    "options": [
      "19",
      "17",
      "14 () 24. 8 4+ 3 6 + + Şekildeki toplama işlemine göre, yerine yazılması gereken sayı kaçtır...",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 14 () 24. 8 4+ 3 6 + + Şekildeki toplama işlemine göre, yerine yazılması gereken sayı kaçtır..."
  },
  {
    "id": "matematik-2-pdf-u5-q8",
    "unitId": "matematik-2-pdf-u5",
    "text": "2 onluk 5 birlik + 2 onluk + ★ = 6 onluk 3 birlik Verilen eşitlikte ★ yerine aşağıdakilerden hangisi yazılmalıdır...",
    "options": [
      "1 onluk 8 birlik",
      "1 onluk 3 birlik",
      "1 onluk 2 birlik (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1 onluk 3 birlik"
  },
  {
    "id": "matematik-2-pdf-u5-q9",
    "unitId": "matematik-2-pdf-u5",
    "text": "Nazlı’nın bir düzine kalemi vardır. Çağatay’ın kalemlerinin sayısı, Nazlı’nın kalemlerinin sayısından 3 fazladır. Buna göre, Çağatay ve Nazlı’nın kalemlerinin toplam sayısı kaçtır...",
    "options": [
      "29",
      "27",
      "24 (Ç) 28. Verilen sayı bloklarına aşağıdakilerden hangisinde verilen sayı blokları eklenirse 61 sayısı elde edilir...",
      "B)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 29"
  },
  {
    "id": "matematik-2-pdf-u5-q10",
    "unitId": "matematik-2-pdf-u5",
    "text": "Bir pastanede öğleden önce 46 tane, öğleden sonra 35 tane poğaça satılmıştır. Buna göre, bu pastanede toplam kaç poğaça satılmıştır...",
    "options": [
      "61",
      "71",
      "81 (Ç) 30. + + Görselde toplam kaç bardak portakal suyu vardır...",
      "35"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 61"
  },
  {
    "id": "matematik-2-pdf-u6-q1",
    "unitId": "matematik-2-pdf-u6",
    "text": "adım + Verilen işlemler 1. adımdaki gibi devam ettiriliyor. Buna göre, ... yerine yazılması gereken sayı kaçtır...",
    "options": [
      "20",
      "19",
      "18 (Ç) 32. Resimdeki kalemlere kaç kalem daha eklenirse 2 düzine kalem olur...",
      "8 ()"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 18 (Ç) 32. Resimdeki kalemlere kaç kalem daha eklenirse 2 düzine kalem olur..."
  },
  {
    "id": "matematik-2-pdf-u6-q2",
    "unitId": "matematik-2-pdf-u6",
    "text": "16 + 4 = 20 Verilen işlem aşağıdaki problemlerden hangisinin çözümü olabilir...",
    "options": [
      "İki torbadan birinde 16 kg şeker, diğerinde 4 kilogram şeker vardır. Buna göre, bu iki torbada toplam kaç kilogram şeker vardır...",
      "Yaşları 4 ve 16 olan iki kardeşin yaşları farkı kaçtır...",
      "16 lira 4 çocuğa, her bir çocuk eşit miktarda para alacak biçimde paylaştırılmıştır. Buna göre, her bir çocuk kaç lira almıştır...",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 16 lira 4 çocuğa, her bir çocuk eşit miktarda para alacak biçimde paylaştırılmıştır. Buna göre, her bir çocuk kaç lira almıştır..."
  },
  {
    "id": "matematik-2-pdf-u6-q3",
    "unitId": "matematik-2-pdf-u6",
    "text": "37 + 45 = 82 işlemi aşağıdaki problemlerden hangisinin çözümü olamaz...",
    "options": [
      "Bir çiftlikte 37 tane koyun, 45 tane inek vardır. Bu çiftlikteki koyun ve inek sayılarının toplamı kaçtır...",
      "Buse’nin 37, Ali’nin 45 tane misketi vardır. İkisinin toplam kaç misketi vardır...",
      "Bir manav 45 tane karpuzun 37 tanesini sattı. Geriye kaç tane karpuz kaldı... DOĞAL SAYILARLA ÇIARMA İŞLEMİ",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Buse’nin 37, Ali’nin 45 tane misketi vardır. İkisinin toplam kaç misketi vardır..."
  },
  {
    "id": "matematik-2-pdf-u6-q4",
    "unitId": "matematik-2-pdf-u6",
    "text": "38 sayısının rakamlarının yerleri değiştirilerek yeni bir sayı elde ediliyor. Elde edilen sayı için aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Onlar basamağındaki rakamın basamak değeri 50 artmıştır.",
      "Birler basamağındaki rakamın basamak değeri 50 azalmıştır.",
      "Onlar basamağındaki rakamın sayı değeri 5 azalmıştır. ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Onlar basamağındaki rakamın basamak değeri 50 artmıştır."
  },
  {
    "id": "matematik-2-pdf-u6-q5",
    "unitId": "matematik-2-pdf-u6",
    "text": "67 1 9 |_ Verilen çıkarma işleminde yerine gelmesi gereken sayı aşağıdakilerden hangisidir...",
    "options": [
      "86",
      "76",
      "48 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 86"
  },
  {
    "id": "matematik-2-pdf-u6-q6",
    "unitId": "matematik-2-pdf-u6",
    "text": "Bir büfeye günlük 63 tane gazete geliyor. Gün boyunca 2 düzinesi satıldığına göre, büfede kaç tane gazete kalmıştır...",
    "options": [
      "24",
      "39",
      "43 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 43 ()"
  },
  {
    "id": "matematik-2-pdf-u6-q7",
    "unitId": "matematik-2-pdf-u6",
    "text": "erem, topladığı papatyalardan 17 tanesini arkadaşına verdi. alan 24 papatyayı annesine veren erem, kaç papatya toplamıştır...",
    "options": [
      "38",
      "41",
      "48 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 41"
  },
  {
    "id": "matematik-2-pdf-u6-q8",
    "unitId": "matematik-2-pdf-u6",
    "text": "Mesut’un 93 tane cevizi vardı. Bir miktarını arkadaşlarına dağıttıktan sonra 77 cevizi kaldı. Mesut, arkadaşlarına kaç ceviz dağıtmıştır...",
    "options": [
      "16",
      "20",
      "26 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 16"
  },
  {
    "id": "matematik-2-pdf-u6-q9",
    "unitId": "matematik-2-pdf-u6",
    "text": "T| = Birler basamağında 8 rakamı bulunan iki basamaklı en küçük doğal sayıdır. Y| = Onlar basamağında 3 rakamı bulunan iki basamaklı en büyük doğal sayıdır. Verilen bilgilere göre, Y■ – T■ işleminin sonucu aşağıdakilerden hangisidir...",
    "options": [
      "68",
      "42",
      "21 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 68"
  },
  {
    "id": "matematik-2-pdf-u6-q10",
    "unitId": "matematik-2-pdf-u6",
    "text": "20 13 7-= Verilen işlem aşağıdaki problemlerden hangisinin çözümü olabilir...",
    "options": [
      "13 eksiği 20 olan sayı kaçtır...",
      "Ayça 20 fındığın 13’ünü yedi, geriye kaç fındığı kaldı...",
      "Melisa’nın 20 tane tokası vardı, kuzeni 7 tane daha verdi. Melisa’nın kaç tokası oldu... ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Melisa’nın 20 tane tokası vardı, kuzeni 7 tane daha verdi. Melisa’nın kaç tokası oldu... ()"
  },
  {
    "id": "matematik-2-pdf-u7-q1",
    "unitId": "matematik-2-pdf-u7",
    "text": "23 55 49+- = 48 279-= olduğuna göre, 4 yerine hangi sayı yazılmalıdır...",
    "options": [
      "77",
      "67",
      "57 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 67"
  },
  {
    "id": "matematik-2-pdf-u7-q2",
    "unitId": "matematik-2-pdf-u7",
    "text": "42 17x -= 20x 9+= olduğuna göre, 9 yerine hangi sayı yazılmalıdır...",
    "options": [
      "39",
      "45",
      "79 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 39"
  },
  {
    "id": "matematik-2-pdf-u7-q3",
    "unitId": "matematik-2-pdf-u7",
    "text": "Bir çıkarma işleminde eksilen 67 ve fark 29 olduğuna göre, çıkan kaçtır...",
    "options": [
      "38",
      "42",
      "96 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 96 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u7-q4",
    "unitId": "matematik-2-pdf-u7",
    "text": "Onur 46 ile 39’u yanlış toplayarak 95 bulmuştur. Buna göre, yanlış sonuç doğru sonuçtan kaç fazladır...",
    "options": [
      "15",
      "10",
      "5 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 5 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u7-q5",
    "unitId": "matematik-2-pdf-u7",
    "text": "Bir kitaplıkta 67 tane hikâye kitabı vardır. Bu kitaplıktaki boyama kitabı sayısı, hikâye kitabı sayısından 48 eksiktir. Buna göre, bu kitaplıktaki hikâye ve boyama kitabı sayılarının toplamı kaçtır...",
    "options": [
      "115",
      "86",
      "77",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 115"
  },
  {
    "id": "matematik-2-pdf-u7-q6",
    "unitId": "matematik-2-pdf-u7",
    "text": "36 - 17 = 12 + ■ Verilen eşitlikte ■ bir doğal sayıdır. Buna göre, ■ kaçtır...",
    "options": [
      "17",
      "7 19. - Verilen çıkarma işleminde çıkan kaçtır...",
      "18",
      "22"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 18"
  },
  {
    "id": "matematik-2-pdf-u7-q7",
    "unitId": "matematik-2-pdf-u7",
    "text": "Ayşe iki basamaklı bir doğal sayı yazıyor. Bu sayının basamaklarındaki rakamların basamak değerleri farkı 51’dir. Bu sayı kaçtır...",
    "options": [
      "59",
      "65",
      "69 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 65"
  },
  {
    "id": "matematik-2-pdf-u7-q8",
    "unitId": "matematik-2-pdf-u7",
    "text": "31 16 52 3 -= -= Yukarıdaki çıkarma işlemlerinde ve49 birer doğal sayıdır. Buna göre, 49+ işleminin sonucu kaçtır...",
    "options": [
      "33",
      "43",
      "55 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 55 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u7-q9",
    "unitId": "matematik-2-pdf-u7",
    "text": "Bir otobüste 43 yolcu vardır. Durakta 19 kişi iniyor, 4 kişi biniyor. Buna göre, son durumda otobüsteki yolcu sayısı kaçtır...",
    "options": [
      "19",
      "27",
      "28 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 19"
  },
  {
    "id": "matematik-2-pdf-u7-q10",
    "unitId": "matematik-2-pdf-u7",
    "text": "▲ - 27 = 37 + 29 Verilen eşitlikte ▲ bir doğal sayıdır. Buna göre, ▲ kaçtır...",
    "options": [
      "94",
      "93",
      "84",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 94"
  },
  {
    "id": "matematik-2-pdf-u8-q1",
    "unitId": "matematik-2-pdf-u8",
    "text": "ırmızı, beyaz ve sarı güllerin bulunduğu bir bukette toplam 86 tane gül vardır. Bu buketteki kırmızı güllerin sayısı 26, beyaz güllerin sayısı 32’dir. Buna göre, bu buketteki sarı güllerin sayısı kaçtır...",
    "options": [
      "38",
      "34",
      "28",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 34"
  },
  {
    "id": "matematik-2-pdf-u8-q2",
    "unitId": "matematik-2-pdf-u8",
    "text": "46 - 18 = Verilen eşitlikte yerine aşağıdakilerden hangisi yazılırsa eşitlik doğru olur...",
    "options": [
      "46 - 20",
      "9 + 19",
      "16 + 22 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 16 + 22 ()"
  },
  {
    "id": "matematik-2-pdf-u8-q3",
    "unitId": "matematik-2-pdf-u8",
    "text": "“Bir sepetteki 15 yumurtanın 3 tanesi kullanılmıştır. Geriye kaç yumurta kalmıştır... ” Yukarıdaki problemin çözümünde çokluklar arasındaki ilişki aşağıdakilerin hangisinde verilmiştir...",
    "options": [
      "alan yumurta sayısı Sepetteki yumurta sayısı= + ullanılan yumurta sayısı",
      "Sepetteki yumurta sayısı alan yumurta sayısı= - ullanılan yumurta sayısı",
      "alan yumurta sayısı Sepetteki yumurta sayısı= - ullanılan yumurta sayısı (Ç) 31. Onlar basamağı Birler basamağı Sinem abaküste iki basamaklı bir sayı oluşturacaktır. Oluşturacağı sayının basamak değerleri farkı 46’dır. Abaküste birler basamağının olduğu yere 4 boncuk takmıştır. Buna göre, onlar basamağının olduğu yere kaç boncuk takmalıdır...",
      "5 (Ç) 32. Resimdeki toplardan iki düzinesi boyanırsa boyanmamış kaç top kalır..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: alan yumurta sayısı Sepetteki yumurta sayısı= + ullanılan yumurta sayısı"
  },
  {
    "id": "matematik-2-pdf-u8-q4",
    "unitId": "matematik-2-pdf-u8",
    "text": "54 - 16 = ▲ ▲ - ■ = 24 Yukarıdaki işlemlerde ▲ ve ■ birer doğal sayıdır. Buna göre, ■ kaçtır...",
    "options": [
      "14",
      "24",
      "52 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 14"
  },
  {
    "id": "matematik-2-pdf-u8-q5",
    "unitId": "matematik-2-pdf-u8",
    "text": "Erdem 80 sayfalık bir kitabı üç günde okumuştur. Birinci gün bu kitabın 26 sayfasını, ikinci gün 19 sayfasını okumuştur. Buna göre, Erdem üçüncü gün kaç sayfa kitap okumuştur...",
    "options": [
      "21",
      "35",
      "47 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 47 (Ç)"
  },
  {
    "id": "matematik-2-pdf-u8-q6",
    "unitId": "matematik-2-pdf-u8",
    "text": "Bir çıkarma işlemi için aşağıdaki eşitliklerden hangisi yanlıştır...",
    "options": [
      "Eksilen - Çıkan = Fark",
      "Eksilen + Fark = Çıkan",
      "Eksilen - Fark = Çıkan ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Eksilen - Çıkan = Fark"
  },
  {
    "id": "matematik-2-pdf-u8-q7",
    "unitId": "matematik-2-pdf-u8",
    "text": "Ece’den tahtaya yazılan sayı ile 16’yı toplaması istenmiştir. Ancak Ece toplama işlemi yapmak yerine bu sayıdan 16’yı çıkararak sonucu 3 bulmuştur. Ece bu işlemi doğru yapsaydı, sonucu kaç bulurdu...",
    "options": [
      "25",
      "32",
      "35 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 32"
  },
  {
    "id": "matematik-2-pdf-u8-q8",
    "unitId": "matematik-2-pdf-u8",
    "text": "45 - 12 = 15 +  Yukarıdaki eşitlikte  yerine hangi sayı yazılmalıdır...",
    "options": [
      "13",
      "18",
      "27 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 18"
  },
  {
    "id": "matematik-2-pdf-u8-q9",
    "unitId": "matematik-2-pdf-u8",
    "text": "Boş bir otobüse ilk durakta yolcular biniyor. İkinci durakta 20 yolcu inip 11 yolcu biniyor. Son durumda otobüste 40 yolcu olduğuna göre ilk durakta kaç yolcu binmiştir...",
    "options": [
      "20",
      "29",
      "49 (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 20"
  },
  {
    "id": "matematik-2-pdf-u8-q10",
    "unitId": "matematik-2-pdf-u8",
    "text": "2-A sınıfı öğrencileri 72 tane bayrak kullanarak sınıflarındaki camları ve panoları süslemişlerdir. Camlar 24 tane bayrak ile süslendiğine göre, panolar için kaç tane bayrak kullanılmıştır...",
    "options": [
      "42",
      "48",
      "52 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 42"
  },
  {
    "id": "matematik-2-pdf-u9-q1",
    "unitId": "matematik-2-pdf-u9",
    "text": "27 - 12 = 15 Verilen işlem aşağıdaki problemlerden hangisinin çözümü olabilir...",
    "options": [
      "Elif kalemlerinin 12 tanesini kardeşine verince 27 kalemi kaldı. Elif’in kaç kalemi vardı...",
      "12 fazlası 15 olan sayı kaçtır...",
      "Onur’un 27 bilyesi vardı. 12 bilyesini arkadaşına verdi. Onur’un geriye kaç bilyesi kaldı... (Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Elif kalemlerinin 12 tanesini kardeşine verince 27 kalemi kaldı. Elif’in kaç kalemi vardı..."
  },
  {
    "id": "matematik-2-pdf-u9-q2",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki kapların her birinde dört parmak yüksekliğinde su bulunmaktadır. Hangi kaptaki su en fazladır...",
    "options": [
      "B)",
      "() 4. Bir su bardağı 2 çay bardağı dolusu süt ile dolmaktadır. Süt dolu 3 su bardağı kaç boş çay bardağına doldurulabilir...",
      "6 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 6 ()"
  },
  {
    "id": "matematik-2-pdf-u9-q3",
    "unitId": "matematik-2-pdf-u9",
    "text": "Bir şişe meyve suyu 3 bardağı tamamen, 1 bardağı da yarım doldurmaktadır. 4 şişe meyve suyu kaç bardağı tamamen doldurur...",
    "options": [
      "13",
      "14",
      "15(Ç) 6. Sürahinin yarısı su doludur. Bu suyun tamamı ile, aynı büyüklükte 6 bardak tam olarak doldurulmaktadır. Tamamı dolu olan bu sürahilerden üçüyle, bu bardaklardan en çok kaç tanesi tamamen doldurulur...",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 14"
  },
  {
    "id": "matematik-2-pdf-u9-q4",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki kapların her birine eşit miktarlarda su konacaktır. aplara konan su hiç birinde taşmadığına göre hangisindeki su seviyesi daha yüksek olur...",
    "options": [
      "B)",
      "D) (Ç) 8. Şekildeki boş sürahi 4 bardak su ile dolmaktadır. 20 öğrencinin birer bardak su içmesi için su ile dolu kaç sürahiye ihtiyaç vardır...",
      "6 () 9. Fincan upa Sürahi Ayşe, Berna ve Fatma şekildeki dolu sürahiden süt içmektedir. Ayşe ve Berna üçer fincan, Fatma 1 kupa süt içmiştir. Sürahi 12 fincan, kupa 2 fincan süt ile dolmaktadır. Buna göre, sürahide kaç fincan süt kalmıştır...",
      "3 (Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 6 () 9. Fincan upa Sürahi Ayşe, Berna ve Fatma şekildeki dolu sürahiden süt içmektedir. Ayşe ve Berna üçer fincan, Fatma 1 kupa süt içmiştir. Sürahi 12 fincan, kupa 2 fincan süt il"
  },
  {
    "id": "matematik-2-pdf-u9-q5",
    "unitId": "matematik-2-pdf-u9",
    "text": "Görseldeki tencereden 9 kâsenin her birine 3 kepçe çorba konmuştur. Tencerede 5 kepçe çorba kalmıştır. âselerTencere epçe Buna göre, bu tencerede başlangıçta kaç kepçe çorba vardı...",
    "options": [
      "32",
      "30",
      "27",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 32"
  },
  {
    "id": "matematik-2-pdf-u9-q6",
    "unitId": "matematik-2-pdf-u9",
    "text": "Dairesel bir yüze sahip olmayan cisim aşağıdakilerden hangisidir...",
    "options": [
      "ova",
      "itap",
      "onserve kutusu () 2. Görselde aşağıdaki geometrik şekillerden hangisi kullanılmamıştır...",
      "Çember"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: itap"
  },
  {
    "id": "matematik-2-pdf-u9-q7",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki şekillerden hangisi simetrik değildir...",
    "options": [
      "C)A) () 11. Oyuncakçı TerziPark Okul Ahmet Pastane Eczane Ahmet bulunduğu konumdan oyuncakçıya gidecektir. Buna göre, Ahmet’in gideceği yolun resme göre tarifi aşağıdakilerden hangisidir...",
      "Doğru yürü, 2 nolu yola gir, ileride solda",
      "Doğru yürü, 3 nolu yola gir, ileride sağda",
      "Doğru yürü, 2 nolu yola gir, ileride sağda Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: C)A) () 11. Oyuncakçı TerziPark Okul Ahmet Pastane Eczane Ahmet bulunduğu konumdan oyuncakçıya gidecektir. Buna göre, Ahmet’in gideceği yolun resme göre tarifi aşağıdakilerden hang"
  },
  {
    "id": "matematik-2-pdf-u9-q8",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki tablo kare kutucuklardan oluşmuştur. sol sağ aşağı yukarı Tabloya göre, fare aşağıdaki hareketlerden hangisini yaparsa peynire ulaşamaz...",
    "options": [
      "3 kutu yukarıya",
      "1 kutu aşağıya",
      "2 kutu sola Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1 kutu aşağıya"
  },
  {
    "id": "matematik-2-pdf-u9-q9",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki tablo yirmi dört eş kutudan oluşmuştur. aşağı sağ sol yukarı ▲ ● ★ ■ Tabloya göre, aşağıdakilerden hangisi yanlıştır...",
    "options": [
      ", 3 kutu aşağıya götürüldüğünde ● ile aynı kutuda olur.",
      ", 4 kutu sağa götürüldüğünde ile aynı kutuda olur.",
      ", 2 kutu yukarı götürüldüğünde ile aynı kutuda olur.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: , 4 kutu sağa götürüldüğünde ile aynı kutuda olur."
  },
  {
    "id": "matematik-2-pdf-u9-q10",
    "unitId": "matematik-2-pdf-u9",
    "text": "Aşağıdaki tablo yirmi sekiz eş kutudan oluşmuştur. aşağı sağ sol yukarı Tabloya göre, aşağıdakilerden hangisi yanlıştır...",
    "options": [
      ", 3 kutu yukarı götürüldüğünde ile aynı kutuda olur.",
      ", 4 kutu sola götürüldüğünde ile aynı kutuda olur.",
      ", 4 kutu sağa götürüldüğünde ile aynı kutuda olur. GEOMETRİ ÖRÜNTÜLER 1. Verilen örüntüyle aynı ilişkiye sahip olan örüntü aşağıdakilerden hangisidir...",
      "B)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: , 4 kutu sağa götürüldüğünde ile aynı kutuda olur. GEOMETRİ ÖRÜNTÜLER 1. Verilen örüntüyle aynı ilişkiye sahip olan örüntü aşağıdakilerden hangisidir..."
  },
  {
    "id": "matematik-2-pdf-u10-q1",
    "unitId": "matematik-2-pdf-u10",
    "text": "Aşağıda verilen örüntülerden hangisinin kuralı diğerlerinden farklıdır...",
    "options": [
      "B)",
      "5. Yukarıdaki nesneler bir kurala göre dizilmiştir. Bu örüntüde çizgiler yerine sırasıyla aşağıdakilerin hangisindeki şekiller getirilmelidir...",
      "B)",
      "Ç 6. Verilen örüntüde eksik bırakılan yerlere sırasıyla aşağıdakilerden hangisi gelmelidir..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 5. Yukarıdaki nesneler bir kurala göre dizilmiştir. Bu örüntüde çizgiler yerine sırasıyla aşağıdakilerin hangisindeki şekiller getirilmelidir..."
  },
  {
    "id": "matematik-2-pdf-u10-q2",
    "unitId": "matematik-2-pdf-u10",
    "text": "Bir durakta öğrenciler tek sıraya girmiş, otobüs beklemektedir. emal baştan 17. sırada, Hüseyin sondan 6. sıradadır. emal ile Hüseyin arasında 1 kişi bulunmaktadır. Buna göre, bu sırada en fazla kaç kişi vardır...",
    "options": [
      "18",
      "20",
      "24 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 24 ()"
  },
  {
    "id": "matematik-2-pdf-u10-q3",
    "unitId": "matematik-2-pdf-u10",
    "text": "Hatice’nin dayısı 45, halası 38, amcası 52 ve teyzesi 39 yaşındadır. Hatice’nin akrabalarının yaşlarına göre, büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir...",
    "options": [
      "Amcası, dayısı, teyzesi, halası",
      "Dayısı, teyzesi, halası, amcası",
      "Teyzesi, halası, dayısı, amcası",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Amcası, dayısı, teyzesi, halası"
  },
  {
    "id": "matematik-2-pdf-u10-q4",
    "unitId": "matematik-2-pdf-u10",
    "text": "13’ten başlanarak ileriye doğru ritmik sayma yapılacaktır. Aşağıdaki ritmik saymalardan hangisi yapılırsa 22 sayısı söylenir...",
    "options": [
      "İkişer",
      "Üçer",
      "Dörder",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Üçer"
  },
  {
    "id": "matematik-2-pdf-u10-q5",
    "unitId": "matematik-2-pdf-u10",
    "text": "Aşağıdaki sayılardan hangisinin en yakın olduğu onluk, 80 değildir...",
    "options": [
      "79",
      "83",
      "86 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 86 ()"
  },
  {
    "id": "matematik-2-pdf-u10-q6",
    "unitId": "matematik-2-pdf-u10",
    "text": "dir. Bu sınıfta kaç öğrenci vardır...",
    "options": [
      "19",
      "21",
      "22 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 21"
  },
  {
    "id": "matematik-2-pdf-u10-q7",
    "unitId": "matematik-2-pdf-u10",
    "text": "Serdar Öğretmen, aşağıda ağırlıkları verilen öğrencileri en ağırından en hafife doğru sıralayarak bir tablo hazırlayacaktır. Arda: 30 kilogram Emel : 29 kilogram Ege : 32 kilogram Buna göre, tabloda baştan ikinci sıradaki öğrenci kim olur...",
    "options": [
      "Arda",
      "Emel",
      "Ege ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Arda"
  },
  {
    "id": "matematik-2-pdf-u10-q8",
    "unitId": "matematik-2-pdf-u10",
    "text": "Ufuk’un 15 tane kırmızı misketi, kırmızı misketlerinin sayısından daha fazla sayıda mavi misketi vardır. Buna göre, Ufuk’un mavi misketlerinin sayısı aşağıdakilerden hangisi olabilir...",
    "options": [
      "14",
      "15",
      "16 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 16 ()"
  },
  {
    "id": "matematik-2-pdf-u10-q9",
    "unitId": "matematik-2-pdf-u10",
    "text": "Onlar basamağındaki rakamın basamak değeri 40 olan iki basamaklı en büyük doğal sayı kaçtır...",
    "options": [
      "49",
      "44",
      "40 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 49"
  },
  {
    "id": "matematik-2-pdf-u10-q10",
    "unitId": "matematik-2-pdf-u10",
    "text": "4 8 12 16 20 Adımları arasındaki farkı sabit olan yukarıdaki sayı örüntüsünün kuralı kullanılarak 71 52 3Y_ örüntüsü oluşturuluyor. +Y_ ve +Y_ birer doğal sayı olduğuna göre, +Y_ işleminin sonucu kaçtır...",
    "options": [
      "34",
      "32",
      "30 ()",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 30 ()"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q1",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Ahmet ve Fatih okulun bahçesinde şarkı söylüyordu. Metin, onların sesleriyle alay etti. Yukarıdaki parçada Ahmet ve Fatih, Metin’e aşağıdakilerden hangisini söylerse doğru davranmış olurlar...",
    "options": [
      "Bunu yapmanı istemiyoruz.",
      "Bizim sesimiz herkesinkinden güzeldir.",
      "Bizimle bir daha konuşma. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bunu yapmanı istemiyoruz."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q2",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Ali’nin, aşağıdaki sözlerinden hangisi, arkadaşlarıyla ilgili duygusunu ifade eder...",
    "options": [
      "Arkadaşlarımla oyun oynarım.",
      "Arkadaşlarımı çok severim.",
      "Arkadaşlarımla iyi geçinirim. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Arkadaşlarımla iyi geçinirim. -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q3",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Ahmet, insanları çok sevmektedir. Buna göre, aşağıdakilerden hangisi Ahmet’in yapması beklenen davranışlarından biri olamaz...",
    "options": [
      "İhtiyacı olanlara yardım etmesi",
      "İnsanların duygularına önem vermesi",
      "Arkadaşlarının sorunlarına ilgisiz olması -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: İnsanların duygularına önem vermesi"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q4",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Fatma’nın aşağıdaki davranışlarından hangisi, arkadaşlarına saygılı davrandığına örnek olur...",
    "options": [
      "Arkadaşları söz alınca sessizce dinlemesi",
      "Derslerine çalışması",
      "Arkadaşlarıyla oyun oynaması -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Derslerine çalışması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q5",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Okuldaki kulüp ve grup çalışmalarına katılırken aşağıdakilerden hangisine öncelik vermeliyiz...",
    "options": [
      "Ailemizin fikirlerine",
      "Yetenek ve ilgilerimize",
      "Arkadaşlarımızın isteklerine -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Arkadaşlarımızın isteklerine -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q6",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Çevremizdeki insanlarla iletişim kurarken aşağıdakilerden hangisini yapmamız uygun olmaz...",
    "options": [
      "Arkadaşımızı dikkatle dinlemek",
      "Oyun bozan arkadaşımızı uyarmak",
      "Hep kendi isteklerimizi kabul ettirmeye çalışmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hep kendi isteklerimizi kabul ettirmeye çalışmak -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q7",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Çocuklar! Ben; Adil olmaya çok önem veririm. Tuğrul Sizce bu özelliklerine göre Tuğrul, aşağıdaki mesleklerden hangisini seçerse doğru tercih yapmış olur...",
    "options": [
      "Hâkimlik",
      "Doktorluk",
      "Mühendislik - 9. İki bin dört yılında Sinop’ta doğmuşum. 1. İlkokul 3. sınıfta iken Ankara’ya taşındık. 2. Büyüyünce tıp eğitimi almak istiyorum. 3. Sude Sude’nin numaralandırılarak verilen bu öz geçmişinde kaç numaralı ifadenin olması doğru olmaz...",
      "3 -"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Mühendislik - 9. İki bin dört yılında Sinop’ta doğmuşum. 1. İlkokul 3. sınıfta iken Ankara’ya taşındık. 2. Büyüyünce tıp eğitimi almak istiyorum. 3. Sude Sude’nin numaralandırılara"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q8",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Aşağıdakilerden hangisi okul kurallarından biri değildir...",
    "options": [
      "Sınıfı temiz tutmak",
      "Zamanında uyuyup uyanmak",
      "Okuldan izin alarak ayrılmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Zamanında uyuyup uyanmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q9",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "“Sınıf başkanını oy kullanarak seçimle belirledik. Böylece sınıfımızda - - - - bir ortam oluşturduk.” Verilen boşluğa, aşağıdaki kelimelerden hangisinin yazılması doğru olur...",
    "options": [
      "kararlı",
      "sabırlı",
      "demokratik -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: demokratik -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u1-q10",
    "unitId": "hayat-bilgisi-2-pdf-u1",
    "text": "Ali, kantinden tost almak için sıraya girdi. Sıra ona geldiğinde tost bitmişti. Çok aç olan Ali, kendisinden önce son tostu alan Bora’nın elinden tostu çekti. Durumu gören bir öğretmen çocukların yanına gelerek olayı açıklamalarını istedi. Yukarıdaki olayın sonucunda Ali, Bora’ya hangisini söylemelidir...",
    "options": [
      "Afiyet olsun.",
      "Geçmiş olsun.",
      "Özür dilerim. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Özür dilerim. -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q1",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Aşağıda 2/B sınıfının oturma düzeni verilmiştir: Ece erem Sibel Murat Sevgi Ali Umut Buna göre, aşağıdaki öğrencilerden hangileri öğretmenin sağ tarafında oturmaktadır...",
    "options": [
      "Ali - Umut",
      "Sevgi - Ece",
      "Murat - erem -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Sevgi - Ece"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q2",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Aşağıdakilerden hangisi fiziksel özelliklerimizden biridir...",
    "options": [
      "Duygularımız",
      "Boyumuz",
      "Yeteneklerimiz -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Duygularımız"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q3",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Aykut, arkadaşının doğum günü partisine gitmişti. Pasta kesilip yenildikten sonra palyaço tüm çocukları oyuna çağırdı. Aykut, palyaçonun düzenlediği oyuna katılmayı hiç istemiyordu. Bu durumda Aykut, aşağıdakilerden hangisini yapmalıdır...",
    "options": [
      "İstemese bile oyuna katılmalıdır.",
      "Palyaçoya, oyuna katılmak istemediğini açıklamalıdır.",
      "Annesinin yanına gitmeli ve ağlayarak oyuna katılmak istemediğini ona söylemelidir. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İstemese bile oyuna katılmalıdır."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q4",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Okul kurallarına neden ihtiyaç duyarız...",
    "options": [
      "Düzenli beslenmek için",
      "Okullar inşa etmek için",
      "Sağlıklı ve düzenli bir eğitim ortamı sağlamak için -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sağlıklı ve düzenli bir eğitim ortamı sağlamak için -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q5",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Arkadaşınızın silgisini, aşağıdaki ifadelerden hangisiyle istemeniz doğru olmaz...",
    "options": [
      "Silgini bana uzat!",
      "Silgini kullanabilir miyim...",
      "Silgine ihtiyacım var, alabilir miyim... -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Silgine ihtiyacım var, alabilir miyim... -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q6",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Bir sınıfta Cumhuriyet Bayramı ile ilgili pano hazırlanacaktır. Pano hazırlıkları sırasında aşağıdakilerden hangisinin yapılması uygun değildir...",
    "options": [
      "Öğretmenin öğrencilere fikirlerini sorması",
      "Sınıftaki tüm öğrencilerin katılması",
      "Öğrencilerin birbirleriyle yüksek sesle konuşması -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Sınıftaki tüm öğrencilerin katılması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q7",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Seda, Hayat Bilgisi dersinde okul kaynaklarını ve eşyalarını özenli kullanması gerektiğini öğrenmiştir. Buna göre, Seda’nın aşağıdaki davranışlardan hangisini yapması beklenir...",
    "options": [
      "Defterlerini ve kitaplarını temiz kullanması",
      "Lambaları gereksiz yere yakması",
      "Lavabolarda suyu boşa akıtması -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Defterlerini ve kitaplarını temiz kullanması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q8",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Bir sınıftaki öğrenciler Orman Haftası ile ilgili grup çalışması yapacaktır. Bu çalışma sırasında aşağıdakilerden hangisinin yapılması uygun değildir...",
    "options": [
      "İş bölümü yapılması",
      "Nezaket ifadelerinin kullanılması",
      "ararları bir kişinin vermesi -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Nezaket ifadelerinin kullanılması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q9",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Ders: Görsel Sanatlar Buna göre, pazartesi günü Melis’in aşağıdakilerden hangisini okula götürmesine gerek yoktur...",
    "options": [
      "Defter",
      "Flüt",
      "Boya kalemi - 22. Market ütüphane Okul Park Atatürk Caddesi Görseldeki okulun yeri aşağıdaki ifadelerden hangisiyle tarif edilemez...",
      "Atatürk Caddesi’ndedir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Boya kalemi - 22. Market ütüphane Okul Park Atatürk Caddesi Görseldeki okulun yeri aşağıdaki ifadelerden hangisiyle tarif edilemez..."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u2-q10",
    "unitId": "hayat-bilgisi-2-pdf-u2",
    "text": "Okulda öğretmenimizin anlattıklarını anlayabilmek için onu iyi bir şekilde dinlemeliyiz. Buna göre, aşağıdakilerden hangisi öğretmenimizi dinlerken yapmamız gereken davranışlardandır...",
    "options": [
      "Yüzüne bakarak dinlemek",
      "Dinlerken başka işlerle uğraşmak",
      "Ders anlatırken sözünü kesmek -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dinlerken başka işlerle uğraşmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q1",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Arkadaşlarımızla oyun oynarken uymamız gereken kurallar vardır. Aşağıdakilerden hangisi bu kurallardan biridir...",
    "options": [
      "Öfkeli davranışlarda bulunmak",
      "Oyuna katılırken izin istemek",
      "Oyunu kazanan tarafla tartışmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Öfkeli davranışlarda bulunmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q2",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Aşağıdakilerden hangisi nezaket kurallarına uygun bir ifadedir...",
    "options": [
      "Beni dikkatle dinlediğin için teşekkür ederim.",
      "Seni düşüreyim de gör gününü!",
      "Hep yanlış oynuyorsun. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Seni düşüreyim de gör gününü!"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q3",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Aşağıdakilerden hangisi fiziksel özelliklerimizden biri değildir...",
    "options": [
      "Boyumuz",
      "Göz rengimiz",
      "Duygularımız -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Duygularımız -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q4",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Ahmet teneffüste top oynarken ayağını incitmiştir. Nöbetçi öğretmenin, durumu ailesine bildirebilmesi için Ahmet öncelikle aşağıdaki bilgilerden hangisini öğretmenine söylemelidir...",
    "options": [
      "Velisinin telefon numarasını",
      "ardeşinin adını",
      "Babasının mesleğini -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: ardeşinin adını"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q5",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "DERS Görsel Sanatlar Verilen ders programına göre, Ayça’nın aşağıdakilerden hangisini çantasına koymasına gerek yoktur...",
    "options": [
      "Flüt",
      "Cetvel",
      "Boya kalemleri -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Cetvel"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q6",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Aşağıdakilerden hangisi arkadaşlarımızla ilişkilerimizi olumsuz etkileyen davranışlardan biri değildir...",
    "options": [
      "Alınganlık",
      "Uyumluluk",
      "Bencillik - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Uyumluluk"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q7",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Aşağıdakilerden hangisi, bilinçli tüketicinin davranışlarından biri değildir...",
    "options": [
      "Haklarını bilip ona sahip çıkması",
      "Alışverişte ihtiyaçlarına öncelik vermesi",
      "Alacağı malın pahalı olmasına dikkat etmesi - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Alacağı malın pahalı olmasına dikkat etmesi - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q8",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Okullardaki kuralların olmadığını bir an için düşünün. O zaman okullarda nasıl bir ortam oluşurdu...",
    "options": [
      "Şenlikli",
      "argaşalı",
      "Hoşgörülü - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hoşgörülü - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q9",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Aşağıdaki davranışlardan hangisi vücudumuza zarar vermez...",
    "options": [
      "Sınıfta ve teneffüslerde sürekli koşarak hareket etmek",
      "esici ve delici araçlarla oynamak",
      "imseyi itmeden okula girip çıkmak - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Sınıfta ve teneffüslerde sürekli koşarak hareket etmek"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u3-q10",
    "unitId": "hayat-bilgisi-2-pdf-u3",
    "text": "Serpil Öğretmen, okulların açıldığı hafta öğrencilerine sınıfta düzenin sağlanması için bazı kurallar koyulması gerektiğini söylemiştir. Uyulması gereken bu kurallar aşağıdakilerden hangisiyle belirlenmelidir...",
    "options": [
      "Öğrencilerin oy çokluğuyla",
      "Müdürün görüşüyle",
      "Sınıf başkanının kararıyla - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Müdürün görüşüyle"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q1",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Can : Okulumuzdaki kaynakları ve eşyaları bilinçli kullanmalıyız. Ece : Peki bunun için neler yapabiliriz... Can : - - - - Verilen konuşmada boş bırakılan yere aşağıdakilerden hangisi yazılırsa Can doğru bir bilgi vermiş olur...",
    "options": [
      "Sıralarımızın üzerini çizmeliyiz.",
      "Lavabolarda suyu boşa akıtmalıyız.",
      "Gereksiz yanan lambaları kapatmalıyız. - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Lavabolarda suyu boşa akıtmalıyız."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q2",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "- - - - bizi diğer insanlardan ayıran fiziksel özelliklerimizden biridir. Cümledeki boşluğa aşağıdakilerden hangisinin yazılması uygun değildir...",
    "options": [
      "Duygularımız",
      "ilomuz",
      "Saç rengimiz - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Duygularımız"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q3",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Merve’nin bazı dersler için okula götürmesi gereken malzemeler aşağıdaki gibidir. Matematik : Cetvel Türkçe : Sözlük Müzik : Flüt Görsel Sanatlar : Boya kalemi Merve salı günkü ders programına göre çantasına cetvel, sözlük ve boya kalemi koymuştur. Gereksiz ya da eksik malzeme koymamıştır. Buna göre, Merve’nin salı günkü ders programında aşağıdaki derslerden hangisi yoktur...",
    "options": [
      "Türkçe",
      "Müzik",
      "Matematik - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Matematik - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q4",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Sınıf arkadaşımızdan kalem isterken aşağıdaki ifadelerden hangisini kullanırsak nezaket kurallarına uymuş oluruz...",
    "options": [
      "Bana kalemi uzat.",
      "alemini bana vermek zorundasın.",
      "Fazla kalemin varsa bana verebilir misin... - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bana kalemi uzat."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q5",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Aşağıdakilerden hangisi iyi bir dinleyicinin özelliklerinden biri değildir...",
    "options": [
      "Dinlerken başka işlerle uğraşması",
      "onuşan kişiyle göz teması kurması",
      "onuşan kişinin söylediklerini önemsemesi - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: onuşan kişiyle göz teması kurması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q6",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Sude : Resim yapmayı çok severim. Ahmet : Uzun, kahverengi saçlarım var. Beren : Basketbol oynamak keyifli. Buna göre, hangi çocuk fiziksel özelliğinden bahsetmiştir...",
    "options": [
      "Sude",
      "Ahmet",
      "Beren - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Beren - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q7",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Zeynep, okul kaynaklarını ve eşyalarını özenli kullanan bir öğrencidir. Buna göre, Zeynep’in aşağıdaki davranışlardan hangisini yapması beklenmez...",
    "options": [
      "Temizlik malzemelerini yeterli miktarda tüketmesi",
      "Lavabo ve tuvaletleri temiz tutması",
      "Sınıftaki lambaları gereksiz yere yakması - Ç 43. Satranç yerine voleybol oynamak bana daha eğlenceli geliyor. enan Ayça Teneffüslerde satranç oynamaktan hoşlanırım. Benimle satranç oynamak ister misin... enan ve Ayça bu konuşmanın sonunda ortak bir karar almışlardır. Buna göre, enan ve Ayça’nın aşağıdakilerden hangisine saygı duydukları söylenebilir...",
      "Bireysel farklılıklarına"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Temizlik malzemelerini yeterli miktarda tüketmesi"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q8",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Bir grup arkadaş, sınıf kitaplığı oluşturmak için grup çalışması yapmaya karar vermişlerdir. Buna göre, grup görevleri paylaştırılırken aşağıdakilerden hangisine dikkat edilmelidir...",
    "options": [
      "Görevlerin, almak istemeyenlere dağıtılmasına",
      "En zor görevleri tek kişinin yapmasına",
      "Görev dağılımının yeteneklere göre yapılmasına - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: En zor görevleri tek kişinin yapmasına"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q9",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Okul bahçesinde oynarken Eren yanlışlıkla Gökhan’ı düşürmüştür. Eren Gökhan - - - - Bu durumda nezaket kurallarına göre, Eren’in aşağıdakilerden hangisini söylemesi gerekir...",
    "options": [
      "Hep önüme çıkıyorsun!",
      "Özür dilerim.",
      "Hadi ayağa kalk! - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hadi ayağa kalk! - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u4-q10",
    "unitId": "hayat-bilgisi-2-pdf-u4",
    "text": "Aşağıdakilerden hangisi “Birlikten kuvvet doğar.” atasözüne uygun bir davranıştır...",
    "options": [
      "Sınıfta grup çalışması yapmak",
      "Okul eşyalarını özenli kullanmak",
      "Ödevleri zamanında yapmak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Okul eşyalarını özenli kullanmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q1",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Atakan : Gözlerim kahverengidir. Ela : Uzun boyluyum. Meryem : Gitar çalabiliyorum. Yukarıdaki öğrencilerden hangisi yeteneğinden söz etmiştir...",
    "options": [
      "Meryem",
      "Atakan",
      "Ela",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Meryem"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q2",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Ders Görsel Sanatlar Bu ders programına göre, çantasını hazırlayan Mehmet aşağıdakilerden hangisini çantasına koymuş olamaz...",
    "options": [
      "Boya kalemi",
      "Yabancı dil sözlüğü",
      "Flüt",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Flüt"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q3",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Okul bahçesinde top oynarken Alper, Arzu’ya yanlışlıkla çarptı. Arzu’nun canı acıdı. Alper nezaket kurallarına göre Arzu’ya aşağıdakilerden hangisini söylemelidir...",
    "options": [
      "Özür dilerim.",
      "Bir şey olmaz.",
      "Oynamaya devam.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bir şey olmaz."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q4",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Aşağıdakilerden hangisi kaynakları ve ders araç gereçlerini özenli kullanan kişiye ait bir ifade olamaz...",
    "options": [
      "Açık kalan lambaları kapatırım.",
      "Sıramın üzerine sevdiğim şekilleri çizerim.",
      "Isı kaybını önlemek için pencereleri kapatırım.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Açık kalan lambaları kapatırım."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q5",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Bazı öğrenciler sınıfta grup çalışması yaparken uyulması gerekenlerle ilgili görüşlerini aşağıda belirtmişlerdir. Onur: Hepimiz fikrimizi söylemeliyiz. Ezgi : Farklı fikirlere saygılı olmalıyız. Uğur : Çalışmalarımızı tek başımıza yapmalıyız. Bu öğrencilerden hangisi yanlış bir görüşte bulunmuştur...",
    "options": [
      "Onur",
      "Ezgi",
      "Uğur",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Uğur"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q6",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Teneffüste mendil kapmaca oynamaya karar veren Erdem ve arkadaşlarının aşağıdakilerden hangisini yapmaları yanlıştır...",
    "options": [
      "azanan gruba öfkelenmeleri",
      "Gruplarla işbirliği içinde oynamaları",
      "Oyun için bazı kurallar koymaları",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Gruplarla işbirliği içinde oynamaları"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q7",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Aşağıdakilerden hangisi okula hazırlıklı gitmek için yapılan doğru bir davranıştır...",
    "options": [
      "Bütün araç gereçlerimizi çantamıza koymak",
      "Çantamızı büyüklerimize hazırlatmak",
      "Çantamızı ders programına göre hazırlamak",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bütün araç gereçlerimizi çantamıza koymak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q8",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Cumhuriyet Bayramı ile ilgili sınıfta etkinlik yapmak isteyen 2/D sınıfı öğrencilerinin aşağıdakilerden hangisini yapması doğru bir davranıştır...",
    "options": [
      "Öğretmenin karar vermesini beklemeleri",
      "Birlikte karar vermeleri",
      "Fikirlerini açıklamaktan çekinmeleri",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Öğretmenin karar vermesini beklemeleri"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q9",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Aşağıdakilerden hangisi tasarruf amacıyla söylenmiş bir atasözüdür...",
    "options": [
      "Damlaya damlaya göl olur.",
      "Bakarsan bağ, bakmazsan dağ olur.",
      "Gülme komşuna, gelir başına. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Damlaya damlaya göl olur."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u5-q10",
    "unitId": "hayat-bilgisi-2-pdf-u5",
    "text": "Sofra hazırlanırken yardımcı olmak, dağınık eşyaları toplamak, ekmek ve gazete almak aşağıdakilerden hangisine karşı yerine getirmemiz gereken sorumluluklarımızdandır...",
    "options": [
      "Ailemize",
      "Okulumuza",
      "Arkadaşlarımıza -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Arkadaşlarımıza -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q1",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Aşağıdakilerden hangisi planlı ve düzenli çalışmanın faydalarındandır...",
    "options": [
      "Arkadaşlarımızı tanımak",
      "Bilinçli alışveriş yapmak",
      "Derslerimizde başarılı olmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bilinçli alışveriş yapmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q2",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Her gün; • 07.15’te evden çıkarım. • 12.30’da öğle yemeği yerim. • 15.00 ile 16.00 arası oyun oynarım. • 21.30’da ise uyurum. Gün içinde yaptıklarını böyle anlatan bir öğrenci için aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Zeki",
      "Planlı",
      "Çalışkan -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Çalışkan -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q3",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Okul takımının kaptanı şampiyonluk kupasını aldıktan sonra takımını kutlayanlara, “Biz planlı ve disiplinli çalıştığımız için başarılı olduk.” diyerek şampiyon olmalarının kendileri için sürpriz olmadığını söyledi. Bu parçaya göre, aşağıdakilerden hangisini yapmak başarılı olmayı sağlar...",
    "options": [
      "Okuldan geldikten sonra arkadaşlarla buluşup oynamak",
      "Her işi, büyüklerimiz söyledikten sonra yapmak",
      "Günlük işleri öncelik sırasına koymak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Okuldan geldikten sonra arkadaşlarla buluşup oynamak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q4",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "İlköğretim 2. sınıfta okuyan bir öğrenci aşağıdaki işlerden hangisini yapabilir...",
    "options": [
      "Sofra hazırlanırken yardım edebilir.",
      "Babasının elbiselerini ütüleyebilir.",
      "apı kollarını tamir edebilir. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: apı kollarını tamir edebilir. -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q5",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Tarık: “Babam hafta sonu su damlatan musluğu onardı, dışarıdan soğuk geldiği için pencere kenarlarına bant çekti. Evin odalarındaki lambaları az elektrik tüketenlerle değiştirdi.” Buna göre, Tarık’ın babası için aşağıdakilerden hangisini söylemek doğru olur...",
    "options": [
      "Ev işlerini fazla sevmediğini",
      "Evin güzelliğine önem verdiğini",
      "Evde kullanılan kaynakları tasarruflu kullandığı -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Evin güzelliğine önem verdiğini"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q6",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "8 yaşındaki Bülent, aşağıdaki davranışlardan hangisini yaparsa aile içi yardımlaşmaya katkıda bulunmuş olmaz...",
    "options": [
      "Annesiyle birlikte sofrayı hazırlarsa",
      "endi odasını temiz tutmazsa",
      "itaplıktan aldığı kitapları yerine koyarsa -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: endi odasını temiz tutmazsa"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q7",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Aşağıdakilerden hangisi kaynakların doğru kullanımına uygun davranışlardandır...",
    "options": [
      "Diş fırçalarken musluğu açık bırakmak",
      "Su damlatan musluğu tamir ettirmek",
      "Uyumadan önce her odadaki lambayı açık bırakmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Uyumadan önce her odadaki lambayı açık bırakmak -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q8",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Okul idaresi öğrencilerinden adres bilgilerini istemiştir. Hangi öğrenci adresini tam olarak vermiştir...",
    "options": [
      "Yavuz : arşıyaka Mahallesi, Gölbaşı",
      "Alp : Çankaya ilçesi No:",
      "Nazlı : Gülveren Mahallesi Gazel Sokak No:3 Mamak/Ankara -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yavuz : arşıyaka Mahallesi, Gölbaşı"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q9",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Ayla, Mete’ye “aynakları doğru kullanıyorsun.“ demiştir. Buna göre, Mete aşağıdakilerden hangisini yapmıştır...",
    "options": [
      "Uyuyacağı zaman odasındaki lambayı kapatmıştır.",
      "itap okurken televizyonu çalıştırmıştır.",
      "Diş fırçalarken musluğu açık bırakmıştır. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Diş fırçalarken musluğu açık bırakmıştır. -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u6-q10",
    "unitId": "hayat-bilgisi-2-pdf-u6",
    "text": "Efe ve ailesi evdeki kaynakları tasarruflu kullanarak aylık giderlerini azaltmak istemektedir. Buna göre, Efe ve ailesi aşağıdakilerden hangisini yaparsa giderleri azalabilir...",
    "options": [
      "ullanılmayan odadaki lambaları yakarlarsa",
      "Dişlerini fırçalarken musluğu açık bırakırlarsa",
      "İzlenmeyen televizyonu kapatırlarsa -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: İzlenmeyen televizyonu kapatırlarsa -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q1",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Deniz, gönderdiği mektupta arkadaşının ev adresini aşağıdaki gibi yazmıştır. Zümrüt Mahallesi Cumhuriyet Caddesi Yeşilova Apartmanı No: 9 Çankaya Deniz’in, mektuba yazdığı adreste aşağıdaki bilgilerden hangisi eksiktir...",
    "options": [
      "Mahalle adı",
      "Bina adı",
      "Şehir adı -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mahalle adı"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q2",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Görseldeki kişi Buse’nin yakın akrabasıdır. Ben Buse’nin annesinin kız kardeşiyim. Buna göre, görseldeki kişi Buse’nin nesi olur...",
    "options": [
      "Teyzesi",
      "Halası",
      "uzeni - 15. PostaneOkul Menekşe Sokak Hasan’ın enan’a yaptığı tarife göre, evi krokide kaç numaralı binadır...",
      "3 - Ç"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: uzeni - 15. PostaneOkul Menekşe Sokak Hasan’ın enan’a yaptığı tarife göre, evi krokide kaç numaralı binadır..."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q3",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Aşağıdakilerden hangisi evdeki kaynakların tasarruflu kullanılmasına uygun bir örnektir...",
    "options": [
      "İzlemediğimiz hâlde televizyonu açık bırakmak",
      "Dişlerimizi fırçalarken yeterli miktarda su kullanmak",
      "alorifer yanarken elektrikli ısıtıcıyı çalıştırmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dişlerimizi fırçalarken yeterli miktarda su kullanmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q4",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Aşağıda Cansu’nun aile bireyleri hakkında bazı bilgiler verilmiştir. • Annesi, ev çok sıcak olduğunda kullandıkları ısıtıcının sıcaklığını düşürür. • Babası, su musluğu kapalı durumdayken damlattığında hemen tamir eder. • Cansu gereksiz yere yanan ışıkları söndürür. Buna göre, Cansu ve ailesinin hakkında ne söylenebilir...",
    "options": [
      "Tutumlu olmaya dikkat etmedikleri",
      "Temel ihtiyaçlarına öncelik vermedikleri",
      "Evdeki kaynakları tasarruflu kullandıkları - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Evdeki kaynakları tasarruflu kullandıkları - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q5",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Aşağıdakilerden hangisi kaynakları bilinçli kullanan bir kişinin davranışlarındandır...",
    "options": [
      "Odası yeterince güneş ışığı alırken lamba yakmaması",
      "Hava güneşli ve sıcak iken kaloriferi yakması",
      "Damlatan musluğu tamir ettirmemesi - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Odası yeterince güneş ışığı alırken lamba yakmaması"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q6",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Beril’in babası elektrik, doğal gaz ve su tüketimlerinin fazla olduğunu fark etmiştir. Bunun için ailece kaynak kullanımında bazı önlemler almışlardır. Aşağıdakilerden hangisi bu önlemlerden biri olamaz...",
    "options": [
      "Evde gereksiz yanan ışıkları söndürmek",
      "Su damlatan muslukları tamir ettirmek",
      "alorifer yanarken pencereyi açmak - Ç 20. Okul Park Hastane Atatürk Caddesi Sümbül Sokak öşk Sokak Özyurt Caddesi Cami Market Görselde, okulun bulunduğu caddede aşağıdaki yapılardan hangisi yoktur...",
      "Park"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: alorifer yanarken pencereyi açmak - Ç 20. Okul Park Hastane Atatürk Caddesi Sümbül Sokak öşk Sokak Özyurt Caddesi Cami Market Görselde, okulun bulunduğu caddede aşağıdaki yapılarda"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q7",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Seval Öğretmen derste bir konuyu anlattıktan sonra konu ile ilgili günlük hayatından bir örnek vermiştir. Bugün yaşlı bir teyze yolda yürürken poşetlerini taşımakta zorlanıyordu. Bu nedenle, onun poşetlerinin bazılarını ben taşıdım. Seval Öğretmen’in örnek verdiği konu aşağıdakilerden hangisi ile ilgilidir...",
    "options": [
      "Beslenme",
      "Yardımlaşma",
      "Temizlik - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Temizlik - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q8",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Ayşe, doğum günü davetiyesine ev adresini aşağıdaki gibi yazmıştır. Bu adreste aşağıdakilerden hangisiyle ilgili bir bilgi yoktur...",
    "options": [
      "Bina ismi",
      "Şehir ismi",
      "Mahalle ismi - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Şehir ismi"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q9",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "ağan ve babası, aile albümlerine bakmaktadır. Albümde ağan ve ailesinin yakın akrabalarıyla fotoğrafları bulunmaktadır. ağan Babası Babacığım, bu fotoğrafta senin yanında duran kişi kim... Benim erkek kardeşim. Buna göre, konuşmada bahsedilen kişi ağan’ın nesi olur...",
    "options": [
      "Dayısı",
      "Amcası",
      "uzeni - Ç 24. Bugün okula geldiğimde evde hazırladığım beslenme çantamı unuttuğumu fark ettim. Merve Buna göre, Merve’nin aşağıdakilerden hangisine ihtiyacı olabilir...",
      "Deftere"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dayısı"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u7-q10",
    "unitId": "hayat-bilgisi-2-pdf-u7",
    "text": "Emel, ailece ortak kararlar almanın doğru olduğunu düşünüyor. Emel, bu fikrini savunmak için aşağıdakilerden hangisini söylemiş olamaz...",
    "options": [
      "Ailede bütün bireylerin söz sahibi olduğunu",
      "Tüm kararların babalar tarafından alındığını",
      "Söylenen fikirlerin ailece değerlendirildiğini - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Tüm kararların babalar tarafından alındığını"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q1",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Elif ve ailesi, evdeki sorumluluklarını tablodaki gibi paylaşmışlardır. Çöp atma Yemek yapma Ev temizliği Tamir işleri Masayı toplama Annem    Babam    Elif    ardeşim   Tabloya göre, aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Çöp atma görevi Elif’e ve kardeşine aittir.",
      "Masayı toplama sadece Elif’in görevidir.",
      "Evin tüm işlerini Elif’in annesi yapmaktadır. - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Masayı toplama sadece Elif’in görevidir."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q2",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Evdeki kaynakların kullanımına ilişkin iki aylık gider tabloları aşağıda verilmiştir. Ocak Ayı Giderleri Elektrik faturası Doğal gaz faturası Gıda harcamaları Şubat Ayı Giderleri Elektrik faturası Doğal gaz faturası Gıda harcamaları Ocak ve Şubat ayı gider tabloları karşılaştırıldığında hangi kaynağa harcanan paradan tasarruf sağlandığı söylenebilir...",
    "options": [
      "Elektrik",
      "Doğal gaz",
      "Gıda - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Doğal gaz"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q3",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Aşağıdakilerden hangisi yardıma ihtiyaç duyan öncelikli kişilerden değildir...",
    "options": [
      "Yaşlılar Özel gereksinimli bireyler",
      "Güvenlik görevlileri",
      "- Ç 32. Babamın annesi Babamın babası Babamın erkek kardesi Babamın kız kardeşi Babam Babaannem Amcam Dedem - - - - Bu görselde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir...",
      "Halam"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yaşlılar Özel gereksinimli bireyler"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q4",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Ahmet ve ailesinin görev ve sorumluluklarıyla ilgili tablo aşağıda verilmiştir. Çöp atma Yemek yapma Ev temizliği Masayı toparlama Annem ✗ ✗ ✗ Babam ✗ ✗ ✗ Ahmet ✗ ✗ ✗ ardeşim ✗ ✗ ✗ Bu tabloya göre, Ahmet’in aşağıdaki ifadelerinden hangisi doğrudur...",
    "options": [
      "Ev temizliğini sadece annem yapar.",
      "Yemek yapma görevi annemindir.",
      "Masayı toparlamayı yalnızca kardeşim yapar.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Masayı toparlamayı yalnızca kardeşim yapar."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q5",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Aşağıdakilerin hangisinde aile içi kararlar doğru bir şekilde alınmaktadır...",
    "options": [
      "ararlar ortak alındığında",
      "ararları annem ve babam verdiğinde",
      "Herkesin kendisi karar aldığında",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ararlar ortak alındığında"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q6",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Bir ailenin mart ve nisan ayları gider tablosu aşağıda verilmiştir. Mart Ayı Gider Tablosu Giderlerimiz Tutarları (TL) Elektrik faturası 150 Gıda harcamaları 550 Diğer harcamalar 350 ira 800 TOPLAM 1850 Nisan Ayı Gider Tablosu Giderlerimiz Tutarları (TL) Elektrik faturası 200 Gıda harcamaları 600 Diğer harcamalar 300 ira 800 TOPLAM 1900 Bu tablolar karşılaştırıldığında aşağıdakilerden hangisine ulaşılabilir...",
    "options": [
      "Elektrik giderinde azalma olmuştur.",
      "Toplam giderde azalma olmuştur.",
      "ira gideri değişmemiştir.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Toplam giderde azalma olmuştur."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q7",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Aşağıdaki ifadelerden hangisi doğrudur...",
    "options": [
      "Önce isteklerimizi sonra ihtiyaçlarımızı karşılamalıyız.",
      "Harçlıklarımızı biriktirmeye gerek yoktur.",
      "Alışveriş yaparken ihtiyaçlarımıza öncelik vermeliyiz.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Önce isteklerimizi sonra ihtiyaçlarımızı karşılamalıyız."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q8",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Akrabalık ilişkileriyle ilgili olarak aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Akrabalarımızla sadece millî bayramlarda görüşürüz.",
      "Akrabalık ilişkilerimiz sevgi ve saygıya dayanmalıdır.",
      "Uzaktaki akrabamızı ziyaret etmesek de olur.",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Akrabalık ilişkilerimiz sevgi ve saygıya dayanmalıdır."
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q9",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "• Cetvel • Sakız • alemtraş Okul ihtiyaçları için kırtasiyeye giden bir öğrencinin, kırtasiyeden yukarıdakilerden hangisini alması beklenmez...",
    "options": [
      "Sakız",
      "Cetvel",
      "alemtraş",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Sakız"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u8-q10",
    "unitId": "hayat-bilgisi-2-pdf-u8",
    "text": "Hafta sonu alışverişe giden Selçuk ve ailesi, küçük bir çocuğun mağaza içinde kaybolduğunu fark etti. Çocuk, yardımcı olmak için adresini öğrenmek isteyenlerle adresini paylaşmadı ve polis gelince adresini ona söyledi. Polisle birlikte eve gitmek üzere yola çıktı. Yukarıdaki olayda çocuk adresini neden söylememiş olabilir...",
    "options": [
      "Adresini tam olarak bilmediğinden",
      "Adresini tanımadığı kişilerle paylaşmak istemediğinden",
      "Eve dönmek istemediğinden",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Eve dönmek istemediğinden"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q1",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Emre, öğle yemeğinde aşağıdakilerin hangisinde verilen besinleri yerse dengeli beslenmiş olur...",
    "options": [
      "Etli patates yemeği, salata, yoğurt",
      "Mayonezli hamburger, kola",
      "Pizza, patates kızartması, bisküvi -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Mayonezli hamburger, kola"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q2",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Bir öğrenci sınıfta konusunu anlatırken arkadaşlarına aşağıdaki kartları gösteriyor. Mevsimlere göre giyinmeliyiz. Meyveleri yıkayıp yemeliyiz. Dengeli ve düzenli beslenmeliyiz. Bu öğrencinin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Hem bakımlı hem de tutumlu olmak",
      "endimizi doğru ifade etmek",
      "Sağlığımızı korumak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hem bakımlı hem de tutumlu olmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q3",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Hülya, her zaman dengeli ve düzenli beslenmektedir. Buna göre, kahvaltısında hangi listede verilen besinleri seçmelidir...",
    "options": [
      "Cips Pasta Hamburger Meyve suyu",
      "Ekmek Reçel Zeytin Peynir Süt",
      "Reçel Bisküvi Ekmek Çay Hamburger -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Ekmek Reçel Zeytin Peynir Süt"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q4",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Üç kişi yemek yeme ile ilgili görüşlerini söylüyor: Metin Ayla Ahmet Bunlardan hangilerinin sözleri, görgü kurallarıyla ilgilidir...",
    "options": [
      "Ayla ve Metin",
      "Ahmet ve Ayla",
      "Metin ve Ahmet -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Metin ve Ahmet -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q5",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Sağlığımızı korumazsak hasta oluruz. Aşağıdakilerden hangisi sağlığımızı korumak için yapılmaz...",
    "options": [
      "Mevsimlere göre giyinmek",
      "Uygun zamanda aşı yaptırmak",
      "Açıkta satılan yiyecekleri almak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mevsimlere göre giyinmek"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q6",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "(1) Alp gittikleri piknikte çok iyi vakit geçiriyordu. (2) Yan bahçenin sahibinden izin alarak ağaçtan fındık topladı. (3) Fındıkları dişleriyle kırarak yedi, çok lezzetliydi. (4) Sonra babasıyla birlikte uçurtma uçurdular. (5) Annesi onları yemeğe çağırdığında, Alp ellerini yıkayıp hemen sofraya oturdu. (6) Aklı uçurtmasında kaldığı için masaya herkesin oturmasını beklemeden, hızla yemeğini yedi ve sofradan kalktı. Yukarıdaki paragrafta Alp’in gösterdiği yanlış davranış ya da davranışlar aşağıdakilerin hangisinde verilmiştir...",
    "options": [
      "Yalnız 3",
      "2 ve 5",
      "3 ve 6 - 7. Ellerimi yıkarken sabun kullanırım. Yemekten sonra dişlerimi fırçalarım. Saçlarımı okula gitmeden tararım. Duygu Buna göre, Duygu ile ilgili aşağıdakilerden hangisi doğrudur...",
      "Temiz olmaya dikkat eder."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 2 ve 5"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q7",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Öğrenciler, sağlıklarını korumak için okulda yapılması gerekenlerle ilgili afiş hazırlamışlardır. Buna göre, aşağıdaki afişlerden hangisi yanlıştır...",
    "options": [
      "Hava durumuna göre giyinelim.",
      "Sık sık ellerimizi sabunla yıkayalım.",
      "Arkadaşlarımızla bardağımızı ortak kullanalım. -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Arkadaşlarımızla bardağımızı ortak kullanalım. -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q8",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "10 yaşındaki Ayşe’nin üç günlük öğle yemeği listesi aşağıda verilmiştir. Mercimek çorbası Balık Salata Makarna Patates cipsi Ekmek Pazartesi Salı uru fasulye Pilav Elma Çarşamba Buna göre, Ayşe hangi günlerde dengeli beslenmiştir...",
    "options": [
      "Yalnızca salı günü",
      "Pazartesi ve çarşamba günlerinde",
      "Salı ve çarşamba günlerinde -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnızca salı günü"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q9",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Şekilde iş yerinde çalışmakta olan bir insan verilmiştir. Bu insanın görevi aşağıdakilerden hangisidir...",
    "options": [
      "Yapılacak binaların çizimlerini yapmak",
      "Maden ocağında çalışmak",
      "İnsanları tedavi etmek -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Maden ocağında çalışmak"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u9-q10",
    "unitId": "hayat-bilgisi-2-pdf-u9",
    "text": "Bir öğrenci sınıfta konusunu anlatırken aşağıdaki afişleri kullanıyor. Bu öğrenci hangi konuyu anlatmıştır...",
    "options": [
      "Yaşımıza uygun sporlar",
      "Hayvanlardan elde edilen besinler",
      "Sağlıklı büyümek için yapmamız gerekenler -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sağlıklı büyümek için yapmamız gerekenler -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q1",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Murat’ın 3 günlük öğle yemeğinde yediği besinler tabloda verilmiştir. Pazartesi Salı Çarşamba Makarna Gazoz Pasta uru fasulye Bulgur pilavı Marul, domates salatası Bulgur pilavı Baklava Patates cipsi Buna göre, Murat hangi gün dengeli beslenmiştir...",
    "options": [
      "Pazartesi",
      "Salı",
      "Çarşamba -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pazartesi"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q2",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Öğretmen derste işleyeceği bir konu ile ilgili resimler göstermiştir. Bu resimlerle aşağıdaki konulardan hangisi anlatılmaktadır...",
    "options": [
      "Sağlıklı yaşam",
      "Görgü kuralları",
      "Sağlıklı beslenme -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Sağlıklı yaşam"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q3",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Aşağıdakilerden hangisi sağlıklı büyüyüp gelişmeyi sağlar...",
    "options": [
      "Düzenli spor yapmak",
      "Çok az uyumak",
      "Fazla yemek yemek -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Fazla yemek yemek -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q4",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Öğrenciler sabah kahvaltısında yedikleri besinleri söylüyorlar. Patates cipsi, salata ve makarna Mehmet Zehra Derya Peynir, yumurta, süt ve ekmek Gazoz, pasta ve ekmek Buna göre, hangi öğrenci sabah kahvaltısında dengeli ve sağlıklı beslenmiştir...",
    "options": [
      "Mehmet",
      "Zehra",
      "Derya -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Zehra"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q5",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Öğretmen derste anlatacağı bir konu ile ilgili resimler göstermiştir. Bu görsellere göre, öğretmen aşağıdaki konulardan hangisini anlatacaktır...",
    "options": [
      "Sağlıklı beslenme",
      "Spor yapma",
      "işisel bakım -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: işisel bakım -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q6",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Bir yaz günü Duru, annesi ile markete gidiyor. Markette karpuz, nar, mandalina, şeftali, kiraz ve ayva gibi meyveleri görüyor. Duru ve annesi bu meyvelerden hangilerini seçerse mevsimine uygun beslenmiş olur...",
    "options": [
      "Nar, şeftali, kiraz",
      "arpuz, kiraz, şeftali",
      "Mandalina, nar, ayva -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Mandalina, nar, ayva -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q7",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Aşağıdakilerden hangisi yemekte yapılan doğru davranışlardandır...",
    "options": [
      "Sofrada başka şeylerle ilgilenmek",
      "Ağzımızda yemek varken konuşmamak",
      "Yemek sırasında sık sık yerimizden kalkmak -",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yemek sırasında sık sık yerimizden kalkmak -"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q8",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "• Ayşe, sabah okula giderken saçlarını annesi tarar. • Ayşe, yemekten sonra dişlerini fırçalar. • Ayşe, okul kıyafetlerini giydikten sonra aynaya bakar. Bu bilgilere göre, Ayşe’nin kişisel bakımları ile ilgili aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Her zaman annesi yardım eder.",
      "Hepsinde araç-gereç kullanılır.",
      "Hepsinde su ve sabun kullanılır. - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hepsinde su ve sabun kullanılır. - Ç"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q9",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Aşağıda bazı besinler verilmiştir. YOĞURT SÜT PEYNİR Bunlarla ilgili olarak aşağıdakilerden hangisi yanlıştır...",
    "options": [
      "Hayvanlardan elde edildiği",
      "Büyümemize yardım ettiği",
      "Dengeli beslenmek için yeterli olduğu - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hayvanlardan elde edildiği"
  },
  {
    "id": "hayat-bilgisi-2-pdf-u10-q10",
    "unitId": "hayat-bilgisi-2-pdf-u10",
    "text": "Mesleğin adı : Yaptığı iş : Sağlıkla ilgili Araç ve gereç : ıyafet Beyaz önlük:i Yukarıdaki kartta bir meslekle ilgili bazı bilgiler verilmiştir. Bu meslek aşağıdakilerden hangisi olamaz...",
    "options": [
      "Doktor",
      "İtfaiyeci",
      "Eczacı - Ç",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Eczacı - Ç"
  },
  {
    "id": "turkce-3-pdf-u1-q1",
    "unitId": "turkce-3-pdf-u1",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u1-q2",
    "unitId": "turkce-3-pdf-u1",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u1-q3",
    "unitId": "turkce-3-pdf-u1",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u1-q4",
    "unitId": "turkce-3-pdf-u1",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u1-q5",
    "unitId": "turkce-3-pdf-u1",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u1-q6",
    "unitId": "turkce-3-pdf-u1",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u1-q7",
    "unitId": "turkce-3-pdf-u1",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u1-q8",
    "unitId": "turkce-3-pdf-u1",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u1-q9",
    "unitId": "turkce-3-pdf-u1",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u1-q10",
    "unitId": "turkce-3-pdf-u1",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u2-q1",
    "unitId": "turkce-3-pdf-u2",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u2-q2",
    "unitId": "turkce-3-pdf-u2",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u2-q3",
    "unitId": "turkce-3-pdf-u2",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u2-q4",
    "unitId": "turkce-3-pdf-u2",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u2-q5",
    "unitId": "turkce-3-pdf-u2",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u2-q6",
    "unitId": "turkce-3-pdf-u2",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u2-q7",
    "unitId": "turkce-3-pdf-u2",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u2-q8",
    "unitId": "turkce-3-pdf-u2",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u2-q9",
    "unitId": "turkce-3-pdf-u2",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u2-q10",
    "unitId": "turkce-3-pdf-u2",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u3-q1",
    "unitId": "turkce-3-pdf-u3",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u3-q2",
    "unitId": "turkce-3-pdf-u3",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u3-q3",
    "unitId": "turkce-3-pdf-u3",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u3-q4",
    "unitId": "turkce-3-pdf-u3",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u3-q5",
    "unitId": "turkce-3-pdf-u3",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u3-q6",
    "unitId": "turkce-3-pdf-u3",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u3-q7",
    "unitId": "turkce-3-pdf-u3",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u3-q8",
    "unitId": "turkce-3-pdf-u3",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u3-q9",
    "unitId": "turkce-3-pdf-u3",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u3-q10",
    "unitId": "turkce-3-pdf-u3",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u4-q1",
    "unitId": "turkce-3-pdf-u4",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u4-q2",
    "unitId": "turkce-3-pdf-u4",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u4-q3",
    "unitId": "turkce-3-pdf-u4",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u4-q4",
    "unitId": "turkce-3-pdf-u4",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u4-q5",
    "unitId": "turkce-3-pdf-u4",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u4-q6",
    "unitId": "turkce-3-pdf-u4",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u4-q7",
    "unitId": "turkce-3-pdf-u4",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u4-q8",
    "unitId": "turkce-3-pdf-u4",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u4-q9",
    "unitId": "turkce-3-pdf-u4",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u4-q10",
    "unitId": "turkce-3-pdf-u4",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u5-q1",
    "unitId": "turkce-3-pdf-u5",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u5-q2",
    "unitId": "turkce-3-pdf-u5",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u5-q3",
    "unitId": "turkce-3-pdf-u5",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u5-q4",
    "unitId": "turkce-3-pdf-u5",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u5-q5",
    "unitId": "turkce-3-pdf-u5",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u5-q6",
    "unitId": "turkce-3-pdf-u5",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u5-q7",
    "unitId": "turkce-3-pdf-u5",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u5-q8",
    "unitId": "turkce-3-pdf-u5",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u5-q9",
    "unitId": "turkce-3-pdf-u5",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u5-q10",
    "unitId": "turkce-3-pdf-u5",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u6-q1",
    "unitId": "turkce-3-pdf-u6",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u6-q2",
    "unitId": "turkce-3-pdf-u6",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u6-q3",
    "unitId": "turkce-3-pdf-u6",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u6-q4",
    "unitId": "turkce-3-pdf-u6",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u6-q5",
    "unitId": "turkce-3-pdf-u6",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u6-q6",
    "unitId": "turkce-3-pdf-u6",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u6-q7",
    "unitId": "turkce-3-pdf-u6",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u6-q8",
    "unitId": "turkce-3-pdf-u6",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u6-q9",
    "unitId": "turkce-3-pdf-u6",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u6-q10",
    "unitId": "turkce-3-pdf-u6",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u7-q1",
    "unitId": "turkce-3-pdf-u7",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u7-q2",
    "unitId": "turkce-3-pdf-u7",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u7-q3",
    "unitId": "turkce-3-pdf-u7",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u7-q4",
    "unitId": "turkce-3-pdf-u7",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u7-q5",
    "unitId": "turkce-3-pdf-u7",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u7-q6",
    "unitId": "turkce-3-pdf-u7",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u7-q7",
    "unitId": "turkce-3-pdf-u7",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u7-q8",
    "unitId": "turkce-3-pdf-u7",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u7-q9",
    "unitId": "turkce-3-pdf-u7",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u7-q10",
    "unitId": "turkce-3-pdf-u7",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u8-q1",
    "unitId": "turkce-3-pdf-u8",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u8-q2",
    "unitId": "turkce-3-pdf-u8",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u8-q3",
    "unitId": "turkce-3-pdf-u8",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u8-q4",
    "unitId": "turkce-3-pdf-u8",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u8-q5",
    "unitId": "turkce-3-pdf-u8",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u8-q6",
    "unitId": "turkce-3-pdf-u8",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u8-q7",
    "unitId": "turkce-3-pdf-u8",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u8-q8",
    "unitId": "turkce-3-pdf-u8",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u8-q9",
    "unitId": "turkce-3-pdf-u8",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u8-q10",
    "unitId": "turkce-3-pdf-u8",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u9-q1",
    "unitId": "turkce-3-pdf-u9",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u9-q2",
    "unitId": "turkce-3-pdf-u9",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u9-q3",
    "unitId": "turkce-3-pdf-u9",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u9-q4",
    "unitId": "turkce-3-pdf-u9",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u9-q5",
    "unitId": "turkce-3-pdf-u9",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u9-q6",
    "unitId": "turkce-3-pdf-u9",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u9-q7",
    "unitId": "turkce-3-pdf-u9",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u9-q8",
    "unitId": "turkce-3-pdf-u9",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u9-q9",
    "unitId": "turkce-3-pdf-u9",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u9-q10",
    "unitId": "turkce-3-pdf-u9",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "turkce-3-pdf-u10-q1",
    "unitId": "turkce-3-pdf-u10",
    "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
    "options": [
      "Hekim",
      "Hasta",
      "?retmen",
      "Baytar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Hekim"
  },
  {
    "id": "turkce-3-pdf-u10-q2",
    "unitId": "turkce-3-pdf-u10",
    "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
    "options": [
      "Geni?",
      "?nce",
      "Uzun",
      "K?sa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Geni?"
  },
  {
    "id": "turkce-3-pdf-u10-q3",
    "unitId": "turkce-3-pdf-u10",
    "text": "Metnin konusu neyi g?sterir?",
    "options": [
      "Metinde ne anlat?ld?n?",
      "Sayfa say?s?n?",
      "Yazar?n ya?n?",
      "Yaz? rengini"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
  },
  {
    "id": "turkce-3-pdf-u10-q4",
    "unitId": "turkce-3-pdf-u10",
    "text": "?iirdeki her sat?ra ne ad verilir?",
    "options": [
      "Dize",
      "Paragraf",
      "Ba?l?k",
      "?zet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dize"
  },
  {
    "id": "turkce-3-pdf-u10-q5",
    "unitId": "turkce-3-pdf-u10",
    "text": "C?mle sonuna genellikle hangi i?aret konur?",
    "options": [
      "Nokta",
      "Virg?l",
      "K?sa ?izgi",
      "Kesme"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nokta"
  },
  {
    "id": "turkce-3-pdf-u10-q6",
    "unitId": "turkce-3-pdf-u10",
    "text": "Ba?l?k se?erken hangisine dikkat edilir?",
    "options": [
      "Metnin konusuna uygun olmas?na",
      "En uzun kelime olmas?na",
      "Soru olmas?na",
      "Sadece b?y?k harfe"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
  },
  {
    "id": "turkce-3-pdf-u10-q7",
    "unitId": "turkce-3-pdf-u10",
    "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
    "options": [
      "Mesaj?n k?sa konusu",
      "Okul numaras?",
      "Saat",
      "Nokta"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
  },
  {
    "id": "turkce-3-pdf-u10-q8",
    "unitId": "turkce-3-pdf-u10",
    "text": "Hik?yede kahraman ne demektir?",
    "options": [
      "Olay? ya?ayan ki?i veya varl?k",
      "Metnin ba?l?",
      "Sayfa numaras?",
      "Noktalama i?areti"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
  },
  {
    "id": "turkce-3-pdf-u10-q9",
    "unitId": "turkce-3-pdf-u10",
    "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
    "options": [
      "En y?ksek de?ere",
      "?lk harfe",
      "Son sat?ra",
      "K?d?n rengine"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En y?ksek de?ere"
  },
  {
    "id": "turkce-3-pdf-u10-q10",
    "unitId": "turkce-3-pdf-u10",
    "text": "Virg?l hangi durumda kullan?labilir?",
    "options": [
      "S?ral? kelimeleri ay?r?rken",
      "Her kelimeden sonra",
      "Sadece ba?l?kta",
      "Her say?da"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
  },
  {
    "id": "matematik-3-pdf-u1-q1",
    "unitId": "matematik-3-pdf-u1",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u1-q2",
    "unitId": "matematik-3-pdf-u1",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u1-q3",
    "unitId": "matematik-3-pdf-u1",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u1-q4",
    "unitId": "matematik-3-pdf-u1",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u1-q5",
    "unitId": "matematik-3-pdf-u1",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u1-q6",
    "unitId": "matematik-3-pdf-u1",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u1-q7",
    "unitId": "matematik-3-pdf-u1",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u1-q8",
    "unitId": "matematik-3-pdf-u1",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u1-q9",
    "unitId": "matematik-3-pdf-u1",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u1-q10",
    "unitId": "matematik-3-pdf-u1",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u2-q1",
    "unitId": "matematik-3-pdf-u2",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u2-q2",
    "unitId": "matematik-3-pdf-u2",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u2-q3",
    "unitId": "matematik-3-pdf-u2",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u2-q4",
    "unitId": "matematik-3-pdf-u2",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u2-q5",
    "unitId": "matematik-3-pdf-u2",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u2-q6",
    "unitId": "matematik-3-pdf-u2",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u2-q7",
    "unitId": "matematik-3-pdf-u2",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u2-q8",
    "unitId": "matematik-3-pdf-u2",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u2-q9",
    "unitId": "matematik-3-pdf-u2",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u2-q10",
    "unitId": "matematik-3-pdf-u2",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u3-q1",
    "unitId": "matematik-3-pdf-u3",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u3-q2",
    "unitId": "matematik-3-pdf-u3",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u3-q3",
    "unitId": "matematik-3-pdf-u3",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u3-q4",
    "unitId": "matematik-3-pdf-u3",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u3-q5",
    "unitId": "matematik-3-pdf-u3",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u3-q6",
    "unitId": "matematik-3-pdf-u3",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u3-q7",
    "unitId": "matematik-3-pdf-u3",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u3-q8",
    "unitId": "matematik-3-pdf-u3",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u3-q9",
    "unitId": "matematik-3-pdf-u3",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u3-q10",
    "unitId": "matematik-3-pdf-u3",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u4-q1",
    "unitId": "matematik-3-pdf-u4",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u4-q2",
    "unitId": "matematik-3-pdf-u4",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u4-q3",
    "unitId": "matematik-3-pdf-u4",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u4-q4",
    "unitId": "matematik-3-pdf-u4",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u4-q5",
    "unitId": "matematik-3-pdf-u4",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u4-q6",
    "unitId": "matematik-3-pdf-u4",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u4-q7",
    "unitId": "matematik-3-pdf-u4",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u4-q8",
    "unitId": "matematik-3-pdf-u4",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u4-q9",
    "unitId": "matematik-3-pdf-u4",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u4-q10",
    "unitId": "matematik-3-pdf-u4",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u5-q1",
    "unitId": "matematik-3-pdf-u5",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u5-q2",
    "unitId": "matematik-3-pdf-u5",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u5-q3",
    "unitId": "matematik-3-pdf-u5",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u5-q4",
    "unitId": "matematik-3-pdf-u5",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u5-q5",
    "unitId": "matematik-3-pdf-u5",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u5-q6",
    "unitId": "matematik-3-pdf-u5",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u5-q7",
    "unitId": "matematik-3-pdf-u5",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u5-q8",
    "unitId": "matematik-3-pdf-u5",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u5-q9",
    "unitId": "matematik-3-pdf-u5",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u5-q10",
    "unitId": "matematik-3-pdf-u5",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u6-q1",
    "unitId": "matematik-3-pdf-u6",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u6-q2",
    "unitId": "matematik-3-pdf-u6",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u6-q3",
    "unitId": "matematik-3-pdf-u6",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u6-q4",
    "unitId": "matematik-3-pdf-u6",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u6-q5",
    "unitId": "matematik-3-pdf-u6",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u6-q6",
    "unitId": "matematik-3-pdf-u6",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u6-q7",
    "unitId": "matematik-3-pdf-u6",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u6-q8",
    "unitId": "matematik-3-pdf-u6",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u6-q9",
    "unitId": "matematik-3-pdf-u6",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u6-q10",
    "unitId": "matematik-3-pdf-u6",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u7-q1",
    "unitId": "matematik-3-pdf-u7",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u7-q2",
    "unitId": "matematik-3-pdf-u7",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u7-q3",
    "unitId": "matematik-3-pdf-u7",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u7-q4",
    "unitId": "matematik-3-pdf-u7",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u7-q5",
    "unitId": "matematik-3-pdf-u7",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u7-q6",
    "unitId": "matematik-3-pdf-u7",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u7-q7",
    "unitId": "matematik-3-pdf-u7",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u7-q8",
    "unitId": "matematik-3-pdf-u7",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u7-q9",
    "unitId": "matematik-3-pdf-u7",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u7-q10",
    "unitId": "matematik-3-pdf-u7",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u8-q1",
    "unitId": "matematik-3-pdf-u8",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u8-q2",
    "unitId": "matematik-3-pdf-u8",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u8-q3",
    "unitId": "matematik-3-pdf-u8",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u8-q4",
    "unitId": "matematik-3-pdf-u8",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u8-q5",
    "unitId": "matematik-3-pdf-u8",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u8-q6",
    "unitId": "matematik-3-pdf-u8",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u8-q7",
    "unitId": "matematik-3-pdf-u8",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u8-q8",
    "unitId": "matematik-3-pdf-u8",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u8-q9",
    "unitId": "matematik-3-pdf-u8",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u8-q10",
    "unitId": "matematik-3-pdf-u8",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u9-q1",
    "unitId": "matematik-3-pdf-u9",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u9-q2",
    "unitId": "matematik-3-pdf-u9",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u9-q3",
    "unitId": "matematik-3-pdf-u9",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u9-q4",
    "unitId": "matematik-3-pdf-u9",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u9-q5",
    "unitId": "matematik-3-pdf-u9",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u9-q6",
    "unitId": "matematik-3-pdf-u9",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u9-q7",
    "unitId": "matematik-3-pdf-u9",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u9-q8",
    "unitId": "matematik-3-pdf-u9",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u9-q9",
    "unitId": "matematik-3-pdf-u9",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u9-q10",
    "unitId": "matematik-3-pdf-u9",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "matematik-3-pdf-u10-q1",
    "unitId": "matematik-3-pdf-u10",
    "text": "349 say?s?n?n okunu?u hangisidir?",
    "options": [
      "? y?z k?rk dokuz",
      "? y?z doksan d?rt",
      "Otuz d?rt dokuz",
      "? k?rk dokuz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
  },
  {
    "id": "matematik-3-pdf-u10-q2",
    "unitId": "matematik-3-pdf-u10",
    "text": "586 say?s?nda onlar basama? hangisidir?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 8"
  },
  {
    "id": "matematik-3-pdf-u10-q3",
    "unitId": "matematik-3-pdf-u10",
    "text": "325 + 465 i?leminin sonucu ka?t?r?",
    "options": [
      "790",
      "780",
      "690",
      "890"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 790"
  },
  {
    "id": "matematik-3-pdf-u10-q4",
    "unitId": "matematik-3-pdf-u10",
    "text": "910 - 850 i?leminin sonucu ka?t?r?",
    "options": [
      "60",
      "50",
      "70",
      "160"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60"
  },
  {
    "id": "matematik-3-pdf-u10-q5",
    "unitId": "matematik-3-pdf-u10",
    "text": "4 x 6 i?leminin sonucu ka?t?r?",
    "options": [
      "24",
      "20",
      "18",
      "26"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-3-pdf-u10-q6",
    "unitId": "matematik-3-pdf-u10",
    "text": "36 ? 4 i?leminin sonucu ka?t?r?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 9"
  },
  {
    "id": "matematik-3-pdf-u10-q7",
    "unitId": "matematik-3-pdf-u10",
    "text": "1/4 kesri nas?l okunur?",
    "options": [
      "D?rtte bir",
      "Birde d?rt",
      "D?rt b?t?n",
      "Bir yar?m"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?rtte bir"
  },
  {
    "id": "matematik-3-pdf-u10-q8",
    "unitId": "matematik-3-pdf-u10",
    "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
    "options": [
      "Kare",
      "?gen",
      "?ember",
      "Daire"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kare"
  },
  {
    "id": "matematik-3-pdf-u10-q9",
    "unitId": "matematik-3-pdf-u10",
    "text": "1 lira ka? kuru?tur?",
    "options": [
      "100",
      "10",
      "50",
      "1000"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 100"
  },
  {
    "id": "matematik-3-pdf-u10-q10",
    "unitId": "matematik-3-pdf-u10",
    "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
    "options": [
      "En ?ok olan?",
      "En az olan?",
      "Bo? veriyi",
      "Yanl? bilgiyi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En ?ok olan?"
  },
  {
    "id": "fen-3-pdf-u1-q1",
    "unitId": "fen-3-pdf-u1",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u1-q2",
    "unitId": "fen-3-pdf-u1",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u1-q3",
    "unitId": "fen-3-pdf-u1",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u1-q4",
    "unitId": "fen-3-pdf-u1",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u1-q5",
    "unitId": "fen-3-pdf-u1",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u1-q6",
    "unitId": "fen-3-pdf-u1",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u1-q7",
    "unitId": "fen-3-pdf-u1",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u1-q8",
    "unitId": "fen-3-pdf-u1",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u1-q9",
    "unitId": "fen-3-pdf-u1",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u1-q10",
    "unitId": "fen-3-pdf-u1",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u2-q1",
    "unitId": "fen-3-pdf-u2",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u2-q2",
    "unitId": "fen-3-pdf-u2",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u2-q3",
    "unitId": "fen-3-pdf-u2",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u2-q4",
    "unitId": "fen-3-pdf-u2",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u2-q5",
    "unitId": "fen-3-pdf-u2",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u2-q6",
    "unitId": "fen-3-pdf-u2",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u2-q7",
    "unitId": "fen-3-pdf-u2",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u2-q8",
    "unitId": "fen-3-pdf-u2",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u2-q9",
    "unitId": "fen-3-pdf-u2",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u2-q10",
    "unitId": "fen-3-pdf-u2",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u3-q1",
    "unitId": "fen-3-pdf-u3",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u3-q2",
    "unitId": "fen-3-pdf-u3",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u3-q3",
    "unitId": "fen-3-pdf-u3",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u3-q4",
    "unitId": "fen-3-pdf-u3",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u3-q5",
    "unitId": "fen-3-pdf-u3",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u3-q6",
    "unitId": "fen-3-pdf-u3",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u3-q7",
    "unitId": "fen-3-pdf-u3",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u3-q8",
    "unitId": "fen-3-pdf-u3",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u3-q9",
    "unitId": "fen-3-pdf-u3",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u3-q10",
    "unitId": "fen-3-pdf-u3",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u4-q1",
    "unitId": "fen-3-pdf-u4",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u4-q2",
    "unitId": "fen-3-pdf-u4",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u4-q3",
    "unitId": "fen-3-pdf-u4",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u4-q4",
    "unitId": "fen-3-pdf-u4",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u4-q5",
    "unitId": "fen-3-pdf-u4",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u4-q6",
    "unitId": "fen-3-pdf-u4",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u4-q7",
    "unitId": "fen-3-pdf-u4",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u4-q8",
    "unitId": "fen-3-pdf-u4",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u4-q9",
    "unitId": "fen-3-pdf-u4",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u4-q10",
    "unitId": "fen-3-pdf-u4",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u5-q1",
    "unitId": "fen-3-pdf-u5",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u5-q2",
    "unitId": "fen-3-pdf-u5",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u5-q3",
    "unitId": "fen-3-pdf-u5",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u5-q4",
    "unitId": "fen-3-pdf-u5",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u5-q5",
    "unitId": "fen-3-pdf-u5",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u5-q6",
    "unitId": "fen-3-pdf-u5",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u5-q7",
    "unitId": "fen-3-pdf-u5",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u5-q8",
    "unitId": "fen-3-pdf-u5",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u5-q9",
    "unitId": "fen-3-pdf-u5",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u5-q10",
    "unitId": "fen-3-pdf-u5",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u6-q1",
    "unitId": "fen-3-pdf-u6",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u6-q2",
    "unitId": "fen-3-pdf-u6",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u6-q3",
    "unitId": "fen-3-pdf-u6",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u6-q4",
    "unitId": "fen-3-pdf-u6",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u6-q5",
    "unitId": "fen-3-pdf-u6",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u6-q6",
    "unitId": "fen-3-pdf-u6",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u6-q7",
    "unitId": "fen-3-pdf-u6",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u6-q8",
    "unitId": "fen-3-pdf-u6",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u6-q9",
    "unitId": "fen-3-pdf-u6",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u6-q10",
    "unitId": "fen-3-pdf-u6",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u7-q1",
    "unitId": "fen-3-pdf-u7",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u7-q2",
    "unitId": "fen-3-pdf-u7",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u7-q3",
    "unitId": "fen-3-pdf-u7",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u7-q4",
    "unitId": "fen-3-pdf-u7",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u7-q5",
    "unitId": "fen-3-pdf-u7",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u7-q6",
    "unitId": "fen-3-pdf-u7",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u7-q7",
    "unitId": "fen-3-pdf-u7",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u7-q8",
    "unitId": "fen-3-pdf-u7",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u7-q9",
    "unitId": "fen-3-pdf-u7",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u7-q10",
    "unitId": "fen-3-pdf-u7",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u8-q1",
    "unitId": "fen-3-pdf-u8",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u8-q2",
    "unitId": "fen-3-pdf-u8",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u8-q3",
    "unitId": "fen-3-pdf-u8",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u8-q4",
    "unitId": "fen-3-pdf-u8",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u8-q5",
    "unitId": "fen-3-pdf-u8",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u8-q6",
    "unitId": "fen-3-pdf-u8",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u8-q7",
    "unitId": "fen-3-pdf-u8",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u8-q8",
    "unitId": "fen-3-pdf-u8",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u8-q9",
    "unitId": "fen-3-pdf-u8",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u8-q10",
    "unitId": "fen-3-pdf-u8",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u9-q1",
    "unitId": "fen-3-pdf-u9",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u9-q2",
    "unitId": "fen-3-pdf-u9",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u9-q3",
    "unitId": "fen-3-pdf-u9",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u9-q4",
    "unitId": "fen-3-pdf-u9",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u9-q5",
    "unitId": "fen-3-pdf-u9",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u9-q6",
    "unitId": "fen-3-pdf-u9",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u9-q7",
    "unitId": "fen-3-pdf-u9",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u9-q8",
    "unitId": "fen-3-pdf-u9",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u9-q9",
    "unitId": "fen-3-pdf-u9",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u9-q10",
    "unitId": "fen-3-pdf-u9",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "fen-3-pdf-u10-q1",
    "unitId": "fen-3-pdf-u10",
    "text": "D?nya?n?n ?ekli hangisine benzer?",
    "options": [
      "K?re",
      "K?p",
      "Silindir",
      "?gen"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: K?re"
  },
  {
    "id": "fen-3-pdf-u10-q2",
    "unitId": "fen-3-pdf-u10",
    "text": "G?rme duyu organ?m?z hangisidir?",
    "options": [
      "G?z",
      "Kulak",
      "Burun",
      "Dil"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?z"
  },
  {
    "id": "fen-3-pdf-u10-q3",
    "unitId": "fen-3-pdf-u10",
    "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
    "options": [
      "?tme",
      "?ekme",
      "D?nme",
      "Erime"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?tme"
  },
  {
    "id": "fen-3-pdf-u10-q4",
    "unitId": "fen-3-pdf-u10",
    "text": "Hava maddenin hangi h?line ?rnektir?",
    "options": [
      "Gaz",
      "Kat?",
      "S?v?",
      "Toz"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gaz"
  },
  {
    "id": "fen-3-pdf-u10-q5",
    "unitId": "fen-3-pdf-u10",
    "text": "Do?al ?k kayna? hangisidir?",
    "options": [
      "G?ne?",
      "El feneri",
      "Ampul",
      "Mum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: G?ne?"
  },
  {
    "id": "fen-3-pdf-u10-q6",
    "unitId": "fen-3-pdf-u10",
    "text": "Davul hangi t?r kaynakt?r?",
    "options": [
      "Ses kayna?",
      "I?k kayna?",
      "Su kayna?",
      "Besin kayna?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ses kayna?"
  },
  {
    "id": "fen-3-pdf-u10-q7",
    "unitId": "fen-3-pdf-u10",
    "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
    "options": [
      "Beslenme",
      "Paslanma",
      "K?r?lma",
      "Boyanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Beslenme"
  },
  {
    "id": "fen-3-pdf-u10-q8",
    "unitId": "fen-3-pdf-u10",
    "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
    "options": [
      "Tohum",
      "Meyve suyu",
      "Ta?",
      "Toprak kap"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tohum"
  },
  {
    "id": "fen-3-pdf-u10-q9",
    "unitId": "fen-3-pdf-u10",
    "text": "Kumanda genellikle hangi kaynakla ?al?r?",
    "options": [
      "Pil",
      "?ehir elektri?i",
      "Benzin",
      "R?zg?r"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Pil"
  },
  {
    "id": "fen-3-pdf-u10-q10",
    "unitId": "fen-3-pdf-u10",
    "text": "Elektri?i g?venli kullanmak neden ?nemlidir?",
    "options": [
      "Kazalar? ?nlemek i?in",
      "Daha ?ok ses i?in",
      "E?yay? a?rla?t?rmak i?in",
      "Renk de?i?tirmek i?in"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kazalar? ?nlemek i?in"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q1",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q2",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q3",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q4",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q5",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q6",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q7",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q8",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q9",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u1-q10",
    "unitId": "hayat-bilgisi-3-pdf-u1",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q1",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q2",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q3",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q4",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q5",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q6",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q7",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q8",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q9",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u2-q10",
    "unitId": "hayat-bilgisi-3-pdf-u2",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q1",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q2",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q3",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q4",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q5",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q6",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q7",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q8",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q9",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u3-q10",
    "unitId": "hayat-bilgisi-3-pdf-u3",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q1",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q2",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q3",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q4",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q5",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q6",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q7",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q8",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q9",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u4-q10",
    "unitId": "hayat-bilgisi-3-pdf-u4",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q1",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q2",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q3",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q4",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q5",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q6",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q7",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q8",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q9",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u5-q10",
    "unitId": "hayat-bilgisi-3-pdf-u5",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q1",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q2",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q3",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q4",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q5",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q6",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q7",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q8",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q9",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u6-q10",
    "unitId": "hayat-bilgisi-3-pdf-u6",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q1",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q2",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q3",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q4",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q5",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q6",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q7",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q8",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q9",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u7-q10",
    "unitId": "hayat-bilgisi-3-pdf-u7",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q1",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q2",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q3",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q4",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q5",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q6",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q7",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q8",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q9",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u8-q10",
    "unitId": "hayat-bilgisi-3-pdf-u8",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q1",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q2",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q3",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q4",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q5",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q6",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q7",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q8",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q9",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u9-q10",
    "unitId": "hayat-bilgisi-3-pdf-u9",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q1",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
    "options": [
      "?zin istemeliyiz",
      "Gizlice almal?y?z",
      "Saklamal?y?z",
      "K?rmal?y?z"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?zin istemeliyiz"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q2",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
    "options": [
      "I?klar? gereksiz a?k b?rakmamak",
      "Muslu?u a?k b?rakmak",
      "K?d? bo?a harcamak",
      "S?ralara zarar vermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q3",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Evde sorumluluk almak hangi davran?t?r?",
    "options": [
      "Yata?n? toplamak",
      "Oyuncaklar? da?tmak",
      "Muslu?u a?k b?rakmak",
      "?devi unutmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yata?n? toplamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q4",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
    "options": [
      "?htiya?lara",
      "Her iste?e",
      "En pahal? ?r?ne",
      "Gereksiz e?yalara"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ?htiya?lara"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q5",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
    "options": [
      "D?zenli el y?kamak",
      "Di? f?r?alamamak",
      "Kirli k?yafet giymek",
      "Suyu bo?a ak?tmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: D?zenli el y?kamak"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q6",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Yaya ge?idinde ne yap?lmal?d?r?",
    "options": [
      "Kurallara uyarak ge?mek",
      "Ko?arak atlamak",
      "I?klara bakmamak",
      "Yolda oyun oynamak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kurallara uyarak ge?mek"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q7",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "?lkemizin y?netim ?ekli nedir?",
    "options": [
      "Cumhuriyet",
      "Krall?k",
      "?mparatorluk",
      "Oyuncak y?netimi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cumhuriyet"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q8",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
    "options": [
      "Muhtar",
      "Pilot",
      "Doktor",
      "Hakem"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Muhtar"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q9",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
    "options": [
      "Kuzey",
      "G?ney",
      "Do?u",
      "Bat?"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Kuzey"
  },
  {
    "id": "hayat-bilgisi-3-pdf-u10-q10",
    "unitId": "hayat-bilgisi-3-pdf-u10",
    "text": "Geri d?n?m?n amac? nedir?",
    "options": [
      "Do?ay? korumak",
      "?pleri art?rmak",
      "Kaynaklar? israf etmek",
      "Suyu kirletmek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Do?ay? korumak"
  },
  {
    "id": "turkce-4-pdf-u1-q1",
    "unitId": "turkce-4-pdf-u1",
    "text": "“Geçmek” kelimesi aşağıdakilerin hangisinde “geride bırakmak, aşmak” anlamında kullanılmıştır...",
    "options": [
      "İplik, iğne deliğinden zor geçti.",
      "Çocuğun boyu babasını geçti.",
      "Eve giderken sizin sokaktan geçti.",
      "Bütün günüm seni takip etmekle geçti."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Çocuğun boyu babasını geçti."
  },
  {
    "id": "turkce-4-pdf-u1-q2",
    "unitId": "turkce-4-pdf-u1",
    "text": "Aşağıdaki cümlelerin hangisinde “rezil olmak” anlamında bir söz kullanılmamıştır...",
    "options": [
      "Bu yaptığı davranışla maskara oldu.",
      "Arkadaşlarımın arasında yerin dibine geçmiştim.",
      "Bu sözleri söyleyince gülünç duruma düşmüş.",
      "Hafta sonunda çalıştığım işte pestilim çıktı."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Hafta sonunda çalıştığım işte pestilim çıktı."
  },
  {
    "id": "turkce-4-pdf-u1-q3",
    "unitId": "turkce-4-pdf-u1",
    "text": "“Düşünmek” kelimesi aşağıdaki cümlelerin hangisinde “akıl etmek, ne olabileceğini önceden kestirmek” anlamında kullanılmıştır...",
    "options": [
      "Beni de düşünüp güzel bir hediye almış.",
      "Gazetecinin sorusuna cevap vermek için düşündü.",
      "Yazın, işlerin azalacağını düşünmeliydin.",
      "İhtiyar adam gençlik yıllarını düşünüyordu."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yazın, işlerin azalacağını düşünmeliydin."
  },
  {
    "id": "turkce-4-pdf-u1-q4",
    "unitId": "turkce-4-pdf-u1",
    "text": "“Uçmak” kelimesi aşağıdakilerin hangisinde “çok hızlı gitmek” anlamında kullanılmıştır...",
    "options": [
      "Dün gece balkondaki hırkam uçmuş.",
      "Bizim külüstürü görsen asfaltta uçar.",
      "Leylekler güneye doğru uçtu.",
      "Yarın İstanbul’a uçacağını söyledi."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bizim külüstürü görsen asfaltta uçar."
  },
  {
    "id": "turkce-4-pdf-u1-q5",
    "unitId": "turkce-4-pdf-u1",
    "text": "Aşağıdakilerin hangisinde “düşmek” kelimesinin cümlede kazandığı anlam yanlış verilmiştir... Cümle Anlam",
    "options": [
      "Bozulan haberleşme uydusu, Atlas Okyanusu’na düştü. Devrilmek, yere serilmek",
      "Ona mirastan bir ev, bir de tarla düşmüştü. Bir bölüşme sonunda payına ayrılmak",
      "Yılın ilk karı hep Aladağ’ın doruklarına düşer. Yağmak",
      "Siz, bu sıralar çocuğun üzerine çok düştünüz. Aşırı ilgi ve sevgi göstermek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bozulan haberleşme uydusu, Atlas Okyanusu’na düştü. Devrilmek, yere serilmek"
  },
  {
    "id": "turkce-4-pdf-u1-q6",
    "unitId": "turkce-4-pdf-u1",
    "text": "aza yerini, meraklı bir kalabalık sarmıştı. “Sarmak” kelimesi aşağıdakilerin hangisinde bu cümledeki anlamıyla kullanılmıştır...",
    "options": [
      "Düşman yurdumuzun her yanını sardı.",
      "Annem misafirler için dolma sarıyor.",
      "Ortalığı güzel bir yemek kokusu sarmıştı.",
      "Elindekini kâğıda sararak yola çıktı. LILARINI BULUR."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Düşman yurdumuzun her yanını sardı."
  },
  {
    "id": "turkce-4-pdf-u1-q7",
    "unitId": "turkce-4-pdf-u1",
    "text": "“Atabildiği kadar çabuk adımlarla o tarafa gitti.” cümlesindeki “çabuk” kelimesinin zıt anlamlısı, aşağıdakilerin hangisinde kullanılmıştır...",
    "options": [
      "Yalnızca benim duyabileceğim çok yavaş bir sesti bu.",
      "utuyu yavaş tut, içinde kırılacak eşya var.",
      "Orası yavaş bir yürüyüşle bile, ancak beş dakika sürer.",
      "Çevredekileri rahatsız etmemek için yavaş sesle konuşuyorlardı."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Orası yavaş bir yürüyüşle bile, ancak beş dakika sürer."
  },
  {
    "id": "turkce-4-pdf-u1-q8",
    "unitId": "turkce-4-pdf-u1",
    "text": "“Seyrek sakallı, çıkık elmacık kemikli, güler yüzlü bir adamdı.” cümlesindeki “seyrek” kelimesinin zıt anlamlısı aşağıdaki altı çizili kelimelerden hangisidir...",
    "options": [
      "Havaya yoğun bir kükürt kokusu sinmişti.",
      "Sözlerini fazla uzattığı için dinleyenler sıkılmıştı.",
      "Çok sayıda kitap okuması onu olgunlaştırmıştı.",
      "arşımızdaki, ağaçları sık bir bahçeydi."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: arşımızdaki, ağaçları sık bir bahçeydi."
  },
  {
    "id": "turkce-4-pdf-u1-q9",
    "unitId": "turkce-4-pdf-u1",
    "text": "Nazlı, yüksek bir tepeye çıkıp köyünü seyretti. Bu cümledeki altı çizili kelimenin anlamca karşıtı aşağıdakilerden hangisidir...",
    "options": [
      "Uzun",
      "Büyük",
      "Dar",
      "Alçak"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Alçak"
  },
  {
    "id": "turkce-4-pdf-u1-q10",
    "unitId": "turkce-4-pdf-u1",
    "text": "Aşağıdakilerden hangisinde altı çizili kelimenin karşıt anlamlısı verilmiştir...",
    "options": [
      "Gitmekle gitmemek arasında tereddüt etti.",
      "İlk kitabı son kitabından daha akıcıydı.",
      "Yağışla birlikte her taraf yemyeşil oldu.",
      "Gerekli gereksiz her ayrıntıya yer vermiş."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: İlk kitabı son kitabından daha akıcıydı."
  },
  {
    "id": "turkce-4-pdf-u2-q1",
    "unitId": "turkce-4-pdf-u2",
    "text": "Aşağıdakilerin hangisinde zıt anlamlı kelimeler bir arada kullanılmıştır...",
    "options": [
      "Evin alt katını griye, üst katını maviye boyadı.",
      "Tahtadaki çift sayıları tek tek yuvarlak içine aldı.",
      "Cevizin sert kabuğunu kolaylıkla kırdı.",
      "Yaramaz çocuk, ağacın arkasından afacan gözlerle etrafını süzüyordu."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Evin alt katını griye, üst katını maviye boyadı."
  },
  {
    "id": "turkce-4-pdf-u2-q2",
    "unitId": "turkce-4-pdf-u2",
    "text": "Geçen yıl diktiğimiz fidanın boyu uzadı. Bu cümlede altı çizili kelimenin zıt anlamlısı aşağıdakilerin hangisinde vardır...",
    "options": [
      "Evdeki eşyaların yerini birlikte değiştirdik.",
      "Ağaçlar okul bahçemize çok yakışıyor.",
      "Yıkanınca gömleğimin kolları kısalmış.",
      "Merak ettiğimiz konular hakkında soru sorduk."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yıkanınca gömleğimin kolları kısalmış."
  },
  {
    "id": "turkce-4-pdf-u2-q3",
    "unitId": "turkce-4-pdf-u2",
    "text": "“Yukarı çıkarken tutunamayıp aşağı kaydım.” cümlesindeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerden hangisidir...",
    "options": [
      "Eş anlamlılık",
      "Eş seslilik",
      "Zıt anlamlılık",
      "Yakın anlamlılık"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Zıt anlamlılık"
  },
  {
    "id": "turkce-4-pdf-u2-q4",
    "unitId": "turkce-4-pdf-u2",
    "text": "Çok güzel yerlerden, anlatılamayacak kadar güzel bahçelerden, altın, gümüş ve elmas dolu odalardan geçtiler. Bu cümlede altı çizili kelimelerden birinin zıt anlamlısı aşağıdakilerin hangisinde kullanılmamıştır...",
    "options": [
      "Diğer günlere göre daha az yemek yedi.",
      "Bugün bize bütün gerçekleri söyledi.",
      "Masaldaki devin çirkin görüntüsü zihnimde canlandı.",
      "Bardağın yarısının boş olduğunu görünce şüphelendi. LILARINI BULUR."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bugün bize bütün gerçekleri söyledi."
  },
  {
    "id": "turkce-4-pdf-u2-q5",
    "unitId": "turkce-4-pdf-u2",
    "text": "“Dedem eli açık bir insandır.” cümlesindeki “eli açık” kelime öbeğinin eş anlamlısı aşağıdaki cümlelerin hangisinde vardır...",
    "options": [
      "Arkadaşım savurgan biriydi.",
      "Ayşe nine elinden gelen her türlü iyiliği yapan, cömert bir insandı.",
      "En büyük hayali zengin olmaktı.",
      "Çalışkan insan bugünün işini yarına bırakmaz."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Ayşe nine elinden gelen her türlü iyiliği yapan, cömert bir insandı."
  },
  {
    "id": "turkce-4-pdf-u2-q6",
    "unitId": "turkce-4-pdf-u2",
    "text": "“Ona güzel bir armağan almak için annemin fikrini aldım.” cümlesinde altı çizili kelimelerin yerine hangileri gelebilir...",
    "options": [
      "Düşünce - ceza",
      "Hediye - düşünce",
      "Hediye - akıl",
      "Mantık - hediye"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Hediye - düşünce"
  },
  {
    "id": "turkce-4-pdf-u2-q7",
    "unitId": "turkce-4-pdf-u2",
    "text": "Aşağıdaki altı çizili kelimelerden hangisinin eş anlamlısı yay ayraç ( ) içinde doğru verilmiştir...",
    "options": [
      "Evimdeki huzuru başka yerde bulamam. (Güven)",
      "Okulumuzun açılışı hareketli geçti. (Eğlenceli)",
      "Bizim iş yerinde marifetli kişiler aranıyor. (Hünerli)",
      "Mahallemizde park yeri sıkıntısı yaşanıyor. (Sokak) ANLAMLARINI AYIRT EDER."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bizim iş yerinde marifetli kişiler aranıyor. (Hünerli)"
  },
  {
    "id": "turkce-4-pdf-u2-q8",
    "unitId": "turkce-4-pdf-u2",
    "text": "Aşağıdaki dizelerin hangisinde altı çizili kelime eş seslidir...",
    "options": [
      "Adını ellerimle çizdim altın kumlara üçülen gözlerimde kurudu son damla yaş.",
      "Yeşil sahillerinde eğilen şen dallara, Çocuk gibi sokulan ve yaklaşan yalılar...",
      "Bir çöl bulutundan ince peçesi, Hangi rüzgâr esse onu dağıtır;",
      "imi esti baş ucumdan yel gibi imi sızdı bir toprağa sel gibi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Adını ellerimle çizdim altın kumlara üçülen gözlerimde kurudu son damla yaş."
  },
  {
    "id": "turkce-4-pdf-u2-q9",
    "unitId": "turkce-4-pdf-u2",
    "text": "Bıçağın keskin yüzüyle ekmeği kesti. Çocuk, yüze kadar saymayı öğrendi. Bu cümlelerdeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerden hangisidir...",
    "options": [
      "arşıt anlamlılık",
      "Yakın anlamlılık",
      "Eş seslilik",
      "Eş anlamlılık"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Eş seslilik"
  },
  {
    "id": "turkce-4-pdf-u2-q10",
    "unitId": "turkce-4-pdf-u2",
    "text": "Aşağıdakilerin hangisinde altı çizili kelimeler birbiriyle eş seslidir...",
    "options": [
      "Anlatılanlar bir kulağından girer, diğerinden çıkardı.",
      "Şimdi yüzünü asma, belki öbür sınavdan yüz alırsın.",
      "Sadece ayağım ağrımıyor, başım da çatlıyor.",
      "Bu güç koşullar altında çalışmak çok zor."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Şimdi yüzünü asma, belki öbür sınavdan yüz alırsın."
  },
  {
    "id": "turkce-4-pdf-u3-q1",
    "unitId": "turkce-4-pdf-u3",
    "text": "‘‘Beş çayına hazırlık yapıyordu.’’ cümlesindeki ‘‘çay’’ kelimesinin sesteşi aşağıdakilerin hangisinde kullanılmıştır...",
    "options": [
      "Çayın içinden yürüyerek karşı kıyıya geçti.",
      "Sabahları, ancak çay içince kendime gelirim.",
      "ekin yanında çay içmeyi severim.",
      "Bu çay daha demli olmuş."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Çayın içinden yürüyerek karşı kıyıya geçti."
  },
  {
    "id": "turkce-4-pdf-u3-q2",
    "unitId": "turkce-4-pdf-u3",
    "text": "• Sözlerinle beni çok mutlu ettin. • Yüzündeki beni görünce onu tanıdım. Bu cümlelerde altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerin hangisidir...",
    "options": [
      "Eş seslilik",
      "Eş anlamlılık",
      "arşıt anlamlılık",
      "Yakın anlamlılık GERÇE, MECAZ VE TERİM ANLAMLI ELİMELERİ BELİRLER."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Eş seslilik"
  },
  {
    "id": "turkce-4-pdf-u3-q3",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi mecaz anlamıyla kullanılmıştır...",
    "options": [
      "Yaylanın her köşesinden bir pınar kaynardı.",
      "Bu sorunu çözmenin mutlaka bir yolu vardır.",
      "Töreni uzaktan izleyenler de sevinçle alkışlıyorlardı.",
      "Geceleri sıcak olduğu için üzerine yalnız pike örtüyordu."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bu sorunu çözmenin mutlaka bir yolu vardır."
  },
  {
    "id": "turkce-4-pdf-u3-q4",
    "unitId": "turkce-4-pdf-u3",
    "text": "“Dökmek” kelimesi aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır...",
    "options": [
      "Bir sıkıntın var gibi, sen içindekileri dök bakalım.",
      "Artan yemekleri köpeğin tasına döktü adam.",
      "Nedense bu ağaç, yapraklarını yazın döküyor.",
      "Çöp kutusunu akşam olmadan dökmelisin."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bir sıkıntın var gibi, sen içindekileri dök bakalım."
  },
  {
    "id": "turkce-4-pdf-u3-q5",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi mecaz anlamlıdır...",
    "options": [
      "Çevresindekilere her zaman doğruyu söyler.",
      "Odada yalnız kalınca sıkıntıdan patladım.",
      "Bütün giyecekleri dolaba kilitlemişler.",
      "Dualarında hep hayırlı evlat isterdi."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Odada yalnız kalınca sıkıntıdan patladım."
  },
  {
    "id": "turkce-4-pdf-u3-q6",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki cümlelerin hangisinde “bozmak” kelimesi mecaz anlamda kullanılmıştır...",
    "options": [
      "Benzinlikten aldığımız yakıt arabamızı bozdu.",
      "Sürekli ekrana bakmak gözleri bozar.",
      "Sözlerinizle adamcağızı fena bozdunuz.",
      "Şu iki yüz lirayı bozabilir misiniz..."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sözlerinizle adamcağızı fena bozdunuz."
  },
  {
    "id": "turkce-4-pdf-u3-q7",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi terim anlamlıdır...",
    "options": [
      "Yine nasıl olmuşsa yanımdaki sandalye boş kalmış.",
      "Binanın merdivenleri çok dar yapılmış bence.",
      "Geçen gün ormanda arkadaşlarla kamp yaptık.",
      "Bugün izlediğimiz filmin yönetmeniyle önceden tanışmıştım."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Bugün izlediğimiz filmin yönetmeniyle önceden tanışmıştım."
  },
  {
    "id": "turkce-4-pdf-u3-q8",
    "unitId": "turkce-4-pdf-u3",
    "text": "“İnce” kelimesi aşağıdaki cümlelerin hangisinde gerçek anlamında kullanılmıştır...",
    "options": [
      "İnce yapısına rağmen güçlü kuvvetliydi.",
      "O, ince düşünceli bir insandı.",
      "Her zaman ince hesaplar peşindeydi.",
      "İnce esprileriyle herkesin ilgisini çekiyordu."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İnce yapısına rağmen güçlü kuvvetliydi."
  },
  {
    "id": "turkce-4-pdf-u3-q9",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki cümlelerin hangisinde mecazlı bir anlatım yoktur...",
    "options": [
      "İğneleyici sözlerle hepimizi kırdı.",
      "Onunla aramızda bir dostluk bağı oluştu.",
      "uvvetli fırtınadan sonra her yer yıkıldı.",
      "Bu acı olayı hayatım boyunca unutamam."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: uvvetli fırtınadan sonra her yer yıkıldı."
  },
  {
    "id": "turkce-4-pdf-u3-q10",
    "unitId": "turkce-4-pdf-u3",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi terim anlamıyla kullanılmıştır...",
    "options": [
      "Güneş girmeyen eve doktor girer.",
      "Önceki derste hücre yapısını inceledik.",
      "Bu iş ancak bir ay sonra biter.",
      "Türkçe dersinde okuma çalışması yaptık."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Önceki derste hücre yapısını inceledik."
  },
  {
    "id": "turkce-4-pdf-u4-q1",
    "unitId": "turkce-4-pdf-u4",
    "text": "Aşağıdaki altı çizili kelimelerden hangisi terimdir...",
    "options": [
      "Pek rahat bir adam, hiçbir şeyi dert etmiyor.",
      "Bu hafta pergel kullanmayı öğrendik.",
      "İnsanlar, kerpiç evlerin damlarına çıkmışlardı.",
      "Son yağmurlar biraz yüzümüzü güldürdü."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bu hafta pergel kullanmayı öğrendik."
  },
  {
    "id": "turkce-4-pdf-u4-q2",
    "unitId": "turkce-4-pdf-u4",
    "text": "Aşağıdakilerin hangisinde altı çizili kelime terim anlamıyla kullanılmıştır...",
    "options": [
      "Yeryüzünde yaşam çok uzun yıllar önce başladı.",
      "Bu bilgisayarın işlemcisi oldukça hızlıdır.",
      "argalar yiyecek sakladığı yerleri kolayca bulabilir.",
      "Müzik dinlemeyi ve kaval çalmayı çok seviyorum. METNİN ANLAMINA ATISINI AVRAR."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bu bilgisayarın işlemcisi oldukça hızlıdır."
  },
  {
    "id": "turkce-4-pdf-u4-q3",
    "unitId": "turkce-4-pdf-u4",
    "text": "ADAM OLMANIN YOLU Bir gün Nasrettin Hoca’ya “Adam olmanın yolu nedir...” diye sormuşlar. “ulak!” demiş. “Bilenler konuşurken can kulağıyla dinlemeli. endi söylediği sözü de kulağı işitmeli.” Metinde geçen “can kulağıyla dinlemek” sözünün anlamı aşağıdakilerden hangisidir...",
    "options": [
      "Yanı başındaki konuşmaları, konuşmanın dışında kalarak dinlemek",
      "Dinlemiyormuş gibi görünerek sezdirmeden dinlemek",
      "Başkalarına söylenirken kendisi de duymuş olmak",
      "Anlatılanları iyice kavramaya çalışarak dinlemek"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Anlatılanları iyice kavramaya çalışarak dinlemek"
  },
  {
    "id": "turkce-4-pdf-u4-q4",
    "unitId": "turkce-4-pdf-u4",
    "text": "Aşağıdakilerden hangisi eğitim ile ilgili bir atasözüdür...",
    "options": [
      "Ağaç yaşken eğilir.",
      "Damlaya damlaya göl olur.",
      "Tatlı dil yılanı deliğinden çıkarır.",
      "Ak akçe kara gün içindir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ağaç yaşken eğilir."
  },
  {
    "id": "turkce-4-pdf-u4-q5",
    "unitId": "turkce-4-pdf-u4",
    "text": "Aşağıdaki deyimlerin hangisinde özlem söz konusu değildir...",
    "options": [
      "Göreceği gelmek",
      "Burnunda tütmek",
      "Gönül bağlamak",
      "Gözü yolda kalmak"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Gönül bağlamak"
  },
  {
    "id": "turkce-4-pdf-u4-q6",
    "unitId": "turkce-4-pdf-u4",
    "text": "Aşağıdakilerin hangisinde “bir niteliğiyle hayran bırakmak” anlamında bir deyim kullanılmıştır...",
    "options": [
      "Solo Türk ekibi uçak gösterileriyle göz kamaştırdı.",
      "Her zaman büyüklerin gönlünü hoş tutmalısın.",
      "Bu şarkının sözleri inan dilimin ucunda.",
      "endini beğenmiş insanlara her yerde rastlanır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Solo Türk ekibi uçak gösterileriyle göz kamaştırdı."
  },
  {
    "id": "turkce-4-pdf-u4-q7",
    "unitId": "turkce-4-pdf-u4",
    "text": "“ır atın yanında duran ya huyundan ya suyundan.” atasözünün benzer anlamlısı aşağıdakilerden hangisidir...",
    "options": [
      "Ak gün ağartır, kara gün karartır.",
      "Üzüm üzüme baka baka kararır.",
      "Besle kargayı oysun gözünü.",
      "Az veren candan, çok veren maldan."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Üzüm üzüme baka baka kararır."
  },
  {
    "id": "turkce-4-pdf-u4-q8",
    "unitId": "turkce-4-pdf-u4",
    "text": "Barış, sınıf içinde diğer öğrencilerden her yönüyle farklıydı. Çalışmasını, davranışlarını ve zekâsını öğretmeni takdir ediyordu. O, davranışlarıyla öğretmeninin sevgi ve güvenini kazanmıştı. Metne göre, Barış’ın durumuna aşağıdaki deyimlerden hangisi uygun düşer...",
    "options": [
      "Gözüne batmak",
      "Gözüne kestirmek",
      "Gözüne girmek",
      "Gözü kalmak"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Gözüne girmek"
  },
  {
    "id": "turkce-4-pdf-u4-q9",
    "unitId": "turkce-4-pdf-u4",
    "text": "“Öyle insanlar vardır ki konuştular mı ağzından bal akıyor sanırsınız.” cümlesindeki altı çizili deyimin anlamı aşağıdakilerden hangisidir...",
    "options": [
      "Sözlerini tartmadan söylemek",
      "Çok tatlı konuşmak",
      "İstemediği hâlde söyleyivermek",
      "Birçok kez söylemiş olmak"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Çok tatlı konuşmak"
  },
  {
    "id": "turkce-4-pdf-u4-q10",
    "unitId": "turkce-4-pdf-u4",
    "text": "Bazen karşımızdaki kişiye sevinç, korku veya şaşkınlık nedeniyle birdenbire söz söyleyemez hâle geliriz. Aşağıdakilerin hangisinde bu durumu anlamca karşılayan bir deyim kullanılmıştır...",
    "options": [
      "Onu inandırabilmek için defalarca dil döktü.",
      "öşede sessizce otururken aniden dili açıldı.",
      "Toplantıda tüm düşüncelerini dile getirdi.",
      "Hiç beklemediği anda onu görünce dili tutuldu. NARA BİLMEDİĞİ ELİME VE ELİME GRUPLARININ ANLAMINI TAHMİN EDER."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Hiç beklemediği anda onu görünce dili tutuldu. NARA BİLMEDİĞİ ELİME VE ELİME GRUPLARININ ANLAMINI TAHMİN EDER."
  },
  {
    "id": "turkce-4-pdf-u5-q1",
    "unitId": "turkce-4-pdf-u5",
    "text": "Aşağıdakilerin hangisinde altı çizili kelime, yay ayraç ( ) içinde verilen anlama uygun kullanılmamıştır...",
    "options": [
      "Ben de çayıma şeker koymayı bıraktım. (Unutmak)",
      "Bizim takımımız daha ilk turda elendi. (Yarışma dışı kalmak)",
      "Bu gemi fırtınalara iyi dayandı. (Zarar ve hasar görmemek)",
      "Rüzgâr esince masanın üzerindeki kâğıtlar karıştı. (Düzensiz, dağınık olmak)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ben de çayıma şeker koymayı bıraktım. (Unutmak)"
  },
  {
    "id": "turkce-4-pdf-u5-q2",
    "unitId": "turkce-4-pdf-u5",
    "text": "Satışları artan şirketimiz bu sene iyi kazandı. “İyi” kelimesinin bu cümlede kazandığı anlam aşağıdakilerden hangisidir...",
    "options": [
      "olay",
      "Farklı",
      "Çok",
      "Hızlı"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Çok"
  },
  {
    "id": "turkce-4-pdf-u5-q3",
    "unitId": "turkce-4-pdf-u5",
    "text": "Mühendisler dört dörtlük bir proje hazırladılar. Altı çizili kelime grubunun bu cümleye kattığı anlam aşağıdakilerin hangisinde vardır...",
    "options": [
      "Yanlışlarını düzeltmek istiyorsan çok çalışmalısın.",
      "Hatalarından ders alırsan daha çok gelişirsin.",
      "usursuz bir arkadaş bulmak imkânsızdır.",
      "İyi insanlar her zaman kazanır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: usursuz bir arkadaş bulmak imkânsızdır."
  },
  {
    "id": "turkce-4-pdf-u5-q4",
    "unitId": "turkce-4-pdf-u5",
    "text": "Bir çırak, çok güzel testiler yapıyormuş. Ama testilerin orasından burasından yarılmasına, yer yer çatlamasına engel olamıyormuş. Usta, çırağına “Sana demedim mi evladım, sen bu işin püf noktasını henüz öğrenmedin. Haydi, geç bakalım tezgâhın başına da bir testi çıkar! Ben de sana püf noktasını göstereyim.” demiş. Çırak, çarkı döndürüp çamura şekil vermeye başlamış. Usta da önünde dönen çanağa arada sırada “püf!” diye üfleyerek testiyi çatlatacak olan bazı küçük hava kabarcıklarını patlatmış. O günden sonra buna “püf noktası” denmiş. Bu metne göre “püf noktası” sözünün anlamı aşağıdakilerden hangisidir...",
    "options": [
      "Bir işin incelik gerektiren önemli kısmı",
      "Akıl veren veya öğreten kimse",
      "Uzun ve yorucu çalışma",
      "Bir işi kendi başına yapabilme yeteneği"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bir işin incelik gerektiren önemli kısmı"
  },
  {
    "id": "turkce-4-pdf-u5-q5",
    "unitId": "turkce-4-pdf-u5",
    "text": "Sert zeminde koşmak bacaklara zarar verir. “Sert” kelimesi, numaralanmış cümlelerin hangilerinde aynı anlamda kullanılmıştır...",
    "options": [
      "1 ve 2",
      "1 ve 3",
      "2 ve 4",
      "3 ve 4"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2 ve 4"
  },
  {
    "id": "turkce-4-pdf-u5-q6",
    "unitId": "turkce-4-pdf-u5",
    "text": "Aşağıdakilerin hangisinde altı çizili sözün cümlede kazandığı anlam ayraç içinde yanlış verilmiştir...",
    "options": [
      "Benim gelmem, kursumun erken bitmesine bağlı. (Şart)",
      "Pazardan aldığım incir bal gibiydi. (Tatlı olmak)",
      "O kış akşamında şehri büyük bir sis basmıştı. (aplamak)",
      "Her şeyin başı sağlıktır, demiş atalarımız. (Vücudun bir bölümü)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Her şeyin başı sağlıktır, demiş atalarımız. (Vücudun bir bölümü)"
  },
  {
    "id": "turkce-4-pdf-u5-q7",
    "unitId": "turkce-4-pdf-u5",
    "text": "Annem, kirpikleri arasından yumuşak ve şefkatli bakışlarıyla bakıyordu. “Yumuşak” kelimesi numaralanmış cümlelerin hangilerinde aynı anlamda kullanılmıştır...",
    "options": [
      "1 ve 2",
      "1 ve 4",
      "2 ve 3",
      "3 ve 4"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1 ve 4"
  },
  {
    "id": "turkce-4-pdf-u5-q8",
    "unitId": "turkce-4-pdf-u5",
    "text": "Aşağıdakilerin hangisinde altı çizili sözün cümlede kazandığı anlam ayraç içinde yanlış verilmiştir...",
    "options": [
      "Önüne fırlayan köpeğe çarpmamak için direksiyonu sağa kıvırdı. (atlamak)",
      "Ben belli bir noktaya işaret etmek için buraya geldim. (Dikkat çekmek)",
      "Bahçede çalışan babama seslenince babam bana döndü. (Yönelmek)",
      "Evimizde ince bir temizlik yapmanın zamanı gelmişti. (Ayrıntılı)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Önüne fırlayan köpeğe çarpmamak için direksiyonu sağa kıvırdı. (atlamak)"
  },
  {
    "id": "turkce-4-pdf-u5-q9",
    "unitId": "turkce-4-pdf-u5",
    "text": "“Gelmek” kelimesi aşağıdakilerin hangisinde “varlığını sürdürmek, yaşamak” anlamında kullanılmıştır...",
    "options": [
      "Eski çağlardan birçok eser günümüze kadar gelmiştir.",
      "Sinemadan çıktığımızda saat beşe geliyordu.",
      "Merak etme, ondan kimseye kötülük gelmez.",
      "Orman havası insan sağlığına iyi gelir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Eski çağlardan birçok eser günümüze kadar gelmiştir."
  },
  {
    "id": "turkce-4-pdf-u5-q10",
    "unitId": "turkce-4-pdf-u5",
    "text": "Aşağıdaki kelimeler alfabetik sıraya göre dizildiğinde hangisi en sonda yer alır...",
    "options": [
      "Çocuk",
      "Çalışmak",
      "Çünkü",
      "Çiçek"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Çünkü"
  },
  {
    "id": "turkce-4-pdf-u6-q1",
    "unitId": "turkce-4-pdf-u6",
    "text": "“Vermek” kelimesi aşağıdakilerin hangisinde “çevirmek, yöneltmek” anlamında kullanılmıştır...",
    "options": [
      "endilerine iyi bir çalışma fırsatı verdim.",
      "Çok tanınmış bir sanatçı, burada akşam konser verecek.",
      "Dal budak saldı, yemiş vermeye başladı.",
      "Dar sokaktan çıkınca arabanın burnunu rıhtıma verdi."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Dar sokaktan çıkınca arabanın burnunu rıhtıma verdi."
  },
  {
    "id": "turkce-4-pdf-u6-q2",
    "unitId": "turkce-4-pdf-u6",
    "text": "Aşağıdaki kelimeler alfabetik sıraya göre dizildiğinde hangisi en sonda yer alır...",
    "options": [
      "Bağlamsal",
      "Bağlanabilmek",
      "Bağlanış",
      "Bağlamak"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bağlanış"
  },
  {
    "id": "turkce-4-pdf-u6-q3",
    "unitId": "turkce-4-pdf-u6",
    "text": "Ahmet, bahçe işleriyle zaman geçirmeyi severdi. Bahçeye meyve ve sebze tohumlarını ekmek için dedesiyle iş bölümü yapmışlardı. Dedesi işe daha yeni başlamışken Ahmet kendi üzerine düşen işin hakkından gelmişti bile. Bu metinde altı çizili sözün anlamı aşağıdakilerin hangisidir...",
    "options": [
      "Bir emeğin karşılığında ücret vermek",
      "Zor bir işi başarı ile sona erdirmek",
      "Birinin payından başkasına vermek",
      "Bir başarıdan dolayı ödüllendirilmek"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Zor bir işi başarı ile sona erdirmek"
  },
  {
    "id": "turkce-4-pdf-u6-q4",
    "unitId": "turkce-4-pdf-u6",
    "text": "“Uzatmak” kelimesi aşağıdakilerin hangisinde “Şu raftaki şekeri bana uzatır mısın...” cümlesindeki anlamıyla kullanılmıştır...",
    "options": [
      "Arkasındaki çantadan anahtarı alıp uzattı.",
      "Oraya erken gitmemek için yolumu uzattım.",
      "Can, yere oturup ayaklarını uzattı.",
      "Hakem maçı üç dakika uzattı."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Arkasındaki çantadan anahtarı alıp uzattı."
  },
  {
    "id": "turkce-4-pdf-u6-q5",
    "unitId": "turkce-4-pdf-u6",
    "text": "• ispat • imza • itina • ilgili Bu kelimeler Türk alfabesine göre sözlükte nasıl sıralanır...",
    "options": [
      "ilgili - ispat - itina - imza",
      "imza - ispat - itina - ilgili",
      "ilgili - imza - ispat - itina",
      "imza - ilgili - itina - ispat"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: ilgili - imza - ispat - itina"
  },
  {
    "id": "turkce-4-pdf-u6-q6",
    "unitId": "turkce-4-pdf-u6",
    "text": "İnsan ne kadar çekingen, başkalarıyla iletişim kurmaktan ne derece hoşlanmaz biri olursa olsun; sohbetini, misafirliğini özleyeceği bir iki dostu veya akrabası vardır. Böyle ahbapların, birbirini candan seven insanların, dostlukları gibi misafirlikleri de tatlı olur. Çünkü birbirlerine ağırlık vermezler. Bu metne göre ‘‘ahbap’’ kelimesinin anlamı aşağıdakilerden hangisidir...",
    "options": [
      "endisiyle yakın ilişki kurulup sevilen, sayılan kimse.",
      "Bir ortamda birlikte bulunanlardan her biri.",
      "Herhangi bir şeye düşkün olan, aşırı ilgi duyan kişi.",
      "Yaş, meslek vb. bakımından birbirlerine eşit olanlar."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: endisiyle yakın ilişki kurulup sevilen, sayılan kimse."
  },
  {
    "id": "turkce-4-pdf-u6-q7",
    "unitId": "turkce-4-pdf-u6",
    "text": "Aşağıdaki cümlelerin hangisinde “seçmek” kelimesi “titiz davranmak, kolay kolay beğenmemek” anlamında kullanılmıştır...",
    "options": [
      "Bu mesleği seçmeme çok şaşırdığını söyledi.",
      "Durmadan öten bu kuşun keklik mi bıldırcın mı olduğunu seçemiyordum.",
      "Ablam yemek seçer, her şeyi yemezdi.",
      "Bugün oy birliğiyle onu başkanlığa seçtik."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Ablam yemek seçer, her şeyi yemezdi."
  },
  {
    "id": "turkce-4-pdf-u6-q8",
    "unitId": "turkce-4-pdf-u6",
    "text": "Aşağıdaki cümlelerin hangisinde “saymak” kelimesi “ödemek” anlamında kullanılmıştır...",
    "options": [
      "Bu küpelere tam yüz lira saydı.",
      "üçüklerini sever, büyüklerini sayardı.",
      "Artık kışı geçti sayabiliriz.",
      "Bizler, sizleri bir dost saydık. SORULARI CEVAPLAR."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bu küpelere tam yüz lira saydı."
  },
  {
    "id": "turkce-4-pdf-u6-q9",
    "unitId": "turkce-4-pdf-u6",
    "text": "Hoyrattır bu akşamüstüler daima. Gün saltanatıyla gitti mi bir defa Yalnızlığımızla doldurup her yeri Bir renk çığlığı içinde bahçemizden, Bir el çıkarmaya başlar bohçamızdan Lavanta çiçeği kokan kederleri; Hoyrattır bu akşamüstüler daima. Bu şiirin ana duygusunu en iyi yansıtan fotoğraf, aşağıdakilerden hangisidir...",
    "options": [
      "B)",
      "D) 2. Bu karikatürde verilmek istenen mesaj, aşağıdakilerden hangisidir...",
      "Bazı şeyler göründüğü gibi değildir.",
      "Bilgiyi uzaklarda aramayınız."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: D) 2. Bu karikatürde verilmek istenen mesaj, aşağıdakilerden hangisidir..."
  },
  {
    "id": "turkce-4-pdf-u6-q10",
    "unitId": "turkce-4-pdf-u6",
    "text": "Yavaş yavaş kapıyı açtı. Numaralandırılmış cümlelerle anlamlı bir metin oluşturmak için sıralama nasıl olmalıdır...",
    "options": [
      "4 - 3 - 2 - 1",
      "1 - 3 - 4 - 2",
      "3 - 2 - 1 - 4",
      "2 - 1 - 4 - 3"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4 - 3 - 2 - 1"
  },
  {
    "id": "turkce-4-pdf-u7-q1",
    "unitId": "turkce-4-pdf-u7",
    "text": "Bunlar çok pahalı olduğundan ancak zenginler tarafından satın alınıyordu. Numaralandırılmış cümlelerle anlamlı bir metin oluşturmak için sıralama nasıl olmalıdır...",
    "options": [
      "4 - 2 - 1 - 3",
      "3 - 1 - 2 - 4",
      "4 - 3 - 2 - 1",
      "3 - 2 - 1 - 4"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 3 - 1 - 2 - 4"
  },
  {
    "id": "turkce-4-pdf-u7-q2",
    "unitId": "turkce-4-pdf-u7",
    "text": "ovanın çevresinde şöyle bir döndü. Numaralandırılmış cümlelerin oluş sırası aşağıdakilerin hangisinde doğru verilmiştir...",
    "options": [
      "1 - 4 - 3 - 2",
      "3 - 2 - 1 - 4",
      "2 - 1 - 4 - 3",
      "4 - 1 - 3 - 2"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2 - 1 - 4 - 3"
  },
  {
    "id": "turkce-4-pdf-u7-q3",
    "unitId": "turkce-4-pdf-u7",
    "text": "Beni görünce işine ara verdi. Numaralandırılmış cümleler olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "1 - 2 - 3 - 4",
      "2 - 1 - 4 - 3",
      "3 - 4 - 1 - 2",
      "4 - 3 - 2 - 1"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 2 - 3 - 4"
  },
  {
    "id": "turkce-4-pdf-u7-q4",
    "unitId": "turkce-4-pdf-u7",
    "text": "Sabiha bu konuşmada Atatürk’e “Okula gitmek istiyorum.” deyince Atatürk, bu durumdan etkilenmiş. Numaralanmış cümleler olayların oluş sırasına göre nasıl sıralanmalıdır...",
    "options": [
      "2 - 3 - 1 - 4",
      "2 - 4 - 3 - 1",
      "3 - 1 - 2 - 4",
      "3 - 2 - 4 - 1 NUSUNU BELİRLER."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3 - 1 - 2 - 4"
  },
  {
    "id": "turkce-4-pdf-u7-q5",
    "unitId": "turkce-4-pdf-u7",
    "text": "Televizyon ve gazete haberlerine dikkat ediyor musunuz... Haberlerde “küresel ısınma” ve “iklim değişikliği” denildiğini duymuşsunuzdur. Peki, kasırga, fırtına, tsunami, sel ve kuraklık konularında neler biliyorsunuz... Birçok bilim insanı, bu doğa olaylarının sayılarının son yıllarda artmasının nedenini küresel ısınmaya bağlıyorlar. Bu konuda tüm dünyada çok önemli çalışmalar ve araştırmalar yapılıyor. Bu metnin konusu nedir...",
    "options": [
      "Televizyon ve gazete haberlerinin önemi",
      "üresel ısınmanın etkileri",
      "Bilim insanlarının çalışmaları",
      "uraklığın sonuçları"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: üresel ısınmanın etkileri"
  },
  {
    "id": "turkce-4-pdf-u7-q6",
    "unitId": "turkce-4-pdf-u7",
    "text": "Doğada su, bitmeksizin, tıpkı bir çember gibi döner. Başı sonu yoktur. Bu döngü, dünya var olduğundan beri tekrarlanır. Su; denizlerden, göllerden, nehirlerden güneş enerjisi ile buharlaşır. Buhara dönüşen su, yükselerek bulutları oluşturur, soğuyan bulutlar yağışlara dönüşerek yağmur, kar, dolu biçiminde tekrar yeryüzüne ulaşır. Bu metinde ne anlatılmaktadır...",
    "options": [
      "Yağmurun oluşumu",
      "Bulutların oluşumu",
      "Suyun döngüsü",
      "Suların kirlendiği"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yağmurun oluşumu"
  },
  {
    "id": "turkce-4-pdf-u7-q7",
    "unitId": "turkce-4-pdf-u7",
    "text": "Ülkemizdeki gazete ve dergilerin satış sayıları oldukça düşüktür. Nüfusumuza oranlandığında durumun ne kadar kötü olduğu daha net anlaşılır. itap satışlarına baktığımızda da durum pek farklı değildir. Hâlbuki yurdun her şehrinde üniversite açıldı. Anadolu’da neredeyse lisesi olmayan ilçe kalmadı. Yine de basılı yayınların satış sayıları yükselmedi. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Nüfusun azalması",
      "Gazete ve dergilerin önemi",
      "itapların pahalılığı",
      "Okur sayısının azlığı"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Gazete ve dergilerin önemi"
  },
  {
    "id": "turkce-4-pdf-u7-q8",
    "unitId": "turkce-4-pdf-u7",
    "text": "Giderek artan şehir ışıkları, pek çok hayvanın doğal yaşamını olumsuz etkiliyor. Peki ya bitkiler nasıl etkileniyor... Bilim insanları bunu anlamak için İngiltere’de bir deney yapmış. Işık kirliliğinin en yoğun olduğu bölgelerde bazı ağaçların daha erken çiçek açtığını gözlemlemiş. Bu çalışmayla ışık kirliliğinin doğa için ne kadar ciddi bir tehlike olabileceğini göstermişler. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Şehirleşmenin insan yaşamını zorlaştırması",
      "Bitki ve hayvan türlerinin azalması",
      "Işık kirliliğinin doğaya etkisi",
      "Bilim insanlarının tehlikeli deneyleri"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Bilim insanlarının tehlikeli deneyleri"
  },
  {
    "id": "turkce-4-pdf-u7-q9",
    "unitId": "turkce-4-pdf-u7",
    "text": "Güler yüz, her şeyden evvel insana cesaret verir. Çünkü böyle insanlar, hoşgörülü ve affedicidir. Örnek olarak ilk adım için çabalayan bir çocuk, üstünde toplanan gülüşlerden güç alarak yürümek için gayret gösterir. Aynı çocuk, asık yüzlerle seyredildiğinde ise emeklemekten bile çekinir. Bu metnin konusu aşağıdakilerden hangisidir...",
    "options": [
      "Güler yüzlülük",
      "Hoşgörürlük",
      "Affedicilik",
      "Çocukluk DUYGUSUNU BELİRLER."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Çocukluk DUYGUSUNU BELİRLER."
  },
  {
    "id": "turkce-4-pdf-u7-q10",
    "unitId": "turkce-4-pdf-u7",
    "text": "Bana niçin mektup yazmak istemiyorsun... Her mektupta güzel haberler bulunması şart mı... Sanki ben her seferinde sevinçli şeyler mi yazıyorum. Sen de yaz iyisiyle, kötüsüyle. Yazarın bu metni yazma amacı, aşağıdakilerden hangisidir...",
    "options": [
      "Arkadaşının yazarlık yönünü ortaya çıkarmak",
      "Bazı mektupların yalnızca iyi haberlerden oluştuğunu belirtmek",
      "Arkadaşının kendisine mektup yazmasını sağlamak",
      "Mektuplaşmanın yararlarını anlatmak"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Arkadaşının yazarlık yönünü ortaya çıkarmak"
  },
  {
    "id": "turkce-4-pdf-u8-q1",
    "unitId": "turkce-4-pdf-u8",
    "text": "Oyun oynamak her yaşta önemlidir. Hele çocuklar için vazgeçilmez bir eylemdir. Bu yüzden çocuklara istenilen davranışları ve değerleri kazandırmanın en kestirme yolu oyundur. Böylece çocuk, hem eğlenceli vakit geçirir hem de öğrenmenin zevkine varır. Bu metnin ana fikri aşağıdakilerden hangisidir...",
    "options": [
      "Vakit geçirmenin şekli, yaşa göre değişkenlik gösterir.",
      "Çocuklar için eğlence, her şeyden önemlidir.",
      "Her çocuk, istenilen davranışları kazanmak için okulda eğitim almalıdır.",
      "Çocuklar, kazanmaları gereken davranış ve değerleri oyun yoluyla kolayca elde edebilir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Her çocuk, istenilen davranışları kazanmak için okulda eğitim almalıdır."
  },
  {
    "id": "turkce-4-pdf-u8-q2",
    "unitId": "turkce-4-pdf-u8",
    "text": "Her iklimde, her kıtada urtlara kuşlara selam, Selam bütün bayraklara, Bütün insanlara selam. Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Özlem",
      "Yalnızlık",
      "Merak",
      "ardeşlik"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: ardeşlik"
  },
  {
    "id": "turkce-4-pdf-u8-q3",
    "unitId": "turkce-4-pdf-u8",
    "text": "Geçmişten günümüze vazgeçilmeyen ilgi odaklarından biri de kuklalardır. uklalar sadece bir eğlence aracı değildir. Eğlendirirken eğitir, toplulukların duygu ve düşüncelerini dile getirir. Çağın kültürel yapısını en güzel şekilde yansıtır. Bu metnin yazılış amacı aşağıdakilerden hangisidir...",
    "options": [
      "uklaların önemini vurgulamak",
      "Geçmişle günümüz arasındaki farkı anlatmak",
      "Eğlence alışkanlıklarımızı yansıtmak",
      "İlgi alanlarımızın çeşitliliğini göstermek"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Geçmişle günümüz arasındaki farkı anlatmak"
  },
  {
    "id": "turkce-4-pdf-u8-q4",
    "unitId": "turkce-4-pdf-u8",
    "text": "Gözümde bir damla su deniz olup taşıyor, Çöllerde kalmış gibi yanıyor, yanıyorum. Bütün gemicilerin ruhu bende yaşıyor; Başımdaki gökleri bir deniz sanıyorum Bu dörtlüğün ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "uraklık endişesi",
      "Vatan sevgisi",
      "Deniz özlemi",
      "Yalnızlık korkusu"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Deniz özlemi"
  },
  {
    "id": "turkce-4-pdf-u8-q5",
    "unitId": "turkce-4-pdf-u8",
    "text": "Aynı kaptan yenen yemek, Bin dudağın değdiği tas. Ah köyüm, baba ocağım, Suyun zemzem, taşın elmas. Bu şiirin ana duygusu hangisidir...",
    "options": [
      "Baba özlemi",
      "Doğa sevgisi",
      "Memleket özlemi",
      "Zengin olma isteği"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Zengin olma isteği"
  },
  {
    "id": "turkce-4-pdf-u8-q6",
    "unitId": "turkce-4-pdf-u8",
    "text": "En dar en karanlık sokaklar Çok yakında bir gün Çok yakında bir gün Bayramlaşıp ışıyacaklar Hürriyet giyecek aydınlık ayaklar Bu dizelerin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Yaşama sevinci",
      "Umut",
      "Vatan sevgisi",
      "Mutluluk"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Vatan sevgisi"
  },
  {
    "id": "turkce-4-pdf-u8-q7",
    "unitId": "turkce-4-pdf-u8",
    "text": "üçük bir çocuk alır eline boya kalemlerini; başlar evin duvarlarını boyamaya, resim çizmeye. İşte size küçük bir ressam... Birkaç çocuk bir araya gelip hemen evcilik oynamaya başlar. İşte size küçük tiyatrocular... Ve bir çocuk sözlerini kendisinin yazdığı, müziğini kendisinin yaptığı şarkıları hiç çekinmeden söyler. İnsan aslında daha küçükken başlar sanatla ilgilenmeye. Bu metnin ana düşüncesi aşağıdakilerden hangisidir...",
    "options": [
      "Resim ve tiyatro zor sanatlar değildir.",
      "Her insan sanatçı olabilir.",
      "üçük çocuklara bile sanat eğitimi verilebilir.",
      "Her insanın sanata doğuştan bir eğilimi vardır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Resim ve tiyatro zor sanatlar değildir."
  },
  {
    "id": "turkce-4-pdf-u8-q8",
    "unitId": "turkce-4-pdf-u8",
    "text": "Eda ile Yalçın babalarının kendilerine verdiği haftalıklardan bir kısmıyla ihtiyaçlarını alırken, kalanını kumbaralarına atıyorlardı. Günler geçtikçe kumbaradaki paralar dolup taştı. Biriktirdikleri paralarla en sevdikleri yazarın kitaplarından aldılar. Aşağıdaki atasözlerinden hangisi bu metne uygun düşmez...",
    "options": [
      "Damlaya damlaya göl olur.",
      "İşleyen demir ışıldar.",
      "Ak akçe kara gün içindir.",
      "Birlikten kuvvet doğar."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Ak akçe kara gün içindir."
  },
  {
    "id": "turkce-4-pdf-u8-q9",
    "unitId": "turkce-4-pdf-u8",
    "text": "Ahmet, bir gün yolda rastladığı yardıma muhtaç birine para verir. Daha on adım atmadan yardımı alan kişi peşinden koşar ve: — Bana ihtiyacım olandan daha çok para verdiniz, der. Ahmet cebinden bir miktar para daha çıkarıp adama uzatır. Adam elindekini göstererek: — Yanıldınız beyefendi, benim bu kadar paraya ihtiyacım yok. Ahmet gülerek: — Tamam der. Bu ikincisini de dürüstlüğün için veriyorum. Bu metinde asıl anlatılmak istenen, aşağıdakilerden hangisidir...",
    "options": [
      "Yapılan yardımın gizli kalması gerektiği",
      "Yardıma muhtaç insanlara yardım edilmesi gerektiği",
      "Yardımda bulunan kişiye teşekkür edilmesi gerektiği",
      "Doğruluktan ayrılmayan insanların ödüllendirilmesi gerektiği"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Doğruluktan ayrılmayan insanların ödüllendirilmesi gerektiği"
  },
  {
    "id": "turkce-4-pdf-u8-q10",
    "unitId": "turkce-4-pdf-u8",
    "text": "Merhaba yeni gelen gün Gökyüzünde belirsiz aydınlık Denizde çivit mavisi Merhaba yaşama gücüm Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Doğaya özlem",
      "Yaşama sevinci",
      "İnsan sevgisi",
      "Ayrılık acısı"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Ayrılık acısı"
  },
  {
    "id": "turkce-4-pdf-u9-q1",
    "unitId": "turkce-4-pdf-u9",
    "text": "‘‘Hedeflerime ulaşmak için harekete geçeceğim ama bunu başarabileceğime pek inanmıyorum.’’ düşüncesine kapılmayın sakın. Çünkü ‘‘harekete geçmek’’ her şeyin başlangıcıdır. Bu başlangıçla istediğiniz sonuçlara biraz daha yaklaşmış olacaksınız. İstediğiniz sonuçları aldıkça da bir bakacaksınız ki başarabileceğinize inanıyorsunuz. Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir...",
    "options": [
      "Yapabileceğinize olan inancınız başarıyı doğurur.",
      "Başarabileceğinize olan inancınız, harekete geçmenizle ortaya çıkar.",
      "Önce hedeflerinize ulaşacağınıza inanın, sonra harekete geçin.",
      "Hedeflerinize inanmazsanız harekete geçmeniz güçleşir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yapabileceğinize olan inancınız başarıyı doğurur."
  },
  {
    "id": "turkce-4-pdf-u9-q2",
    "unitId": "turkce-4-pdf-u9",
    "text": "Sen rüyaların en güzelini, En tatlısını gören çocuğum: Hangi dünyadasın bilmiyorum. aybetmişçesine her şeyini Gözlerin havada ne arıyor, Yumuk ellerin kimi çağırıyor... Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Merak",
      "Mutluluk",
      "Sevinç",
      "ıskançlık"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sevinç"
  },
  {
    "id": "turkce-4-pdf-u9-q3",
    "unitId": "turkce-4-pdf-u9",
    "text": "Biz yazarların taşları kelimelerdir. Onları elleyerek, birbirleriyle ilişkilerini hissederek, bazen uzaktan bakıp seyrederek, bazen de kalemimizin ucuyla ağırlıklarını tartarak, kelimeleri yerleştire yerleştire, yıllarca inatla, sabırla ve umutla yeni dünyalar kurarız. İşte bu yüzden yazarlığın sırrı, nereden ve ne zaman geleceği belli olmayan ilhamda değil, inat ve sabırdadır. Bu metinde yazarın vermek istediği asıl mesaj aşağıdakilerden hangisidir...",
    "options": [
      "Yazarlık, yeni bir dünyayı kelimelerle kurmaktır.",
      "Yazarlık, bir duvarı taşlarla ustaca örmeye benzer.",
      "Yazarlık, yazma işi üzerinde ısrarla durmaya bağlıdır.",
      "Yazarlık, kelimeleri birçok yanıyla tanıyabilmektir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yazarlık, yazma işi üzerinde ısrarla durmaya bağlıdır."
  },
  {
    "id": "turkce-4-pdf-u9-q4",
    "unitId": "turkce-4-pdf-u9",
    "text": "Hani yıldızlı sema, mavi deniz, Hani yerlerde yeşillikle çiçek... Ey fidanlarda gezen kuş, kelebek! Şimdi siz nerdesiniz... Bu şiirin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Özgürlük",
      "Özlem",
      "Sevinç",
      "ıskançlık"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: ıskançlık"
  },
  {
    "id": "turkce-4-pdf-u9-q5",
    "unitId": "turkce-4-pdf-u9",
    "text": "Bundan yıllar önce, her şey bugünkünden çok farklıydı. Örneğin hastalıklarla ilgili çok az şey biliniyordu. Günümüzde ise bilim insanlarının katkılarıyla pek çok hastalığın nedeni ve tedavisi bulundu... Artık çoğumuz, doktorların verdiği ilaçları kullanıyoruz. Yazarın bu metni yazma amacı aşağıdakilerden hangisidir...",
    "options": [
      "Sağlığın önemini vurgulamak",
      "Hastalıkların tedavi yöntemlerini anlatmak",
      "Bilim insanlarına verilen değeri göstermek",
      "Geçmişle günümüz arasındaki değişimi fark ettirmek"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Hastalıkların tedavi yöntemlerini anlatmak"
  },
  {
    "id": "turkce-4-pdf-u9-q6",
    "unitId": "turkce-4-pdf-u9",
    "text": "Ah oralarda olmak şimdi arışmak dağlardaki sessizliğe Bir su damlası gibi kendiliğinden Ulaşmak o yalnızlığa kimsesizliğe Bu dörtlüğün ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Özlem",
      "Merak",
      "orku",
      "Şaşkınlık"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Şaşkınlık"
  },
  {
    "id": "turkce-4-pdf-u9-q7",
    "unitId": "turkce-4-pdf-u9",
    "text": "Dizlerimin üstünde kitap gibi Okurum gözüm her neye değerse Güneş, bulut, yağmur, nehir ve sevgi Her biri bir öğretmenmiş meğerse Bu dizelerin ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Öğrenme merakı",
      "Doğa sevgisi",
      "Yaşama sevinci",
      "Öğretme isteği"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Doğa sevgisi"
  },
  {
    "id": "turkce-4-pdf-u9-q8",
    "unitId": "turkce-4-pdf-u9",
    "text": "Uçun kuşlar uçun doğduğum yere Şimdi dağlarında mor sümbül vardır Ormanlar koynunda bir serin dere Dikenler içinde sarı gül vardır Bu dörtlüğün ana duygusu aşağıdakilerden hangisidir...",
    "options": [
      "Yaz heyecanı",
      "Memleket hasreti",
      "Deniz özlemi",
      "Yaşama sevinci SORULARI CEVAPLAR."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Memleket hasreti"
  },
  {
    "id": "turkce-4-pdf-u9-q9",
    "unitId": "turkce-4-pdf-u9",
    "text": "“Spor salonuna her gün gitmeye çalışıyorum ama - - - -” cümlesindeki “ama” kelimesi düşünceyi farklılaştırmaktadır. Bu cümlede boş bırakılan yere, aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "arkadaşlarım da benim gibi düşünüyor.",
      "gidemediğim günler de oluyor.",
      "sağlıklı yaşamak istiyorum.",
      "evimiz yeterince yakın."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: arkadaşlarım da benim gibi düşünüyor."
  },
  {
    "id": "turkce-4-pdf-u9-q10",
    "unitId": "turkce-4-pdf-u9",
    "text": "Bilinen fiziksel özellikleri dışında insan; sorar, sorgular, yanıtlar... İnsan, bir sözü çok çeşitli biçim ve anlamlarda söyleyebilir. ısacası insan, bir söz ustasıdır. Söz insanın elinde büyük bir güçtür. Sözünü bilmek ise onu nerede ve nasıl kullanacağını bilmektir. Bu metinde aşağıdakilerin hangisine değinilmemiştir...",
    "options": [
      "Sözden çok fiziksel özelliklerin dikkate alındığına",
      "Bir sözün nereye varacağını düşünerek konuşmaya",
      "Sözün insana kuvvet kazandırdığına",
      "Bir sözün birden fazla anlamda kullanılabileceğine"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Sözün insana kuvvet kazandırdığına"
  },
  {
    "id": "turkce-4-pdf-u10-q1",
    "unitId": "turkce-4-pdf-u10",
    "text": "Mini mini dalgalarla ıyılarda gezinmede ... Fakat huyu belli olmaz, Yaramazdır, hem de kurnaz. âh açılır enginlere, Birden coşar, tek duramaz; Vapurları sallar durur, Sahillere tekme vurur. Bu dizelerde, aşağıdakilerin hangisinden söz edilmektedir...",
    "options": [
      "Martı",
      "Balık",
      "Can simidi",
      "Deniz"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Balık"
  },
  {
    "id": "turkce-4-pdf-u10-q2",
    "unitId": "turkce-4-pdf-u10",
    "text": "Avukat, her akşam iş çıkışında masasının üzerindeki dağınıklığı toplar; her sabah da saat sekize çeyrek kala bürosuna gelerek kaldığı yerden dosyaları incelemeye devam ederdi. Belleği çok kuvvetliydi. Bütün dosyaları ilk görüşte tanır, duruşmanın nerede kaldığını, neler söylemesi gerektiğini hemen hatırlardı. Dosyaları eline almasıyla bırakması bir olur, sadece göz gezdirmesi yeterdi. Gayretli, çalışmayı çok seven biriydi. Duruşmalarına tam zamanında giderdi. Bu metne göre, aşağıdakilerden hangisi avukat için söylenemez...",
    "options": [
      "Düzenlidir.",
      "Dakiktir.",
      "Sevecendir.",
      "Hafızası güçlüdür."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Hafızası güçlüdür."
  },
  {
    "id": "turkce-4-pdf-u10-q3",
    "unitId": "turkce-4-pdf-u10",
    "text": "İnsanlar, her yerde çöp kutusu olmasına rağmen hâlâ yere çöp atıyorlar. Nereye baksam bir çöp görüyorum. Böyle yaparak sadece çevremize değil, kendi sağlığımıza da zarar veriyoruz. Çünkü çevreyi kirlettiğimizde bu, dolaylı olarak sağlığımızı da etkiler. Bu metinden, aşağıdaki düşüncelerin hangisine ulaşılamaz...",
    "options": [
      "Çevreyi kirletmek, insan sağlığına da zararlıdır.",
      "İnsanlar çevre konusunda duyarsızlık gösteriyorlar.",
      "İnsanlar, çöp kutusu varken yerlere çöp atıyorlar.",
      "Çevre kirliliğini önlemek için insanlar bu konuda eğitilmelidir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Çevreyi kirletmek, insan sağlığına da zararlıdır."
  },
  {
    "id": "turkce-4-pdf-u10-q4",
    "unitId": "turkce-4-pdf-u10",
    "text": "Nasrettin Hoca, Türk kültüründe güldürücü özelliğiyle karşımıza çıkar. imi kaynaklar Akşehirli kimi kaynaklar da Sivrihisarlı olduğunu söyler. Nasrettin Hoca Azerbaycan’da Molla Nasreddin, Çin’de Afandi olarak bilinir. Fıkralarında karşımıza kimi zaman köylü, imam, kayıkçı kimi zaman da doktor, öğretmen, hâkim olarak çıkar. “Bindiği dalı kesmek, ipe un sermek” gibi deyimleri dilimize kazandıran da Nasrettin Hoca fıkraları olmuştur. Bu metinde Nasrettin Hoca ile ilgili aşağıdakilerden hangisine değinilmemiştir...",
    "options": [
      "Nereli olduğunun kesin olarak bilinmediğine",
      "Fıkralarının hâlâ çok ilgi gördüğüne",
      "Başka ülkelerde farklı isimlerle tanındığına",
      "Bazı sözlerinin deyim olarak kullanıldığına"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nereli olduğunun kesin olarak bilinmediğine"
  },
  {
    "id": "turkce-4-pdf-u10-q5",
    "unitId": "turkce-4-pdf-u10",
    "text": "Benim gençlik kitapları yazmaya başlamamda Oktay Akbal’ın “Düş Ekmeği” adlı romanı etkili oldu. Bunları yazarken lise yıllarımı, kendi sıkıntılarımı, ailemle olan ilişkilerimi hatırlamaya çalıştım. Arkadaşlarımın lise çağındaki çocuklarını inceledim uzaktan. Gençlik kitabı yazmaya başladığımda çalıştığım yayınevine haber vermedim. Beceremezsem bırakabilmek için... Bu metinden sözü edilen yazarla ilgili aşağıdakilerden hangisi çıkarılamaz...",
    "options": [
      "Başka yazarları taklit etmiştir.",
      "Gençleri gözlemlemiştir.",
      "Anılarından yararlanmıştır.",
      "Başarılı olacağından emin değildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Gençleri gözlemlemiştir."
  },
  {
    "id": "turkce-4-pdf-u10-q6",
    "unitId": "turkce-4-pdf-u10",
    "text": "Alerji, yiyeceklerden havadaki toza kadar birçok maddeye insan vücudunun gösterdiği aşırı tepkilerdir. aşıntı, geniz akıntısı, hapşırık, deride kızarıklık gibi tepkiler bunlardan bazılarıdır. Tıp dünyası, vücudun gösterdiği bu tepkilerin nedenlerini tam olarak bulamamıştır. Bu rahatsızlığı orta dan kaldıracak ilaçlar yoksa da etkisini hafifletecek ilaçlar vardır. Bu metinde “alerji” ile ilgili aşağıdakilerden hangisine değinilmemiştir...",
    "options": [
      "Vücudu hassas kişilerde görüldüğüne",
      "Vücudun gösterdiği tepkilere",
      "Farklı maddelerden kaynaklanabildiğine",
      "Tamamen tedavi edilemediğine"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Vücudun gösterdiği tepkilere"
  },
  {
    "id": "turkce-4-pdf-u10-q7",
    "unitId": "turkce-4-pdf-u10",
    "text": "Yağmur, İstanbul’a garip bir kış serinliği getirdi. Bu cümleden aşağıdakilerin hangisi kesin olarak çıkarılır...",
    "options": [
      "Yağmurun kışın yağdığı",
      "İstanbul’da kışların sert geçtiği",
      "Yağmurun İstanbul’u serinlettiği",
      "ışın İstanbul’a kar yağdığı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yağmurun kışın yağdığı"
  },
  {
    "id": "turkce-4-pdf-u10-q8",
    "unitId": "turkce-4-pdf-u10",
    "text": "Yaşlı adam, bastonunu sıkıca tutarak oturuyordu muayene odasının girişindeki koltuklarda. Yanındaki torunu, yaşlı adama kendisini nasıl hissettiğini soruyordu sürekli. Bir ara hemşire odadan çıktı, sırada bekleyen hastalara göz attı. Hastane gittikçe kalabalıklaşıyordu. Tam bu sırada “Doktor Bey, hastanız geldi.” diye bir ses duydum. Beni çağırıyorlardı. Bu metinde anlatımı yapan kişi aşağıdakilerden hangisidir...",
    "options": [
      "Doktor",
      "Torun",
      "Yaşlı adam",
      "Hemşire"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yaşlı adam"
  },
  {
    "id": "turkce-4-pdf-u10-q9",
    "unitId": "turkce-4-pdf-u10",
    "text": "Çoğu yazar “On yaşından beri hikâyeler yazıyorum zaten.” der. Ama benim öyle bir durumum yok. Ben ilk kitabımı yazdığımda tam olarak yirmi sekiz yaşındaydım. Bu metin aşağıdaki sorulardan hangisine cevap vermek amacıyla söylenmiştir...",
    "options": [
      "Sizi yazmaya yönlendiren nedir...",
      "itap yazmaya ne zaman başladınız...",
      "Çocukken niçin yazar olmak istediniz...",
      "Yazarlığa geç başlama sebebiniz nedir..."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Yazarlığa geç başlama sebebiniz nedir..."
  },
  {
    "id": "turkce-4-pdf-u10-q10",
    "unitId": "turkce-4-pdf-u10",
    "text": "İlk resim sergisini yirmi yaşındayken Mardin’de açtı. Bu cümlede sözü edilen kişiyle ilgili aşağıdakilerden hangisi kesinlikle söylenir...",
    "options": [
      "Birden fazla resim sergisi açmıştır.",
      "Hâlâ Mardin’de yaşamaktadır.",
      "Resim dışında başka sanatlarla da ilgilenmektedir.",
      "Yaşlandığı için resim yapmayı bırakmıştır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Resim dışında başka sanatlarla da ilgilenmektedir."
  },
  {
    "id": "matematik-4-pdf-u1-q1",
    "unitId": "matematik-4-pdf-u1",
    "text": "5976 2 5967 2 5796 2 5697 2 5769 sıralaması veriliyor. Buna göre, aşağıdaki ifadelerden hangisi yanlıştır...",
    "options": [
      "5697 ile 5769 sayılarının yerleri değiştirilirse sıralama doğru olur.",
      "5697 sayısı sıralamadan çıkarılırsa, sıralama doğru olur.",
      "Verilen sıralama doğrudur.",
      "5769 sayısı sıralamadan çıkarılırsa, sıralama doğru olur. ()"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Verilen sıralama doğrudur."
  },
  {
    "id": "matematik-4-pdf-u1-q2",
    "unitId": "matematik-4-pdf-u1",
    "text": "Çözümlenmiş şekli 5 on binlik + 8 binlik + 1 onluk + 2 birlik olan sayı aşağıdakilerden hangisidir...",
    "options": [
      "5812",
      "50 812",
      "58 012",
      "58 102 3."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 58 012"
  },
  {
    "id": "matematik-4-pdf-u1-q3",
    "unitId": "matematik-4-pdf-u1",
    "text": "şekil 2. şekil 3. şekil Birimkareler ile oluşturulan yukarıdaki örüntü devam ettirildiğinde 5. şekil kaç birimkareden oluşur...",
    "options": [
      "13",
      "17",
      "21",
      "23"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 17"
  },
  {
    "id": "matematik-4-pdf-u1-q4",
    "unitId": "matematik-4-pdf-u1",
    "text": "Bir fırının bir günde sattığı ekmeklerin sayısı en yakın yüzlüğe yuvarlandığında 4500 bulunuyor. Bu fırının bir günde sattığı ekmeklerin sayısı en fazla kaç olabilir...",
    "options": [
      "4505",
      "4549",
      "4555",
      "4599"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 4549"
  },
  {
    "id": "matematik-4-pdf-u1-q5",
    "unitId": "matematik-4-pdf-u1",
    "text": "Öğrenci Adı Tahmin Ahmet 1025 Betül 1060 Dilek 1100 Yukarıdaki tablo bir çarpma işleminin sonucu için öğrencilerin verdikleri tahminleri göstermektedir. En yakın tahmini Betül yaptığına göre, aşağıdakilerden hangisi bu çarpma işleminin sonucu olamaz...",
    "options": [
      "1045",
      "1065",
      "1075",
      "1085"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 1085"
  },
  {
    "id": "matematik-4-pdf-u1-q6",
    "unitId": "matematik-4-pdf-u1",
    "text": "Tablo: Yılındaki Bazı İllere Ait Nüfus Sayımı Sonuçları İl ilis Bingöl Çankırı Ardahan Nüfus 120 991 256 091 176 093 112 242 Yukarıdaki tabloya göre, hangi ilimizin nüfusunu gösteren doğal sayının birler bölüğündeki sayı en küçüktür...",
    "options": [
      "ilis",
      "Bingöl",
      "Çankırı",
      "Ardahan"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bingöl"
  },
  {
    "id": "matematik-4-pdf-u1-q7",
    "unitId": "matematik-4-pdf-u1",
    "text": "Yüz binler basamağında 6, yüzler basamağında 3 ve birler basamağında 1 rakamı olan doğal sayı aşağıdakilerden hangisidir...",
    "options": [
      "60 301",
      "60 310",
      "630 010",
      "600 301"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 600 301"
  },
  {
    "id": "matematik-4-pdf-u1-q8",
    "unitId": "matematik-4-pdf-u1",
    "text": "Tablo: Bazı Nehirlerin Uzunlukları Nehirler Uzunluk (m) 523 000 L 519 000 M 548 000 Yukarıdaki tabloda bazı nehirlerin ülkemiz sınırları içerisindeki uzunlukları verilmiştir. Nehirlerin verilen uzunluklarına göre, küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir...",
    "options": [
      "L, , M",
      ", L, M",
      "M, , L",
      ", M, L 9. Nüfus: 63 607 A İLÇESİ Tabelaya göre, A ilçesinin nüfusunun okunuşu aşağıdakilerden hangisidir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: L, , M"
  },
  {
    "id": "matematik-4-pdf-u1-q9",
    "unitId": "matematik-4-pdf-u1",
    "text": "Öğretmen, Ayşe’den 1796, Betül’den 1799, Ceren’den 1804, Deniz’den 1808 sayılarını en yakın onluğa yuvarlamalarını istiyor. Hepsinin de bulduğu sonuç aynı olduğuna göre, hangisi hata ile kendi sayısını en yakın yüzlüğe yuvarlamıştır...",
    "options": [
      "Deniz",
      "Ceren",
      "Betül",
      "Ayşe 11. ... 1. vagon 2. vagon 3. vagon 4. vagon Yukarıda verilen trenin vagonlarındaki çuval sayıları adımları arasındaki farkı sabit olan bir örüntü oluşturmaktadır. Buna göre, örüntü devam ettirildiğinde dokuzuncu vagonda kaç çuval bulunur..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Ceren"
  },
  {
    "id": "matematik-4-pdf-u1-q10",
    "unitId": "matematik-4-pdf-u1",
    "text": "Bir bilgisayarın farklı mağazalardaki etiket fiyatları aşağıda verilmiştir. Lira Lira Lira Lira Bu fiyatlar en yakın yüzlüğe yuvarlanırsa, hangi mağazadaki satış fiyatı diğerlerinden farklı olur...",
    "options": [
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1."
  },
  {
    "id": "matematik-4-pdf-u2-q1",
    "unitId": "matematik-4-pdf-u2",
    "text": "A ilinin nüfusunun okunuşu, yedi yüz elli yedi bin sekiz yüz doksan sekizdir. Aşağıdaki tabelaların hangisinde, A ilinin nüfusu doğru olarak yazılmıştır...",
    "options": [
      "Nüfus: 750 898 A ili",
      "Nüfus: 758 098 A ili",
      "Nüfus: 758 798 A ili",
      "Nüfus: 757 898 A ili"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Nüfus: 757 898 A ili"
  },
  {
    "id": "matematik-4-pdf-u2-q2",
    "unitId": "matematik-4-pdf-u2",
    "text": "96 4629 74 6742 9 sıralamasında 94 6 462 ve 97 9 467 sayıları altı basamaklı birer doğal sayıdır. Verilen sıralamanın doğru olması için 4 yerine yazılabilecek en küçük doğal sayı için 9 yerine yazılabilecek doğal sayıların toplamı kaçtır...",
    "options": [
      "15",
      "17",
      "24",
      "30"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 30"
  },
  {
    "id": "matematik-4-pdf-u2-q3",
    "unitId": "matematik-4-pdf-u2",
    "text": "6 basamaklı bir doğal sayının yüzbinler basamağındaki sayı 3 azaltılıp on binler basamağındaki sayı 7 artırılırsa sayının değerindeki değişimi aşağıdakilerden hangisi ifade eder...",
    "options": [
      "230 000 artar.",
      "230 000 azalır.",
      "370 000 artar.",
      "370 000 azalır. (205 )"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 230 000 azalır."
  },
  {
    "id": "matematik-4-pdf-u2-q4",
    "unitId": "matematik-4-pdf-u2",
    "text": "Tabloda bazı illerin deniz seviyesinden yükseklikleri verilmiştir. Tablo: İllerin Deniz Seviyesinden Yüksekliği İl Yükseklik (m) Bingöl 1177 Gümüşhane 1210 Mardin 1150 Nevşehir 1250 Bu sayıları en yakın yüzlüğe yuvarladığımızda, hangi ilin deniz seviyesinden yüksekliği diğerlerinden farklı olur...",
    "options": [
      "Nevşehir",
      "Mardin",
      "Gümüşhane",
      "Bingöl ( Ç)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Nevşehir"
  },
  {
    "id": "matematik-4-pdf-u2-q5",
    "unitId": "matematik-4-pdf-u2",
    "text": "Aşağıdaki sayılardan hangisi en yakın yüzlüğe yuvarlandığında 5300, en yakın onluğa yuvarlandığında 5270 bulunur...",
    "options": [
      "5370",
      "5275",
      "5266",
      "5168 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 5275"
  },
  {
    "id": "matematik-4-pdf-u2-q6",
    "unitId": "matematik-4-pdf-u2",
    "text": "5,0,2,7,8 rakamlarından dördü, birer kez kullanılarak en küçük dört basamaklı çift sayı yazılıyor. Bu sayının onlar basamağındaki rakamın basamak değeri kaçtır...",
    "options": [
      "20",
      "50",
      "70",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 20"
  },
  {
    "id": "matematik-4-pdf-u2-q7",
    "unitId": "matematik-4-pdf-u2",
    "text": "1504 sayısındaki rakamlardan hangilerinin yerleri değiştirilirse oluşan sayı 4819 sayısından büyük olur...",
    "options": [
      "1 ile 4",
      "1 ile 5",
      "5 ile 4",
      "5 ile 0 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 5 ile 4"
  },
  {
    "id": "matematik-4-pdf-u2-q8",
    "unitId": "matematik-4-pdf-u2",
    "text": "Aşağıdaki sayılardan hangisinin en yakın onluğa yuvarlanması ile en yakın yüzlüğe yuvarlanması sonucunda aynı sayı elde edilir...",
    "options": [
      "1293",
      "1307",
      "1496",
      "1805"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1496"
  },
  {
    "id": "matematik-4-pdf-u2-q9",
    "unitId": "matematik-4-pdf-u2",
    "text": "sırada yer alıyor. Buna göre, ▲ aşağıdakilerden hangisi olabilir...",
    "options": [
      "127 699",
      "132 411",
      "271 070",
      "351 830"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 132 411"
  },
  {
    "id": "matematik-4-pdf-u2-q10",
    "unitId": "matematik-4-pdf-u2",
    "text": "Nurten 5 gün boyunca her gün, bir önceki günde çözdüğü soru sayısından 7 tane fazla soru çözüyor. Nurten 2. gün 28 soru çözdüğüne göre 5. gün kaç soru çözmüştür...",
    "options": [
      "35",
      "49",
      "56",
      "63"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 56"
  },
  {
    "id": "matematik-4-pdf-u3-q1",
    "unitId": "matematik-4-pdf-u3",
    "text": "2, 5, 0, 1 sayıları birer kez kullanılarak ’den büyük olacak şekilde en küçük doğal sayı yazılıyor. Bu sayının yüzler basamağındaki rakamın basamak değeri kaçtır...",
    "options": [
      "100",
      "200",
      "500 ( Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 200"
  },
  {
    "id": "matematik-4-pdf-u3-q2",
    "unitId": "matematik-4-pdf-u3",
    "text": "Binler bölüğünde 470, birler bölüğünde 15 olan sayının okunuşu aşağıdakilerden hangisidir...",
    "options": [
      "Dört yüz yedi bin yüz beş",
      "Dört yüz yetmiş bin on beş",
      "On beş bin dört yüz yetmiş",
      "On beş bin dört yüz yedi"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dört yüz yetmiş bin on beş"
  },
  {
    "id": "matematik-4-pdf-u3-q3",
    "unitId": "matematik-4-pdf-u3",
    "text": "435 ■ 62 2 435 7 ● 0 2 435 76 ▲ Yukarıda rakamları farklı 6 basamaklı sayıların büyükten küçüğe doğru sıralanışı verilmiştir. Buna göre, ■, ● ve ▲’nin basamak değerlerinin toplamı en az kaçtır...",
    "options": [
      "760",
      "771",
      "871",
      "880"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 760"
  },
  {
    "id": "matematik-4-pdf-u3-q4",
    "unitId": "matematik-4-pdf-u3",
    "text": "İlk terimi 56 ve adımları arasındaki farkı 7 olan azalan sayı örüntüsünde ilk 5 terimi aşağıdakilerden hangisidir...",
    "options": [
      "56, 48, 41, 34, 27",
      "56, 62, 69, 76, 83",
      "56, 49, 42, 35, 28",
      "56, 63, 70, 77, 84"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 56, 62, 69, 76, 83"
  },
  {
    "id": "matematik-4-pdf-u3-q5",
    "unitId": "matematik-4-pdf-u3",
    "text": "Öğretmen, Ayşe’ye “iki yüz bin elli” sayısının onlar ve yüzler basamağının yerlerini değiştirerek defterine yazmasını istiyor. Buna göre, öğretmenin Ayşe’den yazmasını istediği sayı kaçtır...",
    "options": [
      "200 500",
      "200 050",
      "200 005",
      "20 500 ( Ç)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 20 500 ( Ç)"
  },
  {
    "id": "matematik-4-pdf-u3-q6",
    "unitId": "matematik-4-pdf-u3",
    "text": "Okunuşu “Üç yüz altı bin yüz doksan iki” olan sayı aşağıdakilerden hangisidir...",
    "options": [
      "306 092",
      "306 192",
      "360 092",
      "360 192 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 360 092"
  },
  {
    "id": "matematik-4-pdf-u3-q7",
    "unitId": "matematik-4-pdf-u3",
    "text": "Adımları arasındaki farkı sabit olan artan bir sayı örüntüsünün ilk terimi 25, ikinci terimi 32’dir. Buna göre, bu sayı örüntüsünün 9. ve 10. terimleri sırasıyla aşağıdakilerden hangisidir...",
    "options": [
      "60 ve 67",
      "67 ve 74",
      "74 ve 81",
      "81 ve 88 ( Ç)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 60 ve 67"
  },
  {
    "id": "matematik-4-pdf-u3-q8",
    "unitId": "matematik-4-pdf-u3",
    "text": "8, 2, 0, 7, 1, 3 rakamları kullanılarak yazılabilecek altı basamaklı en küçük sayının okunuşu aşağıdakilerden hangisidir...",
    "options": [
      "Yüz yirmi üç bin yetmiş sekiz",
      "Yüz yirmi bin üç yüz yetmiş sekiz",
      "Yüz iki bin üç yüz yetmiş sekiz",
      "On iki bin üç yüz yetmiş sekiz 34. 6124 6125 Alya Bora Canan Derya Öğretmenleri Alya ve Bora’ya en yakın onluğa, Canan ve Derya’ya en yakın yüzlüğe yuvarlamaları için yukarıdaki sayı yazılı kartları veriyor. Buna göre, aşağıdakilerden hangisi yanlıştır..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yüz yirmi bin üç yüz yetmiş sekiz"
  },
  {
    "id": "matematik-4-pdf-u3-q9",
    "unitId": "matematik-4-pdf-u3",
    "text": "sandalye 2. sandalye 3. sandalye . . . 726 735 744 Buna göre, 5 ve 6. sandalyelerin üzerinde yazan sayıların toplamı kaçtır...",
    "options": [
      "1533",
      "1524",
      "1433",
      "1424"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 1424"
  },
  {
    "id": "matematik-4-pdf-u3-q10",
    "unitId": "matematik-4-pdf-u3",
    "text": "Görseldeki oyuncak trenin üzerindeki sayılar adımları arasındaki farkı sabit olan artan bir sayı örüntüsünün terimleridir. 4. vagon ve 6. vagonda yazan sayılar silinmiştir. 1. vagon 2. vagon 3. vagon 4. vagon 5. vagon 6. vagon 15 24 33 51 Buna göre, dördüncü ve altıncı vagonun üzerinde silinmeden önce yazan sayılar aşağıdakilerden hangisinde verilmiştir...",
    "options": [
      "40 ve 58",
      "42 ve 60",
      "43 ve 59",
      "45 ve 56"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 42 ve 60"
  },
  {
    "id": "matematik-4-pdf-u4-q1",
    "unitId": "matematik-4-pdf-u4",
    "text": "825 419 doğal sayısındaki 4 rakamının basamak değeri ile 2 rakamının basamak değeri toplamı kaçtır...",
    "options": [
      "20 400",
      "20 040",
      "2400",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 20 400"
  },
  {
    "id": "matematik-4-pdf-u4-q2",
    "unitId": "matematik-4-pdf-u4",
    "text": "Rakamları farklı dört basamaklı 347A sayısı, en yakın onluğa yuvarlandığında 3480 sayısı elde ediliyor. Buna göre, A yerine yazılabilecek rakamların toplamı kaçtır...",
    "options": [
      "22",
      "23",
      "28",
      "35 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 23"
  },
  {
    "id": "matematik-4-pdf-u4-q3",
    "unitId": "matematik-4-pdf-u4",
    "text": "2. 3. 4. 5. 6. Buna göre, üçüncü ve beşinci sayı sırasıyla aşağıdakilerin hangisinde verilmiştir...",
    "options": [
      "50 ve 66",
      "50 ve 67",
      "51 ve 66",
      "51 ve 67 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 50 ve 67"
  },
  {
    "id": "matematik-4-pdf-u4-q4",
    "unitId": "matematik-4-pdf-u4",
    "text": "Çıkış → 2825 → 42 736 → 42 729 → 2826 → 345 678 → 345 687 Ali bu oyundaki her yol ayrımına vardığında, oklarla gösterilen sayılardan hangisi daha küçükse o yönde ilerleyerek çıkışa ulaşmıştır. Buna göre, Ali’nin ulaştığı çıkış aşağıdakilerden hangisidir...",
    "options": [
      "1. Çıkış",
      "2. Çıkış",
      "3. Çıkış",
      "4. Çıkış"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3. Çıkış"
  },
  {
    "id": "matematik-4-pdf-u4-q5",
    "unitId": "matematik-4-pdf-u4",
    "text": "Üzerinde rakamlar yazan 6 tane kart yan yana dizilerek görseldeki altı basamaklı doğal sayı elde edilmiştir. 6 9 7 5 3 8 Buna göre bu kartlardan hangi ikisinin yerleri değiştirilirse bu sayının değeri 1800 azalır...",
    "options": [
      "7 5ile",
      "7 9ile",
      "8 6ile",
      "5 3ile"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 5 3ile"
  },
  {
    "id": "matematik-4-pdf-u4-q6",
    "unitId": "matematik-4-pdf-u4",
    "text": "çıkış Verilen tanılayıcı dallandırılmış ağaç diyagramı ifadelerin doğru ya da yanlışlığına göre takip edildiğinde hangi çıkışa ulaşılır...",
    "options": [
      "1. çıkış",
      "2. çıkış",
      "3. çıkış",
      "4. çıkış"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 2. çıkış"
  },
  {
    "id": "matematik-4-pdf-u4-q7",
    "unitId": "matematik-4-pdf-u4",
    "text": "Tuna görseldeki abaküse boncuklar yerleştirerek altı basamaklı rakamları farklı en büyük tek sayıyı oluşturacaktır. YÜZLÜ ONLU BİRLİBİNLİ YÜZLÜ ONLU BİRLİBİRLİN BİNLİ BİNLİYÜZ BİNLİ Elinde yeterli sayıda boncuğu olan Tuna, bu sayıyı oluşturmak için kaç tane boncuk kullanır...",
    "options": [
      "39",
      "38",
      "37",
      "36"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 38"
  },
  {
    "id": "matematik-4-pdf-u4-q8",
    "unitId": "matematik-4-pdf-u4",
    "text": "Şekilde, birinci 9 12 8 20 21 28 satırda verilen bazı sayılar arasında yapılan işlemin sonuçları, oklar ( → ) yardımıyla ikinci satırda gösterilmiştir. Buna göre, aynı işlem oklar takip edilerek yapılırsa ... yerine hangi sayı gelir...",
    "options": [
      "78",
      "89",
      "98",
      "101"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 78"
  },
  {
    "id": "matematik-4-pdf-u4-q9",
    "unitId": "matematik-4-pdf-u4",
    "text": "Bir bahçeye, şekildeki gibi her sıradaki çiçek sayısı bir öncekinin 2 fazlası olacak şekilde 12 sıra çiçek dikilecektir. 12 sıra Buna göre, bu bahçedeki 6 ve 7. sıralara dikilen toplam çiçek sayısı kaçtır...",
    "options": [
      "16",
      "20",
      "24",
      "28"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 24"
  },
  {
    "id": "matematik-4-pdf-u4-q10",
    "unitId": "matematik-4-pdf-u4",
    "text": "Yandaki toplama + 7 0 0 0 işleminde, + + kaçtır...",
    "options": [
      "10",
      "11",
      "12",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 11"
  },
  {
    "id": "matematik-4-pdf-u5-q1",
    "unitId": "matematik-4-pdf-u5",
    "text": "Uluslararası çalışan bir tır şoförü yola çıktığı ilk gün 675 km yol yapmıştır. Sonraki her gün bir önceki günden 100 km fazla giderek yoluna devam etmiştir. Bu şoför dört günde toplam kaç kilometre yol yapmıştır...",
    "options": [
      "3300",
      "3000",
      "3100",
      "2700 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 3000"
  },
  {
    "id": "matematik-4-pdf-u5-q2",
    "unitId": "matematik-4-pdf-u5",
    "text": "1072 +  = 1534 Verilen eşitliğe göre,  kaçtır...",
    "options": [
      "362",
      "453",
      "462",
      "572 6. Verilen toplama işleminde, ++ kaçtır..."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 572 6. Verilen toplama işleminde, ++ kaçtır..."
  },
  {
    "id": "matematik-4-pdf-u5-q3",
    "unitId": "matematik-4-pdf-u5",
    "text": "2304 + 4855 = ... Yukarıdaki toplama işleminde toplananlar en yakın yüzlüğe yuvarlandığında toplam kaç olur...",
    "options": [
      "6000",
      "6200",
      "7000",
      "7200 8. Verilen toplama işlemine göre, A + B + C işleminin sonucu kaçtır..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 6000"
  },
  {
    "id": "matematik-4-pdf-u5-q4",
    "unitId": "matematik-4-pdf-u5",
    "text": "Yandaki işlemde kaçtır...",
    "options": [
      "9 ( Ç) 10. Verilen toplama işlemine göre, AB C++ işleminin sonucu kaçtır...",
      "14",
      "15",
      "16"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 16"
  },
  {
    "id": "matematik-4-pdf-u5-q5",
    "unitId": "matematik-4-pdf-u5",
    "text": "ABCD DCBA 8437+= Verilen toplama işleminde ABCD ve DCBA birer dört basamaklı doğal sayı olduğuna göre, ABCD dört basamaklı sayısı aşağıdakilerden hangisi olamaz...",
    "options": [
      "2675",
      "2736",
      "5672",
      "5762"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 5762"
  },
  {
    "id": "matematik-4-pdf-u5-q6",
    "unitId": "matematik-4-pdf-u5",
    "text": "0, 1, 2, 3, 4, 5, 6, 7 rakamları birer kez kullanılarak yazılabilen dört basamaklı en küçük ve en büyük doğal sayının toplamı kaçtır...",
    "options": [
      "9999",
      "9246",
      "8884",
      "8677 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 8884"
  },
  {
    "id": "matematik-4-pdf-u5-q7",
    "unitId": "matematik-4-pdf-u5",
    "text": "Dört basamaklı 21a3 sayısı en yakın yüzlüğe, dört basamaklı 413b sayısı en yakın onluğa yuvarlanıyor. Elde edilen bu iki sayının toplamı 6330 olduğuna göre ab+ işleminin sonucu en fazla kaçtır...",
    "options": [
      "13",
      "15",
      "17",
      "19 ( Ç) 15. Verilen toplama işleminde , ,  ve  birer rakamdır. Buna göre, işleminin sonucu kaçtır..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 15"
  },
  {
    "id": "matematik-4-pdf-u5-q8",
    "unitId": "matematik-4-pdf-u5",
    "text": "4 + Yukarıdaki toplama işlemine göre, A + B + C + D işleminin sonucu kaçtır...",
    "options": [
      "19",
      "20",
      "21",
      "22"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 22"
  },
  {
    "id": "matematik-4-pdf-u5-q9",
    "unitId": "matematik-4-pdf-u5",
    "text": "Hazal’ın 30 lirası vardır. Büşra, Hazal’a 8 lira verdiğinde paraları eşit olmaktadır. Buna göre, Büşra ve Hazal’ın paraları toplamı kaçtır...",
    "options": [
      "38",
      "46",
      "66",
      "76 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 46"
  },
  {
    "id": "matematik-4-pdf-u5-q10",
    "unitId": "matematik-4-pdf-u5",
    "text": "Bir kumaş satıcısı birinci gün 326 metre, ikinci gün 1024 metre, üçüncü gün 826 metre kumaş sattığına göre, bu üç günde toplam kaç metre kumaş satmıştır...",
    "options": [
      "2176",
      "2197",
      "2266",
      "2286"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 2286"
  },
  {
    "id": "matematik-4-pdf-u6-q1",
    "unitId": "matematik-4-pdf-u6",
    "text": "T ■ 9 6 6 8 4+ ● Verilen toplama işleminde T, ■, ve ● birer rakamdır. Buna göre, T + ■ + ● işleminin sonucu kaçtır...",
    "options": [
      "10",
      "11",
      "12 ( Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 11"
  },
  {
    "id": "matematik-4-pdf-u6-q2",
    "unitId": "matematik-4-pdf-u6",
    "text": "2 ■6▲ ●51 7 + Verilen toplama işleminde ■, ▲ ve ● birer rakamdır. Buna göre, ■ + ▲ + ● işleminin sonucu kaçtır...",
    "options": [
      "14",
      "13",
      "12",
      "11 21. Binlik Onluk BirlikYüzlük Binlik Onluk BirlikYüzlük Görseldeki birinci ve ikinci abaküste gösterilen sayıların toplamı kaçtır..."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 11 21. Binlik Onluk BirlikYüzlük Binlik Onluk BirlikYüzlük Görseldeki birinci ve ikinci abaküste gösterilen sayıların toplamı kaçtır..."
  },
  {
    "id": "matematik-4-pdf-u6-q3",
    "unitId": "matematik-4-pdf-u6",
    "text": "Temmuz ayında; Ahmet Bey 2543 tane, Ali Bey 2329 tane ve Mehmet Bey 2750 tane kavun satmıştır. Buna göre, üçünün temmuz ayında sattığı toplam kavun sayısı kaçtır...",
    "options": [
      "6512",
      "7512",
      "7522",
      "7622"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 7512"
  },
  {
    "id": "matematik-4-pdf-u6-q4",
    "unitId": "matematik-4-pdf-u6",
    "text": "İstanbul ve Ankara illerindeki A ve B markalı araçların yıllık satış adetleri tabloda verilmiştir. Tablo: İllere Göre A ve B Markalı Araçların Yıllık Satış Adedi Marka İstanbul Ankara A 3235 2807 B 1218 Tabloya göre, aşağıdakilerden hangisi yanlıştır...",
    "options": [
      "A markalı aracın İstanbul ve Ankara illerindeki yıllık toplam satış adedi 6042’dir.",
      "İstanbul’daki A ve B markalı araçların yıllık toplam satış adedi 5291’dir.",
      "Ankara’daki A ve B markalı araçların yıllık toplam satış adedi 3025’dir.",
      "B markalı aracın İstanbul ve Ankara illerindeki yıllık toplam satış adedi 3274’tür. 24. APASİTE SALON 2SALON 1 APASİTE Görselde iki toplantı salonunun kapasiteleri verilmiştir. Buna göre, bu iki salonun kapasitelerinin toplamı kaçtır..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: İstanbul’daki A ve B markalı araçların yıllık toplam satış adedi 5291’dir."
  },
  {
    "id": "matematik-4-pdf-u6-q5",
    "unitId": "matematik-4-pdf-u6",
    "text": "3567 5+ 2 Verilen toplama işleminde ,  ve  birer rakamdır. Buna göre,  +  +  işleminin sonucu kaçtır...",
    "options": [
      "21",
      "22",
      "23",
      "24 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 23"
  },
  {
    "id": "matematik-4-pdf-u6-q6",
    "unitId": "matematik-4-pdf-u6",
    "text": "2364 1  1 3158 1  1 4256 sıralanışında  ve  birer doğal sayıdır.  yerine yazılabilecek en küçük sayı ile  yerine yazılabilecek en büyük sayının toplamı kaçtır...",
    "options": [
      "6510",
      "6520",
      "6610",
      "6620 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 6610"
  },
  {
    "id": "matematik-4-pdf-u6-q7",
    "unitId": "matematik-4-pdf-u6",
    "text": "Aşağıdaki işlemlerden hangisinin sonucu 1009 + 893 işleminin sonucuna en yakındır...",
    "options": [
      "1000 + 900",
      "1000 + 800",
      "900 + 800",
      "1100 + 900"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1000 + 800"
  },
  {
    "id": "matematik-4-pdf-u6-q8",
    "unitId": "matematik-4-pdf-u6",
    "text": "7, 6, 3 ve 4 rakamları birer kez kullanılarak dört basamaklı doğal sayılar yazılmıştır. Yazılan en küçük doğal sayı onlar basamağına, en büyük doğal sayı ise yüzler basamağına yuvarlanmıştır. Buna göre, yuvarlamalar sonucunda elde edilen bu iki doğal sayının toplamı kaçtır...",
    "options": [
      "11 170",
      "11 160",
      "11 070",
      "10 160"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 10 160"
  },
  {
    "id": "matematik-4-pdf-u6-q9",
    "unitId": "matematik-4-pdf-u6",
    "text": "4745 + 4256 Verilen işlemdeki toplanan sayılar en yakın yüzlüğe yuvarlanarak toplamın sonucu tahmin edilmiştir. Buna göre, bu işlemin gerçek sonucu, tahmini sonucundan kaç fazladır...",
    "options": [
      "10",
      "100",
      "101",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 101"
  },
  {
    "id": "matematik-4-pdf-u6-q10",
    "unitId": "matematik-4-pdf-u6",
    "text": "Aysun, birinci gün 2465 metre, ikinci gün 3498 metre, üçüncü gün ise 3237 metre bisiklet sürmüştür. Buna göre, Aysun bu üç günde toplam kaç metre bisiklet sürmüştür...",
    "options": [
      "9090",
      "9099",
      "9100",
      "9200"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 9100"
  },
  {
    "id": "matematik-4-pdf-u7-q1",
    "unitId": "matematik-4-pdf-u7",
    "text": "On bir eş bölmeye ayrılarak bu bölmelerin her birine birer rakam yazılan şerit görselde verilmiştir. 2 17 69 83 4 30 5 Bu şerit bir tanesi üç basamaklı, iki tanesi dört basamaklı sayılar oluşturacak biçimde iki ayrı bölme çizgisinden kesilerek üç parçaya ayrılmıştır. Buna göre, oluşan parçalar üzerinde yazan sayıların toplamı en az kaçtır...",
    "options": [
      "6384",
      "6564",
      "7584",
      "9021 DOĞAL SAYILARLA ÇIARMA İŞLEMİ"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 6384"
  },
  {
    "id": "matematik-4-pdf-u7-q2",
    "unitId": "matematik-4-pdf-u7",
    "text": "Berk 5 yıl önce 1 yaşındaydı. Berk ile babasının bugünkü yaşları toplamı 45 olduğuna göre, Berk’in babası 3 yıl önce kaç yaşındaydı...",
    "options": [
      "36",
      "37",
      "39",
      "42"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 39"
  },
  {
    "id": "matematik-4-pdf-u7-q3",
    "unitId": "matematik-4-pdf-u7",
    "text": "Bir çıkarma işleminde çıkan sayı 120 arttırılırsa fark 3740 oluyor. Bu çıkarma işleminde çıkan sayı yerine eksilen sayı 120 arttırılsaydı fark kaç olurdu...",
    "options": [
      "3620",
      "3860",
      "3980",
      "4100"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 3620"
  },
  {
    "id": "matematik-4-pdf-u7-q4",
    "unitId": "matematik-4-pdf-u7",
    "text": "358 yolcusu olan bir trenden ilk durakta 109 yolcu inmiş, 132 yolcu binmiştir. İlk duraktan ayrılırken trendeki yolcu sayısı kaçtır...",
    "options": [
      "249",
      "341",
      "381",
      "397"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 341"
  },
  {
    "id": "matematik-4-pdf-u7-q5",
    "unitId": "matematik-4-pdf-u7",
    "text": "0, 1, 5, 8 rakamları birer kez kullanılarak yazılabilecek, dört basamaklı en büyük sayı ile dört basamaklı en küçük sayı arasındaki fark kaçtır...",
    "options": [
      "8452",
      "7452",
      "7092",
      "6930"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 6930"
  },
  {
    "id": "matematik-4-pdf-u7-q6",
    "unitId": "matematik-4-pdf-u7",
    "text": "Aşağıdaki çıkarma işleminde, fark üç basamaklı bir sayıdır. cb a abc Buna göre, bu fark kaçtır...",
    "options": [
      "496",
      "495",
      "486",
      "485 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 486"
  },
  {
    "id": "matematik-4-pdf-u7-q7",
    "unitId": "matematik-4-pdf-u7",
    "text": "Haftada 1600 km yol giden bir taksicinin günlere göre gittiği yol kilometre olarak aşağıdaki tabloda verilmiştir. Tablo: Haftalık Gidilen Yol Günler Pazartesi Salı Çarşamba Perşembe Cuma Cumartesi Pazar Yol (km) 230 225 170 275 ... 326 120 Buna göre, cuma günü bu taksici kaç kilometre yol gitmiştir...",
    "options": [
      "254",
      "274",
      "326",
      "346 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 326"
  },
  {
    "id": "matematik-4-pdf-u7-q8",
    "unitId": "matematik-4-pdf-u7",
    "text": "Bir sayıya 3954 eklenip sonra elde edilen sayıdan 1928 çıkarılınca sonuç 2850 oluyor. Buna göre, bu sayı aşağıdakilerden hangisidir...",
    "options": [
      "754",
      "824",
      "945",
      "478 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 824"
  },
  {
    "id": "matematik-4-pdf-u7-q9",
    "unitId": "matematik-4-pdf-u7",
    "text": "Bir çıkarma işleminde eksilen 1246 arttırılıp, çıkan 360 azaltılırsa farktaki değişim aşağıdakilerden hangisi olur...",
    "options": [
      "886 artar.",
      "886 azalır.",
      "1606 artar.",
      "1606 azalır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1606 artar."
  },
  {
    "id": "matematik-4-pdf-u7-q10",
    "unitId": "matematik-4-pdf-u7",
    "text": "6745 4179Yukarıdaki çıkarma işleminde eksilen en yakın yüzlüğe, çıkan en yakın onluğa yuvarlandığında fark kaç olur...",
    "options": [
      "2566",
      "2530",
      "2520",
      "2500"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2520"
  },
  {
    "id": "matematik-4-pdf-u8-q1",
    "unitId": "matematik-4-pdf-u8",
    "text": "Gölü’nün alanı 3713 kilometrekaredir. Gölü’nün alanı L Gölü’nün alanından 3057 kilometrekare daha büyüktür. L Gölü’nün alanı ise M Gölü’nün alanından 174 kilometre daha büyük olduğuna göre, M Gölü’nün alanı kaç kilometrekaredir...",
    "options": [
      "658",
      "582",
      "493",
      "482 ( Ç)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 582"
  },
  {
    "id": "matematik-4-pdf-u8-q2",
    "unitId": "matematik-4-pdf-u8",
    "text": "A B C 1 1 C B A 2 2 7 7 Verilen çıkarma işleminde A, B ve C sıfırdan farklı birer rakamdır. Buna göre, AB C++ işleminin sonucu kaçtır...",
    "options": [
      "11",
      "12",
      "13",
      "14 ( Ç) 12. Yukarıda verilen çıkarma işlemine göre, AB C++ işleminin sonucu kaçtır..."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 12"
  },
  {
    "id": "matematik-4-pdf-u8-q3",
    "unitId": "matematik-4-pdf-u8",
    "text": "Bir çıkarma işleminde eksilen 1336 artırılıp çıkan 260 azaltıldığında farktaki değişim aşağıdakilerden hangisi olur...",
    "options": [
      "1596 artar.",
      "1596 azalır.",
      "1076 artar.",
      "1076 azalır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1076 artar."
  },
  {
    "id": "matematik-4-pdf-u8-q4",
    "unitId": "matematik-4-pdf-u8",
    "text": "Bir çıkarma işleminde çıkan, farktan 95 azdır. Fark 1091 olduğuna göre, eksilen kaçtır...",
    "options": [
      "996",
      "1186",
      "D) 2277 ( Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: D) 2277 ( Ç)"
  },
  {
    "id": "matematik-4-pdf-u8-q5",
    "unitId": "matematik-4-pdf-u8",
    "text": "3 + ■ ▲ ● 4 5 olduğuna göre, 2– ■ ▲ ● ■ ▲ ● işleminin sonucu kaçtır...",
    "options": [
      "1260",
      "1369",
      "1384",
      "1421"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1369"
  },
  {
    "id": "matematik-4-pdf-u8-q6",
    "unitId": "matematik-4-pdf-u8",
    "text": "5 günlük toplam müşteri sayısı 5000 kişi olan bir süpermarketin birinci gün 1029, ikinci gün 1082, üçüncü gün 1055 müşterisi vardır. Bu süpermarketin en çok müşterisi dördüncü gün olduğuna göre, beşinci gündeki müşteri sayısı en çok kaçtır...",
    "options": [
      "751",
      "784",
      "831",
      "844"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 751"
  },
  {
    "id": "matematik-4-pdf-u8-q7",
    "unitId": "matematik-4-pdf-u8",
    "text": "Ahmet ilk hafta 35 lira harçlık alıp 22 lirasını, ikinci hafta 20 lira harçlık alıp 17 lirasını harcamıştır. Buna göre, Ahmet’in son durumda kaç lirası vardır...",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 16"
  },
  {
    "id": "matematik-4-pdf-u8-q8",
    "unitId": "matematik-4-pdf-u8",
    "text": "Çiftçi Süleyman 1274 tane fidanın önce 125 tanesini, sonra 280 tanesini dikmiştir. Buna göre, geriye dikilecek kaç fidan kalmıştır...",
    "options": [
      "994",
      "986",
      "869",
      "689 ( Ç)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 994"
  },
  {
    "id": "matematik-4-pdf-u8-q9",
    "unitId": "matematik-4-pdf-u8",
    "text": "Bir çıkarma işleminde eksilen 3875, fark 1776’dır. Buna göre, bu çıkarma işleminde çıkan kaçtır...",
    "options": [
      "B)",
      "2109",
      "2199",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "matematik-4-pdf-u8-q10",
    "unitId": "matematik-4-pdf-u8",
    "text": "Birinci toplananın 2195 olduğu bir toplama işleminde ikinci toplanan birinci toplanandan 188 eksiktir. Buna göre, bu toplama işleminin sonucu kaçtır...",
    "options": [
      "4212",
      "4202",
      "4192",
      "4102"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 4202"
  },
  {
    "id": "matematik-4-pdf-u9-q1",
    "unitId": "matematik-4-pdf-u9",
    "text": "Beş günlük toplam ziyaretçi sayısı 6500 olan bir müzenin ziyaretçi sayısının en fazla olduğu gün üçüncü gündür. Bu müzeye birinci gün 1038, ikinci gün 1413, dördüncü gün 1245 ziyaretçi gelmiştir. Buna göre, bu müzenin beşinci gündeki ziyaretçi sayısı en fazla kaçtır...",
    "options": [
      "1290",
      "1340",
      "1390",
      "1450"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1290"
  },
  {
    "id": "matematik-4-pdf-u9-q2",
    "unitId": "matematik-4-pdf-u9",
    "text": "Bir sayının 4576 fazlası, rakamları farklı dört basamaklı en büyük tek sayıdır. Buna göre, bu sayı kaçtır...",
    "options": [
      "5289",
      "5299",
      "5389",
      "5399 ( Ç) 23. Binlik Yüzlük Onluk Birlik Abaküs üzerinde gösterilen sayının yüzlük çubuğundan bir boncuk alınıp birlik çubuğuna takılmıştır. Buna göre, başlangıçta abaküste gösterilen sayı kaç azalmıştır..."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 5389"
  },
  {
    "id": "matematik-4-pdf-u9-q3",
    "unitId": "matematik-4-pdf-u9",
    "text": "2. 3. 4. Birinci ve dördüncü kutuya sayılar yazılmıştır. Her kutuda bir sayı yazacağına göre, ikinci kutuya en az kaç yazılır...",
    "options": [
      "1786",
      "C) 2158",
      "2578 ( Ç)",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2578 ( Ç)"
  },
  {
    "id": "matematik-4-pdf-u9-q4",
    "unitId": "matematik-4-pdf-u9",
    "text": "Bir sayının 3246 eksiği rakamları farklı dört basamaklı en küçük çift sayıya eşittir. Buna göre, bu sayı kaçtır...",
    "options": [
      "4280",
      "4270",
      "4269",
      "4260"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4280"
  },
  {
    "id": "matematik-4-pdf-u9-q5",
    "unitId": "matematik-4-pdf-u9",
    "text": "9, 1, 6, 7, 0, 5, 3 rakamları birer kez kullanılarak dört basamaklı en büyük doğal sayı ve üç basamaklı en küçük doğal sayı yazılıyor. Buna göre, büyük sayı, küçük sayıdan kaç fazladır...",
    "options": [
      "9455",
      "9464",
      "9635",
      "9662 ("
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 9464"
  },
  {
    "id": "matematik-4-pdf-u9-q6",
    "unitId": "matematik-4-pdf-u9",
    "text": "3, 0, 5 ve 6 rakamlarının her biri birer kez kullanılarak dört basamaklı sayılar yazılmıştır. Bu sayılardan herhangi ikisi arasındaki fark en çok kaçtır...",
    "options": [
      "3464",
      "3474",
      "3475",
      "3484"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3475"
  },
  {
    "id": "matematik-4-pdf-u9-q7",
    "unitId": "matematik-4-pdf-u9",
    "text": "Bir mağazada bulunan dört ürün ve bu ürünlerden üçünün fiyatı görselde verilmiştir. Çamaşır makinesi Ütü Buzdolabı Televizyon 5849 TL 3750 TL 4998 TL Bu mağazadan üç farklı ürün satın alan bir kişi 9500 TL ödemiştir. Bu mağazada başka ürün bulunmadığına göre, ütünün fiyatı kaç TL’dir...",
    "options": [
      "750",
      "751",
      "752",
      "753"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 751"
  },
  {
    "id": "matematik-4-pdf-u9-q8",
    "unitId": "matematik-4-pdf-u9",
    "text": "2 1 3 2 2 6 Verilen şemadaki işlem devam ettirilirse “...” yerine hangi sayı gelir...",
    "options": [
      "12",
      "48",
      "108",
      "144"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 48"
  },
  {
    "id": "matematik-4-pdf-u9-q9",
    "unitId": "matematik-4-pdf-u9",
    "text": "21 odası bulunan bir otelin odalarından 12’si 2 kişilik, diğerleri 3 kişiliktir. Buna göre, otelin 14 odası dolu, diğer odaları boş olduğuna göre, bu otelde en çok kaç müşteri olabilir...",
    "options": [
      "28",
      "30",
      "37",
      "42"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 37"
  },
  {
    "id": "matematik-4-pdf-u9-q10",
    "unitId": "matematik-4-pdf-u9",
    "text": "Tablo: Çevik Spor Mağazasının Bir Haftalık Satışı Satılan Ürün Alış Fiyatı (TL) Satış Fiyatı (TL) Satılan Adet Basketbol topu 40 50 25 Futbol topu 25 45 25 Voleybol topu 10 25 25 Tablodaki verilere göre, bu spor mağazası bir haftada kaç TL kâr etmiştir...",
    "options": [
      "1125",
      "1875",
      "2275",
      "3000"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1875"
  },
  {
    "id": "matematik-4-pdf-u10-q1",
    "unitId": "matematik-4-pdf-u10",
    "text": "Her bir test için 25 soru hazırlayan Nurcan Öğretmen, 34 test için en fazla kaç soru hazırlar...",
    "options": [
      "725",
      "800",
      "850",
      "900"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 850"
  },
  {
    "id": "matematik-4-pdf-u10-q2",
    "unitId": "matematik-4-pdf-u10",
    "text": "Bir konserin indirimli biletlerinin fiyatı 15 lira, tam biletlerinin fiyatı 30 liradır. Bu konser için yetmiş beşer adet tam ve indirimli bilet satılmıştır. Buna göre, bu satıştan kaç lira gelir elde edilmiştir...",
    "options": [
      "3000",
      "3150",
      "3375",
      "3500 ( Ç)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 3375"
  },
  {
    "id": "matematik-4-pdf-u10-q3",
    "unitId": "matematik-4-pdf-u10",
    "text": "Cemile, incileri iplere dizerek aşağıdaki gibi takı seti hazırlayacaktır. Her sette aynı sayıda inci kullandığına göre, 21 set hazırladığında toplam kaç tane inci kullanır...",
    "options": [
      "212",
      "234",
      "282",
      "294 8. bir sefer 11 TL Yukarıdaki dönme dolapta her kabin 4 kişiliktir. Bütün kabinler dolu olduğunda, görevli bir seferde kaç lira elde eder..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 212"
  },
  {
    "id": "matematik-4-pdf-u10-q4",
    "unitId": "matematik-4-pdf-u10",
    "text": "Bir kitapçıda satılan 190 çeşit kitaptan yirmisekizer, 107 çeşit kitaptan otuzdokuzar tane vardır. Buna göre, bu kitapçıda toplam kaç kitap satılmaktadır...",
    "options": [
      "1195",
      "5983",
      "9493",
      "9503 ( Ç) 10. x + Verilen çarpma işleminde , ve birer rakamdır. Buna göre, ++ işleminin sonucu kaçtır..."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 9493"
  },
  {
    "id": "matematik-4-pdf-u10-q5",
    "unitId": "matematik-4-pdf-u10",
    "text": "2 kilogram portakaldan 1 şişe portakal suyu çıkmaktadır. Portakalın 1 kilogramı 2 TL ise 10 şişe portakal suyu için gerekli olan portakal kaç TL’dir...",
    "options": [
      "10",
      "20",
      "40",
      "80"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 20"
  },
  {
    "id": "matematik-4-pdf-u10-q6",
    "unitId": "matematik-4-pdf-u10",
    "text": "İki basamaklı en küçük tek doğal sayı ile rakamları birbirinden farklı üç basamaklı en büyük çift doğal sayının çarpımı kaçtır...",
    "options": [
      "10 989",
      "10 978",
      "10 846",
      "10 758 13. Verilen çarpma işleminde her nokta bir rakama karşılık geldiğine göre, çarpım kaçtır..."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 10 758 13. Verilen çarpma işleminde her nokta bir rakama karşılık geldiğine göre, çarpım kaçtır..."
  },
  {
    "id": "matematik-4-pdf-u10-q7",
    "unitId": "matematik-4-pdf-u10",
    "text": "4 3 1 2 9 6 a b c d e 4 3 Yukarıda verilen çarpma işleminde her nokta ve a, b, c, d, e bir rakama karşılık gelmetedir. Buna göre, abcde++ ++ işleminin sonucu kaçtır...",
    "options": [
      "27",
      "26",
      "25",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 25"
  },
  {
    "id": "matematik-4-pdf-u10-q8",
    "unitId": "matematik-4-pdf-u10",
    "text": "3 5 8 43 2 6 7 44 4 9 5 49 3 ... Yukarıdaki şekillerde, dikdörtgenin köşelerindeki üç sayıdan ikisinin çarpımı üçüncüye eklenmiştir. Elde edilen sayı karenin içine yazılmıştır. Buna göre, son şekilde soru işareti (...) yerine gelmesi gereken sayı kaçtır...",
    "options": [
      "43",
      "41",
      "39",
      "37"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 39"
  },
  {
    "id": "matematik-4-pdf-u10-q9",
    "unitId": "matematik-4-pdf-u10",
    "text": "A 9 2 B 2 7 3 7 8 1 0 5 3 Yukarıda verilen çarpma işleminde A ve B birer rakam olduğuna göre, AB+ işleminin sonucu kaçtır...",
    "options": [
      "10 ( Ç) 17. Verilen çarpma işleminde a,b,c,d birer rakamdır. Buna göre, abcd++ + işleminin sonucu kaçtır...",
      "19",
      "17",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 10 ( Ç) 17. Verilen çarpma işleminde a,b,c,d birer rakamdır. Buna göre, abcd++ + işleminin sonucu kaçtır..."
  },
  {
    "id": "matematik-4-pdf-u10-q10",
    "unitId": "matematik-4-pdf-u10",
    "text": "(8 × 2) × 19 = ▲ × (19 × 2) (■ × 3) × 7 = (7 × 5) × 3 Verilen eşitliklerde ■ ve ▲ birer doğal sayıdır. Buna göre, ■ × ▲ işleminin sonucu kaçtır...",
    "options": [
      "13",
      "40",
      "56",
      "Bu se?enek konuya uygun de?ildir."
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 40"
  },
  {
    "id": "fen-4-pdf-u1-q1",
    "unitId": "fen-4-pdf-u1",
    "text": "Bazı öğrencilerin maden kavramı ile ilgili verdikleri bilgiler aşağıdaki gibidir. Altın bir madendir çünkü parlak ve serttir. Murat Seval kayaçtır. Buna göre, hangi öğrencinin verdiği bilgi açıklaması ile birlikte doğrudur...",
    "options": [
      "Murat",
      "Şule",
      "Seval",
      "Tarık ( 15. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Şule"
  },
  {
    "id": "fen-4-pdf-u1-q2",
    "unitId": "fen-4-pdf-u1",
    "text": "Dünya’mızın bir bölgesinde gündüz yaşanırken diğer bölgesinde gece yaşanır. Bu olayın nedeni aşağıdakilerden hangisidir...",
    "options": [
      "Güneş’in, Dünya çevresinde dolanma hareketi yapması",
      "Dünya’nın, Güneş çevresinde dolanma hareketi yapması",
      "Dünya’nın, kendi çevresinde dönme hareketi yapması",
      "Güneş’in, kendi çevresinde dönme hareketi yapması ( Ç 1. SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Dünya’nın, kendi çevresinde dönme hareketi yapması"
  },
  {
    "id": "fen-4-pdf-u1-q3",
    "unitId": "fen-4-pdf-u1",
    "text": "Dünya’nın kendi etrafındaki ve Güneş etrafındaki hareketi şekildeki gibi numaralanarak verilmiştir. Dünya Güneş Dünya Güüneş Buna göre, Dünya’nın numaralanmış hareketleri ile ilgili aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Dünya’nın kendi etrafındaki hareketi 2 numara ile gösterilmiştir.",
      "2 numaralı hareketini bir günde tamamlar.",
      "1 numaralı hareketi sonucu gece ve gündüz oluşur.",
      "Dünya’nın Güneş etrafındaki hareketi 1 numara ile gösterilmiştir. ( 10.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1 numaralı hareketi sonucu gece ve gündüz oluşur."
  },
  {
    "id": "fen-4-pdf-u1-q4",
    "unitId": "fen-4-pdf-u1",
    "text": "Yer kabuğunun yapısı ile ilgili aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Yer kabuğu Dünya’nın en iç katmanıdır.",
      "Doğada büyük yer tutan canlıların yaşadığı parçalara kömür adı verilir.",
      "Yer kabuğundan çıkarılan ekonomik değeri yüksek olan kayaçlara maden adı verilir.",
      "Yer kabuğundaki saf kum olan maden ısıtıldığında bakır elde edilir. ( 1. SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yer kabuğundan çıkarılan ekonomik değeri yüksek olan kayaçlara maden adı verilir."
  },
  {
    "id": "fen-4-pdf-u1-q5",
    "unitId": "fen-4-pdf-u1",
    "text": "Mehmet’in “Gece ve gündüzün oluşma sebebi nedir...” sorusuna arkadaşları aşağıdaki cevapları veriyorlar. Ömer : Güneş, Dünya’nın çevresinde dolanma hareketi yapar. Hatice: Dünya, Güneş’in etrafında dolanma hareketi yapar. Fatma : Güneş, kendi çevresinde dönme hareketi yapar. Yavuz : Dünya, kendi çevresinde dönme hareketi yapar. Buna göre, hangisi doğru söylemiştir...",
    "options": [
      "Ömer",
      "Hatice",
      "Fatma",
      "Yavuz ( 2. SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Yavuz ( 2. SORU)"
  },
  {
    "id": "fen-4-pdf-u1-q6",
    "unitId": "fen-4-pdf-u1",
    "text": "• Üst üste biriken kayaçlar içerisinde oluşur. • Eski zamanda ölen canlı kalıntılarının sertleşmesiyle oluşur. • Çok uzun zamanda oluşur. Yukarıda özellikleri verilen madde hangisidir...",
    "options": [
      "um",
      "ayaç",
      "Maden",
      "Fosil ( 3. SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Fosil ( 3. SORU)"
  },
  {
    "id": "fen-4-pdf-u1-q7",
    "unitId": "fen-4-pdf-u1",
    "text": "Öğrenciler Dünya’nın Güneş etrafındaki dolanma hareketinden dolayı oluşan etkileri aşağıdaki gibi açıklıyor. Hatice : Yeryüzünde kayaçlar oluşur. Fatma : Bir zaman dilimi olan yıl oluşur. Ömer : Yeryüzünün tamamında yaz mevsimi yaşanır. Bu öğrencilerden hangilerinin açıklaması doğrudur...",
    "options": [
      "Yalnız Hatice",
      "Yalnız Fatma",
      "Hatice ve Fatma",
      "Hatice, Fatma ve Ömer ( Ç 2. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yalnız Fatma"
  },
  {
    "id": "fen-4-pdf-u1-q8",
    "unitId": "fen-4-pdf-u1",
    "text": "Madenler birbirlerine göre farklılık gösterir mi...  Buna göre, hangi soruların cevapları tabloya yanlış kaydedilmiştir...",
    "options": [
      "1 ve 2",
      "1 ve 4",
      "2 ve 3",
      "3 ve 4"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 1 ve 4"
  },
  {
    "id": "fen-4-pdf-u1-q9",
    "unitId": "fen-4-pdf-u1",
    "text": "Dünya’nın Güneş etrafında dolanma hareketinden dolayı sıcaklık değişimleri yaşanır. Bu sıcaklık değişimleri beraberinde aşağıdakilerden hangisini meydana getirir...",
    "options": [
      "Mevsimleri",
      "Haftaları",
      "Gece ve gündüzü",
      "Ayları ( Ç 3. SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mevsimleri"
  },
  {
    "id": "fen-4-pdf-u1-q10",
    "unitId": "fen-4-pdf-u1",
    "text": "Maden kaynağı bakımından Dünya rezervinin yaklaşık üçte ikisi ülkemizde bulunan maden aşağıdakilerden hangisidir...",
    "options": [
      "Bakır",
      "rom",
      "Bor",
      "Altın"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bor"
  },
  {
    "id": "fen-4-pdf-u2-q1",
    "unitId": "fen-4-pdf-u2",
    "text": "Mevsimlerin oluşumu aşağıdakilerden hangisi ile açıklanır...",
    "options": [
      "Dünya’nın kendi ekseni etrafında dönmesi",
      "Dünya’nın Güneş etrafında dolanması",
      "Dünya’nın küre şeklinde olması",
      "Günün bir kısmının gece bir kısmının gündüz olması"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dünya’nın Güneş etrafında dolanması"
  },
  {
    "id": "fen-4-pdf-u2-q2",
    "unitId": "fen-4-pdf-u2",
    "text": "ayaçlar hem yer kabuğunun üstünde hem de içinde bulunurlar. yargılarından hangileri doğrudur...",
    "options": [
      "Yalnız 1",
      "Yalnız 2",
      "1 ve 3",
      "2 ve 3"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1 ve 3"
  },
  {
    "id": "fen-4-pdf-u2-q3",
    "unitId": "fen-4-pdf-u2",
    "text": "Yeryüzündeki bir noktadan, bir günün belli saatlerinde Güneş’e bakıldığında Güneş’in konumu şekildeki gibi oluyor. Saat 10.00 Saat 12.00 Saat 17.00 Yeryüzüne göre, Güneş’in konumunun değişmesi aşağıdakilerden hangisi ile açıklanır...",
    "options": [
      "Dünya’nın Güneş etrafında dolanması",
      "Dünya’nın kendi ekseni etrafında dönmesi",
      "Dünya’nın Güneş etrafında dolanımını bir yılda tamamlaması",
      "Bir yılın yaklaşık 365 gün olması"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Dünya’nın kendi ekseni etrafında dönmesi"
  },
  {
    "id": "fen-4-pdf-u2-q4",
    "unitId": "fen-4-pdf-u2",
    "text": "aşama: Ölen canlıların, sel ve toprakların kayması gibi dış etkenler ile kum ve çamurun altında kalması Buna göre, fosillerin oluşum aşamalarının sırası aşağıdakilerin hangisinde doğru verilmiştir...",
    "options": [
      "1 - 2 - 3",
      "3 - 2 - 1",
      "3 - 1 - 2",
      "2 - 3 - 1"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: 3 - 2 - 1"
  },
  {
    "id": "fen-4-pdf-u2-q5",
    "unitId": "fen-4-pdf-u2",
    "text": "Dünya’nın Güneş etrafında dolanması aşağıdakilerden hangisine sebep olmaktadır...",
    "options": [
      "Gece ve gündüzün oluşmasına",
      "Mevsimlerin oluşmasına",
      "Bir günün oluşmasına",
      "Güneş’in Dünya’dan büyük olmasına"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Mevsimlerin oluşmasına"
  },
  {
    "id": "fen-4-pdf-u2-q6",
    "unitId": "fen-4-pdf-u2",
    "text": "Öğretmen öğrencilerinden besinlerde su bulunduğunu örnekler vererek açıklamalarını ister. Aşağıdakilerden hangisi bu durumu açıklayan doğru bir örnek olamaz...",
    "options": [
      "esilen salatalıktan su çıkması",
      "Limonu sıktığımızda suyunun çıkması",
      "Makarnanın pişirilirken üzerine su eklenmesi",
      "Açıkta bırakılan ekmeğin bir süre sonra kuruması -"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Makarnanın pişirilirken üzerine su eklenmesi"
  },
  {
    "id": "fen-4-pdf-u2-q7",
    "unitId": "fen-4-pdf-u2",
    "text": "Ayşe Hanım, marketten aldığı yoğurdu eve gelir gelmez resimdeki gibi buzdolabına yerleştiriyor. SÜT SÜT Yoğurdun buzdolabına konulma nedeni aşağıdakilerden hangisidir...",
    "options": [
      "Tazeliğinin korunması",
      "Son kullanma tarihinin uzatılması",
      "Donmasının sağlanması",
      "Doğal hâle getirilmesi -"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tazeliğinin korunması"
  },
  {
    "id": "fen-4-pdf-u2-q8",
    "unitId": "fen-4-pdf-u2",
    "text": "Dengeli beslenme için tüm besin çeşitlerinden yeterli miktarda tüketilmelidir. Buna göre, aşağıdakilerden hangisi sağlıklı bir insanın dengeli beslenmesi için uygun bir davranıştır...",
    "options": [
      "Sadece protein içerikli besinler tüketmek",
      "arbonhidrat içerikli besinleri hiç tüketmemek",
      "Sürekli aynı besin içeriklerini tüketmek",
      "Her besin çeşidinden vücudun ihtiyacı kadar tüketmek -"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Her besin çeşidinden vücudun ihtiyacı kadar tüketmek -"
  },
  {
    "id": "fen-4-pdf-u2-q9",
    "unitId": "fen-4-pdf-u2",
    "text": "Bir öğrenci, insanın beslenmesinde yer alan çeşitli besin içeriklerini ve bu besin içeriklerinin vücudumuzdaki öncelikli görevlerini aşağıdaki tabloda eşleştirmiştir. Besin içerikleri Görevi Proteinler Yaraların onarılmasını sağlar. Vitaminler Yürüme, koşma için enerji üretmede görev alır. arbonhidratlar Hastalıklara karşı vücut direncinin artırılmasında görev alır. Buna göre, yapılan eşleştirmeler için aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Öğrencinin yapmış olduğu eşleştirmelerin hepsi doğrudur.",
      "arbonhidrat ve vitaminlerin görevleri birbiriyle yer değiştirdiğinde eşleştirmeler doğru olur.",
      "Proteinler ve vitaminlerin görevleri birbiriyle yer değiştirdiğinde eşleştirmeler doğru olur.",
      "Proteinler ve karbonhidratların görevleri birbiriyle yer değiştirdiğinde eşleştirmeler doğru olur. - Ç"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: arbonhidrat ve vitaminlerin görevleri birbiriyle yer değiştirdiğinde eşleştirmeler doğru olur."
  },
  {
    "id": "fen-4-pdf-u2-q10",
    "unitId": "fen-4-pdf-u2",
    "text": "Aşağıdakilerden hangisi gıda israfını önlemeye yönelik bir davranış değildir...",
    "options": [
      "Alışverişe çıkmadan önce ihtiyaç duyulan besinlerin listesini hazırlamak",
      "Çabuk bozulan gıdalardan tüketeceğimiz kadar satın almak",
      "Yemekte sadece en sevdiğimiz yemeği tüketmek",
      "Yemek servisi sırasında yiyebileceğimiz kadar yemek almak"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Yemekte sadece en sevdiğimiz yemeği tüketmek"
  },
  {
    "id": "fen-4-pdf-u3-q1",
    "unitId": "fen-4-pdf-u3",
    "text": "Bir öğrenci aynı tür naylon poşetlere ekmek, elma ve peynir dilimlerini koyup poşeti hava almayacak şekilde kapatıyor. Poşetleri aynı ortamda üç gün süreyle beklettikten sonra poşetlerde şekildeki gibi su damlacıklarının biriktiğini görüyor. Ekmek dilimleri Elma dilimleri Peynir dilimi Öğrenci sadece bu gözlemine göre, aşağıda verilen sorulardan hangisine cevap arıyor olabilir...",
    "options": [
      "Besinlerin yapısında su bulunur mu...",
      "Besinlerin yapısında mineral bulunur mu...",
      "Besinlerin yapısında vitamin bulunur mu...",
      "Besinlerin yapısında protein bulunur mu... - Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Besinlerin yapısında su bulunur mu..."
  },
  {
    "id": "fen-4-pdf-u3-q2",
    "unitId": "fen-4-pdf-u3",
    "text": "Canlıların derileri altında depo edilerek vücutlarını sıcak tutmalarını sağlayan besin içeriği aşağıdakilerden hangisidir...",
    "options": [
      "arbonhidrat",
      "Protein",
      "Mineral",
      "Yağ"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Yağ"
  },
  {
    "id": "fen-4-pdf-u3-q3",
    "unitId": "fen-4-pdf-u3",
    "text": "Pelin bir gün annesi ile alışverişe çıktığında öğretmeninin Fen Bilimleri dersinde besinleri satın alırken ve tüketirken nelere dikkat edilmesi gerektiğini anlattığından bahsetmiştir. Buna göre, aşağıdakilerden hangisi Pelin’in öğretmeninin anlattıklarından biridir...",
    "options": [
      "Paketi açılmış olsa da besinleri satın alabiliriz.",
      "Taze ve doğal besinleri tüketmeliyiz.",
      "Son kullanma tarihi geçmiş olan ürünleri tüketebiliriz.",
      "Dondurulmuş gıdalardan çözülmüş olanları tekrar dondurmalıyız. - Ç"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Taze ve doğal besinleri tüketmeliyiz."
  },
  {
    "id": "fen-4-pdf-u3-q4",
    "unitId": "fen-4-pdf-u3",
    "text": "Bir öğrenci sağlıklı ve dengeli beslenmeye uygun kahvaltı yapmak için tablodaki besinlerden seçim yapıyor. Yumurta  Zeytin  Süt  Bal  Tahıllı ekmek  remalı bisküvi  Asitli gazoz  Peynir  Pasta  Buna göre, kaç numaralı besinleri seçmesi uygun olmaz...",
    "options": [
      "1, 3, 4",
      "2, 4, 8",
      "3, 5, 8",
      "6, 7, 9 - Ç"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 6, 7, 9 - Ç"
  },
  {
    "id": "fen-4-pdf-u3-q5",
    "unitId": "fen-4-pdf-u3",
    "text": "Öğretmenin sınıfta sorduğu soruya öğrencilerin verdiği cevaplar şu şekildedir: • Enerji ihtiyacımızı karşılamak için • Yapıcı onarıcı maddeleri vücudumuza almak için • Hayati faaliyetlerimizi sürdürebilmek için Öğrencilerin verdiği cevaplar doğru olduğuna göre öğretmen hangi soruyu sormuş olabilir...",
    "options": [
      "Besinlere neden ihtiyaç duyarız...",
      "Neleri besin olarak kullanırız...",
      "Sindirim sistemimiz nasıl çalışır...",
      "Hangi besinde ne kadar su bulunur... -"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Besinlere neden ihtiyaç duyarız..."
  },
  {
    "id": "fen-4-pdf-u3-q6",
    "unitId": "fen-4-pdf-u3",
    "text": "Aşağıdaki besin - içerik eşleştirmelerinden hangisi yanlıştır...",
    "options": [
      "Makarna - arbonhidrat",
      "Portakal - Vitamin",
      "Süt ve süt ürünleri - Protein",
      "Pirinç - Yağ -"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Pirinç - Yağ -"
  },
  {
    "id": "fen-4-pdf-u3-q7",
    "unitId": "fen-4-pdf-u3",
    "text": "Görselde besin grupları farklı büyüklüklerde verilmiştir. Beslenme Şeması Süt ve süt ürünleri Patates, ekmek ve diğer tahıl ürünleri Et, balık ve baklagiller Şeker veya yağ oranı yüksek yiyecekler Sebze ve meyveler Bu bölgelerin farklı büyüklüklere sahip olması neyi göstermektedir...",
    "options": [
      "En çok ve en az tüketilmesi gereken besin maddelerinin neler olduğunu",
      "Besinlerin su içeriklerinin ne kadar olduğunu",
      "Besinlerin karbonhidrat içeriklerinin ne kadar olduğunu",
      "Besinlerin günün hangi saatlerinde tüketilmesi gerektiğini -"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: En çok ve en az tüketilmesi gereken besin maddelerinin neler olduğunu"
  },
  {
    "id": "fen-4-pdf-u3-q8",
    "unitId": "fen-4-pdf-u3",
    "text": "Paketli gıdaların son tüketim tarihleriyle ilgili aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Son tüketim tarihi geçen gıdalar güvenle tüketilmelidir.",
      "Paketli gıda alırken son tüketim tarihi en yakın olan tercih edilmelidir.",
      "Tüm besinler hangi ortamda saklanırsa saklansın son tüketim tarihine kadar daima taze kalırlar.",
      "Son tüketim tarihi geçen gıdalar zehirlenmeye neden olabilir. -"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Son tüketim tarihi geçen gıdalar zehirlenmeye neden olabilir. -"
  },
  {
    "id": "fen-4-pdf-u3-q9",
    "unitId": "fen-4-pdf-u3",
    "text": "Su ile ilgili aşağıdakilerden hangisi söylenemez...",
    "options": [
      "Vücudumuzda düzenleyici olarak görev yapar.",
      "Sağlık için yeterli miktarda su tüketilmelidir.",
      "Su tüm canlılar için önemli ve gereklidir.",
      "Su kaynakları bolca kullanılıp harcanabilir. -"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Su kaynakları bolca kullanılıp harcanabilir. -"
  },
  {
    "id": "fen-4-pdf-u3-q10",
    "unitId": "fen-4-pdf-u3",
    "text": "Sağlıklı ve dengeli beslenme için aşağıdakilerden hangisinin yapılması doğrudur...",
    "options": [
      "Vücudun ihtiyacı olan besinlerden ihtiyaç kadarı tüketilmelidir.",
      "Her besinden fazlasıyla tüketmek gereklidir.",
      "İstenilen besinden istenilen kadar tüketilmelidir.",
      "Sadece karbonhidrat ağırlıklı besinler tüketilmelidir. - Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Vücudun ihtiyacı olan besinlerden ihtiyaç kadarı tüketilmelidir."
  },
  {
    "id": "fen-4-pdf-u4-q1",
    "unitId": "fen-4-pdf-u4",
    "text": "Aşağıdakilerden hangisi besinleri tüketirken yapılan yanlış davranışlardan biridir...",
    "options": [
      "Meyve ve sebzeler bol su ile yıkanmalıdır.",
      "Doğal besinler yerine bol katkı maddesi bulunduran besinler tercih edilmelidir.",
      "Yemekten önce ve sonra eller yıkanmalıdır.",
      "Yemek yapılan araç gerecin temizliğine dikkat edilmelidir. - Ç"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Doğal besinler yerine bol katkı maddesi bulunduran besinler tercih edilmelidir."
  },
  {
    "id": "fen-4-pdf-u4-q2",
    "unitId": "fen-4-pdf-u4",
    "text": "Uygun koşullarda kurutulan gıdalar küçülür ve ağırlıkları azalır. Bu bilgiye göre, kurutulan gıdalarda ağırlığın azalmasına neden olan temel madde aşağıdakilerden hangisidir...",
    "options": [
      "Su",
      "Protein",
      "Yağ",
      "arbonhidrat"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Su"
  },
  {
    "id": "fen-4-pdf-u4-q3",
    "unitId": "fen-4-pdf-u4",
    "text": "Besinlerle ilgili; • Açıkta bırakılan ekmeğin kuruması, • esilmiş karpuz bulunan tabakta karpuz suyu birikmesi, • Sıkılan portakaldan portakal suyu elde edilmesi gözlem sonuçlarından yola çıkarak aşağıdakilerden hangisine ulaşılabilir...",
    "options": [
      "Besinlerin yapısında vitamin vardır.",
      "Besinlerin yapısında mineral vardır.",
      "Besinlerin yapısında su vardır.",
      "Besinlerin yapısında yağ vardır."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Besinlerin yapısında su vardır."
  },
  {
    "id": "fen-4-pdf-u4-q4",
    "unitId": "fen-4-pdf-u4",
    "text": "Aşağıda bir besin içeriği ile ilgili bilgiler verilmiştir. • Vücudumuzun ihtiyacı olan enerjiyi sağlayan ilk besin grubudur. • Bal, reçel ve pekmezde bolca bulunur. Buna göre, bilgileri verilen besin içeriği aşağıdakilerden hangisidir...",
    "options": [
      "Protein",
      "arbonhidrat",
      "Vitamin",
      "Yağ"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: arbonhidrat"
  },
  {
    "id": "fen-4-pdf-u4-q5",
    "unitId": "fen-4-pdf-u4",
    "text": "Aşağıdakilerden hangisi gıda alışverişi ve tüketilmesiyle ilgili doğru bir davranış değildir...",
    "options": [
      "Gıdalar temizlenmeden tüketilmelidir.",
      "Üretim ve son kullanma tarihine dikkat edilmelidir.",
      "Mevsimine uygun sebze ve meyveler tercih edilmelidir.",
      "Dondurulmuş besinler alışverişin sonunda satın alınmalıdır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gıdalar temizlenmeden tüketilmelidir."
  },
  {
    "id": "fen-4-pdf-u4-q6",
    "unitId": "fen-4-pdf-u4",
    "text": "Şekillerde kuvvetin cisimler üzerindeki etkilerine örnekler veriliyor. Duran topa vuruyor Odun parçasını kırıyor Bisikletin frenine basarak duruyor Bu örneklere bakılarak kuvvetin etkileri ile ilgili aşağıdakilerden hangisi söylenemez...",
    "options": [
      "Cisimlerin şeklini değiştirebilir.",
      "Uygulandığı her cismi durdurur.",
      "Duran cisimleri hareket ettirebilir.",
      "Cisimleri yavaşlatabilir. ( Ç 9. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Uygulandığı her cismi durdurur."
  },
  {
    "id": "fen-4-pdf-u4-q7",
    "unitId": "fen-4-pdf-u4",
    "text": "Aşağıdakilerden hangisinin yapımında mıknatıs kullanılmamıştır...",
    "options": [
      "Buzdolabı kapağı",
      "Pusula iğnesi",
      "Hoparlör",
      "Futbol topu (2020Ç 8.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Futbol topu (2020Ç 8.SORU)"
  },
  {
    "id": "fen-4-pdf-u4-q8",
    "unitId": "fen-4-pdf-u4",
    "text": "Bir öğrenci, tahta masanın üzerine şekildeki gibi plastik silgiyi, ataşı ve demir kalemtıraşı yerleştiriyor. Daha sonra masanın altından bir mıknatıs tutarak bu cisimleri hareket ettirmeye çalışıyor. Bu öğrenci, ataş ve kalemtıraşın hareket ettiğini, plastik silginin ise hareket etmediğini gözlemliyor. Buna göre, aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Mıknatıs cisimlerin tamamına etki etmiştir.",
      "Ataş hareket ettiği için plastikten yapılmış olabilir.",
      "Mıknatıs cisimlere temas ederek onları hareket ettirmiştir.",
      "Silgi plastikten yapıldığı için hareket etmemiştir. ( Ç 10. SORU) 4."
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Silgi plastikten yapıldığı için hareket etmemiştir. ( Ç 10. SORU) 4."
  },
  {
    "id": "fen-4-pdf-u4-q9",
    "unitId": "fen-4-pdf-u4",
    "text": "aynama 4. Hareket Yukarıdakilerden hangileri kuvvetin neden olabileceği bir etki değildir...",
    "options": [
      "Yalnız 3",
      "2 ve 4",
      "1 ve 4",
      "1, 2 ve 3 ( Ç 2. SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız 3"
  },
  {
    "id": "fen-4-pdf-u4-q10",
    "unitId": "fen-4-pdf-u4",
    "text": "Bir öğrenci iki tane çubuk mıknatısı şekildeki gibi birbirine yaklaştırdığında mıknatısların birbirini ittiğini gözlemliyor. Daha sonra iki mıknatısı da ters yöne çevirip yeniden birbirine yaklaştırdığında mıknatısların yine birbirini ittiğini fark ediyor. İlk durum İkinci durum Bu durum mıknatısın hangi özelliği ile açıklanır...",
    "options": [
      "Demir, nikel ve kobaltı çekmesi",
      "Aynı kutupların birbirini itmesi",
      "Zıt kutupların birbirini çekmesi",
      "Temas olmadan maddeleri çekmesi ( Ç 11. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Aynı kutupların birbirini itmesi"
  },
  {
    "id": "fen-4-pdf-u5-q1",
    "unitId": "fen-4-pdf-u5",
    "text": "Bir öğrenci duran yumuşak plastik topa ayağıyla çok kuvvetli vuruyor. Öğrenciler bu gözlemiyle uyguladığı kuvvetin cisimler üzerinde hangi etkilerini gözler...",
    "options": [
      "Hareket ettirme ve yavaşlatma",
      "Yavaşlatma ve durdurma",
      "Hareket ettirme ve geçici olarak şekil değiştirme",
      "Yavaşlatma ve geçici olarak şekil değiştirme ( Ç 8. SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Hareket ettirme ve geçici olarak şekil değiştirme"
  },
  {
    "id": "fen-4-pdf-u5-q2",
    "unitId": "fen-4-pdf-u5",
    "text": "Cisimler kuvvet etkisiyle şekil değiştirir. söylenenlerden hangilerine ulaşılabilir...",
    "options": [
      "Yalnız 1",
      "Yalnız 2",
      "1 ve 3",
      "1, 2 ve 3 (2020Ç 4.SORU) 8. Mıknatısın toplu iğnelere uygulayacağı kuvvet aşağıdakilerden hangisidir..."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1 ve 3"
  },
  {
    "id": "fen-4-pdf-u5-q3",
    "unitId": "fen-4-pdf-u5",
    "text": "Mıknatısların , L ve M cisimlerine etki edip etmediği tabloda verilmiştir. Cisimler Etki eder Etki etmez  L  M  Buna göre, , L ve M cisimleri aşağıdakilerden hangisidir...",
    "options": [
      "Demir çivi Cam bardak Toplu iğne",
      "Plastik kaşık Sünger Demir bilye",
      "Demir çivi Toplu iğne Cam bardak",
      "Toplu iğne Cam bardak Plastik kaşık (2020Ç 5.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Plastik kaşık Sünger Demir bilye"
  },
  {
    "id": "fen-4-pdf-u5-q4",
    "unitId": "fen-4-pdf-u5",
    "text": "Öğrenciler mıknatısın kullanımı ile ilgili günlük hayatımızdan örnekler veriyor. Ayşe : Camları temizlemek için kullanılan aletlerde mıknatıslardan yararlanılır. Fatma : Terziler dökülen toplu iğnelerini toplamak için mıknatıs kullanır. Yavuz : Çöp içindeki metal maddeleri ayırmak için mıknatıs kullanılır. Buna göre, hangi öğrencilerin verdiği örnek doğrudur...",
    "options": [
      "Yalnız Ayşe",
      "Yalnız Fatma",
      "Yalnız Yavuz",
      "Ayşe, Fatma ve Yavuz (2020Ç 6.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız Ayşe"
  },
  {
    "id": "fen-4-pdf-u5-q5",
    "unitId": "fen-4-pdf-u5",
    "text": "Öğretmen üstü kapatılmış iki çubuk maddenin şekildeki gibi ipe bağlı olduğu hâlde yapıştığını gösteriyor. ip Buna göre, aşağıdaki yorumlardan hangisi yanlış olur...",
    "options": [
      "İki çubuk madde mıknatıs olabilir.",
      "Çubuk maddelerden biri mıknatıs diğeri demir olabilir.",
      "Çubuk maddelerin yapıştığı kısım, aynı kutuplu mıknatıslardır.",
      "Çubuk maddelerin yapıştığı uçlar, zıt kutuplu mıknatıslardır. (2020Ç 7.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Çubuk maddelerin yapıştığı uçlar, zıt kutuplu mıknatıslardır. (2020Ç 7.SORU)"
  },
  {
    "id": "fen-4-pdf-u5-q6",
    "unitId": "fen-4-pdf-u5",
    "text": "Bakır tel Evet Buna göre, öğrencinin hangi cisimler için verdiği cevaplar doğrudur...",
    "options": [
      "1 ve 3",
      "2 ve 3",
      "1 ve 4",
      "3 ve 4 ( Ç 7.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 1 ve 4"
  },
  {
    "id": "fen-4-pdf-u5-q7",
    "unitId": "fen-4-pdf-u5",
    "text": "uvvet cisimleri durdurabilir, hareket ettirebilir, yönünü ve yerini değiştirebilir. Şekilde, Ali durmakta olan topa ayağı ile vuruyor. Mehmet, Ali’den gelen topu Ayşe’ye doğru yönlendiriyor. Ayşe ise topu eliyle tutuyor. Ali Mehmet Ayşe Buna göre, şekilde verilen olayda kuvvetin cisimler üzerindeki hangi etkileri sırayla gözlenmektedir...",
    "options": [
      "Durdurma, hızlandırma, yön değiştirme",
      "Hareket ettirme, yön değiştirme, durdurma",
      "Yön değiştirme, hareket ettirme, durdurma",
      "Hızlandırma, durdurma, yön değiştirme ( Ç 8.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Durdurma, hızlandırma, yön değiştirme"
  },
  {
    "id": "fen-4-pdf-u5-q8",
    "unitId": "fen-4-pdf-u5",
    "text": "Bir öğrenci, kuvvetin cisimler üzerindeki etkisine örnek veriyor. Verilen örnekte kuvvetin hangi etkisi gözlemlenmiştir...",
    "options": [
      "Şekil değiştirme",
      "Hareket ettirme",
      "Yavaşlatma",
      "Yön değiştirme ( Ç 7.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Hareket ettirme"
  },
  {
    "id": "fen-4-pdf-u5-q9",
    "unitId": "fen-4-pdf-u5",
    "text": "cisim 2. cisim",
    "options": [
      "Bakır tel Toplu iğne",
      "Demir çivi Tahta parçası",
      "arton kutu Bakır tel",
      "Tahta parçası Demir tozu ( Ç 8.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Bakır tel Toplu iğne"
  },
  {
    "id": "fen-4-pdf-u5-q10",
    "unitId": "fen-4-pdf-u5",
    "text": "Hareket hâlindeki oyuncak arabasına hareketin tersi yönünde bir kuvvet uygulayan Erkan, arabanın yavaşlayıp durduğunu gördü. Buna göre Erkan, yaptığı etkinlikle aşağıdakilerden hangisine ulaşabilir...",
    "options": [
      "Duran cisimler itilerek hareket ettirilebilir.",
      "Duran cisimler çekilerek hareket ettirilebilir.",
      "Hareket eden cisimler itilerek durdurulabilir.",
      "Hareket eden cisimlerin hızı, itilerek arttırılabilir. ( Ç 1. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Duran cisimler çekilerek hareket ettirilebilir."
  },
  {
    "id": "fen-4-pdf-u6-q1",
    "unitId": "fen-4-pdf-u6",
    "text": ", L, M materyalleri üzerindeki kuvvet etkisi kaldırıldığında, eski hâline dönüp dönmedikleri tabloda verilmiştir: Materyaller uvvetin etkisi ortadan kalkınca Eski hâline döner Eski hâline dönmez { L { M { Buna göre, , L ve M aşağıdakilerden hangisi olabilir...",
    "options": [
      "Oyun hamuru Sünger um torbası",
      "Oyun hamuru um torbası Sünger",
      "um torbası Oyun hamuru Sünger",
      "Sünger Oyun hamuru um torbası ( Ç 2.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: um torbası Oyun hamuru Sünger"
  },
  {
    "id": "fen-4-pdf-u6-q2",
    "unitId": "fen-4-pdf-u6",
    "text": "Aşağıdaki durumlardan hangisinde cisme uygulanan kuvvet geçici şekil değişikliğine neden olmaz...",
    "options": [
      "Tansiyon aletinin pompasının sıkılıp bırakılması",
      "Oyun hamurunun sıkılıp bırakılması",
      "Paket lastiğinin çekilip bırakılması",
      "Lastik topun sıkılıp bırakılması ( 2.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Tansiyon aletinin pompasının sıkılıp bırakılması"
  },
  {
    "id": "fen-4-pdf-u6-q3",
    "unitId": "fen-4-pdf-u6",
    "text": "Hareket eden varlıkların herhangi bir andaki durumları aşağıdaki resimlerde verilmiştir. Hareket hâlindeyken durmak için frenine basılan bir araba Salıncakla hareket eden bir çocuk Hareket hâlindeyken durmak için frenine basılan bir araba Salıncakla hareket eden bir çocuk Hareket hâlindeyken durmak için frenine basılan bir araba Dururken harekete başlayan bir araba Salıncakla hareket eden bir çocuk Bu resimlerde ifade edilen hareketler hızlanan, yavaşlayan ve sallanan olarak sınıflandırılmak isteniyor. Buna göre, aşağıdaki sınıflandırmalardan hangisi doğrudur...",
    "options": [
      "Yavaşlayan Hızlanan Sallanan",
      "Yavaşlayan Sallanan Hızlanan",
      "Sallanan Hızlanan Yavaşlayan",
      "Hızlanan Yavaşlayan Sallanan ( Ç 1.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yavaşlayan Sallanan Hızlanan"
  },
  {
    "id": "fen-4-pdf-u6-q4",
    "unitId": "fen-4-pdf-u6",
    "text": "uvvetlerin cisim üzerindeki yaptığı etkiler aşağıdaki cümlelerde ifade edilmiştir. • Yavaşlayan bir cisme, bir kuvvet uygulanmıyordur. (...) • Hızlanan bir cisme, bir kuvvet uygulanıyordur. (...) • Yön değiştiren bir cisme, bir kuvvet uygulanıyordur. (...) Bu cümlelerden doğru olanın sonuna (D), yanlış olanın sonuna (Y) işareti koyduğumuzda sonuç, sırasıyla aşağıdakilerden hangisi gibi olur...",
    "options": [
      "(D)",
      "(D)",
      "(Y)",
      "(Y) (D) (Y) (D) (Y) (Y) (Y) (D) (D) ( Ç 2.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: (D)"
  },
  {
    "id": "fen-4-pdf-u6-q5",
    "unitId": "fen-4-pdf-u6",
    "text": "Hareket eden varlıkların herhangi bir andaki durumlarına şekildeki numaralanmış örnekler veriliyor. Hareket eden atlıkarınca Buna göre, bu varlıkların hareketleri aşağıdakilerin hangisinde doğru olarak verilmiştir... 1 2 3",
    "options": [
      "Dönme Yavaşlama Sallanma",
      "Sallanma Hızlanma Dönme",
      "Dönme Hızlanma Sallanma",
      "Hızlanma Yavaşlama Dönme ( Ç 5.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Dönme Hızlanma Sallanma"
  },
  {
    "id": "fen-4-pdf-u6-q6",
    "unitId": "fen-4-pdf-u6",
    "text": "Cisimlerin yalnızca yönünü değiştirebilir. uvvetin etkisiyle yukarıdakilerden hangilerini gerçekleştirebilir...",
    "options": [
      "Yalnız 1",
      "1 ve 2",
      "2 ve 3",
      "1 ve 3 ( 2.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2 ve 3"
  },
  {
    "id": "fen-4-pdf-u6-q7",
    "unitId": "fen-4-pdf-u6",
    "text": "Öğrenciler, kuvvetin etkisi ile ilgili günlük yaşantılarından aşağıdaki örnekleri veriyorlar. Selin : Hurda otomobillerin az yer kaplasın diye preslenmesi Pelin : Duran otomobilin itilerek hareket ettirilmesi Murat : Oyuncak uçağın pervanesinin dokunarak döndürülmesi Ali : Oyun hamurundan araba yapılması Buna göre, hangi öğrencilerin örneği kuvvetin şekil değişikliği etkisiyle gerçekleşir...",
    "options": [
      "Selin ve Pelin’in",
      "Pelin ve Murat’ın",
      "Murat ve Ali’nin",
      "Selin ve Ali’nin ( 2.SORU) 21 3"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Selin ve Pelin’in"
  },
  {
    "id": "fen-4-pdf-u6-q8",
    "unitId": "fen-4-pdf-u6",
    "text": "Aşağıda dört aracın hareket yönleri ve bu araçlara etki eden kuvvetler görülmektedir. Hareket yönü Uygulanan kuvvet Hareket yönü Uygulanan kuvvet Hareket yönü Uygulanan kuvvet Hareket yönü Uygulanan kuvvet Buna göre, hangi araçlar uygulanan kuvvet etkisiyle yavaşlayabilir ya da durabilir...",
    "options": [
      "1 - 2",
      "1 - 4",
      "2 - 3",
      "3 - 4 ( 2.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 3 - 4 ( 2.SORU)"
  },
  {
    "id": "fen-4-pdf-u6-q9",
    "unitId": "fen-4-pdf-u6",
    "text": "Aşağıdakilerden hangisi kuvvetle ilgili doğru bir ifadedir...",
    "options": [
      "Cisimlerin yavaşlamaları için kuvvete gerek yoktur.",
      "Hareket hâlindeki cisimler, bir kuvvet etkisi olmadan yön değiştiremezler.",
      "Cisimlerde şekil değişikliği oluşturmak için her zaman kuvvete gerek yoktur.",
      "Hareket eden bir cisim itme kuvvetiyle yavaşlatılamaz. ( 2.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Hareket hâlindeki cisimler, bir kuvvet etkisi olmadan yön değiştiremezler."
  },
  {
    "id": "fen-4-pdf-u6-q10",
    "unitId": "fen-4-pdf-u6",
    "text": "Üç farklı durumda birbirine etki edecek uzaklıkta bulunan mıknatıslar verilmiştir. 1. 2. 3. Yukarıdaki durumların hangilerinde mıknatıslar birbirini iter...",
    "options": [
      "Yalnız 1",
      "Yalnız 2",
      "1 ve 3",
      "2 ve 3 ( 10.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Yalnız 2"
  },
  {
    "id": "fen-4-pdf-u7-q1",
    "unitId": "fen-4-pdf-u7",
    "text": "Şekilde gösterildiği gibi Giray, bir oyun sırasında Evren’den gelen topa sertçe vurup Bilge’ye doğru göndermiştir. BilgeEvren Giray Buna göre, Giray’ın topa uyguladığı kuvvet hangi etkiyi yapmıştır...",
    "options": [
      "Duran topu harekete geçirmiştir.",
      "Duran topun şeklini değiştirmiştir.",
      "Hareketli topun yönünü değiştirmiştir.",
      "Hareketli bir topu önce hızlandırmış sonra durdurmuştur. ( 8.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Duran topu harekete geçirmiştir."
  },
  {
    "id": "fen-4-pdf-u7-q2",
    "unitId": "fen-4-pdf-u7",
    "text": "Betül, bazı cisimlerle aşağıda gösterildiği gibi bir etkinlik yapıyor. Buna göre, bu ifadelerden hangileri esnek cisimlere örnek gösterilebilir...",
    "options": [
      "Yalnız 1",
      "Yalnız 2",
      "2 ve 3",
      "1, 2 ve 3 ( 9.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 2 ve 3"
  },
  {
    "id": "fen-4-pdf-u7-q3",
    "unitId": "fen-4-pdf-u7",
    "text": "Orkun ve Özlem seçtikleri maddeleri mıknatısa yaklaştırıyor. Mıknatıs tarafından çekilip çekilmediğini test edip gözlemlerini belirtiyorlar. Orkun: Maddem mıknatıs tarafından çekildi. Özlem: Maddem mıknatıs tarafından çekilmedi. Buna göre, Orkun ve Özlem’in seçtikleri maddeler aşağıdakilerin hangisinde doğru verilmiştir... Orkun’un maddesi Özlem’in maddesi",
    "options": [
      "Demir levha Tahta çubuk",
      "Plastik çubuk Altın yüzük",
      "Cam bilye Demir levha",
      "Tahta çubuk Demir levha ( 11.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Plastik çubuk Altın yüzük"
  },
  {
    "id": "fen-4-pdf-u7-q4",
    "unitId": "fen-4-pdf-u7",
    "text": "Fen bilimleri öğretmeni bir mıknatıs alıp sınıftaki bazı cisimlere dokundurduğunda mıknatısın o cisimleri çektiğini öğrencilere söylüyor. Daha sonra aynı mıknatısı başka cisimlere dokundurduğunda ise onları çekmediğini öğrencilere anlatıyor. Öğretmen mıknatıslarla ilgili hangi yargıya ulaşmak için bu etkinliği yapmıştır...",
    "options": [
      "Mıknatıslar iki kutupludur.",
      "Mıknatıslar her maddeyi çeker.",
      "Mıknatıslar bazı maddeleri çeker.",
      "Mıknatıslar günlük hayatta sık kullanılır. ( 6. SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mıknatıslar iki kutupludur."
  },
  {
    "id": "fen-4-pdf-u7-q5",
    "unitId": "fen-4-pdf-u7",
    "text": "Aşağıdaki örneklerden hangisinde kuvvet cisimlerin şeklini kalıcı olarak değiştirmeyebilir...",
    "options": [
      "Plastik topa kuvvet uygulandığında hareket etmesi",
      "aleme kuvvet uygulandığında kırılması",
      "Buzlu yola basıldığında buzun kırılması",
      "uru bir yaprağı iki elimizin arasında sıkıştırdığımızda yaprağın parçalanması ( 11.SORU) 2. 3. 1."
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Buzlu yola basıldığında buzun kırılması"
  },
  {
    "id": "fen-4-pdf-u7-q6",
    "unitId": "fen-4-pdf-u7",
    "text": "Öğretmen, öğrencilerine aşağıdaki bilgileri veriyor. Hareket hâlindeki cismi durdurmak için kuvvet uygulanır. ( ) uvvet uygulanan her cisim hızlanır. ( ) Cisimlere şekil vermek için kuvvet uygulanır. ( ) Cisimleri yavaşlatmak için uygulanan kuvvet, harekete zıt yöndedir. ( ) Buna göre, doğruları (D) yanlışları (Y) ile işaretleyen bir öğrenci için aşağıdakilerden hangisi doğrudur...",
    "options": [
      "(D) (D) (Y) (Y)",
      "(D) (Y) (D) (D)",
      "(Y) (D) (Y) (D)",
      "(Y) (D) (D) (D) ( 5. SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: (D) (D) (Y) (Y)"
  },
  {
    "id": "fen-4-pdf-u7-q7",
    "unitId": "fen-4-pdf-u7",
    "text": "Mıknatıslarla ilgili aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Mıknatısların kuzey ve güney kutbu vardır.",
      "Mıknatısların çekim gücü, kutuplarda daha azdır.",
      "Mıknatısların zıt kutupları birbirini iter.",
      "Mıknatısların aynı kutupları birbirini çeker. ( 7. SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Mıknatısların çekim gücü, kutuplarda daha azdır."
  },
  {
    "id": "fen-4-pdf-u7-q8",
    "unitId": "fen-4-pdf-u7",
    "text": "Hareket hâlindeki bir arabanın hareket yönü ve bu arabaya uygulanabilecek kuvvetlerin yönleri şekildeki gibidir. Hareket yönü Arabaya uygulanabilecek kuvvetlerin yönleri Arabanın durması için numaralandırılarak yönleri verilen kuvvetlerden hangisi uygulanmalıdır...",
    "options": [
      "4 ( 12.SORU) 37. Bir basketbol topunun hareketi Şekilde verilen basketbol topunun hareketinde aşağıdakilerden hangisi gözlemlenir...",
      "Önce sallanma sonra yavaşlama",
      "Önce hızlanma sonra sallanma",
      "Sallanma"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4 ( 12.SORU) 37. Bir basketbol topunun hareketi Şekilde verilen basketbol topunun hareketinde aşağıdakilerden hangisi gözlemlenir..."
  },
  {
    "id": "fen-4-pdf-u7-q9",
    "unitId": "fen-4-pdf-u7",
    "text": "Bazı cisimlere uygulanan kuvvet, kalıcı şekil değişikliğine neden olurken, bazı cisimlere uygulanan kuvvet ortadan kaldırıldığında cisim eski şekline geri döner. Aşağıdaki durumların hangisinde uygulanan kuvvet ortadan kaldırıldığında cisim eski şekline geri döner...",
    "options": [
      "Bakır tel ikiye katlandığında",
      "Bulaşık süngeri ikiye katlandığında",
      "Oyun hamurundan top yapıldığında",
      "âğıt ikiye katlandığında"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bulaşık süngeri ikiye katlandığında"
  },
  {
    "id": "fen-4-pdf-u7-q10",
    "unitId": "fen-4-pdf-u7",
    "text": "Bir öğretmen iki mıknatısı farklı biçimlerde birbirine yaklaştırarak aralarındaki etkileşimi şekildeki gibi gözlemliyor. Mıknatıslar birbirini itiyor Mıknatıslar birbirini çekiyor Bu gözlemden yola çıkarak aşağıdaki sorulardan hangisine cevap verilebilir...",
    "options": [
      "Mıknatıslar hangi maddelere etki etmez...",
      "Mıknatıslar kaç kutupludur...",
      "Mıknatıslar günlük yaşamda nerelerde kullanılır...",
      "Mıknatıslar demiri çeker mi... ( 10.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Mıknatıslar demiri çeker mi... ( 10.SORU)"
  },
  {
    "id": "fen-4-pdf-u8-q1",
    "unitId": "fen-4-pdf-u8",
    "text": "Bir deneyde, iki cisim üzerine aynı kuvvet uygulandığında cisimlerin şeklinin değiştiği gözleniyor. Uygulanan kuvvet ortadan kaldırıldığında cisimlerden biri eski hâline dönerken diğeri bükülmüş şekilde kalıyor. Bu deneyde kullanılan cisimler aşağıdakilerden hangisi olabilir...",
    "options": [
      "Oyun hamuru ve cam bardak",
      "Bulaşık süngeri ve defter kâğıdı",
      "Demir parçası ve çakıl taşı",
      "Yay ve lastik top ( 7.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bulaşık süngeri ve defter kâğıdı"
  },
  {
    "id": "fen-4-pdf-u8-q2",
    "unitId": "fen-4-pdf-u8",
    "text": "Tabloda verilen hareket durumları uygun örneklerle eşleştirilecektir. Hareket Durumları Örnekler  Yön değiştirme  Durma  Sallanma  Dönme  Hareket hâlindeki bisikletin tekeri  öşeyi dönen araba  Saat sarkacının hareketi Buna göre, hangi hareket durumu verilen örneklerle eşleştirilemez...",
    "options": [
      "Yön değiştirme",
      "Durma",
      "Sallanma",
      "Dönme ( 12.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Durma"
  },
  {
    "id": "fen-4-pdf-u8-q3",
    "unitId": "fen-4-pdf-u8",
    "text": "durumda 2. durumda",
    "options": [
      "N - S N - S",
      "N - N S - S",
      "N - S S - S",
      "S - S S - N ( 18.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: N - N S - S"
  },
  {
    "id": "fen-4-pdf-u8-q4",
    "unitId": "fen-4-pdf-u8",
    "text": "Aşağıda cisimler mıknatıstan etkilenme durumlarına göre iki gruba ayrılmıştır. Ancak bu gruplamada bir hata yapılmıştır. Bu hatanın giderilmesi için hangi cisimler birbiriyle yer değiştirmelidir...",
    "options": [
      "Plastik bardak ve demir tel",
      "Cam bilye ve plastik bardak",
      "Toplu iğne ve demir tel",
      "Nikel çubuk ve kâğıt bardak ( 7.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Cam bilye ve plastik bardak"
  },
  {
    "id": "fen-4-pdf-u8-q5",
    "unitId": "fen-4-pdf-u8",
    "text": "Ayşe, yerde yuvarlanan topa, topun hareketine zıt yönde aniden kuvvet uyguluyor. Bunun sonucunda, top hareketsiz kalıyor. Bu durumda kuvvetin hangi etkisi gözlenmiştir...",
    "options": [
      "Hareket hâlindeki cismin yönünü değiştirme",
      "Duran cismi aniden harekete geçirme",
      "Yavaş hareket eden cismi hızlandırma",
      "Hareket hâlindeki cismi durdurma ( 11.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Hareket hâlindeki cismi durdurma ( 11.SORU)"
  },
  {
    "id": "fen-4-pdf-u8-q6",
    "unitId": "fen-4-pdf-u8",
    "text": "Bir zemin üzerine şekilde verilen malzemeler konuluyor. Bu malzemelere bir çubuk mıknatıs eşit uzaklıklardan ayrı ayrı yaklaştırılıyor. Nikel parçalarıSilgi parçalarıDemir toplu iğneler Mıknatıs yaklaştırıldığında toplu iğnelerin ve nikel parçalarının hareket ettiği, silgi parçalarının ise hareket etmediği gözlemleniyor. Bu durumla ilgili aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Mıknatıslar tüm cisimlere çekme kuvveti uygular.",
      "Mıknatısların cisimleri çekmesi temas gerektirir.",
      "Mıknatıslar, içinde demir ve nikel bulunduran maddelere çekme kuvveti uygular.",
      "Mıknatıslar sadece küçük parçaları çeker. ( 14.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mıknatıslar tüm cisimlere çekme kuvveti uygular."
  },
  {
    "id": "fen-4-pdf-u8-q7",
    "unitId": "fen-4-pdf-u8",
    "text": "Mert, kuvvetin cisimler üzerindeki yavaşlatma ve durdurma etkisini gözlemlemek istiyor. Mert’in bu gözlemi basketbol topu kullanarak yapabilmesi için aşağıdakilerden hangisini uygulaması gerekir...",
    "options": [
      "Topa ip bağlayarak döndürmesi",
      "Duran topa kuvvet uygulaması",
      "Hareket eden topa, topun hareketi ile aynı yönde kuvvet uygulaması",
      "Hareket eden topa, topun hareketi ile zıt yönde yavaşça kuvvet uygulaması ( 11.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Hareket eden topa, topun hareketi ile zıt yönde yavaşça kuvvet uygulaması ( 11.SORU)"
  },
  {
    "id": "fen-4-pdf-u8-q8",
    "unitId": "fen-4-pdf-u8",
    "text": "Şekildeki iki mıknatıs birbirlerine yaklaştırılıyor. Mıknatısların birbirlerini çekme ya da itme durumlarına göre ve L kutupları aşağıdakilerin hangisinde doğru verilmiştir...",
    "options": [
      "Çekiyorsa → N S",
      "Çekiyorsa → N N",
      "İtiyorsa → S N",
      "İtiyorsa → N S"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: İtiyorsa → S N"
  },
  {
    "id": "fen-4-pdf-u8-q9",
    "unitId": "fen-4-pdf-u8",
    "text": "örnek: Çöpte yer kaplayan plastik şişe sıkıştırılarak çöpe atılıyor. Bu örneklerin hangilerinde kuvvetin şekil değiştirici etkisi vardır...",
    "options": [
      "1 ve 2",
      "2 ve 3",
      "1 ve 4",
      "3 ve 5"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 3 ve 5"
  },
  {
    "id": "fen-4-pdf-u8-q10",
    "unitId": "fen-4-pdf-u8",
    "text": "Fırıncı, hamura kuvvet uygulayarak hamuru parçalara ayırır. Parçalanmış hamurların şeklini değiştirerek fırına koyup onlardan poğaçalar yapar. Buna göre, aşağıdaki kuvvetlerden hangisi fırıncının hamura uyguladığı kuvvet ile aynı etkiyi yapar...",
    "options": [
      "alemle yazı yazılmasını sağlayan kuvvet",
      "Duran bir otomobilin itilerek hareket etmesini sağlayan kuvvet",
      "Duran bir kutunun çekilerek hareket etmesini sağlayan kuvvet",
      "Düz bir bakır telin yuvarlak hâle gelmesini sağlayan kuvvet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: alemle yazı yazılmasını sağlayan kuvvet"
  },
  {
    "id": "fen-4-pdf-u9-q1",
    "unitId": "fen-4-pdf-u9",
    "text": "Bir öğrenci , L ve M cisimlerini mıknatısa yaklaştırıyor. Mıknatısın etki edip etmediğini tabloya kaydediyor. Cisimler Etki eder Etki etmez  L  M  Buna göre, bu cisimler aşağıdakilerden hangisi olabilir...",
    "options": [
      "Toplu iğne Silgi Demir çivi",
      "Demir çivi Toplu iğne Silgi",
      "Silgi Demir çivi Toplu iğne",
      "Silgi Toplu iğne Demir çivi"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Silgi Toplu iğne Demir çivi"
  },
  {
    "id": "fen-4-pdf-u9-q2",
    "unitId": "fen-4-pdf-u9",
    "text": "Maddenin Hâlleri atı ...... Gaz Yukarıda maddenin hâllerinden biri boş bırakılmıştır. Aşağıdakilerden hangisi bu hâldeki maddelerin özelliklerinden birisidir...",
    "options": [
      "Akıcıdırlar.",
      "Belirli bir şekilleri vardır.",
      "Belirli bir hacimleri yoktur.",
      "Bulundukları ortamı tamamen doldururlar. ( Ç 9.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Akıcıdırlar."
  },
  {
    "id": "fen-4-pdf-u9-q3",
    "unitId": "fen-4-pdf-u9",
    "text": "apalı cam kaplardan birine X, diğerine Y maddesi konulup maddelerin kütle ve hacimleri ölçülüyor. Sonra X’in üzerine bir miktar X, Y’nin üzerine de bir miktar Y ilave edilip maddelerin kütle ve hacimleri tekrar ölçülüyor. Bu işlem bir kere daha yapılıyor ve aşağıdaki hacim - kütle grafikleri çiziliyor. X maddesi Hacim (mL) Hacim (mL) Y maddesi ütle (g) ütle (g) Grafiklere göre, X ve Y maddeleri ile ilgili aşağıdakilerden hangisi söylenemez...",
    "options": [
      "X ve Y’nin son kütleleri farklıdır.",
      "Y’nin hem kütlesi hem de hacmi artmıştır.",
      "X’in kütlesi artarken hacmi aynı kalmıştır.",
      "X ve Y’nin başlangıçtaki hacimleri aynıdır. ( Ç 10.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: X ve Y’nin son kütleleri farklıdır."
  },
  {
    "id": "fen-4-pdf-u9-q4",
    "unitId": "fen-4-pdf-u9",
    "text": "Süt Su buharı Yukarıda verilen maddelerin hâlleri aşağıdakilerden hangisinde doğru verilmiştir...",
    "options": [
      "Yalnız sıvı",
      "atı ve sıvı",
      "atı ve gaz",
      "atı, sıvı ve gaz ( Ç 14.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız sıvı"
  },
  {
    "id": "fen-4-pdf-u9-q5",
    "unitId": "fen-4-pdf-u9",
    "text": "köy Hacim (mL) öyler1 2 3 Sütçü, bu sütleri 1 L’lik ambalajlara doldurmak istiyor. Buna göre, sütçünün kaç tane ambalaja ihtiyacı vardır...",
    "options": [
      "10",
      "20",
      "50",
      "100 ( Ç 10.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: 100 ( Ç 10.SORU)"
  },
  {
    "id": "fen-4-pdf-u9-q6",
    "unitId": "fen-4-pdf-u9",
    "text": "Şekil 1’deki ağzı kapalı saydam kapta renkli bir madde bulunuyor. abın kapağı, bu madde dışarıya çıkmayacak şekilde yukarı çekildiğinde kaptaki rengin açıldığı gözleniyor (Şekil 2). apak Buna göre, kaptaki madde ile ilgili aşağıdakilerden hangisi doğrudur...",
    "options": [
      "Gaz hâldedir.",
      "ütlesi artmıştır.",
      "Hacmi azalmıştır.",
      "Belirli şekli vardır. ( Ç 9.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Belirli şekli vardır. ( Ç 9.SORU)"
  },
  {
    "id": "fen-4-pdf-u9-q7",
    "unitId": "fen-4-pdf-u9",
    "text": "ve L cisimleri, şekildeki özdeş kaplarda bulunan 50 ºC sıcaklıktaki suya aynı anda bırakılıyor. 5050 5050 50 mL 50 mL Belli bir süre sonra cisminin bulunduğu kaptaki suyun sıcaklığı azalıyor, L cisminin bulunduğu kaptaki suyun sıcaklığı ise artıyor. Buna göre, ve L maddelerinin başlangıç sıcaklıkları ile ilgili aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "ve L’nin sıcaklığı 50 ºC’tur.",
      "’nin sıcaklığı 50 ºC’tan yüksek, L’nin sıcaklığı 50 ºC’tur.",
      "’nin sıcaklığı 50 ºC’tan düşük, L’nin sıcaklığı 50 ºC’tan yüksektir.",
      "’nin sıcaklığı 50 ºC’tan yüksek, L’nin sıcaklığı 50 ºC’tan düşüktür. ( Ç 11.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: ’nin sıcaklığı 50 ºC’tan yüksek, L’nin sıcaklığı 50 ºC’tur."
  },
  {
    "id": "fen-4-pdf-u9-q8",
    "unitId": "fen-4-pdf-u9",
    "text": "Aşağıdaki özdeş dereceli kaplardan hangisindeki suyun hacmi diğerlerinden daha azdır...",
    "options": [
      "B)",
      "D) ( Ç 10.SORU) 9. Şekildeki ok, A ve B maddesi temas ettiğinde ısının akış yönünü göstermektedir. Buna göre, aşağıdakilerden hangisi doğrudur...",
      "Bir süre sonra ikisinin sıcaklığı eşitlenir.",
      "Bir süre sonra B maddesinin sıcaklığı A maddesinden daha fazla olur."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: B)"
  },
  {
    "id": "fen-4-pdf-u9-q9",
    "unitId": "fen-4-pdf-u9",
    "text": "Elif, unun kütlesini ölçmek için aynı kabı önce içi boşken sonra içi un doluyken şekildeki gibi tartı aletinde ölçüyor. 100 g 650 g Buna göre, unun kütlesi aşağıdakilerden hangisidir...",
    "options": [
      "450 gram",
      "650 gram",
      "550 gram",
      "750 gram ( Ç 14. SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: 550 gram"
  },
  {
    "id": "fen-4-pdf-u9-q10",
    "unitId": "fen-4-pdf-u9",
    "text": "Öğrenciler şekilde verilen malzemeleri kullanarak deney yapacaklardır. IsıtıcıTava Buna göre, öğrenciler aşağıdaki durumlardan hangisini araştırmaktadır...",
    "options": [
      "Maddenin nasıl katı hâle geldiği",
      "Maddenin ısı vererek nasıl soğuduğu",
      "Maddede ısı etkisiyle erimenin nasıl gerçekleştiği",
      "Isı alan katı maddenin şeklinin değişmediği ( Ç 15.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Isı alan katı maddenin şeklinin değişmediği ( Ç 15.SORU)"
  },
  {
    "id": "fen-4-pdf-u10-q1",
    "unitId": "fen-4-pdf-u10",
    "text": "Aşağıda bazı maddeler verilmiştir. Madde Mercimek Tuz Demir parçaları Çakıl taşları Su Bu maddelerin oluşturduğu aşağıdaki karışımlardan hangisi sadece süzme yöntemi kullanılarak ayrılabilir...",
    "options": [
      "Mercimek, çakıl taşları, tuz ve su",
      "Çakıl taşları, tuz, demir parçaları ve su",
      "Tuz ve demir parçaları",
      "Su ve demir parçaları ( Ç 16.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mercimek, çakıl taşları, tuz ve su"
  },
  {
    "id": "fen-4-pdf-u10-q2",
    "unitId": "fen-4-pdf-u10",
    "text": "Sınıfta yapılan bir etkinlik şekilde verilmiştir. Tabaktaki su konuluyor. Bu etkinlikte aşağıdakilerden hangisi gözlemlenir...",
    "options": [
      "atı maddenin belirli bir şeklinin olduğu",
      "Bütün maddelerin hâl değiştirebildiği",
      "Bütün maddelerin akışkan olduğu",
      "atı maddenin bulunduğu kabı tamamen doldurduğu ( Ç 17.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bütün maddelerin akışkan olduğu"
  },
  {
    "id": "fen-4-pdf-u10-q3",
    "unitId": "fen-4-pdf-u10",
    "text": "Bir öğrenci sınıfta aşağıdaki etkinlikleri yapmıştır. • İçinde su bulunan bir bardağı terazide tartarak 300 gram olduğunu bulmuştur. • Suyu boşaltıp bardağı tartarak 50 gram olduğunu bulmuştur. Öğrenci elde ettiği bu sonuçlarla aşağıdakilerden hangisini hesaplayabilir...",
    "options": [
      "Bardak ve suyun hacimleri arasındaki farkı",
      "Suyun kütlesini ve bardağın hacmini",
      "Bardaktaki suyun kütlesini",
      "Bardağın hacmini ( Ç 20.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Bardaktaki suyun kütlesini"
  },
  {
    "id": "fen-4-pdf-u10-q4",
    "unitId": "fen-4-pdf-u10",
    "text": "Tabloda maddelerin sahip olduğu özellikler “✔” işareti ile belirtilmiştir. Suda yüzer Mıknatısla çekilir Suyu çekmez ● ✔ ■ ✔ ✔ ★ ✔ ✔ Buna göre, ●, ■, ★ ile gösterilen maddeler aşağıdakilerin hangisinde doğru verilmiştir... ● ■ ★",
    "options": [
      "Çakıl taşı Plastik top Demir çivi",
      "Demir çivi umaş Sünger",
      "umaş Demir çivi Çakıl taşı",
      "Plastik top Çakıl taşı Demir çivi ( Ç 18.SORU)"
    ],
    "correctIndex": 3,
    "explanation": "Do?ru cevap: Plastik top Çakıl taşı Demir çivi ( Ç 18.SORU)"
  },
  {
    "id": "fen-4-pdf-u10-q5",
    "unitId": "fen-4-pdf-u10",
    "text": "İki farklı kumaş parçası üzerine aynı miktarda su dökülüyor. Birinci kumaş suyu emerken ikinci kumaş üzerine dökülen su, kumaş üzerinde kalıyor. Bu iki kumaşın aşağıdakilerin hangisindeki gibi kullanımı uygundur...",
    "options": [
      "Birincisi çanta yapımında, ikincisi temizlik bezi olarak",
      "Birincisi havlu olarak, ikincisi şemsiye yapımında",
      "Birincisi yağmurluk yapımında, ikincisi havlu olarak",
      "Birincisi şemsiye yapımında, ikincisi temizlik bezi olarak ( Ç 14.SORU) TEST 2"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Birincisi çanta yapımında, ikincisi temizlik bezi olarak"
  },
  {
    "id": "fen-4-pdf-u10-q6",
    "unitId": "fen-4-pdf-u10",
    "text": "Bulunduğu kabın şeklini alan ve akışkan özelliğe sahip olan madde aşağıdakilerden hangisidir...",
    "options": [
      "âğıt",
      "Çivi",
      "Su",
      "Buz ( Ç 15.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Su"
  },
  {
    "id": "fen-4-pdf-u10-q7",
    "unitId": "fen-4-pdf-u10",
    "text": "Cam bilye, demir tozu ve toz şeker karışımı ayrıştırılmak isteniyor. Bunun için aşağıdakilerin hangisinde verilenler kullanılır...",
    "options": [
      "Yalnızca mıknatıs",
      "Elek ve mıknatıs",
      "Süzgeç ve bir kap içinde su",
      "Mıknatıs ve bir kap içinde su ( Ç 20.SORU)"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnızca mıknatıs"
  },
  {
    "id": "fen-4-pdf-u10-q8",
    "unitId": "fen-4-pdf-u10",
    "text": "Can, bir kaptaki suyu ısıtarak deney yapıyor. Su Isıtılıyor Can, bu deneyde suyun katı hâlini de gözlemlemek isterse deneyde aşağıdakilerden hangisini yapmalıdır...",
    "options": [
      "Isıtma işlemine devam etmelidir.",
      "abın üzerini kapakla kapatmalıdır.",
      "Suyu donması için buzdolabına koymalıdır.",
      "Su kaynarken üzerine çok soğuk su eklemelidir.( Ç 18.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: abın üzerini kapakla kapatmalıdır."
  },
  {
    "id": "fen-4-pdf-u10-q9",
    "unitId": "fen-4-pdf-u10",
    "text": "Şekilde bazı araç-gereçler ve içinde süt bulunan şişe verilmiştir. Bardaklar Süt terazi Dereceli kap Bir öğrenci bu şişedeki sütün hacmini bulmak için, verilen araç-gereçlerle aşağıdakilerden hangisini yapmalıdır...",
    "options": [
      "Sütü bardaklara boşaltıp şişeyi eşit kollu terazide tartmalı.",
      "Sütü dereceli kaba boşaltıp bu kaptaki süt seviyesine bakmalı.",
      "Şişeyi eşit kollu terazide tarttıktan sonra sütü boşaltıp şişeyi tekrar tartmalı.",
      "Dereceli kabı eşit kollu terazide tartıp sütü bu kaba boşaltıp tekrar tartmalı. ( Ç 16.SORU)"
    ],
    "correctIndex": 2,
    "explanation": "Do?ru cevap: Şişeyi eşit kollu terazide tarttıktan sonra sütü boşaltıp şişeyi tekrar tartmalı."
  },
  {
    "id": "fen-4-pdf-u10-q10",
    "unitId": "fen-4-pdf-u10",
    "text": "Ahmet, buzdolabından aldığı soğuk suyu rahat içemiyor. İçine biraz sıcak su ekliyor. Bunun sonucu olarak aşağıdakilerden hangisi gerçekleşmiştir...",
    "options": [
      "Soğuk ve sıcak su arasında ısı alışverişi olmuştur.",
      "Bardaktaki suyun kütlesi azalmıştır.",
      "Suyun tamamı gaz hâline gelmiştir.",
      "Bardaktaki su soğumuştur. ( Ç 17.SORU)"
    ],
    "correctIndex": 1,
    "explanation": "Do?ru cevap: Bardaktaki suyun kütlesi azalmıştır."
  },
  {
    "id": "sosyal-4-pdf-u1-q1",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Bir insanı başkalarından özgün kılan nitelik öncelikle aşağıdakilerden hangisidir...",
    "options": [
      "Farklılıklarının olması",
      "Sorumluluklarını yerine getirmesi",
      "Okur-yazar olması",
      "Çalışkan olması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Farklılıklarının olması"
  },
  {
    "id": "sosyal-4-pdf-u1-q2",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Aşağıdakilerden hangisi, insanların duygu ve düşüncelerinin birbirinden farklı olduğuna örnek olur...",
    "options": [
      "ulüp çalışmalarında, üyelerin birbirleriyle yardımlaşması",
      "Okul içinde herkesin görev ve sorumluluklarını yerine getirmesi",
      "Ailenin ortaklaşa kararıyla evin ihtiyaçlarının belirlenmesi",
      "Arkadaşlarımızın, aynı olay hakkında farklı yorumlarda bulunması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ulüp çalışmalarında, üyelerin birbirleriyle yardımlaşması"
  },
  {
    "id": "sosyal-4-pdf-u1-q3",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Aynı sınıfta bulunan iki yakın arkadaştan biri resim yapmayı çok severken, diğeri fotoğraf çekmeyi daha çok seviyor. Yukarıdaki açıklamada iki arkadaşın bireysel farklılıklarından hangisi vurgulanmıştır...",
    "options": [
      "İlgiler ve beceriler",
      "Fiziki özellikler",
      "imlik özellikleri",
      "Soy ağacı bilgileri"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İlgiler ve beceriler"
  },
  {
    "id": "sosyal-4-pdf-u1-q4",
    "unitId": "sosyal-4-pdf-u1",
    "text": "ızılay, kendi imkânları ile eğitimini sürdüremeyen başarılı öğrencilere karşılıksız burs vermektedir. Bu durum, aşağıdaki kavramlardan hangisine örnek olur...",
    "options": [
      "amuoyu",
      "Yardımlaşma",
      "Tüketim",
      "İletişim"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: amuoyu"
  },
  {
    "id": "sosyal-4-pdf-u1-q5",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Lale, küçük kardeşinin evde gürültü yaparak oyun oynamasından rahatsız olmasına rağmen çoğu zaman kardeşinin gürültü yapmasına ses çıkarmıyor, bazen de onu üzmeden güzelce uyarıyor. Bu durum, Lale’nin aşağıdaki özelliklerden hangisine sahip olduğuna örnek olur...",
    "options": [
      "Çalışkan",
      "Tutumlu",
      "Düzenli",
      "Hoşgörülü 6. Bir kişinin gelişimine ait görseller kronolojik sıraya konulduğunda yukarıdakilerden hangisi ilk sırada yer alır..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Çalışkan"
  },
  {
    "id": "sosyal-4-pdf-u1-q6",
    "unitId": "sosyal-4-pdf-u1",
    "text": "‘‘erem sarı saçlı, ela gözlü, beyaz tenli bir çocuktur.’’ Bu cümle ile, erem’in hangi tür özellikleri belirtilmiştir...",
    "options": [
      "Fiziksel",
      "Bireysel",
      "Zihinsel",
      "Duygusal"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Fiziksel"
  },
  {
    "id": "sosyal-4-pdf-u1-q7",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Nüfus cüzdanını inceleyen Sinem, aşağıdakilerden hangisi hakkında bilgi sahibi olamaz...",
    "options": [
      "T.C. kimlik numarası",
      "İkametgâh adresi",
      "Doğum yeri",
      "an grubu 10. endilerini bize böyle tanıtan Murat ve Yusuf’un ortak yönleri, aşağıdakilerden hangisidir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: T.C. kimlik numarası"
  },
  {
    "id": "sosyal-4-pdf-u1-q8",
    "unitId": "sosyal-4-pdf-u1",
    "text": "“Ülkemizde yaşanan doğal afetler bu kulübe girmemde etkili oldu. Afete uğramış insanlara yardım etmeyi çok istiyorum.” diyen übra, aşağıdaki kulüplerden hangisine üyedir...",
    "options": [
      "Spor",
      "ütüphanecilik",
      "Gezi ve Gözlem",
      "Sivil Savunma Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Spor"
  },
  {
    "id": "sosyal-4-pdf-u1-q9",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Nüfus cüzdanımızda bulunan aşağıdaki bilgilerden hangisi kesinlikle kişiye özeldir...",
    "options": [
      "Doğum yeri",
      "Doğum yılı",
      "T.C. kimlik numarası",
      "Nüfusa kayıtlı olduğu il Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Doğum yeri"
  },
  {
    "id": "sosyal-4-pdf-u1-q10",
    "unitId": "sosyal-4-pdf-u1",
    "text": "Selim, ikinci sınıfa geçti. Selim’in yaşamına ait verilen gelişmelerin kronolojik olarak doğru sıralanışı, aşağıdakilerden hangisidir...",
    "options": [
      "3, 2, 1, 4",
      "1, 2, 4, 3",
      "1, 3, 4 ,2",
      "3, 1, 2 ,4 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 3, 2, 1, 4"
  },
  {
    "id": "sosyal-4-pdf-u2-q1",
    "unitId": "sosyal-4-pdf-u2",
    "text": "ardeşim doğduktan bir yıl sonra Amerika’ya gittik. Bu olayların kronolojik sıralaması aşağıdakilerin hangisinde verilmiştir...",
    "options": [
      "1 – 2 – 4 – 3",
      "2 – 1 – 4 – 3",
      "2 – 3 – 1 – 4",
      "4 – 1 – 3 – 2"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 – 2 – 4 – 3"
  },
  {
    "id": "sosyal-4-pdf-u2-q2",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Aşağıdakilerin hangisinde söz edilen özelliklerin tamamı fiziksel özelliklerdir...",
    "options": [
      "Eski fotoğraflarına bakarken şimdiki kısacık saçlarının yerine uzun ve dalgalı saçları olduğunu hatırladı.",
      "Maçın son dakikasında kısa boylu futbolcunun attığı gol beni çok heyecanlandırdı.",
      "Lapa lapa yağan karın altında hızlı adımlarla yürümeye çalışan yaşlı kadını kaygıyla izliyordu.",
      "Uzun parmaklarıyla çaldığı piyanonun sesini duyanlar hüzünlenerek uzaklara daldı. 16. söylemeyi çok seviyorum. III. 1 m 60 cm boyunda, 46 kg IV. ahverengi uzun ve düz saçlarım var. Sanem’in verdiği bilgilerden hangisi ya da hangileri bireysel farklılık değildir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Eski fotoğraflarına bakarken şimdiki kısacık saçlarının yerine uzun ve dalgalı saçları olduğunu hatırladı."
  },
  {
    "id": "sosyal-4-pdf-u2-q3",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Bir kişinin soyunu gösteren çizelgeye “soy ağacı” denir. Yukarıdakilerden hangisi ya da hangileri doğrudur...",
    "options": [
      "1 ve 2",
      "2 ve 3",
      "3 ve 4",
      "1, 2 ve 3 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 2"
  },
  {
    "id": "sosyal-4-pdf-u2-q4",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Düz siyah saçlıyım. Yukarıda verilenlerin hangileri fiziksel özelliklerimizdendir...",
    "options": [
      "1 ve 2",
      "2 ve 3",
      "2 ve 4",
      "1 ve 3"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 2"
  },
  {
    "id": "sosyal-4-pdf-u2-q5",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Nüfus cüzdanında bulunan bilgilerden hareketle aşağıdakilerden hangisini öğrenmek mümkündür...",
    "options": [
      "Cinsiyet",
      "Boy",
      "işilik",
      "Meslek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Cinsiyet"
  },
  {
    "id": "sosyal-4-pdf-u2-q6",
    "unitId": "sosyal-4-pdf-u2",
    "text": "15 yaşına gelen her bireyin nüfus cüzdanında fotoğrafı bulunur. Yukarıda nüfus cüzdanı ile ilgili verilen numaralanmış bilgilerden hangileri doğrudur...",
    "options": [
      "1 ve 2",
      "1 ve 3",
      "2 ve 3",
      "1, 2 ve 3"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 2"
  },
  {
    "id": "sosyal-4-pdf-u2-q7",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Aşağıdakilerden hangisi bizi diğer insanlardan farklı kılan özelliklerimizden değildir...",
    "options": [
      "Parmak izimiz",
      "Temel ihtiyaçlarımız",
      "Fiziksel özelliklerimiz",
      "İlgi ve yeteneklerimiz 22. Ege Berk yukarıdaki anlatımında size hangi özelliğinden söz etmemiştir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Parmak izimiz"
  },
  {
    "id": "sosyal-4-pdf-u2-q8",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Yetenekleri Bu resme bakılarak çocuklarla ilgili yukarıdakilerden hangileri hakkında bilgi edinilebilir...",
    "options": [
      "Yalnız 1",
      "1 ve 2",
      "2 ve 3",
      "1, 2 ve 3 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız 1"
  },
  {
    "id": "sosyal-4-pdf-u2-q9",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Bizi diğer insanlardan ayıran bazı özelliklerimiz vardır. Bunlardan biri olan - - - -, suçluların tespitinde çok önemli bir delil niteliği taşımaktadır. Okuma yazma bilmeyen insanların resmî işlerini yapabilmeleri için de imza işlevi gören bu özellikten faydalanılmaktadır. Bu parçada boş bırakılan yere aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "göz retinası",
      "parmak izi",
      "kan grubu",
      "saç rengi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: göz retinası"
  },
  {
    "id": "sosyal-4-pdf-u2-q10",
    "unitId": "sosyal-4-pdf-u2",
    "text": "Selin, kitap okumaktan zevk alır, keman çalabilir. Ece, satranç oynamayı sever, matematikte hızlı hesap yapabilir. Arda, resim yapmaktan çok hoşlanır, futbol oynayabilir. Bu bilgilerden hareketle aşağıdakilerden hangisine ulaşılabilir...",
    "options": [
      "İlgi duyduğumuz alanlarda uzmanlaşabiliriz.",
      "Yaşımız büyüdükçe ilgi alanlarımız değişebilir.",
      "Her birimiz farklı ilgi ve yeteneklere sahip olabiliriz.",
      "Yetenek alanlarımızda tanınmış kişilerin başarılarını öğrenebiliriz."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İlgi duyduğumuz alanlarda uzmanlaşabiliriz."
  },
  {
    "id": "sosyal-4-pdf-u3-q1",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Birinci yaş doğum günümü kutladım. Nil’in verdiği bilgilerin kronolojik olarak sıralanmış hâli aşağıdakilerden hangisidir...",
    "options": [
      "1, 2, 3",
      "2, 3, 1",
      "3, 2, 1",
      "2, 1, 3 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1, 2, 3"
  },
  {
    "id": "sosyal-4-pdf-u3-q2",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Aşağıdakilerden hangisi temel ihtiyaçlar arasında yer almaz...",
    "options": [
      "Uyku",
      "Beslenme",
      "Giyinme",
      "Başarı Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Uyku"
  },
  {
    "id": "sosyal-4-pdf-u3-q3",
    "unitId": "sosyal-4-pdf-u3",
    "text": "İnsanların sağlıklı bir şekilde hayatını devam ettirmesi için gerekli olan ve giderilmediğinde hayati sorunlara yol açan ihtiyaçlar temel ihtiyaçlardır. Buna göre, aşağıdakilerden hangisi temel ihtiyaçlarımızdan biri değildir...",
    "options": [
      "Seyahate çıkmak",
      "Giyinmek",
      "Uyumak",
      "Yemek yemek"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Seyahate çıkmak"
  },
  {
    "id": "sosyal-4-pdf-u3-q4",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Meral, hayatındaki önemli gelişmeleri kronolojik olarak aşağıdaki gibi sıralamıştır. Sıralama yaparken bir hata yapmıştır. ’da doğdum. ’de yürümeye başladım ’da ilkokula başladım. ’te kardeşim doğdu. ’de gitar kursuna başladım. 1 2 3 4 5 Meral’in kronolojik sıralamasının doğru olması için kaç numaralı olaylar birbiriyle yer değiştirmelidir...",
    "options": [
      "1 ve 3",
      "2 ve 4",
      "3 ve 4",
      "4 ve 5"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 3"
  },
  {
    "id": "sosyal-4-pdf-u3-q5",
    "unitId": "sosyal-4-pdf-u3",
    "text": "İnsan duygu, düşünce ve karakteriyle ya da dış görünüşüyle başka insanlardan ayrılabilir. Ancak bu ayrım insanlar arasında bir üstünlük ya da eksiklik nedeni değildir. Bu farklılık doğal karşılanmalı ve bir zenginlik olarak görülmelidir. Verilen metne göre, aşağıdaki yorumlardan hangisi yapılabilir...",
    "options": [
      "İnsanları dış görünüşlerine göre yargılamalıyız.",
      "Bireysel farklılıklara saygılı olmalıyız.",
      "İnsanların karakterlerini değiştirmeye çalışmalıyız.",
      "Herkesin bizimle aynı düşünceye sahip olmasını sağlamalıyız. 31. Merhaba, adım emal. 8 yaşımdan beri piyano çalıyorum. Piyano çalarken aynı zamanda şarkı söylemek için ses eğitimi aldım. İleride dünyaca ünlü senfoni orkestralarında çalmayı hayal ediyorum. Buna göre, emal’in aşağıdaki alanlardan hangisine yeteneği vardır..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İnsanları dış görünüşlerine göre yargılamalıyız."
  },
  {
    "id": "sosyal-4-pdf-u3-q6",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Bir sınıftaki öğrenciler maddi durumu iyi olmayan aileler için kampanya başlatmışlardır. endilerini ihtiyaçları olan bu ailelerin çocukları yerine koyarak, onların ne kadar zorluk çektiklerini anlamaya çalışmışlardır. Bu nedenle bazıları harçlıklarından biriktirerek, bazıları da giymediği kıyafetleri toplayarak ihtiyacı olan bu çocuklara göndermişlerdir. Öğrencilerin bu örnek davranışları aşağıdaki kavramlardan hangisiyle ifade edilebilir...",
    "options": [
      "Empati",
      "Ön yargı",
      "Güven",
      "Özgürlük"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Empati"
  },
  {
    "id": "sosyal-4-pdf-u3-q7",
    "unitId": "sosyal-4-pdf-u3",
    "text": "ardelen, çizim yapmaya ilgi duyan bir öğrencidir. Çizimlerinde kullandığı renklerin hayal dünyasını yansıttığını düşünmektedir. Bu ilgisi nedeniyle okulundaki sosyal kulüplerden birine katılacaktır. Buna göre, ardelen aşağıdaki sosyal kulüplerden hangisine katılmalıdır...",
    "options": [
      "Folklor kulübü",
      "Resim kulübü",
      "Çevre koruma kulübü",
      "Bilinçli tüketici kulübü Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Folklor kulübü"
  },
  {
    "id": "sosyal-4-pdf-u3-q8",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Aşağıda Ömer’in hayatındaki önemli gelişmeler numaralandırılarak karışık olarak verilmiştir. ’da doğdum. ’te anaokuluna başladım. ’de gitar kursuna başladım. 1 2 ’de kardeşim doğdu. ’da konuşmaya başladım. 4 Annnnnee ... Bu gelişmelerin kronolojik sıralaması aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir...",
    "options": [
      "1 - 4 - 3 - 2 - 5",
      "1 - 2 - 3 - 4 - 5",
      "2 - 4 - 1 - 3 - 5",
      "5 - 4 - 3 - 2 - 1 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 4 - 3 - 2 - 5"
  },
  {
    "id": "sosyal-4-pdf-u3-q9",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Her insanın fiziksel özellikleri, kişilik özellikleri ve yetenekleri birbirinden farklıdır. Bu nedenle toplumsal ilişkilerimizde kendimizi karşımızdaki insanın yerine koyarak duygularını ve düşüncelerini anlamaya çalışmalıyız. Buna - - - - denilmektedir. Verilen metinde boş bırakılan yere aşağıdakilerden hangisi yazılmalıdır...",
    "options": [
      "yetenek",
      "istek",
      "ayrıcalık",
      "empati Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: yetenek"
  },
  {
    "id": "sosyal-4-pdf-u3-q10",
    "unitId": "sosyal-4-pdf-u3",
    "text": "Merhaba, ben Derya. 6 yaşından beri piyano çalıyorum. İlk duyduğum melodiyi hemen çalabilirim. Amacım müzik alanında eğitim almak. Ayrıca şiir okumaktan ve dinlemekten hoşlanırım. Buna göre, Derya’nın sahip olduğu yetenek ve ilgi konusunda aşağıdakilerden hangisi söylenebilir...",
    "options": [
      "Derya birçok alanda yeteneklidir.",
      "Derya’nın yeteneği şiir okumadır.",
      "Derya piyano çalmada yetenekli, şiir okumaya ise ilgilidir.",
      "Derya hem şiir okuma hem de piyano çalmada yeteneklidir."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Derya birçok alanda yeteneklidir."
  },
  {
    "id": "sosyal-4-pdf-u4-q1",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Yeni kimlik kartlarıyla ilgili aşağıdakilerden hangisi yanlıştır...",
    "options": [
      "On yıl boyunca geçerlidir.",
      "İmza bölümü bulunmaktadır.",
      "Aile bireylerimizin T.C. kimlik numaraları aynıdır.",
      "Akıllı kart özelliği kazandıran elektronik çip bulunmaktadır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: On yıl boyunca geçerlidir."
  },
  {
    "id": "sosyal-4-pdf-u4-q2",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Yusuf, yaşamındaki önemli olaylarla ilgili fotoğraflı bir zaman şeridi hazırlamıştır. Ancak kronolojik sıralamasında bir hata yapmıştır. ’da doğdum. ’te anaokuluna başladım. ’de kardeşim doğdu. Bir yaşında konuşmaya başladım. 3 Annnnnee ... Üçüncü sınıfa giderken gitar kursuna başladım. Yusuf’un zaman şeridindeki sıralamasının doğru olması için kaç numaralı olaylar yer değiştirmelidir...",
    "options": [
      "1 ve 2",
      "2 ve 3",
      "3 ve 4",
      "4 ve 5"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 2"
  },
  {
    "id": "sosyal-4-pdf-u4-q3",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Yeni kimlik kartlarıyla ilgili aşağıda verilen bilgilerden hangisi doğrudur...",
    "options": [
      "Her 5 yılda bir değiştirilmesi zorunludur.",
      "adınlara pembe, erkeklere mavi renkli kimlik verilmektedir.",
      "T.C. kimlik numaralarımız aile büyüklerimizle aynıdır.",
      "Akıllı kart özelliği kazandıran elektronik çip bulunmaktadır. Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Her 5 yılda bir değiştirilmesi zorunludur."
  },
  {
    "id": "sosyal-4-pdf-u4-q4",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Ece’nin yaşamındaki bazı olaylar aşağıda karışık olarak verilmiştir. ’da doğdum. ’da birinci sınıfa başladım. ’te kreşe başladım. Bir yaşında yürümeye başladım. Üçüncü sınıftayken İstanbul’a taşındık. 1 2 3 4 5 Ece’nin yaşamına ait bu olayların kronolojik sıralaması aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir...",
    "options": [
      "2 - 1 - 5 - 3 - 4",
      "3 - 1 - 5 - 4 - 2",
      "3 - 4 - 1 - 2 - 5",
      "2 - 4 - 3 - 1 - 5 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 2 - 1 - 5 - 3 - 4"
  },
  {
    "id": "sosyal-4-pdf-u4-q5",
    "unitId": "sosyal-4-pdf-u4",
    "text": "(1) Aslı yaşıtlarına göre uzun boylu bir çocuk. (2) itap okumaktan zevk alıyor. (3) Beş yaşından beri keman çalabiliyor. (4) onservatuvarda müzik eğitimi almayı çok istiyor. Bu metinde numaralanmış cümlelerin hangisinde Aslı’nın yeteneğinden söz edilmiştir...",
    "options": [
      "4 Ç 43. T.C. 31.12. T.C. imlik No / TR /dentity No Soyadı / Surname Adı / Given Name(s) Doğum Tarihi / Date of Birth 01.01. Seri No / Document No Son Geçerlilik / Valid Until Cinsiyeti / Gender Uyruğu / Nationality Görseli verilen kimlik kartıyla ilgili aşağıdakilerden hangisi doğrudur...",
      "yılının sonuna kadar geçerlidir.",
      "imlik kartının sahibi erkektir.",
      "T.C. kimlik numarası on rakamdan oluşmaktadır."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4 Ç 43. T.C. 31.12. T.C. imlik No / TR /dentity No Soyadı / Surname Adı / Given Name(s) Doğum Tarihi / Date of Birth 01.01. Seri No / Document No Son Geçerlilik / Valid Until Cinsi"
  },
  {
    "id": "sosyal-4-pdf-u4-q6",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Merhaba, ben Orhan. 10 yaşındayım ve 7 yaşından beri futbol oynuyorum. Futbola olan ilgimde babamın etkisi çok fazla oldu. Daha iyi futbol oynayabilmek ve kendimi geliştirebilmek için belediyenin açmış olduğu futbol okuluna gidiyorum. Ayrıca bağlama çalmayı ve türkü söylemeyi de seviyorum. Buna göre, Orhan’la ilgili aşağıdakilerden hangisi söylenemez...",
    "options": [
      "Birden fazla ilgi alanı vardır.",
      "Bağlama çalmayı futbol oynamaya tercih etmiştir.",
      "endini geliştirmeye açık bir kişiliğe sahiptir.",
      "İlgilerinin oluşmasında ailesi etkili olmuştur."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Birden fazla ilgi alanı vardır."
  },
  {
    "id": "sosyal-4-pdf-u4-q7",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Büşra, yaşamındaki önemli olaylarla ilgili bir zaman şeridi hazırlamıştır. Ancak zaman şeridinin kronolojik sıralamasında bir hata yapmıştır. ’da Malatya’da doğdum. 1 yaşında konuşmaya başladım. ’da kardeşim doğdu. ’te Antalya’ya taşındık. yılında ilkokula başladım. ’te üçüncü sınıfı bitirdim. Bu zaman şeridindeki kronolojik sıralamanın doğru olması için kaç numaralı olaylar yer değiştirmelidir...",
    "options": [
      "1 ve 6",
      "2 ve 3",
      "4 ve 5",
      "5 ve 6"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 6"
  },
  {
    "id": "sosyal-4-pdf-u4-q8",
    "unitId": "sosyal-4-pdf-u4",
    "text": "Levent, 05.09. tarihinde yapılan bir sınava görseli verilen kimlik kartıyla girmek istediğinde görevliler bu kimlik kartının geçersiz olduğunu söylemiştir. E/M YIL*** T.C/TUR 12.10. 00A***** T.C. imlik No / TR /dentity No Soyadı / Surname Adı / Given Name(s) Doğum Tarihi / Date of Birth 01.01. Seri No / Document No Son Geçerlilik / Valid Until Cinsiyeti / Gender Uyruğu / Nationality Bu durumun yaşanmasının sebebi aşağıdakilerden hangisi olabilir...",
    "options": [
      "Levent’in Türkiye Cumhuriyeti vatandaşı olmaması",
      "imlik kartının kullanım süresinin dolmuş olması",
      "Doğum tarihinin olmaması",
      "imlik kartının fotoğrafsız olması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Levent’in Türkiye Cumhuriyeti vatandaşı olmaması"
  },
  {
    "id": "sosyal-4-pdf-u4-q9",
    "unitId": "sosyal-4-pdf-u4",
    "text": "İlk şiirimi 1.sınıfta okudum. Ezgi’nin verdiği bilgilerin kronolojik olarak doğru sıralanmış hali aşağıdakilerden hangisidir...",
    "options": [
      "1 - 2 - 3",
      "2 - 3 - 1",
      "1 - 3 - 2",
      "2 - 1 - 3"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 2 - 3"
  },
  {
    "id": "sosyal-4-pdf-u4-q10",
    "unitId": "sosyal-4-pdf-u4",
    "text": "urtuluş Savaşı sırasında Doğu Cephesi’nde aşağıdakilerden hangisi ile savaşılmıştır...",
    "options": [
      "Yunanlılar",
      "Fransızlar",
      "İngilizler",
      "Ermeniler"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yunanlılar"
  },
  {
    "id": "sosyal-4-pdf-u5-q1",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Türkiye Büyük Millet Meclisinin açılması 4 Mustafa emal Paşa’ya “Gazi” unvanının verilmesi Verilen olayların oluş sırası aşağıdakilerden hangisinde doğru olarak verilmiştir...",
    "options": [
      "4 - 1 - 3 - 2",
      "2 - 1 - 3 - 4",
      "1 - 2 - 3 - 4",
      "4 - 3 - 2 - 1"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 4 - 1 - 3 - 2"
  },
  {
    "id": "sosyal-4-pdf-u5-q2",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Osmanlı Devleti’nin yıkılmasına neden olan Birinci Dünya Savaşı, hangi tarihler arasında gerçekleşmiştir...",
    "options": [
      "1939 - 1945",
      "1919 - 1924",
      "1914 - 1918",
      "1881 - 1900"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1939 - 1945"
  },
  {
    "id": "sosyal-4-pdf-u5-q3",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Mudanya Ateşkes Antlaşması’yla savaş yapılmadan düşman işgalinden kurtarılan şehir, aşağıdakilerden hangisidir...",
    "options": [
      "İstanbul",
      "Gaziantep",
      "İzmir",
      "ars"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İstanbul"
  },
  {
    "id": "sosyal-4-pdf-u5-q4",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Mondros Ateşkes Antlaşması’ndan sonra İzmit, Eskişehir, Afyon, Samsun, Merzifon ve Batum gibi şehirler, aşağıdaki devletlerden hangisi tarafından işgal edilmiştir...",
    "options": [
      "Rusya",
      "İngiltere",
      "Fransa",
      "İtalya"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Rusya"
  },
  {
    "id": "sosyal-4-pdf-u5-q5",
    "unitId": "sosyal-4-pdf-u5",
    "text": "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı’nın kutlanmasına neden olan gelişme, aşağıdakilerden hangisidir...",
    "options": [
      "1. İnönü Savaşı’nın kazanılması",
      "Cumhuriyet’in ilân edilmesi",
      "Mustafa emal’in Samsun’a çıkması",
      "Ankara’da Büyük Millet Meclisinin açılması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1. İnönü Savaşı’nın kazanılması"
  },
  {
    "id": "sosyal-4-pdf-u5-q6",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Atatürk, olayları iyi değerlendirerek, sonuçları önceden tahmin ederdi. Bu durum, Atatürk’ün kişilik özelliklerinden en çok hangisiyle ilgilidir...",
    "options": [
      "İleri görüşlülüğü",
      "Vatanseverliği",
      "ararlılığı",
      "Çalışkanlığı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İleri görüşlülüğü"
  },
  {
    "id": "sosyal-4-pdf-u5-q7",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Atatürk’ün annesinin adı, aşağıdakilerden hangisidir...",
    "options": [
      "Ayşe Hanım",
      "Makbule Hanım",
      "Zübeyde Hanım",
      "Ülkü Hanım"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ayşe Hanım"
  },
  {
    "id": "sosyal-4-pdf-u5-q8",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Mondros Ateşkes Anlaşması’na göre, İtalyanlar aşağıdakilerden hangisini işgal etmişlerdir...",
    "options": [
      "İzmir",
      "Antalya",
      "Antep",
      "Samsun"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İzmir"
  },
  {
    "id": "sosyal-4-pdf-u5-q9",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Aşağıdaki olaylardan hangisi diğerlerinden daha sonra meydana gelmiştir...",
    "options": [
      "Mustafa emal’in Samsun’a çıkışı",
      "Amasya Genelgesi",
      "Sivas ongresi",
      "Erzurum ongresi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mustafa emal’in Samsun’a çıkışı"
  },
  {
    "id": "sosyal-4-pdf-u5-q10",
    "unitId": "sosyal-4-pdf-u5",
    "text": "Mustafa emal Paşa’ya “gazilik” unvanı hangi savaştaki başarısından dolayı verilmiştir...",
    "options": [
      "Büyük Taarruz",
      "1. İnönü Savaşı",
      "Başkumandan Meydan Muharebesi",
      "Sakarya Meydan Muharebesi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Büyük Taarruz"
  },
  {
    "id": "sosyal-4-pdf-u6-q1",
    "unitId": "sosyal-4-pdf-u6",
    "text": "urtuluş Savaşı’nda Doğu Anadolu’yu Ermenilerden kurtaran komutan, aşağıdakilerden hangisidir...",
    "options": [
      "Mustafa emal Paşa",
      "âzım arabekir Paşa",
      "Fevzi Paşa",
      "İsmet Paşa"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Mustafa emal Paşa"
  },
  {
    "id": "sosyal-4-pdf-u6-q2",
    "unitId": "sosyal-4-pdf-u6",
    "text": "“Türk milletinin yapısına en uygun olan yönetim, - - - - yönetimidir.” Atatürk’ün bu sözünde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir...",
    "options": [
      "mutlakiyet",
      "meşrutiyet",
      "oligarşi",
      "cumhuriyet"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: mutlakiyet"
  },
  {
    "id": "sosyal-4-pdf-u6-q3",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Aşağıdakilerden hangisi Millî Mücadele Dönemi’nde yaşanan gelişmelerden biri değildir...",
    "options": [
      "Türkiye Büyük Millet Meclisinin açılması",
      "İstanbul’un işgal edilmesi",
      "Mustafa emal’e “Atatürk” soyadının verilmesi",
      "Fransa ile Ankara Antlaşması’nın imzalanması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Türkiye Büyük Millet Meclisinin açılması"
  },
  {
    "id": "sosyal-4-pdf-u6-q4",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Mustafa emal, bağımsızlık savaşını başlatırken, öncelikle halkın bu konuda bilinçlendirilmesi için çalıştı. Aşağıdaki faaliyetlerden hangisi Mustafa emal’in bu amaçla yaptığı çalışmalardan biri değildir...",
    "options": [
      "Sivas ongresi’ni düzenlemesi",
      "Amasya Genelgesini yayımlaması",
      "Ankara’yı başkent yapması",
      "Erzurum ongresi’ni toplaması"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Sivas ongresi’ni düzenlemesi"
  },
  {
    "id": "sosyal-4-pdf-u6-q5",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Atatürk’ün urtuluş Savaşı’nı başlatmak için Samsun’a çıktığı günün anısına kutladığımız millî bayramımız, aşağıdakilerden hangisidir...",
    "options": [
      "29 Ekim Cumhuriyet Bayramı",
      "19 Mayıs Atatürk’ü Anma ve Gençlik ve Spor Bayramı",
      "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı",
      "30 Ağustos Zafer Bayramı 17. Sivas ongresi Yukarıda verilen görsele bakarak Sivas ongresi ile ilgili aşağıdakilerden hangisi söylenebilir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 29 Ekim Cumhuriyet Bayramı"
  },
  {
    "id": "sosyal-4-pdf-u6-q6",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Mustafa emal’e “Başkomutanlık” görevini aşağıdakilerden hangisi vermiştir...",
    "options": [
      "Ankara Valiliği",
      "Osmanlı padişahı",
      "Türkiye Büyük Millet Meclisi",
      "Erzurum ongresi’ne katılan üyeler 20. Verilen haritada, Mondros Ateşkes Antlaşması’ndan sonra Osmanlı topraklarını işgal eden devletlerin işgal ettiği bölgeler, romen rakamları ile gösterilmiştir. Buna göre, işgalci devletlerin işgal ettiği bölgeler, aşağıdakilerin hangisinde doğru olarak verilmiştir... 1 2 3 4"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ankara Valiliği"
  },
  {
    "id": "sosyal-4-pdf-u6-q7",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Türklerin uzun zamandır bu topraklarda yaşadığı",
    "options": [
      "Yalnız 1",
      "2 - 3",
      "3 - 4",
      "1 - 2 - 4"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız 1"
  },
  {
    "id": "sosyal-4-pdf-u6-q8",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Mektuptaki altı çizili cümlelerde, Türklerle ilgili aşağıdaki özelliklerden hangisi vurgulanmıştır...",
    "options": [
      "Adalet",
      "Egemenlik",
      "Bağımsızlık",
      "Eşitlik 23. Yukarıda verilen görsellerden hangisi Türk kültürünün manevî ögelerine örnek gösterilebilir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Adalet"
  },
  {
    "id": "sosyal-4-pdf-u6-q9",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Antep Yukarıda verilenlerden hangileri Mudanya Ateşkes Antlaşması ile savaş yapılmadan kurtarılmıştır...",
    "options": [
      "1 - 3",
      "2 - 3",
      "1 - 2",
      "2 - 4 1 32 4"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 3"
  },
  {
    "id": "sosyal-4-pdf-u6-q10",
    "unitId": "sosyal-4-pdf-u6",
    "text": "Millî Mücadele’nin devam ettiği yıllarda, Türk ordusu doğu illerimizi işgalden kurtarmak için aşağıdakilerden hangisiyle savaşmıştır...",
    "options": [
      "Rumlar",
      "Ermeniler",
      "Ruslar",
      "Fransızlar"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Rumlar"
  },
  {
    "id": "sosyal-4-pdf-u7-q1",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Mondros Ateşkes Antlaşması’ndan sonra başlayan işgallere karşı Türk halkının ilk tepkisi - - - -’nin oluşturulmasıdır. Verilen boşluk aşağıdakilerden hangisi ile doldurulmalıdır...",
    "options": [
      "uvayimilliye",
      "uva-i İnzibatiye",
      "Misakımilli",
      "Osmanlı Mebusan Meclisi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: uvayimilliye"
  },
  {
    "id": "sosyal-4-pdf-u7-q2",
    "unitId": "sosyal-4-pdf-u7",
    "text": "I Millî Mücadele yıllarında Türk milletinin yaptığı savaşların, yapıldığı tarihe göre doğru sıralanabilmesi için kaç numaralı savaşların yerleri değiştirilmelidir...",
    "options": [
      "1 - 2",
      "2 - 3",
      "1 - 4",
      "3 - 4"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 2"
  },
  {
    "id": "sosyal-4-pdf-u7-q3",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Giyim tarzı Edebî ürünler Dil Halk oyunları ....... Şemada “...” ile boş bırakılan yere aşağıdakilerden hangisinin yazılması en uygun olur...",
    "options": [
      "Gelenek",
      "Görenek",
      "Millî kültür",
      "Örf kuralları"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Gelenek"
  },
  {
    "id": "sosyal-4-pdf-u7-q4",
    "unitId": "sosyal-4-pdf-u7",
    "text": "saltanata olan bağlılığın artırılması durumlarından hangilerini hedeflemiş olabilir...",
    "options": [
      "Yalnız 2",
      "Yalnız 3",
      "1 ve 3",
      "1 ve 2"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız 2"
  },
  {
    "id": "sosyal-4-pdf-u7-q5",
    "unitId": "sosyal-4-pdf-u7",
    "text": "İstanbul Boğazı’nda düşman donanmasını gören Mustafa emal yaverine dönerek: “Geldikleri gibi giderler.” dedi. Bu söz, Mustafa emal’in aşağıdaki kişilik özelliklerinden hangisiyle ilişkilendirilemez...",
    "options": [
      "ararlılık",
      "Çalışkanlık",
      "Vatanseverlik",
      "İleri görüşlülük Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ararlılık"
  },
  {
    "id": "sosyal-4-pdf-u7-q6",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Mondros Ateşkes Anlaşması’na göre, aşağıdaki illerden hangisi Fransızlar tarafından işgal edilmiştir...",
    "options": [
      "Maraş",
      "İzmir",
      "Antalya",
      "Samsun Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Maraş"
  },
  {
    "id": "sosyal-4-pdf-u7-q7",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Doğu Trakya Yukarıda verilenlerden hangileri Mudanya Ateşkes Anlaşması ile savaş yapmadan geri aldığımız yerlerdendir...",
    "options": [
      "1 ve 2",
      "2 ve 3",
      "3 ve 4",
      "2 ve 4 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 ve 2"
  },
  {
    "id": "sosyal-4-pdf-u7-q8",
    "unitId": "sosyal-4-pdf-u7",
    "text": "urtuluş Savaşı’nın devam ettiği dönemde bile Ankara’daki meclise katılacak milletvekillerinin seçimle belirlenmesi aşağıdakilerden hangisine önem verildiğini gösterir...",
    "options": [
      "Barışçılığa",
      "Milliyetçiliğe",
      "Millî egemenliğe",
      "Bağımsızlığa Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Barışçılığa"
  },
  {
    "id": "sosyal-4-pdf-u7-q9",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Mustafa emal Paşa, “Ordular ilk hedefiniz Akdeniz’dir. İleri!” emrini, aşağıdaki savaşlardan hangisi sonrasında vermiştir...",
    "options": [
      "1. İnönü Savaşı",
      "Sakarya Savaşı",
      "Eskişehir - ütahya Savaşları",
      "Başkumandan Meydan Savaşı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1. İnönü Savaşı"
  },
  {
    "id": "sosyal-4-pdf-u7-q10",
    "unitId": "sosyal-4-pdf-u7",
    "text": "Bir toplumda görülen kültürel ögeler aynı şekilde başka bir toplumda görülmeyebilir. Mesela halk oyunları her bölgede farklı şekillerde karşımıza çıkar. Bu bilgide kültürün hangi özelliği vurgulanmıştır...",
    "options": [
      "Dinamik yapısı",
      "Toplumlara özgü oluşu",
      "Nesilden nesile aktarılması",
      "Zaman içinde değişebilirliği"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Dinamik yapısı"
  },
  {
    "id": "sosyal-4-pdf-u8-q1",
    "unitId": "sosyal-4-pdf-u8",
    "text": "İtilaf Devletleri ile Osmanlı Devleti arasında imzalanan Mondros Ateşkes Anlaşması’na göre; Türk ordusunun dağıtılmasına ve silahlarına el konulmasına karar verildi. İtilaf Devletleri, aldıkları bu kararla aşağıdakilerden hangisini amaçlamışlardır...",
    "options": [
      "1. Dünya Savaşı’nı sona erdirmeyi",
      "Erzurum ongresi’nin toplanmasına engel olmayı",
      "Yurdumuzun işgalini kolaylaştırmayı",
      "Anadolu’da düzenli bir ordunun kurulmasını sağlamayı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1. Dünya Savaşı’nı sona erdirmeyi"
  },
  {
    "id": "sosyal-4-pdf-u8-q2",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Mustafa emal, illerdeki askerî ve sivil idarecilere gizlice gönderdiği Havza Genelgesi ile onlardan, halkı işgaller konusunda bilgilendirmelerini, işgalleri protesto için mitingler düzenlemelerini istedi. Mustafa emal, bu isteğiyle aşağıdakilerden hangisini amaçlamıştır...",
    "options": [
      "Millî bilinci uyandırmayı",
      "Ekonomik bağımsızlığı sağlamayı",
      "Yeni inkılaplara ortam hazırlamayı",
      "Ulusal egemenliği gerçekleştirmeyi Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Millî bilinci uyandırmayı"
  },
  {
    "id": "sosyal-4-pdf-u8-q3",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Mondros Ateşkes Anlaşması’nın imzalanması Yukarıdaki gelişmelerden hangileri TBMM’nin açılmasından önce gerçekleşmiştir...",
    "options": [
      "Yalnız 1",
      "Yalnız 3",
      "1 ve 2",
      "2 ve 3 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yalnız 1"
  },
  {
    "id": "sosyal-4-pdf-u8-q4",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Yunan güçlerinin İzmir ve çevresini işgal etmesi üzerine Türk milletinin ilk tepkisi, aşağıdakilerden hangisi olmuştur...",
    "options": [
      "Ankara’da TBMM’yi açmak",
      "Erzurum ve Sivas ongreleri’ni toplamak",
      "Düzenli ordu birliklerini oluşturmak",
      "uvayimilliye birliklerini kurmak Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ankara’da TBMM’yi açmak"
  },
  {
    "id": "sosyal-4-pdf-u8-q5",
    "unitId": "sosyal-4-pdf-u8",
    "text": "TBMM’nin açılışı Yukarıdaki olayların kronolojik sıralaması aşağıdakilerden hangisidir...",
    "options": [
      "1 - 3 - 2 - 4 - 5",
      "2 - 1 - 3 - 5 - 4",
      "2 - 3 - 1 - 4 - 5",
      "3 - 2 - 1 - 5 - 4"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 3 - 2 - 4 - 5"
  },
  {
    "id": "sosyal-4-pdf-u8-q6",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Aşağıdakilerden hangisi millî kültürümüze örnek gösterilemez...",
    "options": [
      "Adana’nın bir köyünde yapılan kına gecesi",
      "Antalya’nın Belek beldesinde yapılan golf turnuvası",
      "onya’da yapılan Mevlana’yı anma törenleri",
      "Ankara’nın başkent oluşu sebebiyle yapılan halk oyunları gösterisi"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Adana’nın bir köyünde yapılan kına gecesi"
  },
  {
    "id": "sosyal-4-pdf-u8-q7",
    "unitId": "sosyal-4-pdf-u8",
    "text": "İkiz kardeşlerin nüfus cüzdanlarındaki bilgilerden hangisi kesinlikle farklı olur...",
    "options": [
      "an grubu",
      "Aile sıra no",
      "T.C. imlik no",
      "Nüfusa kayıtlı olduğu yer"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: an grubu"
  },
  {
    "id": "sosyal-4-pdf-u8-q8",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Çok heyecanlıyım. Bir hafta sonra anneannem gelecek. Anneannem bizde olacağı için önce bütün akrabalarımız bizi ziyaret edecekler. Büyüklerin ellerini öpüp onlardan bayram harçlığı alacağım. Yukarıda sözü edilen bayram aşağıdakilerden hangisi olabilir...",
    "options": [
      "Ramazan Bayramı",
      "Zafer Bayramı",
      "Cumhuriyet Bayramı",
      "Bahar Bayramı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ramazan Bayramı"
  },
  {
    "id": "sosyal-4-pdf-u8-q9",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Serin bahar meltemi Gibi beyaz bir gemi Samsun’a demir attı, Göklerimiz ağardı. Bu gemide inanan, Yurda şan, millete şan; Büyük, eşsiz kahraman Mustafa emal vardı. M. Necati ÖNGAY Yukarıdaki şiir aşağıdaki tarihlerden hangisi ile ilişkilidir...",
    "options": [
      "29 Ekim 1923",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "19 Mayıs 1919"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 29 Ekim 1923"
  },
  {
    "id": "sosyal-4-pdf-u8-q10",
    "unitId": "sosyal-4-pdf-u8",
    "text": "Futbol oyununa benzeyen “Tepük”, saklambaç oyununun benzeri olan “araguni” bir zeka ve strateji oyunu olan “Mangala” daha çok kız çocuklarının bez bebeklerle oynadığı “uzurcuk” günümüze kadar oynana gelmiş oyunlardır. Oyunların adları farklı olsa bile sistematiği aynıdır. Bu durum bize neyi gösterir...",
    "options": [
      "ültürel ögelerin devam ettiğini",
      "Oyunların adlarının değişmediğini",
      "Bu oyunların başka ülkelerde de oynandığını",
      "Bu oyunların günümüzde çok oynandığını Ç 46. I. II. III. IV. İtilaf Devletleri, Mondros Ateşkes Antlaşması’na dayanarak yurdumuzun dört bir yanını işgal etmeye başladılar. İtilaf Devletleri, numaralandırılmış alanlardan hangisini Ermenilere vermeyi planlamışlardır..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: ültürel ögelerin devam ettiğini"
  },
  {
    "id": "sosyal-4-pdf-u9-q1",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Yunanlıların İzmir’i işgali Yukarıdaki olayların kronolojik sıralaması hangi seçenekte doğru olarak verilmiştir...",
    "options": [
      "1 - 2 - 3",
      "3 - 2 - 1",
      "2 - 3 - 1",
      "1 - 3 - 2 Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 2 - 3"
  },
  {
    "id": "sosyal-4-pdf-u9-q2",
    "unitId": "sosyal-4-pdf-u9",
    "text": "• Geleneksel çocuk oyunlarımızdandır. • oyun, keçi veya danaların ön dizlerinde bulunan eklem kemikleri bazı işlemlerden geçirilerek bu oyunda materyal olarak kullanılır. • Günümüzde yerini cam misketler almıştır. Özellikleri verilen oyun aşağıdakilerden hangisidir...",
    "options": [
      "Aşık oyunu",
      "Saklambaç",
      "Topaç çevirme",
      "Dalye"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Aşık oyunu"
  },
  {
    "id": "sosyal-4-pdf-u9-q3",
    "unitId": "sosyal-4-pdf-u9",
    "text": "“Millî Mücadele Dönemi’nde birçok önemli savaş olmuştur. Bunlardan en önemlileri; 1. İnönü, 2. İnönü, Sakarya ve Büyük Taarruz’dur.” Yukarıda bahsedilen savaşlar hangi cephede yapılmıştır...",
    "options": [
      "Doğu",
      "Batı",
      "Güney",
      "uzey Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Doğu"
  },
  {
    "id": "sosyal-4-pdf-u9-q4",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Atatürk’ün Ankara’ya gelişi Bu olayların kronolojik sıralaması aşağıdakilerden hangisidir...",
    "options": [
      "1 - 2 - 3 - 4",
      "2 - 3 - 4 - 1",
      "2 - 3 - 1 - 4",
      "1 - 3 - 4 - 2"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1 - 2 - 3 - 4"
  },
  {
    "id": "sosyal-4-pdf-u9-q5",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Aşağıdakilerden hangisi Türk ulusunun dayanışmasına en güzel örnektir...",
    "options": [
      "Yeni yollar yapılması",
      "Millî Mücadele’nin kazanılması",
      "ızılay’ın kurulması",
      "Fakirlere sadaka verilmesi Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yeni yollar yapılması"
  },
  {
    "id": "sosyal-4-pdf-u9-q6",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Aşağıdakilerden hangileri Mustafa emal’in Milli Mücadele Dönemi’nde kongreler yaptığı şehirler arasında yer alır...",
    "options": [
      "Erzurum - Sivas",
      "Samsun - Amasya",
      "Trabzon - ars",
      "İstanbul - onya"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Erzurum - Sivas"
  },
  {
    "id": "sosyal-4-pdf-u9-q7",
    "unitId": "sosyal-4-pdf-u9",
    "text": "urtuluş Savaşı’nın Batı Cephesi ile ilgili aşağıdaki bilgilerden hangisi yanlıştır...",
    "options": [
      "Yunanlılarla mücadele edilmiştir.",
      "omutanı Albay İsmet Bey’dir.",
      "İnönü Savaşları yapılmıştır.",
      "En ünlü kahramanı Sütçü İmam’dır. Ç TEST 2"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yunanlılarla mücadele edilmiştir."
  },
  {
    "id": "sosyal-4-pdf-u9-q8",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Millî Mücadele için hazırlık yaparken Mustafa emal Paşa, aşağıdaki şehirlerden hangisinde toplantı yapmamıştır...",
    "options": [
      "Amasya",
      "onya",
      "Erzurum",
      "Sivas"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Amasya"
  },
  {
    "id": "sosyal-4-pdf-u9-q9",
    "unitId": "sosyal-4-pdf-u9",
    "text": "“Yolunda yürüyen bir yolcunun yalnız ufku görmesi kâfi (yeterli) değildir. Muhakkak ufkun ötesini de görmesi ve bilmesi lazımdır.” Mustafa emal’in bu sözü hangi özelliğini göstermektedir...",
    "options": [
      "İleri görüşlülük",
      "Vatanseverlik",
      "Açık sözlülük",
      "Barışseverlik"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İleri görüşlülük"
  },
  {
    "id": "sosyal-4-pdf-u9-q10",
    "unitId": "sosyal-4-pdf-u9",
    "text": "Mustafa emal Paşa, illerdeki asker ve sivil idarecilere gizlice gönderdiği Havza Genelgesi’yle onlardan halkı işgaller konusunda bilgilendirmelerini, işgalleri protesto için mitingler düzenlemelerini istedi. Mustafa emal bu isteği ile aşağıdakilerden hangisini amaçlamıştır...",
    "options": [
      "Toplumu çağdaşlaştırmayı",
      "Millî egemenliği sağlamayı",
      "Millî bilinci uyandırmayı",
      "Millî eğitimi gerçekleştirmeyi Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Toplumu çağdaşlaştırmayı"
  },
  {
    "id": "sosyal-4-pdf-u10-q1",
    "unitId": "sosyal-4-pdf-u10",
    "text": "ars ve çevresini alarak doğu illerimizi Ermeni işgalinden kurtaran komutan, aşağıdakilerden hangisidir...",
    "options": [
      "İsmet İnönü",
      "âzım arabekir",
      "Refet Bele",
      "Ali Fuat Cebesoy Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: İsmet İnönü"
  },
  {
    "id": "sosyal-4-pdf-u10-q2",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Her toplumun kendi kültürünün yansıması olan, uzun zamandır oynanan geleneksel oyunları vardır. Aşağıdakilerden hangisi Türk toplumunun geleneksel oyunlarından değildir...",
    "options": [
      "Horon",
      "Cirit",
      "Halay",
      "Futbol Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Horon"
  },
  {
    "id": "sosyal-4-pdf-u10-q3",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Dinî ve millî bayramlarımız özel günlerimizdir. Dinî bayramlarda dargınlar barıştırılır, yardımlar ihtiyaç sahiplerine ulaştırılır. Millî bayramlarda ise şiirler okunur, piyesler düzenlenir, toplumdaki büyük küçük herkes gösterilere katılır. Parçaya göre, dinî ve millî bayramlarımızın ortak işlevi aşağıdakilerden hangisidir...",
    "options": [
      "Yeteneklerimizi geliştirmeleri",
      "Dinî duyguları güçlendirmeleri",
      "Temel ihtiyaçlarımızı karşılamaları",
      "Birlik ve kardeşliğimizi güçlendirmeleri"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Yeteneklerimizi geliştirmeleri"
  },
  {
    "id": "sosyal-4-pdf-u10-q4",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Osmanlı Devleti Mondros Ateşkes Antlaşması’nı, aşağıdaki savaşların hangisinin sonunda imzalamıştır...",
    "options": [
      "1. Dünya Savaşı",
      "Büyük Taarruz",
      "Trablusgarp Savaşı",
      "Başkumandan Meydan Savaşı"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1. Dünya Savaşı"
  },
  {
    "id": "sosyal-4-pdf-u10-q5",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Mustafa emal Paşa, Millî Mücadele’yi aşağıdaki şehirlerin hangisinde başlatmıştır...",
    "options": [
      "Sivas",
      "Samsun",
      "Amasya",
      "Erzurum"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Sivas"
  },
  {
    "id": "sosyal-4-pdf-u10-q6",
    "unitId": "sosyal-4-pdf-u10",
    "text": "• 1. İnönü Savaşı • 2. İnönü Savaşı • Sakarya Meydan Savaşı urtuluş Savaşı Dönemi’nde meydana gelen bu savaşların ortak özelliği aşağıdakilerden hangisidir...",
    "options": [
      "22 gün 22 gece devam etmeleri",
      "uvayımilliye birliklerince yapılmaları",
      "Albay İsmet Bey tarafından yönetilmeleri",
      "Yunanlılarla Türkler arasında gerçekleşmeleri"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 22 gün 22 gece devam etmeleri"
  },
  {
    "id": "sosyal-4-pdf-u10-q7",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Atatürk, urtuluş Savaşı’nın Hazırlık Dönemi’nde öncelikle millî birlik ve beraberliği sağlamaya çalışmıştır. Verilen bu bilgiden, Atatürk’ün hangi kişilik özelliği çıkarılabilir...",
    "options": [
      "Açık sözlülüğü",
      "İleri görüşlülüğü",
      "Vatan ve millet sevgisi",
      "Birleştirici ve bütünleştiriciliği Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Açık sözlülüğü"
  },
  {
    "id": "sosyal-4-pdf-u10-q8",
    "unitId": "sosyal-4-pdf-u10",
    "text": "“üçük hanımlar, küçük beyler! Sizler, hepiniz, geleceğin yıldızı, bir mutluluk parıltısısınız! Memleketi asıl aydınlığa boğacak sizsiniz. endinizin ne kadar mühim, kıymetli olduğunuzu düşünerek ona göre çalışınız!” ATATÜR Atatürk yukarıdaki konuşmasını, millî bayramlarımızdan hangisinde yapmış olabilir...",
    "options": [
      "30 Ağustos Zafer Bayramı",
      "29 Ekim Cumhuriyet Bayramı",
      "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı",
      "19 Mayıs Atatürk’ü Anma ve Gençlik ve Spor Bayramı 12. ültür, toplulukların yaşam tarzıdır. ültür atalarımızdan miras kalan maddi ve manevi değerlerdir. ültürel değerler zaman içinde değişime uğramaz. AhmetAyşe eremElif ültürel özellikler bir milletin önemli değerleridir. Resimdeki çocuklardan hangisi kültür ile ilgili yanlış bilgi vermiştir..."
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 30 Ağustos Zafer Bayramı"
  },
  {
    "id": "sosyal-4-pdf-u10-q9",
    "unitId": "sosyal-4-pdf-u10",
    "text": "“urtuluş Savaşı’nın Doğu Cephesi’nde - - - -1 , Güney Cephesi’nde - - - -2 , Batı Cephesi’nde de - - - -3 mücadele edilmiştir.” Cümledeki boşluklar sırasıyla aşağıdakilerden hangisiyle doldurulmalıdır... 1 2 3",
    "options": [
      "Ermenilerle Fransızlarla Yunanlılarla",
      "Fransızlarla Yunanlılarla Ermenilerle",
      "Ruslarla İtalyanlarla Fransızlarla",
      "Yunanlılarla Ermenilerle İtalyanlarla Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: Ermenilerle Fransızlarla Yunanlılarla"
  },
  {
    "id": "sosyal-4-pdf-u10-q10",
    "unitId": "sosyal-4-pdf-u10",
    "text": "Aşağıdakilerden hangisi Millî Mücadele sürecinde meydana gelen savaşlardan biri değildir...",
    "options": [
      "1. İnönü Savaşı",
      "Sakarya Savaşı",
      "Başkumandan Meydan Savaşı",
      "Çanakkale Savaşı Ç"
    ],
    "correctIndex": 0,
    "explanation": "Do?ru cevap: 1. İnönü Savaşı"
  }
];

export const pdfPracticeExams: PracticeExam[] = [
  {
    "id": "grade-2-exam-1",
    "gradeId": 2,
    "title": "2. S?n?f Karma Deneme 1",
    "questions": [
      {
        "id": "grade-2-exam-1-q1",
        "unitId": "grade-2-exam-1",
        "text": "İnsanların çoğu, kendi hatalarının görülmesini, bilinmesini asla istemezler. endilerine yapılacak uyarılar karşısında sevinmeleri gerekirken hemen kırılırlar, gücenirler. Ama başkalarının hatalarını yanlış ve gülünç yönlerini dinlemekten de ne yazık ki pek hoşlanırlar. Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir...",
        "options": [
          "İnsanların hatalarını görmezlikten gelmeliyiz.",
          "Her insanın iyi bir dosta ihtiyacı vardır.",
          "Birçok insan, kendi hataları yerine başkalarının hatalarıyla ilgilenir.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Birçok insan, kendi hataları yerine başkalarının hatalarıyla ilgilenir."
      },
      {
        "id": "grade-2-exam-1-q2",
        "unitId": "grade-2-exam-1",
        "text": "“Sınıf başkanını oy kullanarak seçimle belirledik. Böylece sınıfımızda - - - - bir ortam oluşturduk.” Verilen boşluğa, aşağıdaki kelimelerden hangisinin yazılması doğru olur...",
        "options": [
          "kararlı",
          "sabırlı",
          "demokratik -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: demokratik -"
      },
      {
        "id": "grade-2-exam-1-q3",
        "unitId": "grade-2-exam-1",
        "text": "Aşağıdakilerden hangisi arkadaşlarımızla ilişkilerimizi olumsuz etkileyen davranışlardan biri değildir...",
        "options": [
          "Alınganlık",
          "Uyumluluk",
          "Bencillik - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Uyumluluk"
      },
      {
        "id": "grade-2-exam-1-q4",
        "unitId": "grade-2-exam-1",
        "text": "Bu tür palyaçolar abartılı hareketleri ile halk arasında en sevilen palyaçolardır. Makyajları da beyaz yüzlü palyaçolardan farklıdır. Onlar, yüzlerine beyaz boya sürmek yerine ten rengi boyalar sürerler. Makyajlarında gösterişli renkler tercih ederler. Makyajla ağızlarını kocaman, gözlerini büyük gösterirler. Burunlarını ise kırmızıya boyarlar. Bu metinde sözü edilen palyaço görseli aşağıdakilerden hangisidir...",
        "options": [
          "B)",
          "D)",
          "B)",
          "D)"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: B)"
      },
      {
        "id": "grade-2-exam-1-q5",
        "unitId": "grade-2-exam-1",
        "text": "Yandaki toplama 39 + işleminde verilmeyen toplanan kaçtır...",
        "options": [
          "52",
          "48",
          "38 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 48"
      },
      {
        "id": "grade-2-exam-1-q6",
        "unitId": "grade-2-exam-1",
        "text": "Aşağıdaki kelime çiftlerinden hangisi eş anlamlıdır...",
        "options": [
          "Uzun - ısa",
          "Zor - olay",
          "Güçlü - uvvetli",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Güçlü - uvvetli"
      },
      {
        "id": "grade-2-exam-1-q7",
        "unitId": "grade-2-exam-1",
        "text": "Sabah - Sandalye - ★ - Sepet Bu kelimeler alfabetik olarak sıralandığında ★ olan yere aşağıdakilerden hangisi getirilmelidir...",
        "options": [
          "Saman",
          "Sandık",
          "Sergi",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Sandık"
      },
      {
        "id": "grade-2-exam-1-q8",
        "unitId": "grade-2-exam-1",
        "text": "Merve’nin bazı dersler için okula götürmesi gereken malzemeler aşağıdaki gibidir. Matematik : Cetvel Türkçe : Sözlük Müzik : Flüt Görsel Sanatlar : Boya kalemi Merve salı günkü ders programına göre çantasına cetvel, sözlük ve boya kalemi koymuştur. Gereksiz ya da eksik malzeme koymamıştır. Buna göre, Merve’nin salı günkü ders programında aşağıdaki derslerden hangisi yoktur...",
        "options": [
          "Türkçe",
          "Müzik",
          "Matematik - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Matematik - Ç"
      },
      {
        "id": "grade-2-exam-1-q9",
        "unitId": "grade-2-exam-1",
        "text": "Ufuk’un 15 tane kırmızı misketi, kırmızı misketlerinin sayısından daha fazla sayıda mavi misketi vardır. Buna göre, Ufuk’un mavi misketlerinin sayısı aşağıdakilerden hangisi olabilir...",
        "options": [
          "14",
          "15",
          "16 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 16 ()"
      },
      {
        "id": "grade-2-exam-1-q10",
        "unitId": "grade-2-exam-1",
        "text": "Aşağıdaki cümlelerin hangisinde zıt anlamlı kelimeler bir arada kullanılmamıştır...",
        "options": [
          "Soğukta kalan bebeğin minicik elleri buz gibiydi.",
          "Sabah erken kalkmalı, akşam erken yatmalıyız.",
          "Ben dışarı çıkarken babam içeri girdi. LILARINI TAHMİN EDER.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Soğukta kalan bebeğin minicik elleri buz gibiydi."
      },
      {
        "id": "grade-2-exam-1-q11",
        "unitId": "grade-2-exam-1",
        "text": "Biz Uğur ile farklı mahallelerde oturuyoruz. Bu cümledeki altı çizili kelimenin karşıtı aşağıdakilerden hangisidir...",
        "options": [
          "Yakın",
          "Aynı",
          "Değişik",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Aynı"
      },
      {
        "id": "grade-2-exam-1-q12",
        "unitId": "grade-2-exam-1",
        "text": "Atakan : Gözlerim kahverengidir. Ela : Uzun boyluyum. Meryem : Gitar çalabiliyorum. Yukarıdaki öğrencilerden hangisi yeteneğinden söz etmiştir...",
        "options": [
          "Meryem",
          "Atakan",
          "Ela",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Meryem"
      },
      {
        "id": "grade-2-exam-1-q13",
        "unitId": "grade-2-exam-1",
        "text": "Bir sınıftaki kız öğrencilerin sayısı 9’dur. Erkek öğrencilerin sayısı, kız öğrencilerin sayısından 5 fazladır. Buna göre, bu sınıfta kaç öğrenci vardır...",
        "options": [
          "23",
          "28",
          "32 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 23"
      },
      {
        "id": "grade-2-exam-1-q14",
        "unitId": "grade-2-exam-1",
        "text": "Yeni demirleyen ...oleksiyoncu££... adlı gemi yazlıktaki çocukların dikkatini çeker. Geminin kaptanı da onlara çok gizemli gelir. Çocukların gemiye çıkmak istediklerini gören kaptan onlara beklemedikleri bir davette bulunur. Bu metni en iyi ifade eden görsel aşağıdakilerden hangisidir...",
        "options": [
          "B)",
          "8. Olayların oluş sırasına göre, bu görsellerin dizilişi aşağıdakilerden hangisidir...",
          "4 - 1 - 2 - 3",
          "4 - 1 - 3 - 2"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 8. Olayların oluş sırasına göre, bu görsellerin dizilişi aşağıdakilerden hangisidir..."
      },
      {
        "id": "grade-2-exam-1-q15",
        "unitId": "grade-2-exam-1",
        "text": "Görseldeki arabaların üzerinde yazan sayılar azalan bir sayı örüntüsü oluşturmaktadır. 46 43 40 34★ Buna göre, ★ yerine aşağıdakilerden hangisi yazılmalıdır...",
        "options": [
          "38",
          "37",
          "36",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 38"
      },
      {
        "id": "grade-2-exam-1-q16",
        "unitId": "grade-2-exam-1",
        "text": "Serdar Öğretmen, aşağıda ağırlıkları verilen öğrencileri en ağırından en hafife doğru sıralayarak bir tablo hazırlayacaktır. Arda: 30 kilogram Emel : 29 kilogram Ege : 32 kilogram Buna göre, tabloda baştan ikinci sıradaki öğrenci kim olur...",
        "options": [
          "Arda",
          "Emel",
          "Ege ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Arda"
      },
      {
        "id": "grade-2-exam-1-q17",
        "unitId": "grade-2-exam-1",
        "text": "Sağlık taraması yapılan bir köyde, 24 çocuğun kızamık hastalığına yakalandığı görülmüştür. Bu taramadan bir hafta sonra kızamık hastalığına yakalanan çocukların toplam sayısı 59 olmuştur. Bu bir haftada kızamık hastalığına kaç çocuk daha yakalanmıştır...",
        "options": [
          "15",
          "25",
          "35 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 35 ()"
      },
      {
        "id": "grade-2-exam-1-q18",
        "unitId": "grade-2-exam-1",
        "text": "Balonların üzerinde yazan sayılar adımları arasındaki farkı sabit olan bir sayı örüntüsü oluşturmaktadır. 25 21 17 9 5 Buna göre, boş bırakılan balona aşağıdakilerden hangisi yazılmalıdır...",
        "options": [
          "12",
          "13",
          "14 (Ç)",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 14 (Ç)"
      },
      {
        "id": "grade-2-exam-1-q19",
        "unitId": "grade-2-exam-1",
        "text": "Ahmet, insanları çok sevmektedir. Buna göre, aşağıdakilerden hangisi Ahmet’in yapması beklenen davranışlarından biri olamaz...",
        "options": [
          "İhtiyacı olanlara yardım etmesi",
          "İnsanların duygularına önem vermesi",
          "Arkadaşlarının sorunlarına ilgisiz olması -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: İnsanların duygularına önem vermesi"
      },
      {
        "id": "grade-2-exam-1-q20",
        "unitId": "grade-2-exam-1",
        "text": "Serpil Öğretmen, okulların açıldığı hafta öğrencilerine sınıfta düzenin sağlanması için bazı kurallar koyulması gerektiğini söylemiştir. Uyulması gereken bu kurallar aşağıdakilerden hangisiyle belirlenmelidir...",
        "options": [
          "Öğrencilerin oy çokluğuyla",
          "Müdürün görüşüyle",
          "Sınıf başkanının kararıyla - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Müdürün görüşüyle"
      }
    ]
  },
  {
    "id": "grade-2-exam-2",
    "gradeId": 2,
    "title": "2. S?n?f Karma Deneme 2",
    "questions": [
      {
        "id": "grade-2-exam-2-q1",
        "unitId": "grade-2-exam-2",
        "text": "Aşağıdaki yüz ifadelerinden hangisi, yay ayraç ( ) içinde verilen duyguya uygundur...",
        "options": [
          "(Öfke)",
          "(orku)",
          "(Üzüntü) 5. T.C. TARIM VE ORMAN BAANLIĞI Bu afişte verilen mesaj, aşağıdakilerden hangisidir...",
          "Ormanları, fidanlar dikerek koruyabiliriz."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: (orku)"
      },
      {
        "id": "grade-2-exam-2-q2",
        "unitId": "grade-2-exam-2",
        "text": "Bir etkinlikte, verilen sayılar en yakın onluğa yuvarlandığında elde edilen sayının yazdığı elma boyanacaktır. Örneğin; Verilen sayı = 32 30 40 Verilen sayı = 32 Bu etkinliğe göre, aşağıdakilerden hangisi yanlış boyanmıştır... 20 30 Verilen sayı = 25 50 60 Verilen sayı = 54 Verilen sayı = 48A)",
        "options": [
          "B) 47. Görseldeki sayısının onlar ve birler basamağına ayrılmış gösterimi aşağıdakilerden hangisidir...",
          "Onlar Basamağı Birler Basamağı 2 8",
          "Onlar Basamağı Birler Basamağı 2 7",
          "Onlar Basamağı Birler Basamağı 7 2"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Onlar Basamağı Birler Basamağı 2 7"
      },
      {
        "id": "grade-2-exam-2-q3",
        "unitId": "grade-2-exam-2",
        "text": "Sınıf arkadaşımızdan kalem isterken aşağıdaki ifadelerden hangisini kullanırsak nezaket kurallarına uymuş oluruz...",
        "options": [
          "Bana kalemi uzat.",
          "alemini bana vermek zorundasın.",
          "Fazla kalemin varsa bana verebilir misin... - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Bana kalemi uzat."
      },
      {
        "id": "grade-2-exam-2-q4",
        "unitId": "grade-2-exam-2",
        "text": "Bir bilet kuyruğunda 14 kişi vardır. uyrukta Ömer’den önce 3 kişi, Enes’ten sonra 2 kişi olduğuna göre, Ömer ile Enes arasında kaç kişi vardır...",
        "options": [
          "9 (Ç) 20. 12 15 18 21 27 Çocukların ellerindeki kartlarda yazılı olan sayılar, adımları arasındaki fark sabit olan bir sayı örüntüsü oluşturmaktadır. Elindeki kartı ters çevirmiş olan çocuğun kartında yazan sayı kaçtır...",
          "23",
          "24",
          "25"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 9 (Ç) 20. 12 15 18 21 27 Çocukların ellerindeki kartlarda yazılı olan sayılar, adımları arasındaki fark sabit olan bir sayı örüntüsü oluşturmaktadır. Elindeki kartı ters çevirmiş o"
      },
      {
        "id": "grade-2-exam-2-q5",
        "unitId": "grade-2-exam-2",
        "text": "Aşağıdakilerden hangisi, bilinçli tüketicinin davranışlarından biri değildir...",
        "options": [
          "Haklarını bilip ona sahip çıkması",
          "Alışverişte ihtiyaçlarına öncelik vermesi",
          "Alacağı malın pahalı olmasına dikkat etmesi - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Alacağı malın pahalı olmasına dikkat etmesi - Ç"
      },
      {
        "id": "grade-2-exam-2-q6",
        "unitId": "grade-2-exam-2",
        "text": "Fatma’nın aşağıdaki davranışlarından hangisi, arkadaşlarına saygılı davrandığına örnek olur...",
        "options": [
          "Arkadaşları söz alınca sessizce dinlemesi",
          "Derslerine çalışması",
          "Arkadaşlarıyla oyun oynaması -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Derslerine çalışması"
      },
      {
        "id": "grade-2-exam-2-q7",
        "unitId": "grade-2-exam-2",
        "text": "- - - - bizi diğer insanlardan ayıran fiziksel özelliklerimizden biridir. Cümledeki boşluğa aşağıdakilerden hangisinin yazılması uygun değildir...",
        "options": [
          "Duygularımız",
          "ilomuz",
          "Saç rengimiz - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Duygularımız"
      },
      {
        "id": "grade-2-exam-2-q8",
        "unitId": "grade-2-exam-2",
        "text": "...alkmak... kelimesi, aşağıdakilerin hangisinde ...yukarı doğru yükselmek... anlamında kullanılmıştır...",
        "options": [
          "Çocuklar odada tepiştikçe toz kalkıyor.",
          "Öğleye geliyordu ama Hilal daha yeni kalkmıştı.",
          "ar kalkınca köylere ulaşım kolaylaştı.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Çocuklar odada tepiştikçe toz kalkıyor."
      },
      {
        "id": "grade-2-exam-2-q9",
        "unitId": "grade-2-exam-2",
        "text": "Ders: Görsel Sanatlar Buna göre, pazartesi günü Melis’in aşağıdakilerden hangisini okula götürmesine gerek yoktur...",
        "options": [
          "Defter",
          "Flüt",
          "Boya kalemi - 22. Market ütüphane Okul Park Atatürk Caddesi Görseldeki okulun yeri aşağıdaki ifadelerden hangisiyle tarif edilemez...",
          "Atatürk Caddesi’ndedir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Boya kalemi - 22. Market ütüphane Okul Park Atatürk Caddesi Görseldeki okulun yeri aşağıdaki ifadelerden hangisiyle tarif edilemez..."
      },
      {
        "id": "grade-2-exam-2-q10",
        "unitId": "grade-2-exam-2",
        "text": "Beyaz örtünün üstündeki siyah leke dikkat çekiyordu. Bu cümledeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerin hangisinde vardır...",
        "options": [
          "Sağlık - sıhhat",
          "Sıcak - soğuk",
          "Tamir - onarım",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Sıcak - soğuk"
      },
      {
        "id": "grade-2-exam-2-q11",
        "unitId": "grade-2-exam-2",
        "text": "Aşağıdaki altı çizili kelimelerden hangisi, anlam bakımından diğerlerinden farklıdır...",
        "options": [
          "Ayağındaki çorabın biri hâlâ yaştı.",
          "İki yaşında konuşmaya başladı.",
          "...aç yaşındasınız... sorusu, onu şaşırttı.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ayağındaki çorabın biri hâlâ yaştı."
      },
      {
        "id": "grade-2-exam-2-q12",
        "unitId": "grade-2-exam-2",
        "text": "...Dolu... kelimesi aşağıdakilerin hangisinde diğerlerinden farklı anlamda kullanılmıştır...",
        "options": [
          "Otobüs çok dolu olduğu için binemedi.",
          "Dolu çekmecenin içinde aradığını bulamadı.",
          "Sabaha kadar yağan dolu beni bir türlü uyutmadı.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Sabaha kadar yağan dolu beni bir türlü uyutmadı."
      },
      {
        "id": "grade-2-exam-2-q13",
        "unitId": "grade-2-exam-2",
        "text": "ırgızlar, geçmişte belirli bir yurtta yaşamadan, sürekli yer değiştirerek göçebe bir hayat sürmüşlerdi. ültürleri de bu hayat tarzıyla şekillenmişti. ırgız erkekleri, çadır kurup at yetiştirir ve dericilik işleriyle uğraşırdı. adınları ise kilim dokuyup, el işi yaparak geçimlerini sağlardı. Geçim kaynaklarından biri de küçükbaş hayvancılıktı. Aşağıdaki görsellerden hangisi bu metinde anlatılanlarla ilgili değildir...",
        "options": [
          "A)",
          "C)",
          "B)",
          "B)"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: B)"
      },
      {
        "id": "grade-2-exam-2-q14",
        "unitId": "grade-2-exam-2",
        "text": "Zeynep, okul kaynaklarını ve eşyalarını özenli kullanan bir öğrencidir. Buna göre, Zeynep’in aşağıdaki davranışlardan hangisini yapması beklenmez...",
        "options": [
          "Temizlik malzemelerini yeterli miktarda tüketmesi",
          "Lavabo ve tuvaletleri temiz tutması",
          "Sınıftaki lambaları gereksiz yere yakması - Ç 43. Satranç yerine voleybol oynamak bana daha eğlenceli geliyor. enan Ayça Teneffüslerde satranç oynamaktan hoşlanırım. Benimle satranç oynamak ister misin... enan ve Ayça bu konuşmanın sonunda ortak bir karar almışlardır. Buna göre, enan ve Ayça’nın aşağıdakilerden hangisine saygı duydukları söylenebilir...",
          "Bireysel farklılıklarına"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Temizlik malzemelerini yeterli miktarda tüketmesi"
      },
      {
        "id": "grade-2-exam-2-q15",
        "unitId": "grade-2-exam-2",
        "text": "İki basamaklı bir doğal sayının rakamlarının basamak değerleri 40 ve 5’tir. Buna göre, bu sayının sayı blokları ile modellenmiş şekli aşağıdakilerden hangisidir...",
        "options": [
          "A)",
          "36. Yukarıdaki bloklarla modellenen sayının onlar ve birler basamağındaki rakamların yerleri değiştiriliyor. Buna göre, elde edilen sayının onlar basamağındaki rakamın basamak değeri kaçtır...",
          "50",
          "40"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: A)"
      },
      {
        "id": "grade-2-exam-2-q16",
        "unitId": "grade-2-exam-2",
        "text": "öyün üst tarafındaki kulübenin önünde ateş yanıyor. Bu cümledeki altı çizili kelimenin zıt anlamlısı aşağıdakilerden hangisidir...",
        "options": [
          "Arka",
          "Yan",
          "Alt",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Alt"
      },
      {
        "id": "grade-2-exam-2-q17",
        "unitId": "grade-2-exam-2",
        "text": "Merhaba çocuklar, sizi gördüğüm için çok sevinçliyim. Bu yıl beni daha zevkle okuyacağınıza inanıyorum. Hatta sizinle daha iyi arkadaş olacağız. Beni daha çok seveceksiniz. Bu metinde konuşan aşağıdakilerden hangisidir...",
        "options": [
          "Arkadaş",
          "itap",
          "Oyun",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Arkadaş"
      },
      {
        "id": "grade-2-exam-2-q18",
        "unitId": "grade-2-exam-2",
        "text": "emal’in çalışma azmini arttıran, babasının sağlığındaki iyiye doğru gidişti. Doktorunun dediği gibi, babasında ...mucizevi bir değişiklik... olmuştu. Artık hastalığından kurtulmuş sayılırdı. Doktorun bunu söylediği gün, evde gerçekten bir bayram havası esmişti. Bu metne göre ...mucizevi... kelimesinin anlamı aşağıdakilerden hangisidir...",
        "options": [
          "Olması beklenen, şaşkınlık uyandırmayan",
          "Yeterli, yetecek miktarda olan",
          "Olağanüstü niteliklere sahip",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Olağanüstü niteliklere sahip"
      },
      {
        "id": "grade-2-exam-2-q19",
        "unitId": "grade-2-exam-2",
        "text": "Güneş sistemindeki dokuz gezegen arasında, kuşkusuz en çok merak edileni Mars’tır. ırmızı rengiyle eski çağlardan bu yana ilgi çeken bu gezegen, yirminci yüzyılda da sulama kanallarına benzeyen yüzey şekilleriyle dikkat çekmiş, bu yüzden de bilim kurgu romanlarında sıkça yer almıştır. Bu metnin konusu aşağıdakilerden hangisidir...",
        "options": [
          "Güneş sistemi",
          "Mars gezegeni",
          "Bilim kurgu romanları",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Mars gezegeni"
      },
      {
        "id": "grade-2-exam-2-q20",
        "unitId": "grade-2-exam-2",
        "text": "Sarıkamış’ı duymuşsunuzdur. Burası, etrafı ormanlarla çevrili; havası, suyu sağlık kaynağı olan şirin bir ilçemizdir. İşte bu ilçemizde, geçen yıllara kadar sel nedir bilinmezdi. Ama son yıllarda şiddetli bir yağmur yağdı mı hemen şehrin bazı semtleri sel altında kalıyor. Bunun sebebini herkes biliyor; bu durum, çevredeki ormanları seneden seneye tüketmenin bir sonucudur. Aşağıdakilerden hangisi metinde belirtilen ...sorun...un çözümlerinden biri değildir...",
        "options": [
          "Ağaçların çokça bulunduğu alanlara yerleşmek",
          "Ağaçlandırma çalışmaları için halkı teşvik etmek",
          "Ağaçların bilinçsizce kesilmesini engelleyici tedbirler almak",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Ağaçların bilinçsizce kesilmesini engelleyici tedbirler almak"
      }
    ]
  },
  {
    "id": "grade-2-exam-3",
    "gradeId": 2,
    "title": "2. S?n?f Karma Deneme 3",
    "questions": [
      {
        "id": "grade-2-exam-3-q1",
        "unitId": "grade-2-exam-3",
        "text": "Sofra hazırlanırken yardımcı olmak, dağınık eşyaları toplamak, ekmek ve gazete almak aşağıdakilerden hangisine karşı yerine getirmemiz gereken sorumluluklarımızdandır...",
        "options": [
          "Ailemize",
          "Okulumuza",
          "Arkadaşlarımıza -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Arkadaşlarımıza -"
      },
      {
        "id": "grade-2-exam-3-q2",
        "unitId": "grade-2-exam-3",
        "text": "Ağrı Dağı’na özellikle Nuh’un gemisi efsanesi sayesinde binlerce dağcı tırmanıyor. Ağrı Dağı, yüksek ama aynı zamanda tırmanması kolay bir dağdır. Dedegöl Dağları da sportif kaya tırmanışının merkezi olma yolunda ilerliyor. Aladağlar ise onlarca zirvesiyle âdeta bir tırmanma bahçesi. Bu metnin konusu aşağıdakilerden hangisidir...",
        "options": [
          "Türkiye’de dağcılığa uygun dağlar",
          "Dağların turizme etkisi",
          "Dağcılık sporunun zorlukları",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Dağların turizme etkisi"
      },
      {
        "id": "grade-2-exam-3-q3",
        "unitId": "grade-2-exam-3",
        "text": "DERS Görsel Sanatlar Verilen ders programına göre, Ayça’nın aşağıdakilerden hangisini çantasına koymasına gerek yoktur...",
        "options": [
          "Flüt",
          "Cetvel",
          "Boya kalemleri -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Cetvel"
      },
      {
        "id": "grade-2-exam-3-q4",
        "unitId": "grade-2-exam-3",
        "text": "Bir grup arkadaş, sınıf kitaplığı oluşturmak için grup çalışması yapmaya karar vermişlerdir. Buna göre, grup görevleri paylaştırılırken aşağıdakilerden hangisine dikkat edilmelidir...",
        "options": [
          "Görevlerin, almak istemeyenlere dağıtılmasına",
          "En zor görevleri tek kişinin yapmasına",
          "Görev dağılımının yeteneklere göre yapılmasına - Ç",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: En zor görevleri tek kişinin yapmasına"
      },
      {
        "id": "grade-2-exam-3-q5",
        "unitId": "grade-2-exam-3",
        "text": "2. 3. 5.4. Emre ............ ............ ............ ............ Görseldeki yemekhane sırasında Ömer, Merve’den sonra Murat’tan öncedir. Ayşe ise Emre’den sonra Merve’den öncedir. Buna göre, Ömer kaçıncı sıradadır...",
        "options": [
          "4 (Ç) 42. Bloklarla modellenen sayı aşağıdaki tablolardan hangisi ile gösterilebilir...",
          "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 40 5",
          "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 4",
          "Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 5 (Ç)"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Basamak Adı Onlar Basamağı Birler Basamağı Basamak Değeri 50 4"
      },
      {
        "id": "grade-2-exam-3-q6",
        "unitId": "grade-2-exam-3",
        "text": "Derelerde, göllerde Göklerimde sen varsın. Bulut bulut yükselir, Yağmur olur yağarsın. Bu şiirin konusu aşağıdakilerden hangisidir...",
        "options": [
          "Gökyüzü",
          "Dünya",
          "Su",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Gökyüzü"
      },
      {
        "id": "grade-2-exam-3-q7",
        "unitId": "grade-2-exam-3",
        "text": "Bir sınıftaki öğrenciler Orman Haftası ile ilgili grup çalışması yapacaktır. Bu çalışma sırasında aşağıdakilerden hangisinin yapılması uygun değildir...",
        "options": [
          "İş bölümü yapılması",
          "Nezaket ifadelerinin kullanılması",
          "ararları bir kişinin vermesi -",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Nezaket ifadelerinin kullanılması"
      },
      {
        "id": "grade-2-exam-3-q8",
        "unitId": "grade-2-exam-3",
        "text": "...Açık... kelimesi, aşağıdakilerin hangisinde ...engelsiz, serbest... anlamında kullanılmıştır...",
        "options": [
          "Açıklarda yüzmek her zaman tehlikelidir.",
          "Olumsuz hava şartlarına rağmen yol açıktı.",
          "Geceleri burada açık bir lokanta bulabiliriz.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Olumsuz hava şartlarına rağmen yol açıktı."
      },
      {
        "id": "grade-2-exam-3-q9",
        "unitId": "grade-2-exam-3",
        "text": "Büyükler çoğu kez oyun konusunda pek de anlayışlı olamıyorlar. Üstünüz başınız kirlenir, düşersiniz, diye oynamayı yasaklamaya çalışıyorlar. Oysa oyun oynamak çocuk için bir ihtiyaçtır. Çünkü çocuk; arkadaşlığı, dayanışmayı, özveriyi ve karşılaştığı zorlukları aşmayı hep oyunda öğrenir. Bu metinde, asıl anlatılmak istenen aşağıdakilerden hangisidir...",
        "options": [
          "Oyun oynarken dikkatli olmak gerekir.",
          "Oyuncaklarımızı arkadaşlarımızla paylaşmalıyız.",
          "Oyun, çocukları hayata hazırlayan bir araçtır.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Oyuncaklarımızı arkadaşlarımızla paylaşmalıyız."
      },
      {
        "id": "grade-2-exam-3-q10",
        "unitId": "grade-2-exam-3",
        "text": "Bugün hava soğuk olduğundan bahçeye çıkamadık. Bu cümledeki altı çizili kelimenin karşıt anlamlısı aşağıdakilerin hangisinde kullanılmıştır...",
        "options": [
          "Bu yaz havanın çok sıcak olacağı söyleniyor.",
          "Sabah dışarı çıktığımda hava çok serindi.",
          "Bacaklarımın ağrısı yağmurlu havalarda artıyor.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Bu yaz havanın çok sıcak olacağı söyleniyor."
      },
      {
        "id": "grade-2-exam-3-q11",
        "unitId": "grade-2-exam-3",
        "text": "Bahar geldi. Sürüler yaylalarına döndü. Yamaçlardaki tüm ağaçlar çeşit çeşit renklere büründü. Bu, baharın tabiat üzerinde meydana getirdiği renk cümbüşüydü. Bu metindeki altı çizili ifadenin anlamı aşağıdakilerden hangisidir...",
        "options": [
          "Her yerin tek renge boyanmış olma durumu",
          "Türlü renklerin oluşturduğu karışım",
          "Renkleri inceleyen bilim dalı",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Türlü renklerin oluşturduğu karışım"
      },
      {
        "id": "grade-2-exam-3-q12",
        "unitId": "grade-2-exam-3",
        "text": "Nazlı’nın bir düzine kalemi vardır. Çağatay’ın kalemlerinin sayısı, Nazlı’nın kalemlerinin sayısından 3 fazladır. Buna göre, Çağatay ve Nazlı’nın kalemlerinin toplam sayısı kaçtır...",
        "options": [
          "29",
          "27",
          "24 (Ç) 28. Verilen sayı bloklarına aşağıdakilerden hangisinde verilen sayı blokları eklenirse 61 sayısı elde edilir...",
          "B)"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 29"
      },
      {
        "id": "grade-2-exam-3-q13",
        "unitId": "grade-2-exam-3",
        "text": "Bazı öğrenciler sınıfta grup çalışması yaparken uyulması gerekenlerle ilgili görüşlerini aşağıda belirtmişlerdir. Onur: Hepimiz fikrimizi söylemeliyiz. Ezgi : Farklı fikirlere saygılı olmalıyız. Uğur : Çalışmalarımızı tek başımıza yapmalıyız. Bu öğrencilerden hangisi yanlış bir görüşte bulunmuştur...",
        "options": [
          "Onur",
          "Ezgi",
          "Uğur",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Uğur"
      },
      {
        "id": "grade-2-exam-3-q14",
        "unitId": "grade-2-exam-3",
        "text": "23 45 += += Verilenlere göre, 4 kaçtır...",
        "options": [
          "41",
          "77",
          "87 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 41"
      },
      {
        "id": "grade-2-exam-3-q15",
        "unitId": "grade-2-exam-3",
        "text": "Bir durakta öğrenciler tek sıraya girmiş, otobüs beklemektedir. emal baştan 17. sırada, Hüseyin sondan 6. sıradadır. emal ile Hüseyin arasında 1 kişi bulunmaktadır. Buna göre, bu sırada en fazla kaç kişi vardır...",
        "options": [
          "18",
          "20",
          "24 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 24 ()"
      },
      {
        "id": "grade-2-exam-3-q16",
        "unitId": "grade-2-exam-3",
        "text": "...Acı... kelimesi aşağıdaki cümlelerin hangisinde ...kırıcı, üzücü... anlamında kullanılmıştır...",
        "options": [
          "Acı kahvesini yudumluyordu.",
          "Acı söz insanı incitir.",
          "Acı poyraz kuvvetle esiyordu.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Acı söz insanı incitir."
      },
      {
        "id": "grade-2-exam-3-q17",
        "unitId": "grade-2-exam-3",
        "text": "38+TY = 23 76Y += olduğuna göre, T kaçtır...",
        "options": [
          "13",
          "15",
          "18 ()",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 15"
      },
      {
        "id": "grade-2-exam-3-q18",
        "unitId": "grade-2-exam-3",
        "text": "Teneffüste mendil kapmaca oynamaya karar veren Erdem ve arkadaşlarının aşağıdakilerden hangisini yapmaları yanlıştır...",
        "options": [
          "azanan gruba öfkelenmeleri",
          "Gruplarla işbirliği içinde oynamaları",
          "Oyun için bazı kurallar koymaları",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Gruplarla işbirliği içinde oynamaları"
      },
      {
        "id": "grade-2-exam-3-q19",
        "unitId": "grade-2-exam-3",
        "text": "Çocuklar! Ben; Adil olmaya çok önem veririm. Tuğrul Sizce bu özelliklerine göre Tuğrul, aşağıdaki mesleklerden hangisini seçerse doğru tercih yapmış olur...",
        "options": [
          "Hâkimlik",
          "Doktorluk",
          "Mühendislik - 9. İki bin dört yılında Sinop’ta doğmuşum. 1. İlkokul 3. sınıfta iken Ankara’ya taşındık. 2. Büyüyünce tıp eğitimi almak istiyorum. 3. Sude Sude’nin numaralandırılarak verilen bu öz geçmişinde kaç numaralı ifadenin olması doğru olmaz...",
          "3 -"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Mühendislik - 9. İki bin dört yılında Sinop’ta doğmuşum. 1. İlkokul 3. sınıfta iken Ankara’ya taşındık. 2. Büyüyünce tıp eğitimi almak istiyorum. 3. Sude Sude’nin numaralandırılara"
      },
      {
        "id": "grade-2-exam-3-q20",
        "unitId": "grade-2-exam-3",
        "text": "Veteriner önce Pati’nin kulaklarını muayene etmiş. Numaralanmış cümleler olayların oluş sırasına göre nasıl sıralanmalıdır...",
        "options": [
          "2 - 1 - 4 - 3",
          "2 - 4 - 1 - 3",
          "3 - 2 - 1 - 4 NUSUNU BELİRLER.",
          "Bu se?enek konuya uygun de?ildir."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 3 - 2 - 1 - 4 NUSUNU BELİRLER."
      }
    ]
  },
  {
    "id": "grade-3-exam-1",
    "gradeId": 3,
    "title": "3. S?n?f Karma Deneme 1",
    "questions": [
      {
        "id": "grade-3-exam-1-q1",
        "unitId": "grade-3-exam-1",
        "text": "Pusulan?n renkli ucu genellikle hangi y?n? g?sterir?",
        "options": [
          "Kuzey",
          "G?ney",
          "Do?u",
          "Bat?"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Kuzey"
      },
      {
        "id": "grade-3-exam-1-q2",
        "unitId": "grade-3-exam-1",
        "text": "325 + 465 i?leminin sonucu ka?t?r?",
        "options": [
          "790",
          "780",
          "690",
          "890"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 790"
      },
      {
        "id": "grade-3-exam-1-q3",
        "unitId": "grade-3-exam-1",
        "text": "C?mle sonuna genellikle hangi i?aret konur?",
        "options": [
          "Nokta",
          "Virg?l",
          "K?sa ?izgi",
          "Kesme"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Nokta"
      },
      {
        "id": "grade-3-exam-1-q4",
        "unitId": "grade-3-exam-1",
        "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
        "options": [
          "En ?ok olan?",
          "En az olan?",
          "Bo? veriyi",
          "Yanl? bilgiyi"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: En ?ok olan?"
      },
      {
        "id": "grade-3-exam-1-q5",
        "unitId": "grade-3-exam-1",
        "text": "Hik?yede kahraman ne demektir?",
        "options": [
          "Olay? ya?ayan ki?i veya varl?k",
          "Metnin ba?l?",
          "Sayfa numaras?",
          "Noktalama i?areti"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
      },
      {
        "id": "grade-3-exam-1-q6",
        "unitId": "grade-3-exam-1",
        "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
        "options": [
          "Tohum",
          "Meyve suyu",
          "Ta?",
          "Toprak kap"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Tohum"
      },
      {
        "id": "grade-3-exam-1-q7",
        "unitId": "grade-3-exam-1",
        "text": "D?nya?n?n ?ekli hangisine benzer?",
        "options": [
          "K?re",
          "K?p",
          "Silindir",
          "?gen"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: K?re"
      },
      {
        "id": "grade-3-exam-1-q8",
        "unitId": "grade-3-exam-1",
        "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
        "options": [
          "Mesaj?n k?sa konusu",
          "Okul numaras?",
          "Saat",
          "Nokta"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
      },
      {
        "id": "grade-3-exam-1-q9",
        "unitId": "grade-3-exam-1",
        "text": "Canl?lar?n ortak ?zelliklerinden biri hangisidir?",
        "options": [
          "Beslenme",
          "Paslanma",
          "K?r?lma",
          "Boyanma"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Beslenme"
      },
      {
        "id": "grade-3-exam-1-q10",
        "unitId": "grade-3-exam-1",
        "text": "1 lira ka? kuru?tur?",
        "options": [
          "100",
          "10",
          "50",
          "1000"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 100"
      },
      {
        "id": "grade-3-exam-1-q11",
        "unitId": "grade-3-exam-1",
        "text": "D?nya?n?n ?ekli hangisine benzer?",
        "options": [
          "K?re",
          "K?p",
          "Silindir",
          "?gen"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: K?re"
      },
      {
        "id": "grade-3-exam-1-q12",
        "unitId": "grade-3-exam-1",
        "text": "D?nya?n?n ?ekli hangisine benzer?",
        "options": [
          "K?re",
          "K?p",
          "Silindir",
          "?gen"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: K?re"
      },
      {
        "id": "grade-3-exam-1-q13",
        "unitId": "grade-3-exam-1",
        "text": "Kumanda genellikle hangi kaynakla ?al?r?",
        "options": [
          "Pil",
          "?ehir elektri?i",
          "Benzin",
          "R?zg?r"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Pil"
      },
      {
        "id": "grade-3-exam-1-q14",
        "unitId": "grade-3-exam-1",
        "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
        "options": [
          "Kare",
          "?gen",
          "?ember",
          "Daire"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Kare"
      },
      {
        "id": "grade-3-exam-1-q15",
        "unitId": "grade-3-exam-1",
        "text": "Grafikte en y?ksek s?tun neyi g?sterir?",
        "options": [
          "En ?ok olan?",
          "En az olan?",
          "Bo? veriyi",
          "Yanl? bilgiyi"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: En ?ok olan?"
      },
      {
        "id": "grade-3-exam-1-q16",
        "unitId": "grade-3-exam-1",
        "text": "1/4 kesri nas?l okunur?",
        "options": [
          "D?rtte bir",
          "Birde d?rt",
          "D?rt b?t?n",
          "Bir yar?m"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: D?rtte bir"
      },
      {
        "id": "grade-3-exam-1-q17",
        "unitId": "grade-3-exam-1",
        "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
        "options": [
          "?tme",
          "?ekme",
          "D?nme",
          "Erime"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ?tme"
      },
      {
        "id": "grade-3-exam-1-q18",
        "unitId": "grade-3-exam-1",
        "text": "Geri d?n?m?n amac? nedir?",
        "options": [
          "Do?ay? korumak",
          "?pleri art?rmak",
          "Kaynaklar? israf etmek",
          "Suyu kirletmek"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Do?ay? korumak"
      },
      {
        "id": "grade-3-exam-1-q19",
        "unitId": "grade-3-exam-1",
        "text": "E-posta konu b?l?m?ne ne yaz?l?r?",
        "options": [
          "Mesaj?n k?sa konusu",
          "Okul numaras?",
          "Saat",
          "Nokta"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Mesaj?n k?sa konusu"
      },
      {
        "id": "grade-3-exam-1-q20",
        "unitId": "grade-3-exam-1",
        "text": "Metnin konusu neyi g?sterir?",
        "options": [
          "Metinde ne anlat?ld?n?",
          "Sayfa say?s?n?",
          "Yazar?n ya?n?",
          "Yaz? rengini"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
      }
    ]
  },
  {
    "id": "grade-3-exam-2",
    "gradeId": 3,
    "title": "3. S?n?f Karma Deneme 2",
    "questions": [
      {
        "id": "grade-3-exam-2-q1",
        "unitId": "grade-3-exam-2",
        "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
        "options": [
          "D?zenli el y?kamak",
          "Di? f?r?alamamak",
          "Kirli k?yafet giymek",
          "Suyu bo?a ak?tmak"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: D?zenli el y?kamak"
      },
      {
        "id": "grade-3-exam-2-q2",
        "unitId": "grade-3-exam-2",
        "text": "Mahalle ve k?yleri y?neten ki?i kimdir?",
        "options": [
          "Muhtar",
          "Pilot",
          "Doktor",
          "Hakem"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Muhtar"
      },
      {
        "id": "grade-3-exam-2-q3",
        "unitId": "grade-3-exam-2",
        "text": "Metnin konusu neyi g?sterir?",
        "options": [
          "Metinde ne anlat?ld?n?",
          "Sayfa say?s?n?",
          "Yazar?n ya?n?",
          "Yaz? rengini"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
      },
      {
        "id": "grade-3-exam-2-q4",
        "unitId": "grade-3-exam-2",
        "text": "Ki?isel bak?m i?in hangisi yap?lmal?d?r?",
        "options": [
          "D?zenli el y?kamak",
          "Di? f?r?alamamak",
          "Kirli k?yafet giymek",
          "Suyu bo?a ak?tmak"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: D?zenli el y?kamak"
      },
      {
        "id": "grade-3-exam-2-q5",
        "unitId": "grade-3-exam-2",
        "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
        "options": [
          "En y?ksek de?ere",
          "?lk harfe",
          "Son sat?ra",
          "K?d?n rengine"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: En y?ksek de?ere"
      },
      {
        "id": "grade-3-exam-2-q6",
        "unitId": "grade-3-exam-2",
        "text": "Hik?yede kahraman ne demektir?",
        "options": [
          "Olay? ya?ayan ki?i veya varl?k",
          "Metnin ba?l?",
          "Sayfa numaras?",
          "Noktalama i?areti"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Olay? ya?ayan ki?i veya varl?k"
      },
      {
        "id": "grade-3-exam-2-q7",
        "unitId": "grade-3-exam-2",
        "text": "Bitkinin ya?am d?ng?s? genellikle ne ile ba?lar?",
        "options": [
          "Tohum",
          "Meyve suyu",
          "Ta?",
          "Toprak kap"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Tohum"
      },
      {
        "id": "grade-3-exam-2-q8",
        "unitId": "grade-3-exam-2",
        "text": "325 + 465 i?leminin sonucu ka?t?r?",
        "options": [
          "790",
          "780",
          "690",
          "890"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 790"
      },
      {
        "id": "grade-3-exam-2-q9",
        "unitId": "grade-3-exam-2",
        "text": "?lkemizin y?netim ?ekli nedir?",
        "options": [
          "Cumhuriyet",
          "Krall?k",
          "?mparatorluk",
          "Oyuncak y?netimi"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Cumhuriyet"
      },
      {
        "id": "grade-3-exam-2-q10",
        "unitId": "grade-3-exam-2",
        "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
        "options": [
          "?tme",
          "?ekme",
          "D?nme",
          "Erime"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ?tme"
      },
      {
        "id": "grade-3-exam-2-q11",
        "unitId": "grade-3-exam-2",
        "text": "Grafikte en ?ok olan? bulmak i?in neye bak?l?r?",
        "options": [
          "En y?ksek de?ere",
          "?lk harfe",
          "Son sat?ra",
          "K?d?n rengine"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: En y?ksek de?ere"
      },
      {
        "id": "grade-3-exam-2-q12",
        "unitId": "grade-3-exam-2",
        "text": "Do?al ?k kayna? hangisidir?",
        "options": [
          "G?ne?",
          "El feneri",
          "Ampul",
          "Mum"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: G?ne?"
      },
      {
        "id": "grade-3-exam-2-q13",
        "unitId": "grade-3-exam-2",
        "text": "Ba?l?k se?erken hangisine dikkat edilir?",
        "options": [
          "Metnin konusuna uygun olmas?na",
          "En uzun kelime olmas?na",
          "Soru olmas?na",
          "Sadece b?y?k harfe"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Metnin konusuna uygun olmas?na"
      },
      {
        "id": "grade-3-exam-2-q14",
        "unitId": "grade-3-exam-2",
        "text": "Kumanda genellikle hangi kaynakla ?al?r?",
        "options": [
          "Pil",
          "?ehir elektri?i",
          "Benzin",
          "R?zg?r"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Pil"
      },
      {
        "id": "grade-3-exam-2-q15",
        "unitId": "grade-3-exam-2",
        "text": "?iirdeki her sat?ra ne ad verilir?",
        "options": [
          "Dize",
          "Paragraf",
          "Ba?l?k",
          "?zet"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Dize"
      },
      {
        "id": "grade-3-exam-2-q16",
        "unitId": "grade-3-exam-2",
        "text": "Davul hangi t?r kaynakt?r?",
        "options": [
          "Ses kayna?",
          "I?k kayna?",
          "Su kayna?",
          "Besin kayna?"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ses kayna?"
      },
      {
        "id": "grade-3-exam-2-q17",
        "unitId": "grade-3-exam-2",
        "text": "910 - 850 i?leminin sonucu ka?t?r?",
        "options": [
          "60",
          "50",
          "70",
          "160"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 60"
      },
      {
        "id": "grade-3-exam-2-q18",
        "unitId": "grade-3-exam-2",
        "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
        "options": [
          "Kare",
          "?gen",
          "?ember",
          "Daire"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Kare"
      },
      {
        "id": "grade-3-exam-2-q19",
        "unitId": "grade-3-exam-2",
        "text": "36 ? 4 i?leminin sonucu ka?t?r?",
        "options": [
          "9",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 9"
      },
      {
        "id": "grade-3-exam-2-q20",
        "unitId": "grade-3-exam-2",
        "text": "Do?al ?k kayna? hangisidir?",
        "options": [
          "G?ne?",
          "El feneri",
          "Ampul",
          "Mum"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: G?ne?"
      }
    ]
  },
  {
    "id": "grade-3-exam-3",
    "gradeId": 3,
    "title": "3. S?n?f Karma Deneme 3",
    "questions": [
      {
        "id": "grade-3-exam-3-q1",
        "unitId": "grade-3-exam-3",
        "text": "36 ? 4 i?leminin sonucu ka?t?r?",
        "options": [
          "9",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 9"
      },
      {
        "id": "grade-3-exam-3-q2",
        "unitId": "grade-3-exam-3",
        "text": "910 - 850 i?leminin sonucu ka?t?r?",
        "options": [
          "60",
          "50",
          "70",
          "160"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 60"
      },
      {
        "id": "grade-3-exam-3-q3",
        "unitId": "grade-3-exam-3",
        "text": "Kap?y? ileri do?ru hareket ettirmek hangi kuvvettir?",
        "options": [
          "?tme",
          "?ekme",
          "D?nme",
          "Erime"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ?tme"
      },
      {
        "id": "grade-3-exam-3-q4",
        "unitId": "grade-3-exam-3",
        "text": "Davul hangi t?r kaynakt?r?",
        "options": [
          "Ses kayna?",
          "I?k kayna?",
          "Su kayna?",
          "Besin kayna?"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ses kayna?"
      },
      {
        "id": "grade-3-exam-3-q5",
        "unitId": "grade-3-exam-3",
        "text": "Metnin konusu neyi g?sterir?",
        "options": [
          "Metinde ne anlat?ld?n?",
          "Sayfa say?s?n?",
          "Yazar?n ya?n?",
          "Yaz? rengini"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Metinde ne anlat?ld?n?"
      },
      {
        "id": "grade-3-exam-3-q6",
        "unitId": "grade-3-exam-3",
        "text": "Virg?l hangi durumda kullan?labilir?",
        "options": [
          "S?ral? kelimeleri ay?r?rken",
          "Her kelimeden sonra",
          "Sadece ba?l?kta",
          "Her say?da"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: S?ral? kelimeleri ay?r?rken"
      },
      {
        "id": "grade-3-exam-3-q7",
        "unitId": "grade-3-exam-3",
        "text": "Do?al ?k kayna? hangisidir?",
        "options": [
          "G?ne?",
          "El feneri",
          "Ampul",
          "Mum"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: G?ne?"
      },
      {
        "id": "grade-3-exam-3-q8",
        "unitId": "grade-3-exam-3",
        "text": "Hava maddenin hangi h?line ?rnektir?",
        "options": [
          "Gaz",
          "Kat?",
          "S?v?",
          "Toz"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Gaz"
      },
      {
        "id": "grade-3-exam-3-q9",
        "unitId": "grade-3-exam-3",
        "text": "586 say?s?nda onlar basama? hangisidir?",
        "options": [
          "8",
          "5",
          "6",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 8"
      },
      {
        "id": "grade-3-exam-3-q10",
        "unitId": "grade-3-exam-3",
        "text": "Arkada?m?z?n e?yas?n? kullanmadan ?nce ne yapmal?y?z?",
        "options": [
          "?zin istemeliyiz",
          "Gizlice almal?y?z",
          "Saklamal?y?z",
          "K?rmal?y?z"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ?zin istemeliyiz"
      },
      {
        "id": "grade-3-exam-3-q11",
        "unitId": "grade-3-exam-3",
        "text": "Evde sorumluluk almak hangi davran?t?r?",
        "options": [
          "Yata?n? toplamak",
          "Oyuncaklar? da?tmak",
          "Muslu?u a?k b?rakmak",
          "?devi unutmak"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Yata?n? toplamak"
      },
      {
        "id": "grade-3-exam-3-q12",
        "unitId": "grade-3-exam-3",
        "text": "349 say?s?n?n okunu?u hangisidir?",
        "options": [
          "? y?z k?rk dokuz",
          "? y?z doksan d?rt",
          "Otuz d?rt dokuz",
          "? k?rk dokuz"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
      },
      {
        "id": "grade-3-exam-3-q13",
        "unitId": "grade-3-exam-3",
        "text": "D?rt kenar? e?it olan ?ekil hangisidir?",
        "options": [
          "Kare",
          "?gen",
          "?ember",
          "Daire"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Kare"
      },
      {
        "id": "grade-3-exam-3-q14",
        "unitId": "grade-3-exam-3",
        "text": "36 ? 4 i?leminin sonucu ka?t?r?",
        "options": [
          "9",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 9"
      },
      {
        "id": "grade-3-exam-3-q15",
        "unitId": "grade-3-exam-3",
        "text": "Al?veri?te ?ncelik hangisine verilmelidir?",
        "options": [
          "?htiya?lara",
          "Her iste?e",
          "En pahal? ?r?ne",
          "Gereksiz e?yalara"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ?htiya?lara"
      },
      {
        "id": "grade-3-exam-3-q16",
        "unitId": "grade-3-exam-3",
        "text": "?Dar? kelimesinin z?t anlaml?s? hangisidir?",
        "options": [
          "Geni?",
          "?nce",
          "Uzun",
          "K?sa"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Geni?"
      },
      {
        "id": "grade-3-exam-3-q17",
        "unitId": "grade-3-exam-3",
        "text": "?Doktor? kelimesinin e? anlaml?s? hangisidir?",
        "options": [
          "Hekim",
          "Hasta",
          "?retmen",
          "Baytar"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Hekim"
      },
      {
        "id": "grade-3-exam-3-q18",
        "unitId": "grade-3-exam-3",
        "text": "Okul kaynaklar?n? verimli kullanmak i?in hangisi yap?lmal?d?r?",
        "options": [
          "I?klar? gereksiz a?k b?rakmamak",
          "Muslu?u a?k b?rakmak",
          "K?d? bo?a harcamak",
          "S?ralara zarar vermek"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: I?klar? gereksiz a?k b?rakmamak"
      },
      {
        "id": "grade-3-exam-3-q19",
        "unitId": "grade-3-exam-3",
        "text": "Evde sorumluluk almak hangi davran?t?r?",
        "options": [
          "Yata?n? toplamak",
          "Oyuncaklar? da?tmak",
          "Muslu?u a?k b?rakmak",
          "?devi unutmak"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Yata?n? toplamak"
      },
      {
        "id": "grade-3-exam-3-q20",
        "unitId": "grade-3-exam-3",
        "text": "349 say?s?n?n okunu?u hangisidir?",
        "options": [
          "? y?z k?rk dokuz",
          "? y?z doksan d?rt",
          "Otuz d?rt dokuz",
          "? k?rk dokuz"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ? y?z k?rk dokuz"
      }
    ]
  },
  {
    "id": "grade-4-exam-1",
    "gradeId": 4,
    "title": "4. S?n?f Karma Deneme 1",
    "questions": [
      {
        "id": "grade-4-exam-1-q1",
        "unitId": "grade-4-exam-1",
        "text": "Aşağıdakilerden hangisinin yapımında mıknatıs kullanılmamıştır...",
        "options": [
          "Buzdolabı kapağı",
          "Pusula iğnesi",
          "Hoparlör",
          "Futbol topu (2020Ç 8.SORU)"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: Futbol topu (2020Ç 8.SORU)"
      },
      {
        "id": "grade-4-exam-1-q2",
        "unitId": "grade-4-exam-1",
        "text": "Görselde besin grupları farklı büyüklüklerde verilmiştir. Beslenme Şeması Süt ve süt ürünleri Patates, ekmek ve diğer tahıl ürünleri Et, balık ve baklagiller Şeker veya yağ oranı yüksek yiyecekler Sebze ve meyveler Bu bölgelerin farklı büyüklüklere sahip olması neyi göstermektedir...",
        "options": [
          "En çok ve en az tüketilmesi gereken besin maddelerinin neler olduğunu",
          "Besinlerin su içeriklerinin ne kadar olduğunu",
          "Besinlerin karbonhidrat içeriklerinin ne kadar olduğunu",
          "Besinlerin günün hangi saatlerinde tüketilmesi gerektiğini -"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: En çok ve en az tüketilmesi gereken besin maddelerinin neler olduğunu"
      },
      {
        "id": "grade-4-exam-1-q3",
        "unitId": "grade-4-exam-1",
        "text": "urtuluş Savaşı sırasında Doğu Cephesi’nde aşağıdakilerden hangisi ile savaşılmıştır...",
        "options": [
          "Yunanlılar",
          "Fransızlar",
          "İngilizler",
          "Ermeniler"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Yunanlılar"
      },
      {
        "id": "grade-4-exam-1-q4",
        "unitId": "grade-4-exam-1",
        "text": "Çözümlenmiş şekli 5 on binlik + 8 binlik + 1 onluk + 2 birlik olan sayı aşağıdakilerden hangisidir...",
        "options": [
          "5812",
          "50 812",
          "58 012",
          "58 102 3."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 58 012"
      },
      {
        "id": "grade-4-exam-1-q5",
        "unitId": "grade-4-exam-1",
        "text": "Bakır tel Evet Buna göre, öğrencinin hangi cisimler için verdiği cevaplar doğrudur...",
        "options": [
          "1 ve 3",
          "2 ve 3",
          "1 ve 4",
          "3 ve 4 ( Ç 7.SORU)"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 1 ve 4"
      },
      {
        "id": "grade-4-exam-1-q6",
        "unitId": "grade-4-exam-1",
        "text": "Hazal’ın 30 lirası vardır. Büşra, Hazal’a 8 lira verdiğinde paraları eşit olmaktadır. Buna göre, Büşra ve Hazal’ın paraları toplamı kaçtır...",
        "options": [
          "38",
          "46",
          "66",
          "76 ( Ç)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 46"
      },
      {
        "id": "grade-4-exam-1-q7",
        "unitId": "grade-4-exam-1",
        "text": "“Geçmek” kelimesi aşağıdakilerin hangisinde “geride bırakmak, aşmak” anlamında kullanılmıştır...",
        "options": [
          "İplik, iğne deliğinden zor geçti.",
          "Çocuğun boyu babasını geçti.",
          "Eve giderken sizin sokaktan geçti.",
          "Bütün günüm seni takip etmekle geçti."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Çocuğun boyu babasını geçti."
      },
      {
        "id": "grade-4-exam-1-q8",
        "unitId": "grade-4-exam-1",
        "text": "sırada yer alıyor. Buna göre, ▲ aşağıdakilerden hangisi olabilir...",
        "options": [
          "127 699",
          "132 411",
          "271 070",
          "351 830"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 132 411"
      },
      {
        "id": "grade-4-exam-1-q9",
        "unitId": "grade-4-exam-1",
        "text": "Aşağıdakilerin hangisinde altı çizili kelime, yay ayraç ( ) içinde verilen anlama uygun kullanılmamıştır...",
        "options": [
          "Ben de çayıma şeker koymayı bıraktım. (Unutmak)",
          "Bizim takımımız daha ilk turda elendi. (Yarışma dışı kalmak)",
          "Bu gemi fırtınalara iyi dayandı. (Zarar ve hasar görmemek)",
          "Rüzgâr esince masanın üzerindeki kâğıtlar karıştı. (Düzensiz, dağınık olmak)"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ben de çayıma şeker koymayı bıraktım. (Unutmak)"
      },
      {
        "id": "grade-4-exam-1-q10",
        "unitId": "grade-4-exam-1",
        "text": "Aşağıdakilerin hangisinde “düşmek” kelimesinin cümlede kazandığı anlam yanlış verilmiştir... Cümle Anlam",
        "options": [
          "Bozulan haberleşme uydusu, Atlas Okyanusu’na düştü. Devrilmek, yere serilmek",
          "Ona mirastan bir ev, bir de tarla düşmüştü. Bir bölüşme sonunda payına ayrılmak",
          "Yılın ilk karı hep Aladağ’ın doruklarına düşer. Yağmak",
          "Siz, bu sıralar çocuğun üzerine çok düştünüz. Aşırı ilgi ve sevgi göstermek"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Bozulan haberleşme uydusu, Atlas Okyanusu’na düştü. Devrilmek, yere serilmek"
      },
      {
        "id": "grade-4-exam-1-q11",
        "unitId": "grade-4-exam-1",
        "text": "Çıkış → 2825 → 42 736 → 42 729 → 2826 → 345 678 → 345 687 Ali bu oyundaki her yol ayrımına vardığında, oklarla gösterilen sayılardan hangisi daha küçükse o yönde ilerleyerek çıkışa ulaşmıştır. Buna göre, Ali’nin ulaştığı çıkış aşağıdakilerden hangisidir...",
        "options": [
          "1. Çıkış",
          "2. Çıkış",
          "3. Çıkış",
          "4. Çıkış"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 3. Çıkış"
      },
      {
        "id": "grade-4-exam-1-q12",
        "unitId": "grade-4-exam-1",
        "text": "2. 3. 4. 5. 6. Buna göre, üçüncü ve beşinci sayı sırasıyla aşağıdakilerin hangisinde verilmiştir...",
        "options": [
          "50 ve 66",
          "50 ve 67",
          "51 ve 66",
          "51 ve 67 ( Ç)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 50 ve 67"
      },
      {
        "id": "grade-4-exam-1-q13",
        "unitId": "grade-4-exam-1",
        "text": "Yeryüzündeki bir noktadan, bir günün belli saatlerinde Güneş’e bakıldığında Güneş’in konumu şekildeki gibi oluyor. Saat 10.00 Saat 12.00 Saat 17.00 Yeryüzüne göre, Güneş’in konumunun değişmesi aşağıdakilerden hangisi ile açıklanır...",
        "options": [
          "Dünya’nın Güneş etrafında dolanması",
          "Dünya’nın kendi ekseni etrafında dönmesi",
          "Dünya’nın Güneş etrafında dolanımını bir yılda tamamlaması",
          "Bir yılın yaklaşık 365 gün olması"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Dünya’nın kendi ekseni etrafında dönmesi"
      },
      {
        "id": "grade-4-exam-1-q14",
        "unitId": "grade-4-exam-1",
        "text": "Atatürk’ün annesinin adı, aşağıdakilerden hangisidir...",
        "options": [
          "Ayşe Hanım",
          "Makbule Hanım",
          "Zübeyde Hanım",
          "Ülkü Hanım"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ayşe Hanım"
      },
      {
        "id": "grade-4-exam-1-q15",
        "unitId": "grade-4-exam-1",
        "text": "Bir fırının bir günde sattığı ekmeklerin sayısı en yakın yüzlüğe yuvarlandığında 4500 bulunuyor. Bu fırının bir günde sattığı ekmeklerin sayısı en fazla kaç olabilir...",
        "options": [
          "4505",
          "4549",
          "4555",
          "4599"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 4549"
      },
      {
        "id": "grade-4-exam-1-q16",
        "unitId": "grade-4-exam-1",
        "text": "Aşağıdaki altı çizili kelimelerden hangisinin eş anlamlısı yay ayraç ( ) içinde doğru verilmiştir...",
        "options": [
          "Evimdeki huzuru başka yerde bulamam. (Güven)",
          "Okulumuzun açılışı hareketli geçti. (Eğlenceli)",
          "Bizim iş yerinde marifetli kişiler aranıyor. (Hünerli)",
          "Mahallemizde park yeri sıkıntısı yaşanıyor. (Sokak) ANLAMLARINI AYIRT EDER."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Bizim iş yerinde marifetli kişiler aranıyor. (Hünerli)"
      },
      {
        "id": "grade-4-exam-1-q17",
        "unitId": "grade-4-exam-1",
        "text": "Nazlı, yüksek bir tepeye çıkıp köyünü seyretti. Bu cümledeki altı çizili kelimenin anlamca karşıtı aşağıdakilerden hangisidir...",
        "options": [
          "Uzun",
          "Büyük",
          "Dar",
          "Alçak"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: Alçak"
      },
      {
        "id": "grade-4-exam-1-q18",
        "unitId": "grade-4-exam-1",
        "text": "cisim 2. cisim",
        "options": [
          "Bakır tel Toplu iğne",
          "Demir çivi Tahta parçası",
          "arton kutu Bakır tel",
          "Tahta parçası Demir tozu ( Ç 8.SORU)"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Bakır tel Toplu iğne"
      },
      {
        "id": "grade-4-exam-1-q19",
        "unitId": "grade-4-exam-1",
        "text": "Yeni kimlik kartlarıyla ilgili aşağıdakilerden hangisi yanlıştır...",
        "options": [
          "On yıl boyunca geçerlidir.",
          "İmza bölümü bulunmaktadır.",
          "Aile bireylerimizin T.C. kimlik numaraları aynıdır.",
          "Akıllı kart özelliği kazandıran elektronik çip bulunmaktadır."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: On yıl boyunca geçerlidir."
      },
      {
        "id": "grade-4-exam-1-q20",
        "unitId": "grade-4-exam-1",
        "text": "Bir öğrenci iki tane çubuk mıknatısı şekildeki gibi birbirine yaklaştırdığında mıknatısların birbirini ittiğini gözlemliyor. Daha sonra iki mıknatısı da ters yöne çevirip yeniden birbirine yaklaştırdığında mıknatısların yine birbirini ittiğini fark ediyor. İlk durum İkinci durum Bu durum mıknatısın hangi özelliği ile açıklanır...",
        "options": [
          "Demir, nikel ve kobaltı çekmesi",
          "Aynı kutupların birbirini itmesi",
          "Zıt kutupların birbirini çekmesi",
          "Temas olmadan maddeleri çekmesi ( Ç 11. SORU)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Aynı kutupların birbirini itmesi"
      }
    ]
  },
  {
    "id": "grade-4-exam-2",
    "gradeId": 4,
    "title": "4. S?n?f Karma Deneme 2",
    "questions": [
      {
        "id": "grade-4-exam-2-q1",
        "unitId": "grade-4-exam-2",
        "text": "Öğrenciler Dünya’nın Güneş etrafındaki dolanma hareketinden dolayı oluşan etkileri aşağıdaki gibi açıklıyor. Hatice : Yeryüzünde kayaçlar oluşur. Fatma : Bir zaman dilimi olan yıl oluşur. Ömer : Yeryüzünün tamamında yaz mevsimi yaşanır. Bu öğrencilerden hangilerinin açıklaması doğrudur...",
        "options": [
          "Yalnız Hatice",
          "Yalnız Fatma",
          "Hatice ve Fatma",
          "Hatice, Fatma ve Ömer ( Ç 2. SORU)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Yalnız Fatma"
      },
      {
        "id": "grade-4-exam-2-q2",
        "unitId": "grade-4-exam-2",
        "text": "96 4629 74 6742 9 sıralamasında 94 6 462 ve 97 9 467 sayıları altı basamaklı birer doğal sayıdır. Verilen sıralamanın doğru olması için 4 yerine yazılabilecek en küçük doğal sayı için 9 yerine yazılabilecek doğal sayıların toplamı kaçtır...",
        "options": [
          "15",
          "17",
          "24",
          "30"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: 30"
      },
      {
        "id": "grade-4-exam-2-q3",
        "unitId": "grade-4-exam-2",
        "text": "6 basamaklı bir doğal sayının yüzbinler basamağındaki sayı 3 azaltılıp on binler basamağındaki sayı 7 artırılırsa sayının değerindeki değişimi aşağıdakilerden hangisi ifade eder...",
        "options": [
          "230 000 artar.",
          "230 000 azalır.",
          "370 000 artar.",
          "370 000 azalır. (205 )"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 230 000 azalır."
      },
      {
        "id": "grade-4-exam-2-q4",
        "unitId": "grade-4-exam-2",
        "text": "Üzerinde rakamlar yazan 6 tane kart yan yana dizilerek görseldeki altı basamaklı doğal sayı elde edilmiştir. 6 9 7 5 3 8 Buna göre bu kartlardan hangi ikisinin yerleri değiştirilirse bu sayının değeri 1800 azalır...",
        "options": [
          "7 5ile",
          "7 9ile",
          "8 6ile",
          "5 3ile"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: 5 3ile"
      },
      {
        "id": "grade-4-exam-2-q5",
        "unitId": "grade-4-exam-2",
        "text": "Her insanın fiziksel özellikleri, kişilik özellikleri ve yetenekleri birbirinden farklıdır. Bu nedenle toplumsal ilişkilerimizde kendimizi karşımızdaki insanın yerine koyarak duygularını ve düşüncelerini anlamaya çalışmalıyız. Buna - - - - denilmektedir. Verilen metinde boş bırakılan yere aşağıdakilerden hangisi yazılmalıdır...",
        "options": [
          "yetenek",
          "istek",
          "ayrıcalık",
          "empati Ç"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: yetenek"
      },
      {
        "id": "grade-4-exam-2-q6",
        "unitId": "grade-4-exam-2",
        "text": "“Dedem eli açık bir insandır.” cümlesindeki “eli açık” kelime öbeğinin eş anlamlısı aşağıdaki cümlelerin hangisinde vardır...",
        "options": [
          "Arkadaşım savurgan biriydi.",
          "Ayşe nine elinden gelen her türlü iyiliği yapan, cömert bir insandı.",
          "En büyük hayali zengin olmaktı.",
          "Çalışkan insan bugünün işini yarına bırakmaz."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Ayşe nine elinden gelen her türlü iyiliği yapan, cömert bir insandı."
      },
      {
        "id": "grade-4-exam-2-q7",
        "unitId": "grade-4-exam-2",
        "text": "Yandaki işlemde kaçtır...",
        "options": [
          "9 ( Ç) 10. Verilen toplama işlemine göre, AB C++ işleminin sonucu kaçtır...",
          "14",
          "15",
          "16"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: 16"
      },
      {
        "id": "grade-4-exam-2-q8",
        "unitId": "grade-4-exam-2",
        "text": "Mondros Ateşkes Antlaşması’ndan sonra İzmit, Eskişehir, Afyon, Samsun, Merzifon ve Batum gibi şehirler, aşağıdaki devletlerden hangisi tarafından işgal edilmiştir...",
        "options": [
          "Rusya",
          "İngiltere",
          "Fransa",
          "İtalya"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Rusya"
      },
      {
        "id": "grade-4-exam-2-q9",
        "unitId": "grade-4-exam-2",
        "text": "Yusuf, yaşamındaki önemli olaylarla ilgili fotoğraflı bir zaman şeridi hazırlamıştır. Ancak kronolojik sıralamasında bir hata yapmıştır. ’da doğdum. ’te anaokuluna başladım. ’de kardeşim doğdu. Bir yaşında konuşmaya başladım. 3 Annnnnee ... Üçüncü sınıfa giderken gitar kursuna başladım. Yusuf’un zaman şeridindeki sıralamasının doğru olması için kaç numaralı olaylar yer değiştirmelidir...",
        "options": [
          "1 ve 2",
          "2 ve 3",
          "3 ve 4",
          "4 ve 5"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 1 ve 2"
      },
      {
        "id": "grade-4-exam-2-q10",
        "unitId": "grade-4-exam-2",
        "text": "Yer kabuğunun yapısı ile ilgili aşağıdakilerden hangisi doğrudur...",
        "options": [
          "Yer kabuğu Dünya’nın en iç katmanıdır.",
          "Doğada büyük yer tutan canlıların yaşadığı parçalara kömür adı verilir.",
          "Yer kabuğundan çıkarılan ekonomik değeri yüksek olan kayaçlara maden adı verilir.",
          "Yer kabuğundaki saf kum olan maden ısıtıldığında bakır elde edilir. ( 1. SORU)"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Yer kabuğundan çıkarılan ekonomik değeri yüksek olan kayaçlara maden adı verilir."
      },
      {
        "id": "grade-4-exam-2-q11",
        "unitId": "grade-4-exam-2",
        "text": "Tablo: Bazı Nehirlerin Uzunlukları Nehirler Uzunluk (m) 523 000 L 519 000 M 548 000 Yukarıdaki tabloda bazı nehirlerin ülkemiz sınırları içerisindeki uzunlukları verilmiştir. Nehirlerin verilen uzunluklarına göre, küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir...",
        "options": [
          "L, , M",
          ", L, M",
          "M, , L",
          ", M, L 9. Nüfus: 63 607 A İLÇESİ Tabelaya göre, A ilçesinin nüfusunun okunuşu aşağıdakilerden hangisidir..."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: L, , M"
      },
      {
        "id": "grade-4-exam-2-q12",
        "unitId": "grade-4-exam-2",
        "text": "Mustafa emal Paşa’ya “gazilik” unvanı hangi savaştaki başarısından dolayı verilmiştir...",
        "options": [
          "Büyük Taarruz",
          "1. İnönü Savaşı",
          "Başkumandan Meydan Muharebesi",
          "Sakarya Meydan Muharebesi"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Büyük Taarruz"
      },
      {
        "id": "grade-4-exam-2-q13",
        "unitId": "grade-4-exam-2",
        "text": "aşama: Ölen canlıların, sel ve toprakların kayması gibi dış etkenler ile kum ve çamurun altında kalması Buna göre, fosillerin oluşum aşamalarının sırası aşağıdakilerin hangisinde doğru verilmiştir...",
        "options": [
          "1 - 2 - 3",
          "3 - 2 - 1",
          "3 - 1 - 2",
          "2 - 3 - 1"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 3 - 2 - 1"
      },
      {
        "id": "grade-4-exam-2-q14",
        "unitId": "grade-4-exam-2",
        "text": "Paketli gıdaların son tüketim tarihleriyle ilgili aşağıdakilerden hangisi doğrudur...",
        "options": [
          "Son tüketim tarihi geçen gıdalar güvenle tüketilmelidir.",
          "Paketli gıda alırken son tüketim tarihi en yakın olan tercih edilmelidir.",
          "Tüm besinler hangi ortamda saklanırsa saklansın son tüketim tarihine kadar daima taze kalırlar.",
          "Son tüketim tarihi geçen gıdalar zehirlenmeye neden olabilir. -"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: Son tüketim tarihi geçen gıdalar zehirlenmeye neden olabilir. -"
      },
      {
        "id": "grade-4-exam-2-q15",
        "unitId": "grade-4-exam-2",
        "text": "Atatürk, olayları iyi değerlendirerek, sonuçları önceden tahmin ederdi. Bu durum, Atatürk’ün kişilik özelliklerinden en çok hangisiyle ilgilidir...",
        "options": [
          "İleri görüşlülüğü",
          "Vatanseverliği",
          "ararlılığı",
          "Çalışkanlığı"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: İleri görüşlülüğü"
      },
      {
        "id": "grade-4-exam-2-q16",
        "unitId": "grade-4-exam-2",
        "text": "Öğretmen üstü kapatılmış iki çubuk maddenin şekildeki gibi ipe bağlı olduğu hâlde yapıştığını gösteriyor. ip Buna göre, aşağıdaki yorumlardan hangisi yanlış olur...",
        "options": [
          "İki çubuk madde mıknatıs olabilir.",
          "Çubuk maddelerden biri mıknatıs diğeri demir olabilir.",
          "Çubuk maddelerin yapıştığı kısım, aynı kutuplu mıknatıslardır.",
          "Çubuk maddelerin yapıştığı uçlar, zıt kutuplu mıknatıslardır. (2020Ç 7.SORU)"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: Çubuk maddelerin yapıştığı uçlar, zıt kutuplu mıknatıslardır. (2020Ç 7.SORU)"
      },
      {
        "id": "grade-4-exam-2-q17",
        "unitId": "grade-4-exam-2",
        "text": "Mondros Ateşkes Anlaşması’na göre, İtalyanlar aşağıdakilerden hangisini işgal etmişlerdir...",
        "options": [
          "İzmir",
          "Antalya",
          "Antep",
          "Samsun"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: İzmir"
      },
      {
        "id": "grade-4-exam-2-q18",
        "unitId": "grade-4-exam-2",
        "text": "Bıçağın keskin yüzüyle ekmeği kesti. Çocuk, yüze kadar saymayı öğrendi. Bu cümlelerdeki altı çizili kelimeler arasındaki anlam ilişkisi aşağıdakilerden hangisidir...",
        "options": [
          "arşıt anlamlılık",
          "Yakın anlamlılık",
          "Eş seslilik",
          "Eş anlamlılık"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Eş seslilik"
      },
      {
        "id": "grade-4-exam-2-q19",
        "unitId": "grade-4-exam-2",
        "text": "Aşağıdakilerden hangisi eğitim ile ilgili bir atasözüdür...",
        "options": [
          "Ağaç yaşken eğilir.",
          "Damlaya damlaya göl olur.",
          "Tatlı dil yılanı deliğinden çıkarır.",
          "Ak akçe kara gün içindir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Ağaç yaşken eğilir."
      },
      {
        "id": "grade-4-exam-2-q20",
        "unitId": "grade-4-exam-2",
        "text": "Aşağıdaki olaylardan hangisi diğerlerinden daha sonra meydana gelmiştir...",
        "options": [
          "Mustafa emal’in Samsun’a çıkışı",
          "Amasya Genelgesi",
          "Sivas ongresi",
          "Erzurum ongresi"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Mustafa emal’in Samsun’a çıkışı"
      }
    ]
  },
  {
    "id": "grade-4-exam-3",
    "gradeId": 4,
    "title": "4. S?n?f Karma Deneme 3",
    "questions": [
      {
        "id": "grade-4-exam-3-q1",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıdaki sayılardan hangisi en yakın yüzlüğe yuvarlandığında 5300, en yakın onluğa yuvarlandığında 5270 bulunur...",
        "options": [
          "5370",
          "5275",
          "5266",
          "5168 ( Ç)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: 5275"
      },
      {
        "id": "grade-4-exam-3-q2",
        "unitId": "grade-4-exam-3",
        "text": "435 ■ 62 2 435 7 ● 0 2 435 76 ▲ Yukarıda rakamları farklı 6 basamaklı sayıların büyükten küçüğe doğru sıralanışı verilmiştir. Buna göre, ■, ● ve ▲’nin basamak değerlerinin toplamı en az kaçtır...",
        "options": [
          "760",
          "771",
          "871",
          "880"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 760"
      },
      {
        "id": "grade-4-exam-3-q3",
        "unitId": "grade-4-exam-3",
        "text": "Bazı öğrencilerin maden kavramı ile ilgili verdikleri bilgiler aşağıdaki gibidir. Altın bir madendir çünkü parlak ve serttir. Murat Seval kayaçtır. Buna göre, hangi öğrencinin verdiği bilgi açıklaması ile birlikte doğrudur...",
        "options": [
          "Murat",
          "Şule",
          "Seval",
          "Tarık ( 15. SORU)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Şule"
      },
      {
        "id": "grade-4-exam-3-q4",
        "unitId": "grade-4-exam-3",
        "text": "Selim, ikinci sınıfa geçti. Selim’in yaşamına ait verilen gelişmelerin kronolojik olarak doğru sıralanışı, aşağıdakilerden hangisidir...",
        "options": [
          "3, 2, 1, 4",
          "1, 2, 4, 3",
          "1, 3, 4 ,2",
          "3, 1, 2 ,4 Ç"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 3, 2, 1, 4"
      },
      {
        "id": "grade-4-exam-3-q5",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıdakilerin hangisinde altı çizili kelime terim anlamıyla kullanılmıştır...",
        "options": [
          "Yeryüzünde yaşam çok uzun yıllar önce başladı.",
          "Bu bilgisayarın işlemcisi oldukça hızlıdır.",
          "argalar yiyecek sakladığı yerleri kolayca bulabilir.",
          "Müzik dinlemeyi ve kaval çalmayı çok seviyorum. METNİN ANLAMINA ATISINI AVRAR."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Bu bilgisayarın işlemcisi oldukça hızlıdır."
      },
      {
        "id": "grade-4-exam-3-q6",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıdaki deyimlerin hangisinde özlem söz konusu değildir...",
        "options": [
          "Göreceği gelmek",
          "Burnunda tütmek",
          "Gönül bağlamak",
          "Gözü yolda kalmak"
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: Gönül bağlamak"
      },
      {
        "id": "grade-4-exam-3-q7",
        "unitId": "grade-4-exam-3",
        "text": "Uygun koşullarda kurutulan gıdalar küçülür ve ağırlıkları azalır. Bu bilgiye göre, kurutulan gıdalarda ağırlığın azalmasına neden olan temel madde aşağıdakilerden hangisidir...",
        "options": [
          "Su",
          "Protein",
          "Yağ",
          "arbonhidrat"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Su"
      },
      {
        "id": "grade-4-exam-3-q8",
        "unitId": "grade-4-exam-3",
        "text": "Bir kişinin soyunu gösteren çizelgeye “soy ağacı” denir. Yukarıdakilerden hangisi ya da hangileri doğrudur...",
        "options": [
          "1 ve 2",
          "2 ve 3",
          "3 ve 4",
          "1, 2 ve 3 Ç"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 1 ve 2"
      },
      {
        "id": "grade-4-exam-3-q9",
        "unitId": "grade-4-exam-3",
        "text": "Bir öğrenci sağlıklı ve dengeli beslenmeye uygun kahvaltı yapmak için tablodaki besinlerden seçim yapıyor. Yumurta  Zeytin  Süt  Bal  Tahıllı ekmek  remalı bisküvi  Asitli gazoz  Peynir  Pasta  Buna göre, kaç numaralı besinleri seçmesi uygun olmaz...",
        "options": [
          "1, 3, 4",
          "2, 4, 8",
          "3, 5, 8",
          "6, 7, 9 - Ç"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: 6, 7, 9 - Ç"
      },
      {
        "id": "grade-4-exam-3-q10",
        "unitId": "grade-4-exam-3",
        "text": "Bir çırak, çok güzel testiler yapıyormuş. Ama testilerin orasından burasından yarılmasına, yer yer çatlamasına engel olamıyormuş. Usta, çırağına “Sana demedim mi evladım, sen bu işin püf noktasını henüz öğrenmedin. Haydi, geç bakalım tezgâhın başına da bir testi çıkar! Ben de sana püf noktasını göstereyim.” demiş. Çırak, çarkı döndürüp çamura şekil vermeye başlamış. Usta da önünde dönen çanağa arada sırada “püf!” diye üfleyerek testiyi çatlatacak olan bazı küçük hava kabarcıklarını patlatmış. O günden sonra buna “püf noktası” denmiş. Bu metne göre “püf noktası” sözünün anlamı aşağıdakilerden hangisidir...",
        "options": [
          "Bir işin incelik gerektiren önemli kısmı",
          "Akıl veren veya öğreten kimse",
          "Uzun ve yorucu çalışma",
          "Bir işi kendi başına yapabilme yeteneği"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Bir işin incelik gerektiren önemli kısmı"
      },
      {
        "id": "grade-4-exam-3-q11",
        "unitId": "grade-4-exam-3",
        "text": "“Öyle insanlar vardır ki konuştular mı ağzından bal akıyor sanırsınız.” cümlesindeki altı çizili deyimin anlamı aşağıdakilerden hangisidir...",
        "options": [
          "Sözlerini tartmadan söylemek",
          "Çok tatlı konuşmak",
          "İstemediği hâlde söyleyivermek",
          "Birçok kez söylemiş olmak"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Çok tatlı konuşmak"
      },
      {
        "id": "grade-4-exam-3-q12",
        "unitId": "grade-4-exam-3",
        "text": "1072 +  = 1534 Verilen eşitliğe göre,  kaçtır...",
        "options": [
          "362",
          "453",
          "462",
          "572 6. Verilen toplama işleminde, ++ kaçtır..."
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: 572 6. Verilen toplama işleminde, ++ kaçtır..."
      },
      {
        "id": "grade-4-exam-3-q13",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıdakilerin hangisinde altı çizili sözün cümlede kazandığı anlam ayraç içinde yanlış verilmiştir...",
        "options": [
          "Önüne fırlayan köpeğe çarpmamak için direksiyonu sağa kıvırdı. (atlamak)",
          "Ben belli bir noktaya işaret etmek için buraya geldim. (Dikkat çekmek)",
          "Bahçede çalışan babama seslenince babam bana döndü. (Yönelmek)",
          "Evimizde ince bir temizlik yapmanın zamanı gelmişti. (Ayrıntılı)"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Önüne fırlayan köpeğe çarpmamak için direksiyonu sağa kıvırdı. (atlamak)"
      },
      {
        "id": "grade-4-exam-3-q14",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıda Ömer’in hayatındaki önemli gelişmeler numaralandırılarak karışık olarak verilmiştir. ’da doğdum. ’te anaokuluna başladım. ’de gitar kursuna başladım. 1 2 ’de kardeşim doğdu. ’da konuşmaya başladım. 4 Annnnnee ... Bu gelişmelerin kronolojik sıralaması aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir...",
        "options": [
          "1 - 4 - 3 - 2 - 5",
          "1 - 2 - 3 - 4 - 5",
          "2 - 4 - 1 - 3 - 5",
          "5 - 4 - 3 - 2 - 1 Ç"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: 1 - 4 - 3 - 2 - 5"
      },
      {
        "id": "grade-4-exam-3-q15",
        "unitId": "grade-4-exam-3",
        "text": "Şekillerde kuvvetin cisimler üzerindeki etkilerine örnekler veriliyor. Duran topa vuruyor Odun parçasını kırıyor Bisikletin frenine basarak duruyor Bu örneklere bakılarak kuvvetin etkileri ile ilgili aşağıdakilerden hangisi söylenemez...",
        "options": [
          "Cisimlerin şeklini değiştirebilir.",
          "Uygulandığı her cismi durdurur.",
          "Duran cisimleri hareket ettirebilir.",
          "Cisimleri yavaşlatabilir. ( Ç 9. SORU)"
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Uygulandığı her cismi durdurur."
      },
      {
        "id": "grade-4-exam-3-q16",
        "unitId": "grade-4-exam-3",
        "text": "Dengeli beslenme için tüm besin çeşitlerinden yeterli miktarda tüketilmelidir. Buna göre, aşağıdakilerden hangisi sağlıklı bir insanın dengeli beslenmesi için uygun bir davranıştır...",
        "options": [
          "Sadece protein içerikli besinler tüketmek",
          "arbonhidrat içerikli besinleri hiç tüketmemek",
          "Sürekli aynı besin içeriklerini tüketmek",
          "Her besin çeşidinden vücudun ihtiyacı kadar tüketmek -"
        ],
        "correctIndex": 3,
        "explanation": "Do?ru cevap: Her besin çeşidinden vücudun ihtiyacı kadar tüketmek -"
      },
      {
        "id": "grade-4-exam-3-q17",
        "unitId": "grade-4-exam-3",
        "text": "Aşağıdakilerden hangisi, insanların duygu ve düşüncelerinin birbirinden farklı olduğuna örnek olur...",
        "options": [
          "ulüp çalışmalarında, üyelerin birbirleriyle yardımlaşması",
          "Okul içinde herkesin görev ve sorumluluklarını yerine getirmesi",
          "Ailenin ortaklaşa kararıyla evin ihtiyaçlarının belirlenmesi",
          "Arkadaşlarımızın, aynı olay hakkında farklı yorumlarda bulunması"
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: ulüp çalışmalarında, üyelerin birbirleriyle yardımlaşması"
      },
      {
        "id": "grade-4-exam-3-q18",
        "unitId": "grade-4-exam-3",
        "text": "Cisimler kuvvet etkisiyle şekil değiştirir. söylenenlerden hangilerine ulaşılabilir...",
        "options": [
          "Yalnız 1",
          "Yalnız 2",
          "1 ve 3",
          "1, 2 ve 3 (2020Ç 4.SORU) 8. Mıknatısın toplu iğnelere uygulayacağı kuvvet aşağıdakilerden hangisidir..."
        ],
        "correctIndex": 2,
        "explanation": "Do?ru cevap: 1 ve 3"
      },
      {
        "id": "grade-4-exam-3-q19",
        "unitId": "grade-4-exam-3",
        "text": "Merhaba, ben Derya. 6 yaşından beri piyano çalıyorum. İlk duyduğum melodiyi hemen çalabilirim. Amacım müzik alanında eğitim almak. Ayrıca şiir okumaktan ve dinlemekten hoşlanırım. Buna göre, Derya’nın sahip olduğu yetenek ve ilgi konusunda aşağıdakilerden hangisi söylenebilir...",
        "options": [
          "Derya birçok alanda yeteneklidir.",
          "Derya’nın yeteneği şiir okumadır.",
          "Derya piyano çalmada yetenekli, şiir okumaya ise ilgilidir.",
          "Derya hem şiir okuma hem de piyano çalmada yeteneklidir."
        ],
        "correctIndex": 0,
        "explanation": "Do?ru cevap: Derya birçok alanda yeteneklidir."
      },
      {
        "id": "grade-4-exam-3-q20",
        "unitId": "grade-4-exam-3",
        "text": "Çok güzel yerlerden, anlatılamayacak kadar güzel bahçelerden, altın, gümüş ve elmas dolu odalardan geçtiler. Bu cümlede altı çizili kelimelerden birinin zıt anlamlısı aşağıdakilerin hangisinde kullanılmamıştır...",
        "options": [
          "Diğer günlere göre daha az yemek yedi.",
          "Bugün bize bütün gerçekleri söyledi.",
          "Masaldaki devin çirkin görüntüsü zihnimde canlandı.",
          "Bardağın yarısının boş olduğunu görünce şüphelendi. LILARINI BULUR."
        ],
        "correctIndex": 1,
        "explanation": "Do?ru cevap: Bugün bize bütün gerçekleri söyledi."
      }
    ]
  }
];

export function getPdfUnitsForSubjectAndGrade(subjectId: string, gradeId: number): Unit[] {
  return pdfUnits
    .filter(unit => unit.subjectId === subjectId && unit.gradeId === gradeId)
    .sort((a, b) => a.order - b.order)
    .map(sanitizeUnit);
}

export function getPdfSlidesForUnit(unitId: string): TopicSlide[] {
  return pdfSlides.filter(slide => slide.unitId === unitId).sort((a, b) => a.order - b.order).map(sanitizeSlide);
}

export function getPdfQuestionsForUnit(unitId: string): Question[] {
  return pdfQuestions.filter(question => question.unitId === unitId).map(sanitizeQuestion);
}

export function getPracticeExamsForGrade(gradeId: number): PracticeExam[] {
  return pdfPracticeExams.filter(exam => exam.gradeId === gradeId).map(sanitizeExam);
}

const textFixes: Array<[string, string]> = [
  ['Ã§', 'ç'], ['Ã‡', 'Ç'], ['ÄŸ', 'ğ'], ['Äž', 'Ğ'], ['Ä±', 'ı'], ['Ä°', 'İ'],
  ['Ã¶', 'ö'], ['Ã–', 'Ö'], ['ÅŸ', 'ş'], ['Åž', 'Ş'], ['Ã¼', 'ü'], ['Ãœ', 'Ü'],
  ['Ã¢', 'â'], ['Ã®', 'î'], ['Ã»', 'û'], ['â€™', '’'], ['â€œ', '“'], ['â€', '”'],
  ['S?zc?kte', 'Sözcükte'], ['s?n?f', 'sınıf'], ['S?n?f', 'Sınıf'], ['T?rk?e', 'Türkçe'],
  ['?al?ma', 'Çalışma'], ['?al??ma', 'Çalışma'], ['kitab?ndan', 'kitabından'],
  ['kitab?ndaki', 'kitabındaki'], ['uyarlanm?', 'uyarlanmış'], ['uyarlanm??', 'uyarlanmış'],
  ['Z?t', 'Zıt'], ['Okudu?unu', 'Okuduğunu'], ['S?ralama', 'Sıralama'], ['G?rsel', 'Görsel'],
  ['Yaz?m', 'Yazım'], ['T?rleri', 'Türleri'], ['Do?al', 'Doğal'], ['Say?lar', 'Sayılar'],
  ['??lemi', 'İşlemi'], ['?lemi', 'İşlemi'], ['??karma', 'Çıkarma'], ['B?lme', 'Bölme'],
  ['?l?me', 'Ölçme'], ['??zme', 'Çözme'], ['Sa?l?kl?', 'Sağlıklı'], ['G?venli', 'Güvenli'],
  ['Do?ada', 'Doğada'], ['G?nl?k', 'Günlük'], ['Ya?am', 'Yaşam'], ['Kabu?u', 'Kabuğu'],
  ['D?nya', 'Dünya'], ['Ayd?nlatma', 'Aydınlatma'], ['Canl?lar', 'Canlılar'], ['S?re?ler', 'Süreçler'],
  ['Kimli?i', 'Kimliği'], ['K?lt?r', 'Kültür'], ['Ya?ad?m?z', 'Yaşadığımız'],
  ['Ya?ad???m?z', 'Yaşadığımız'], ['T?ketim', 'Tüketim'], ['Vatanda?l?k', 'Vatandaşlık'],
  ['Y?netim', 'Yönetim'], ['Ge?mi?ten', 'Geçmişten'], ['Bug?ne', 'Bugüne'],
  ['Kaynaklar?m?z', 'Kaynaklarımız'], ['De?i?im', 'Değişim'],
  ['?nitesi', 'ünitesi'], ['?nitede', 'ünitede'], ['haz?rlanacaks?n', 'hazırlanacaksın'],
  ['k?k?n?', 'kökünü'], ['se?enekleri', 'seçenekleri'], ['kar?la?t?r', 'karşılaştır'],
  ['kar??la?t?r', 'karşılaştır'], ['yap?ya', 'yapıya'], ['yak?n', 'yakın'], ['i?lem', 'işlem'],
  ['ad?mlar?', 'adımları'], ['i?in', 'için'], ['i?aretlemek', 'işaretlemek'], ['do?ru', 'doğru'],
  ['kolayla?t?r?r', 'kolaylaştırır'], ['Nas?l', 'Nasıl'], ['??zerim?', 'Çözerim?'],
  ['olmad?n', 'olmadığın'], ['olmad???n', 'olmadığın'], ['Yanl??', 'Yanlış'], ['Yanl?', 'Yanlış'],
  ['se?enekler', 'seçenekler'], ['y?zden', 'yüzden'], ['K?sa', 'Kısa'], ['tekrar?n', 'tekrarın'],
  ['ard?ndan', 'ardından'], ['peki?tireceksin', 'pekiştireceksin'], ['Haz?rsan', 'Hazırsan'],
  ['ba?ar?', 'başarı'], ['se?enek', 'seçenek'], ['de?ildir', 'değildir'], ['Do?ru', 'Doğru'],
  ['anlaml?s?', 'anlamlısı'], ['??retmen', 'Öğretmen'], ['z?t', 'zıt'], ['g?sterir?', 'gösterir?'],
  ['anlat?ld?n?', 'anlatıldığını'], ['anlat?ld???n?', 'anlatıldığını'], ['say?s?n?', 'sayısını'],
  ['Yazar?n', 'Yazarın'], ['ya?n?', 'yaşını'], ['ya??n?', 'yaşını'], ['sat?ra', 'satıra'],
  ['Ba?l?k', 'Başlık'], ['C?mle', 'Cümle'], ['i?aret', 'işaret'], ['Virg?l', 'Virgül'],
  ['se?erken', 'seçerken'], ['olmas?na', 'olmasına'], ['b?y?k', 'büyük'], ['b?l?m?ne', 'bölümüne'],
  ['yaz?l?r?', 'yazılır?'], ['Mesaj?n', 'Mesajın'], ['k?sa', 'kısa'], ['Hik?yede', 'Hikâyede'],
  ['ya?ayan', 'yaşayan'], ['ki?i', 'kişi'], ['varl?k', 'varlık'], ['ba?l???', 'başlığı'],
  ['ba?l?', 'başlığı'], ['i?areti', 'işareti'], ['bak?l?r?', 'bakılır?'], ['y?ksek', 'yüksek'],
  ['de?ere', 'değere'], ['K?d?n', 'Kâğıdın'], ['K???d?n', 'Kâğıdın'], ['K?d?', 'Kâğıdı'],
  ['K???d?', 'Kâğıdı'], ['kullan?labilir?', 'kullanılabilir?'], ['S?ral?', 'Sıralı'],
  ['ay?r?rken', 'ayırırken'], ['ba?l?kta', 'başlıkta'], ['say?da', 'sayıda'],
  ['say?s?n?n', 'sayısının'], ['okunu?u', 'okunuşu'], ['y?z', 'yüz'], ['k?rk', 'kırk'],
  ['d?rt', 'dört'], ['say?s?nda', 'sayısında'], ['basama??', 'basamağı'], ['basama?', 'basamağı'],
  ['i?leminin', 'işleminin'], ['ka?t?r?', 'kaçtır?'], ['nas?l', 'nasıl'], ['D?rtte', 'Dörtte'],
  ['D?rt', 'Dört'], ['b?t?n', 'bütün'], ['yar?m', 'yarım'], ['e?it', 'eşit'], ['??gen', 'Üçgen'],
  ['?gen', 'Üçgen'], ['kuru?tur?', 'kuruştur?'], ['s?tun', 'sütun'], ['D?nya?n?n', 'Dünya’nın'],
  ['K?re', 'Küre'], ['K?p', 'Küp'], ['G?rme', 'Görme'], ['organ?m?z', 'organımız'], ['G?z', 'Göz'],
  ['Kap?y?', 'Kapıyı'], ['D?nme', 'Dönme'], ['h?line', 'hâline'], ['S?v?', 'Sıvı'], ['???k', 'ışık'],
  ['I?k', 'Işık'], ['kayna??', 'kaynağı'], ['G?ne?', 'Güneş'], ['t?r', 'tür'], ['kaynakt?r?', 'kaynaktır?'],
  ['Canl?lar?n', 'Canlıların'], ['K?r?lma', 'Kırılma'], ['ya?am', 'yaşam'], ['d?ng?s?', 'döngüsü'],
  ['ba?lar?', 'başlar?'], ['?al?r?', 'çalışır?'], ['?al???r?', 'çalışır?'], ['elektri?i', 'elektriği'],
  ['R?zg?r', 'Rüzgâr'], ['Elektri?i', 'Elektriği'], ['g?venli', 'güvenli'], ['E?yay?', 'Eşyayı'],
  ['a?rla?t?rmak', 'ağırlaştırmak'], ['a??rla?t?rmak', 'ağırlaştırmak'], ['de?i?tirmek', 'değiştirmek'],
  ['Arkada?m?z?n', 'Arkadaşımızın'], ['Arkada??m?z?n', 'Arkadaşımızın'], ['e?yas?n?', 'eşyasını'],
  ['yapmal?y?z?', 'yapmalıyız?'], ['almal?y?z', 'almalıyız'], ['Saklamal?y?z', 'Saklamalıyız'],
  ['K?rmal?y?z', 'Kırmalıyız'], ['kaynaklar?n?', 'kaynaklarını'], ['yap?lmal?d?r?', 'yapılmalıdır?'],
  ['I?klar?', 'Işıkları'], ['a?k', 'açık'], ['a??k', 'açık'], ['b?rakmamak', 'bırakmamak'],
  ['Muslu?u', 'Musluğu'], ['b?rakmak', 'bırakmak'], ['bo?a', 'boşa'], ['S?ralara', 'Sıralara'],
  ['davran?t?r?', 'davranıştır?'], ['davran??t?r?', 'davranıştır?'], ['Yata?n?', 'Yatağını'],
  ['Yata??n?', 'Yatağını'], ['da?tmak', 'dağıtmak'], ['da??tmak', 'dağıtmak'], ['Al?veri?te', 'Alışverişte'],
  ['Al??veri?te', 'Alışverişte'], ['?htiya?lara', 'İhtiyaçlara'], ['iste?e', 'isteğe'], ['?r?ne', 'ürüne'],
  ['e?yalara', 'eşyalara'], ['Ki?isel', 'Kişisel'], ['bak?m', 'bakım'], ['D?zenli', 'Düzenli'],
  ['y?kamak', 'yıkamak'], ['f?r?alamamak', 'fırçalamamak'], ['k?yafet', 'kıyafet'], ['ak?tmak', 'akıtmak'],
  ['ge?idinde', 'geçidinde'], ['ge?mek', 'geçmek'], ['Ko?arak', 'Koşarak'], ['I?klara', 'Işıklara'],
  ['y?netim', 'yönetim'], ['Krall?k', 'Krallık'], ['y?netimi', 'yönetimi'], ['k?yleri', 'köyleri'],
  ['y?neten', 'yöneten'], ['Pusulan?n', 'Pusulanın'], ['y?n?', 'yönü'], ['G?ney', 'Güney'],
  ['Do?u', 'Doğu'], ['d?n?m?n', 'dönüşümün'], ['d?n???m?n', 'dönüşümün'], ['Do?ay?', 'Doğayı'],
  ['??pleri', 'Çöpleri'], ['art?rmak', 'artırmak'], ['?nce', 'Önce'], ['?nsan', 'İnsan'],
  ['?evre', 'Çevre'], ['?lkemizde', 'Ülkemizde'], ['?lkemizin', 'Ülkemizin'], ['?retim', 'Üretim'],
  ['?arpma', 'Çarpma'], ['?ekme', 'Çekme'], ['?tme', 'İtme'], ['?zin', 'İzin'], ['?devi', 'Ödevi'],
  ['?ehir', 'Şehir'], ['?iirdeki', 'Şiirdeki'], ['?Doktor?', '“Doktor”'], ['?Dar?', '“Dar”'],
];

function fixText(value: string): string {
  let fixed = value;
  for (const [bad, good] of textFixes) {
    fixed = fixed.split(bad).join(good);
  }
  return fixed.replace(/(\d+) \? (\d+)/g, '$1 ÷ $2');
}

function sanitizeUnit(unit: Unit): Unit {
  return { ...unit, title: fixText(unit.title), description: fixText(unit.description) };
}

function sanitizeSlide(slide: TopicSlide): TopicSlide {
  return {
    ...slide,
    title: fixText(slide.title),
    content: fixText(slide.content),
    example: slide.example ? fixText(slide.example) : slide.example,
  };
}

function sanitizeQuestion(question: Question): Question {
  const fixedQuestion = {
    ...question,
    text: fixText(question.text),
    options: question.options.map(fixText),
    explanation: question.explanation ? fixText(question.explanation) : question.explanation,
  };

  return repairQuestion(fixedQuestion);
}

function sanitizeExam(exam: PracticeExam): PracticeExam {
  return {
    ...exam,
    title: fixText(exam.title),
    questions: exam.questions.map(sanitizeQuestion),
  };
}

function repairQuestion(question: Question): Question {
  const text = repairTextArtifacts(question.text);

  if (text.includes('Adil olmaya çok önem veririm')) {
    return withExplanation({
      ...question,
      text,
      options: ['Hâkimlik', 'Doktorluk', 'Mühendislik', 'Öğretmenlik'],
      correctIndex: 0,
    });
  }

  if (text.includes('Geçmek') && text.includes('geride bırakmak')) {
    return withExplanation({
      ...question,
      text: '“Geçmek” kelimesi aşağıdakilerin hangisinde “geride bırakmak, aşmak” anlamında kullanılmıştır?',
      options: [
        'Yavaş yavaş bu hırs geçer.',
        'Bu titizlik ona ailesinden geçmiş.',
        'Bizim yelkenli, öbür tekneyi geçti.',
        'Hastalık kısa sürede geçti.',
      ],
      correctIndex: 2,
    });
  }

  if (text.includes('alkmak') && text.includes('yukarı doğru yükselmek')) {
    return withExplanation({
      ...question,
      text: '“Kalkmak” kelimesi aşağıdakilerin hangisinde “yukarı doğru yükselmek” anlamında kullanılmıştır?',
      options: [
        'Çocuklar odada tepiştikçe toz kalkıyor.',
        'Öğleye geliyordu ama Hilal daha yeni kalkmıştı.',
        'Kar kalkınca köylere ulaşım kolaylaştı.',
        'Öğrenciler sabah erkenden kalktı.',
      ],
      correctIndex: 0,
    });
  }

  if (text.includes('Kemal’in çalışma azmini') && text.includes('mucizevi')) {
    return withExplanation({
      ...question,
      text,
      options: [
        'Olması beklenen, şaşkınlık uyandırmayan',
        'Yeterli, yetecek miktarda olan',
        'Olağanüstü niteliklere sahip',
        'Sıradan ve önemsiz görülen',
      ],
      correctIndex: 2,
    });
  }

  if (text.includes('Kemal baştan 17') && text.includes('Hüseyin sondan 6')) {
    return withExplanation({
      ...question,
      text,
      options: ['18', '20', '24', '26'],
      correctIndex: 2,
    });
  }

  if (text.includes('Barış') && text.includes('sözlük sırasına göre dizilişi')) {
    return withExplanation({
      ...question,
      text: '“Barış” kelimesindeki harflerin sözlük sırasına göre dizilişi aşağıdakilerden hangisidir?',
      options: question.options.map(option => repairOption(option, question)),
    });
  }

  if (text.includes('İnsanların çoğu') && text.includes('kendi hatalarının')) {
    return withExplanation({
      ...question,
      text,
      options: [
        'İnsanların hatalarını görmezlikten gelmeliyiz.',
        'Her insanın iyi bir dosta ihtiyacı vardır.',
        'Birçok insan, kendi hataları yerine başkalarının hatalarıyla ilgilenir.',
        'Uyarı alan kişiler her zaman sevinir.',
      ],
      correctIndex: 2,
    });
  }

  if (text.includes('duygu ve düşüncelerinin birbirinden farklı')) {
    return withExplanation({
      ...question,
      text,
      options: [
        'Kulüp çalışmalarında üyelerin yardımlaşması',
        'Herkesin görev ve sorumluluklarını yerine getirmesi',
        'Ailenin ev ihtiyaçlarını ortaklaşa belirlemesi',
        'Arkadaşların aynı olay hakkında farklı yorumlarda bulunması',
      ],
      correctIndex: 3,
    });
  }

  if (text.includes('Derya') && text.includes('piyano') && text.includes('şiir')) {
    return withExplanation({
      ...question,
      text,
      options: [
        'Derya birçok alanda yeteneklidir.',
        'Derya’nın yeteneği şiir okumadır.',
        'Derya piyano çalmada yetenekli, şiir okumaya ise ilgilidir.',
        'Derya hem şiir okuma hem de piyano çalmada yeteneklidir.',
      ],
      correctIndex: 2,
    });
  }

  if (text.includes('1072') && text.includes('1534')) {
    return withExplanation({
      ...question,
      text,
      options: ['362', '453', '462', '572'],
      correctIndex: 2,
    });
  }

  const options = question.options.map(option => repairOption(option, question));
  return withExplanation({ ...question, text, options });
}

function repairTextArtifacts(value: string): string {
  return value
    .replace(/f££/g, '')
    .replace(/££/g, '')
    .replace(/£/g, '')
    .replace(/\bendilerine\b/g, 'Kendilerine')
    .replace(/\bulüp\b/g, 'Kulüp')
    .replace(/\bemal\b/g, 'Kemal')
    .replace(/\barış\b/g, 'Barış')
    .replace(/\bar kalkınca\b/g, 'Kar kalkınca')
    .replace(/Mustafa emal/g, 'Mustafa Kemal')
    .replace(/\bübra\b/g, 'Kübra')
    .replace(/\bardelen\b/g, 'Kardelen')
    .replace(/\s+\.\.\./g, '...');
}

function repairOption(option: string, question: Question): string {
  const normalized = repairTextArtifacts(option).replace(/\s+-\s*$/g, '').replace(/\s*\(\)$/g, '').trim();

  if (normalized.includes('Bu seçenek konuya uygun değildir')) {
    return fallbackDistractor(question);
  }

  if (normalized.length > 170 || normalized.includes('Sude Sude’nin') || normalized.includes('SORU)')) {
    return fallbackDistractor(question);
  }

  if (normalized.startsWith('arbonhidrat')) {
    return `K${normalized}`;
  }

  if (normalized.endsWith(' LILARINI BULUR.')) {
    return normalized.replace(' LILARINI BULUR.', '');
  }

  return normalized;
}

function fallbackDistractor(question: Question): string {
  if (question.unitId.includes('matematik')) return 'İşlemi yapmadan sonucu seçmek';
  if (question.unitId.includes('fen')) return 'Gözlem yapmadan karar vermek';
  if (question.unitId.includes('hayat-bilgisi')) return 'Kuralları dikkate almamak';
  if (question.unitId.includes('sosyal')) return 'Verilen bilgiyle ilgisiz bir sonuç çıkarmak';
  return 'Metnin anlamıyla ilgisi olmayan bir yorum yapmak';
}

function withExplanation(question: Question): Question {
  const correctOption = question.options[question.correctIndex];
  return {
    ...question,
    explanation: `Doğru cevap: ${correctOption}`,
  };
}
