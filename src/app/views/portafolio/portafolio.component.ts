import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../../shared/main-menu/main-menu.component';
import { ScrollingComponent } from '../../shared/scrolling/scrolling.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface Project {
  id: number;
  icon: string;
  title: string;
  challenge: string;
  strategy: string;
  result: string;
  impact: string[];
  image: string;
  tags: string[];
  gallery?: string[];
}

@Component({
  selector: 'app-portafolio',
  imports: [MainMenuComponent, ScrollingComponent, FooterComponent, CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  selectedProject: Project | null = null;
  showModal = false;
  showGallery = false;
  currentGalleryIndex = 0;
  selectedGalleryImage: string = '';

  projects: Project[] = [
    {
      id: 1,
      icon: '⚽',
      title: 'Fundación COP Internacional',
      challenge: 'Acompañar a la Fundación COP Internacional, ubicada en Usme, en la construcción de herramientas y valores que fortalezcan su misión: usar el fútbol como un vehículo para transformar vidas y comunidades.',
      strategy: 'Diseñamos y desarrollamos sesiones de consultoría enfocadas en liderazgo, trabajo en equipo, comunicación asertiva y gestión emocional, integrando el deporte como lenguaje común. Cada espacio buscó que entrenadores, líderes y jóvenes participantes entendieran que el fútbol puede ser mucho más que un juego: puede ser una escuela de vida.',
      result: 'Una comunidad más conectada, con líderes empoderados que hoy aplican los valores del deporte —disciplina, respeto, resiliencia y solidaridad— dentro y fuera de la cancha.',
      impact: [
        'Fortalecimiento de las capacidades de liderazgo en formadores y voluntarios.',
        'Mayor cohesión del equipo en torno a los valores institucionales.',
        'Reconocimiento local del programa como ejemplo de deporte con propósito.'
      ],
      image: '/assets/img/proyects/CumbreFutbol/COP-1.jpeg',
      gallery: [
        '/assets/img/proyects/CumbreFutbol/COP-1.jpeg',
        '/assets/img/proyects/CumbreFutbol/COP-2.jpeg',
        '/assets/img/proyects/CumbreFutbol/COP-3.JPG',
        '/assets/img/proyects/CumbreFutbol/COP-4.jpeg'
      ],
      tags: ['FÚTBOL', 'TRANSFORMACIÓN SOCIAL', 'LIDERAZGO']
    },
    {
      id: 2,
      icon: '🏆',
      title: 'Fundación Willington Ortiz',
      challenge: 'Apoyar a la Fundación Willington Ortiz en su proceso de evolución hacia una organización deportiva moderna, sostenible y con una conexión más fuerte con sus comunidades y aliados.',
      strategy: 'Realizamos un estudio de marca y gestión de usuarios para entender el posicionamiento actual, las percepciones del público y las oportunidades de crecimiento. A partir de esos hallazgos, diseñamos un plan de marketing deportivo orientado a fortalecer la identidad de la marca, mejorar la comunicación con sus beneficiarios y atraer nuevos patrocinadores y aliados estratégicos.',
      result: 'Una hoja de ruta clara para consolidar la fundación como una organización deportiva sólida, con una narrativa inspiradora y un modelo de gestión alineado con las mejores prácticas del deporte social y formativo.',
      impact: [
        'Diagnóstico integral de la marca y sus audiencias.',
        'Diseño de una estrategia de marketing deportivo con propósito.',
        'Proyección de la fundación hacia un modelo organizacional más sostenible e influyente.'
      ],
      image: '/assets/img/proyects/FundacionWilintonOrtiz/WO-3.jpeg',
      gallery: [
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-1.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-2.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-3.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-4.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-5.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-6.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-7.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-8.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-9.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-10.jpeg',
        '/assets/img/proyects/FundacionWilintonOrtiz/WO-11.jpeg'
      ],
      tags: ['BRANDING', 'MARKETING DEPORTIVO', 'SOSTENIBILIDAD']
    },
    {
      id: 3,
      icon: '🎓',
      title: 'Vinculación Académica UCC y UDEC',
      challenge: 'Fortalecer la formación en gestión deportiva y comunicación en programas académicos y espacios de emprendimiento deportivo, brindando a los estudiantes herramientas prácticas para liderar proyectos con impacto real.',
      strategy: 'A través de una alianza académica con la Universidad Cooperativa de Colombia y la Universidad de Cundinamarca, desarrollamos sesiones formativas en temas clave como planeación estratégica, marketing deportivo, liderazgo y comunicación para el deporte.',
      result: 'Un espacio de aprendizaje dinámico y participativo que permitió a los estudiantes vincular la teoría con la práctica, fomentando la innovación y la creación de proyectos deportivos sostenibles.',
      impact: [
        'Formación directa de futuros gestores y comunicadores deportivos.',
        'Integración del enfoque de sostenibilidad y desarrollo social en el deporte.',
        'Impulso a las incubadoras de emprendimiento deportivo desde una visión estratégica y humana.'
      ],
      image: '/assets/img/proyects/UCC/UCC-1.jpeg',
      tags: ['EDUCACIÓN', 'EMPRENDIMIENTO', 'GESTIÓN DEPORTIVA']
    },
    {
      id: 4,
      icon: '🎮',
      title: 'Estrategias de Esports - FEDECOLDE',
      challenge: 'Fortalecer la comunidad gamer en Colombia y promover una visión positiva y profesional de los deportes electrónicos, conectando a jugadores, marcas e instituciones alrededor del amor por los esports.',
      strategy: 'En alianza con FEDECOLDE (Federación de Deportes Electrónicos de Colombia), desarrollamos una serie de estrategias de posicionamiento y construcción de comunidad, orientadas a impulsar el reconocimiento de los esports como un espacio de competencia, desarrollo personal y conexión social.',
      result: 'Se logró consolidar una comunidad activa y participativa, con acciones que integraron formación, torneos y experiencias digitales que reflejan los valores de respeto, disciplina y trabajo en equipo.',
      impact: [
        'Promoción de los esports como disciplina deportiva y profesional.',
        'Creación de espacios de encuentro y aprendizaje para gamers de distintas regiones.',
        'Impulso a una comunidad digital unida por la pasión y el amor por los deportes electrónicos.'
      ],
      image: '/assets/img/proyects/Esports/ESP-2.JPG',
      gallery: [
        '/assets/img/proyects/Esports/ESP-1.jpeg',
        '/assets/img/proyects/Esports/ESP-2.JPG',
        '/assets/img/proyects/Esports/ESP-3.png',
        '/assets/img/proyects/Esports/ESP-4.jpeg'
      ],
      tags: ['ESPORTS', 'COMUNIDAD', 'GAMING']
    },
    {
      id: 5,
      icon: '🏃‍♂️',
      title: 'Mönthang - Arquitectura de Marca',
      challenge: 'Crear desde cero una marca deportiva con identidad propia, capaz de conectar con la pasión, la energía del ejercicio físico y el espíritu de tribu deportiva, destacándose en un entorno donde el movimiento y la motivación son parte del estilo de vida.',
      strategy: 'Diseñamos una arquitectura de marca integral que uniera la emoción del deporte con una estética moderna y funcional. Desde el naming y la identidad visual, hasta la experiencia de marca en cada punto de contacto, trabajamos para que Mönthang respirara vitalidad, disciplina y comunidad.',
      result: 'El resultado fue una marca con carácter y coherencia, que transmite fuerza, movimiento y propósito. Hoy, Mönthang se posiciona como sinónimo de energía, diseño y estilo de vida activo.',
      impact: [
        'Identidad visual 100% diferenciada dentro de su categoría.',
        'Posicionamiento como marca emergente dentro del ecosistema deportivo.',
        'Crecimiento orgánico en redes y presencia en eventos y comunidades fitness.'
      ],
      image: '/assets/img/proyects/Monthang/Monthang.jpeg',
      gallery: [
        '/assets/img/proyects/Monthang/Monthang.jpeg',
        '/assets/img/proyects/Monthang/IMG_2769.jpeg',
        '/assets/img/proyects/Monthang/IMG_7858.jpeg',
        '/assets/img/proyects/Monthang/IMG_8321.jpeg',
        '/assets/img/proyects/Monthang/WhatsApp Image 2025-12-02 at 12.50.19 PM.jpeg'
      ],
      tags: ['BRANDING', 'FITNESS', 'DISEÑO']
    }
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    this.showModal = true;
    this.currentGalleryIndex = 0;
    this.selectedGalleryImage = project.gallery ? project.gallery[0] : project.image;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
    this.currentGalleryIndex = 0;
    this.selectedGalleryImage = '';
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    if (this.selectedProject?.gallery) {
      this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.selectedProject.gallery.length;
      this.selectedGalleryImage = this.selectedProject.gallery[this.currentGalleryIndex];
    }
  }

  prevImage(): void {
    if (this.selectedProject?.gallery) {
      this.currentGalleryIndex = this.currentGalleryIndex === 0
        ? this.selectedProject.gallery.length - 1
        : this.currentGalleryIndex - 1;
      this.selectedGalleryImage = this.selectedProject.gallery[this.currentGalleryIndex];
    }
  }

  selectGalleryImage(index: number): void {
    if (this.selectedProject?.gallery) {
      this.currentGalleryIndex = index;
      this.selectedGalleryImage = this.selectedProject.gallery[index];
    }
  }

  openGallery(): void {
    if (this.selectedProject?.gallery) {
      this.showGallery = true;
      this.currentGalleryIndex = 0;
      this.selectedGalleryImage = this.selectedProject.gallery[0];
    }
  }

  closeGallery(): void {
    this.showGallery = false;
  }
}
