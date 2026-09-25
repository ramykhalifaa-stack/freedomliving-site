import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Mail, MapPin, Building, Sailboat, MessageCircle } from 'lucide-react'; 
    import { useToast } from '@/components/ui/use-toast';
    import { useTranslation } from 'react-i18next';
    import { cn } from '@/lib/utils';
    import { sendForm, emailAppToast } from '@/lib/sendForm';
    
    const ContactSection = () => {
      const { toast } = useToast();
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      const officeLocations = [
        {
          nameKey: 'contactOfficeLondonName',
          addressKey: 'contactOfficeLondonAddress',
          icon: <Building className="h-8 w-8 text-brand-blue-default" />,
        },
        {
          nameKey: 'contactOfficeDubaiName',
          addressKey: 'contactOfficeDubaiAddress',
          icon: <Building className="h-8 w-8 text-brand-blue-default" />,
        },
        {
          nameKey: 'contactOfficeMuscatName',
          addressKey: 'contactOfficeMuscatAddress',
          labelKey: 'contactOfficeMuscatLabel',
          icon: <Building className="h-8 w-8 text-brand-blue-default" />,
        },
        {
          nameKey: 'contactOfficeShinasName',
          addressKey: 'contactOfficeShinasAddress',
          icon: <Sailboat className="h-8 w-8 text-brand-blue-default" />,
        },
      ];
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        try {
          const result = await sendForm('Freedom Living website enquiry', {
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
          });
          if (result === 'email-app') {
            toast(emailAppToast(i18n.language));
          } else {
            toast({ title: t('contactToastTitle'), description: t('contactToastDescription'), duration: 5000 });
            form.reset();
          }
        } catch {
          toast({ variant: 'destructive', title: t('contactErrorTitle'), description: t('contactErrorDescription'), duration: 8000 });
        }
      };
    
      const whatsappNumber = "971507771990"; 
      const whatsappMessage = t('heroSubtitle'); 
    
      const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58017.2923896635!2d56.41536162088868!3d24.70208858592663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ac85bffffffff%3A0x8437f3615b335399!2sShinas%2C%20Oman!5e0!3m2!1sen!2sae!4v1716112842848!5m2!1sen!2sae";
    
      return (
        <section id="contact-us" className="py-16 md:py-24 bg-background dark:bg-brand-black/90 section-textured-bg">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <Mail className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
              <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground dark:text-brand-text ${isRtl ? 'pb-1' : ''}`}>
                {t('contactSectionTitle')} <span className="text-gradient-brand">{t('contactSectionTitleSpan')}</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-2xl mx-auto font-sans">
                {t('contactSectionSubtitle')}
              </p>
            </motion.div>
    
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card className="glassmorphism bg-card/70 dark:bg-card/50 p-2 md:p-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="!text-2xl md:!text-3xl text-center text-gradient-brand">{t('contactFormTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                      <div>
                        <Label htmlFor="name" className="text-foreground dark:text-brand-text font-medium">{t('contactFormNameLabel')}</Label>
                        <Input type="text" id="name" name="name" required placeholder={t('contactFormNamePlaceholder')} className={`${isRtl ? 'text-right' : 'text-left'} mt-1`} />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground dark:text-brand-text font-medium">{t('contactFormEmailLabel')}</Label>
                        <Input type="email" id="email" name="email" required placeholder={t('contactFormEmailPlaceholder')} className={`${isRtl ? 'text-right' : 'text-left'} mt-1`} />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-foreground dark:text-brand-text font-medium">{t('contactFormMessageLabel')}</Label>
                        <Textarea id="message" name="message" rows="5" required placeholder={t('contactFormMessagePlaceholder')} className={`${isRtl ? 'text-right' : 'text-left'} mt-1`} />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-brand-blue-default text-brand-text hover:bg-brand-blue-light hover:text-brand-text-dark font-sans font-semibold py-3 text-base">
                        {t('contactFormSubmitButton')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {officeLocations.map((office, index) => (
                  <Card key={index} className={`glassmorphism bg-card/70 dark:bg-card/50 ${isRtl ? 'text-right' : 'text-left'} shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardHeader className={cn('flex items-center pb-2', isRtl ? 'flex-row-reverse space-x-4 space-x-reverse' : 'flex-row space-x-4')}>
                      <div className="p-3 bg-primary/10 dark:bg-brand-blue-light/10 rounded-full">
                        {office.icon}
                      </div>
                      <CardTitle className="!text-xl font-serif text-gradient-brand">{t(office.nameKey)}</CardTitle>
                    </CardHeader>
                    <CardContent className={`text-sm text-muted-foreground dark:text-brand-text/80 space-y-1 font-sans ${isRtl ? 'pr-16' : 'pl-16'}`}>
                      <p className={cn('flex items-center', isRtl ? 'flex-row-reverse space-x-3 space-x-reverse' : 'space-x-3')}>
                         <MapPin className="h-4 w-4 text-brand-blue-default flex-shrink-0" />
                         <span>{t(office.addressKey)}</span>
                      </p>
                      {office.labelKey && <p className="italic text-brand-blue-light font-medium">{t(office.labelKey)}</p>}
                    </CardContent>
                  </Card>
                ))}
                 <Button 
                    size="lg" 
                    className={cn('w-full bg-brand-whatsapp-green text-brand-text hover:bg-brand-whatsapp-green/90 flex items-center justify-center font-sans font-semibold py-3 text-base shadow-lg hover:shadow-xl transition-all', isRtl ? 'space-x-reverse space-x-2' : 'space-x-2')}
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{t('contactWhatsappButton')}</span>
                  </Button>
              </motion.div>
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16"
            >
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-foreground dark:text-brand-text">
                {t('contactMapTitle')}
              </h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-brand-blue-dark/20">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Shinas, Oman"
                ></iframe>
                <p className="text-xs text-center mt-2 text-muted-foreground dark:text-brand-text/60 font-sans">
                  {t('contactMapLabel')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default ContactSection;