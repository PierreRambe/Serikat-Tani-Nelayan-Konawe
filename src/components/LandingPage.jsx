import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Users, 
  GraduationCap, 
  Handshake, 
  Shield, 
  Flower2, 
  Scale, 
  Tractor, 
  Fish,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Leaf,
  Waves,
  Target,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { organizationData, boardMembers, programs } from '../data/mockData';

const iconMap = {
  Users,
  GraduationCap,
  Handshake,
  Shield,
  Flower2,
  Scale,
  Tractor,
  Fish
};

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(boardMembers.length / membersPerPage);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = boardMembers.slice(indexOfFirstMember, indexOfLastMember);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Smooth scroll to structure section
      document.getElementById('structure').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Smooth scroll to structure section
      document.getElementById('structure').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('structure').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Header Navigation */}
      <header className="network-header">
        <div className="nav-wrapper">
          <a href="#hero" className="network-logo">
            STN Konawe
          </a>
          <nav className="network-nav">
            <a href="#about" className="network-nav-link">Tentang Kami</a>
            <a href="#structure" className="network-nav-link">Struktur</a>
            <a href="#programs" className="network-nav-link">Program Kerja</a>
            <a href="#contact" className="network-nav-link">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Badge variant="outline" className="badge-custom">
              <Leaf className="w-4 h-4" />
              Sekretariat
            </Badge>
          </div>
          <h1 className="hero-title">
            Serikat Tani Nelayan
            <span className="hero-highlight"> Kabupaten Konawe</span>
          </h1>
          <p className="hero-tagline">{organizationData.tagline}</p>
          <p className="hero-description">{organizationData.description}</p>
          <div className="hero-actions">
            <Button 
              className="btn-primary btn-cta" 
              onClick={() => scrollToSection('programs')}
            >
              Lihat Program Kami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <Leaf className="stat-icon" />
            <div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Anggota Petani</div>
            </div>
          </div>
          <div className="stat-item">
            <Waves className="stat-icon" />
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Anggota Nelayan</div>
            </div>
          </div>
          <div className="stat-item">
            <Target className="stat-icon" />
            <div>
              <div className="stat-number">8+</div>
              <div className="stat-label">Program Utama</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section animate-on-scroll" style={{
        opacity: isVisible['about'] ? 1 : 0,
        transform: isVisible['about'] ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        <div className="container">
          <div className="section-header">
            <Badge variant="outline" className="badge-section">
              <Eye className="w-4 h-4" />
              Tentang Kami
            </Badge>
            <h2 className="section-title">Profil Organisasi</h2>
          </div>

          <div className="about-grid">
            {/* Vision */}
            <Card className="network-card vision-card">
              <CardContent className="card-content">
                <div className="card-icon">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="card-title">Visi</h3>
                <p className="card-text">{organizationData.vision}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="network-card mission-card">
              <CardContent className="card-content">
                <div className="card-icon">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="card-title">Misi</h3>
                <div className="mission-list">
                  {organizationData.missions.map((mission, index) => (
                    <div key={index} className="mission-item">
                      <div className="mission-number">{index + 1}</div>
                      <div>
                        <h4 className="mission-title">{mission.title}</h4>
                        <p className="mission-desc">{mission.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="network-card goals-card">
              <CardContent className="card-content">
                <div className="card-icon">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="card-title">Tujuan</h3>
                <ul className="goals-list">
                  {organizationData.goals.map((goal, index) => (
                    <li key={index} className="goal-item">
                      <span className="goal-bullet"></span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Structure Section with Pagination */}
      <section id="structure" className="structure-section animate-on-scroll" style={{
        opacity: isVisible['structure'] ? 1 : 0,
        transform: isVisible['structure'] ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        <div className="container">
          <div className="section-header">
            <Badge variant="outline" className="badge-section">
              <Users className="w-4 h-4" />
              Struktur Organisasi
            </Badge>
            <h2 className="section-title">Kepengurusan STN Konawe</h2>
            <p className="section-subtitle">Pengurus Masa Bakti 2025-2030</p>
          </div>

          {/* Members Grid */}
          <div className="structure-grid">
            {currentMembers.map((member) => (
              <Card key={member.id} className="member-card">
                <CardContent className="member-content">
                  <div className="member-avatar">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-container">
            <div className="pagination-info">
              <p className="pagination-text">
                Menampilkan {indexOfFirstMember + 1}-{Math.min(indexOfLastMember, boardMembers.length)} dari {boardMembers.length} Pengurus
              </p>
            </div>

            <div className="pagination-controls">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="pagination-btn"
                variant="outline"
              >
                <ChevronLeft className="w-5 h-5" />
                Sebelumnya
              </Button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageClick(index + 1)}
                    className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-btn"
                variant="outline"
              >
                Selanjutnya
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section animate-on-scroll" style={{
        opacity: isVisible['programs'] ? 1 : 0,
        transform: isVisible['programs'] ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        <div className="container">
          <div className="section-header">
            <Badge variant="outline" className="badge-section">
              <Target className="w-4 h-4" />
              Program Kerja
            </Badge>
            <h2 className="section-title">Program Kerja Kami</h2>
            <p className="section-subtitle">Masa Bakti 2025-2030</p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => {
              const IconComponent = iconMap[program.icon] || Users;
              return (
                <Card key={program.id} className="program-card">
                  <CardContent className="program-content">
                    <div className="program-header">
                      <div className="program-icon">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="program-badge">
                        {program.category}
                      </Badge>
                    </div>
                    <h3 className="program-title">{program.title}</h3>
                    <p className="program-description">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section animate-on-scroll" style={{
        opacity: isVisible['contact'] ? 1 : 0,
        transform: isVisible['contact'] ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        <div className="container">
          <div className="section-header">
            <Badge variant="outline" className="badge-section">
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </Badge>
            <h2 className="section-title">Kontak & Media Sosial</h2>
            <p className="section-subtitle">Kami siap melayani dan menjawab pertanyaan Anda</p>
          </div>

          <div className="contact-grid">
            <Card className="contact-card">
              <CardContent className="contact-content">
                <Phone className="contact-icon" />
                <h3 className="contact-title">Telepon</h3>
                <p className="contact-info">{organizationData.contact.phone1}</p>
                <p className="contact-info">{organizationData.contact.phone2}</p>
              </CardContent>
            </Card>

            <Card className="contact-card">
              <CardContent className="contact-content">
                <Mail className="contact-icon" />
                <h3 className="contact-title">Email</h3>
                <p className="contact-info">{organizationData.contact.email}</p>
              </CardContent>
            </Card>

            <Card className="contact-card">
              <CardContent className="contact-content">
                <Phone className="contact-icon" />
                <h3 className="contact-title">WhatsApp</h3>
                <a 
                  href={`https://wa.me/${organizationData.contact.whatsapp}`}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="contact-card">
              <CardContent className="contact-content">
                <MapPin className="contact-icon" />
                <h3 className="contact-title">Alamat</h3>
                <p className="contact-info">{organizationData.contact.address}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Serikat Tani Nelayan</h3>
              <p className="footer-text">Kabupaten Konawe</p>
              <p className="footer-subtitle">{organizationData.tagline}</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Navigasi</h4>
              <ul className="footer-links">
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#structure">Struktur Organisasi</a></li>
                <li><a href="#programs">Program Kerja</a></li>
                <li><a href="#contact">Kontak</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Kontak</h4>
              <ul className="footer-contact">
                <li>{organizationData.contact.phone1}</li>
                <li>{organizationData.contact.phone2}</li>
                <li>{organizationData.contact.email}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Serikat Tani Nelayan Kabupaten Konawe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;