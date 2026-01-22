import { Module, Post, Material } from './types';

export const MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Realidades Financeiras',
    subtitle: 'Entenda os números',
    progress: 100,
    totalLessons: 2,
    icon: 'attach_money',
    colorClass: 'bg-green-100 text-green-600',
    lessons: [
      { id: '1.1', title: 'A Síndrome do Convênio', description: 'Custo oculto do volume', duration: '10 min', type: 'text', completed: true },
      { id: '1.2', title: 'Psicologia do Valor', description: 'Mentalidade de crescimento', duration: '15 min', type: 'video', completed: true },
    ]
  },
  {
    id: 'm2',
    title: 'Transição Segura',
    subtitle: 'Planejamento de carreira',
    progress: 48,
    totalLessons: 3,
    icon: 'map',
    colorClass: 'bg-blue-100 text-blue-600',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWUUpir3c6G8chOb1_AkQlA7MjtGiTlFY2yIg0JJr8ToCu9somJ6BPvbISNJA71iFcC8DsEMGT2osbRC2dbhxfhhD2oZ-gSYRkcjPqu5Pk8wJdIGl0vtzIlhgTnOxi8SGvKUDYr0cQXV707pFBKswOtmEfDIx4ab5RFCal7C_N2rFE-B7ceZGod5P9tek_fBm2sh7YBGpMXfC64PmqCbhKTih1xG-kit9OrVWS0drNcyvizntjozMeIv4VMJSgjoD1pkV0xHCoMA',
    lessons: [
      { id: '2.1', title: 'Cronograma', description: 'Planejamento detalhado', duration: '15 min', type: 'text', completed: true },
      { id: '2.2', title: 'Híbrido Inteligente', description: 'Estratégias de atuação', duration: '22 min', type: 'video', completed: false, progress: 45 },
      { id: '2.3', title: 'Aspectos Legais', description: 'Regularização', duration: '18 min', type: 'text', completed: false },
    ]
  },
  {
    id: 'm3',
    title: 'Posicionamento Digital',
    subtitle: 'Marketing para Psicólogos',
    progress: 33,
    totalLessons: 4,
    icon: 'campaign',
    colorClass: 'bg-purple-100 text-purple-600',
    lessons: [
      { id: '3.1', title: 'Instagram de Autoridade', description: 'Construindo uma bio magnética', duration: '15 min', type: 'video', completed: true, thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl-HA84keO0S6FWyS3vMnBa-WGwihq1dfBLPnMT5Ujwu_Uu09U63I-zIpWdm8eZQYayFuZirx8twkxXM-o6O0dbYa9Jm_4vHJlWAY4osijM2oee_Qc4w5PzWLmR_94dbZizLbaiL5d7NgoUPW5J9lRigcJ4-FsyYwVMantJxDTw1NtH_wM6Ui9qrFED1GT5kHJhHogMMKVbnZizJVyD94UdSn2CdcZ1W6YeyitjqhDsCkpTBOESFRcBkVtq4rfjRQgMpjPUltHvQ' },
      { id: '3.2', title: 'Nichagem Estratégica', description: 'Definindo seu paciente ideal', duration: '22 min', type: 'video', completed: false, progress: 65 },
      { id: '3.3', title: 'Google Meu Negócio', description: 'Sendo encontrado na sua região', duration: '18 min', type: 'video', completed: false },
      { id: '3.4', title: 'Gatilhos Mentais Éticos', description: 'Psicologia da atração', duration: '12 min', type: 'text', completed: false },
    ]
  },
  {
    id: 'm4',
    title: 'Funil de Atração',
    subtitle: 'Marketing avançado',
    progress: 0,
    totalLessons: 3,
    icon: 'filter_alt',
    colorClass: 'bg-orange-100 text-orange-600',
    lessons: [
      { id: '4.1', title: 'Google Ads para Psi', description: 'Campanhas que convertem', duration: '20 min', type: 'video', completed: false, thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8AsFEqeYZi_zpTtFwWvY6IOdLfBPbF8CIdsM7g3TUeUicM4AgjY7-Icp4oT2h8MjC6gIoBaHk0rkqAzgnPhy4rFJKSWD0-lxUlesgn-LWZ4NEbgZ94PqVvvaz0EYUWgmLdiRtUzp8N-zQYPqvLuSrArfOLEe1q_zNbpS4BYTjtQDiukL2bpR9CHEOnoTdcLXN9tfXJ7FJfDk3Kd9wg4FBgHzbZlZhZwCra1WNVesAIb2o9QvL_Bpp2Yz1tH_Y6PDemfG5sGwjg' },
      { id: '4.2', title: 'Fechamento no WhatsApp', description: 'Scripts de conversão', duration: '12 min', type: 'text', completed: false, thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Zw4Wjscf0Ud-xS0Tk6ztIq-DdRq0ghW7UkfrDnQTWqH1MR-jtKsd5yk4IisNWl_unZofo1K8CJUyPDPBh8zhrgV-oPOysq_OY1-XCQDFDpCQUEvOCNjJwplXteQHc9Uz2prvkK5H-ytQbriHRN9edAmi7b4lUcQHaqhFMX-vtbKrVRpM1HT-_XJeZQnrQX3lFKcu0921zfivpdZ5Wd36Ln091O78ZXnWxYmnnD9mnlCNphuR2c4ssrR3UoKR8Mxcpax4k21utQ' },
      { id: '4.3', title: 'Fidelização e LTV', description: 'Reter para crescer', duration: '15 min', type: 'video', completed: false, thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJDrV8FykM9VTCZZ01_DevfOjmn4DY8SeL5GD0vs-LpBN7mKxnEbYNxmNG3QQyPiKFugsaAc3lJrdXgWzbLPqd0F4wXuV07ExQKGS7M-ph-nuqoyPnFxYzCcrw_OTh4PrzZANEFys2-WX3cXGFgo7uVVA7GHQejCUmx_Dk3n_DbpG09azYF-6GOzg8Hbapkk2I5iha82G33OBvFvWTOi0AG6yXdTHitaDKUIBOmf7EhuN087ZHARkxg0ktgfKQHpPLCRXJzWjIA' },
    ]
  },
  {
    id: 'm5',
    title: 'Clínica Alta Performance',
    subtitle: 'Gestão e Autocuidado',
    progress: 65,
    totalLessons: 3,
    icon: 'rocket_launch',
    colorClass: 'bg-pink-100 text-pink-600',
    lessons: [
      { id: '5.1', title: 'Gestão e Software', description: 'Organização total', duration: '15 min', type: 'video', completed: true },
      { id: '5.2', title: 'Impostos e Carnê-Leão', description: 'Evite multas', duration: '20 min', type: 'text', completed: false },
      { id: '5.3', title: 'Autocuidado do Terapeuta', description: 'Saúde mental', duration: '30 min', type: 'text', completed: false },
    ]
  }
];

export const COMMUNITY_POSTS: Post[] = [
  {
    id: '1',
    user: { name: 'Ana Silva', role: 'Psicóloga Clínica', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKXi9RLhg6fcseqT5-2oba9Mus2YCQl1RNUReycHAA_swEvFaMuGz-jsSu0xXPf6TQwo4xUm7fvGHN1_viXuLylq-UjSU2s0euT8x2DnmfcrtqU5FV4kUynwi57XE8yPALB1KH3jOxJq_s_UF9rkR5-6-CmoZvRjoQkP7bDyHHh0S1lz6lmkh37eyEA3bMhkOSaWY13J7YPEllpU5PG2_odnODA6ocHwQRR02XVMEHdslTKEEoe1BGve3DoZ4xUTfB7KsVwgM2XQ' },
    type: 'success',
    content: 'Hoje tive um avanço incrível com um paciente que sofre de ansiedade social severa. Aplicamos a técnica de exposição gradual que vimos na aula 4 e ele conseguiu ir ao mercado sozinho pela primeira vez em 2 anos! 🎉',
    likes: 24,
    comments: 8,
    time: '2h atrás'
  },
  {
    id: '2',
    user: { name: 'Carlos Mendez', role: 'Estudante', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YKVaXUbPup-2VyuY65_qZbyEb8uXa0akWCUZZ1Ixra71ep6kq1pZqwkIxjFOI_tvbINQNmtFa3sLZDEbMleW--8UUTe1pcrD4-9_7Rg19KMbIKN-7CPePbNi975e0jn013uJ3VjHaxyWjHSWp2EKvN75ouTAYXuxwUvoqP2fWww0cLTPl1y5rf6xiUY1uodV_TNHwpBHXTgl6TFJvIP1JVoQfdd3ln7h354goWzffAHjPqMA9krqvEYH-8QdQZWSY2kq64q93A' },
    type: 'question',
    content: 'Alguém poderia me indicar bibliografia complementar sobre TCC para transtornos alimentares? Estou sentindo falta de material mais prático sobre o assunto.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyxtC4yl1ENGtw2YyjIcgg2k9pKPg7zJ1w0rCBHrgIriFDaOoTfcRq10NQ49rNY6HYZ3frtyIuMvbR15OXnzgpOu7uIlsJGJ2dmuiT3mOOBMffcqtmO_Ho7kOUWmE9MsU1wsBy80PWlEAl0F8xP41_QmRSzyyVQ2IXyjBJu-yNDd9FY7XBB9CLo5DKKl3rD14PIzOT6Co-yOqG-G15jQBRATkWcUps1pUP7w-Ur4q6oxjWEtXvQCALw0vpNQ0BvIc-xP_OWoyq_A',
    likes: 12,
    comments: 15,
    time: '5h atrás'
  }
];

export const MATERIALS: Material[] = [
  { id: '1', title: 'Cálculo de Hora-Clínica', description: 'Ferramenta essencial para precificação', type: 'xlsx', size: '1.2 MB' },
  { id: '2', title: 'Guia de Impostos', description: 'Manual completo sobre tributação', type: 'pdf', size: '3.5 MB' },
  { id: '3', title: 'Contrato Terapêutico', description: 'Modelo editável para novos pacientes', type: 'doc', size: '0.8 MB' },
  { id: '4', title: 'Modelo de Prontuário SUAS', description: 'Conforme resolução do CFP', type: 'pdf', size: '1.1 MB' },
  { id: '5', title: 'Baralho de Emoções', description: 'Material para impressão', type: 'pdf', size: '5.0 MB' },
];
