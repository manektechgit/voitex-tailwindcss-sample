$( document ).ready(function() {
	$('#mobile-toggle').on('click', function (e) {
	  $('body').toggleClass('mobile-menu-open');
	  $('.mobile-menu').toggleClass('open');
	})
	$('span.icon-chat').append('<i class="lines"></i>');
	$('.nav-dropdown').on('click', function (e) {
		$(this).addClass('open-submenu').siblings().removeClass('open-submenu');
		// $(this).toggleClass('open-submenu').siblings().removeClass('open-submenu');
	})
  });
  
  $('.mobile-tab-menu li a').on('click', function(){
	var target = $(this).attr('data-rel');
  $('.mobile-tab-menu li a').removeClass('active');
	$(this).addClass('active');
	$("#"+target).fadeIn('slow').siblings(".tab-box").hide();
	return false;
  });
  
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  // We listen to the resize event
  window.addEventListener('resize', () => {
	  // We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  
  setTimeout(function() {
	  $("body").addClass("loaded");
	  AOS.init({
		  duration: 1000,
		  once: true,
		  offset: 120,
		});
  });
  
  
  
  // ========= Home Hero Animation ============
  gsap.registerPlugin(ScrollTrigger);
  
  let homeHero = gsap.timeline({scrollTrigger:{
	  trigger:".home-hero-banner .home-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".mobile-with-hand", {duration: 1, opacity: 0})
  .from(".dail-pad", {duration: 1, opacity: 0}, "-=0.9")
  .from(".right-box", {x: -30, duration: 1, opacity: 0}, "-=0.9")
  .from(".right-box-dot", {duration: 1, opacity: 0}, "-=0.9")
  .from(".connector", {duration: 1, opacity: 0}, "-=0.9")
  .from(".connection", {y: 600, duration: 1, opacity: 0}, "-=0.9")
  .from(".invite-people", {y: 650, duration: 1, opacity: 0}, "-=0.9")
  .from(".line-connector", {duration: 1,opacity: 0, stagger: 0.1}, "-=0.8"); 
  
  let tl = gsap.timeline({scrollTrigger:{
	  trigger:".animation-section",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".fade-in-box", {duration: 1, opacity: 0, stagger: 0.05}, "-=1")
  .from(".joined-call", {y: 100,duration: 1, opacity: 0}, "-=0.6")
  .from(".add-two", {duration: 1, opacity: 0}, "-=0.6")
  .from(".cust-circle", {y: 950, duration: 0.9,opacity: 0, stagger: 0.05}, "-=1")
  .from(".cust-img", { duration: 0.5, opacity: 0, stagger: 0.05}, "-=0.6");
  
  let t2 = gsap.timeline({scrollTrigger:{
	  trigger:".make-it-custom",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".custom-chart-lines", {duration: 1, opacity: 0})
  .from(".custom-left-box", {x: -100, duration: 1.1, opacity: 0}, "-=0.8")
  .from(".custom-right-box", {duration: 1.2,	opacity: 0}, "-=0.8")
  .from(".custom-incoming-call", {y: 10,duration: 1.3,opacity: 0}, "-=1.5")
  .from(".connector-dot", {duration: 1.4,opacity: 0, stagger: 0.05}, "-=1")
  .from(".custom-link-connector", {duration: 1.5, opacity: 0, stagger: 0.1}, "-=1");
  
  let solution = gsap.timeline({scrollTrigger:{
	  trigger:".voitex-solutions",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".voitex-solutions .swiper-slide", {y: 80,duration: 1, opacity: 0, stagger: 0.05}, "-=1.5");
  
  
  // ========= About Animation ============
  let t3 = gsap.timeline({scrollTrigger:{
	  trigger:".technology-at-human",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".abt-left-box", {duration: 1, opacity: 0})
  .from(".abt-center-box", {y: 1224.241,duration: 1,opacity: 0}, "-=1")
  .from(".abt-left-line", {duration: 1,opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".abt-graph-lines", {duration: 1,opacity: 0}, "-=0.5")
  .from(".abt-right-topbox", {y: 1174.594,duration: 1,opacity: 0}, "-=1")
  .from(".abt-right-connector", {duration: 1,opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".abt-voice-box", {duration: 1,opacity: 0}, "-=1")
  .from(".abt-bottom-box", {y: 1300.06,duration: 1, opacity: 0}, "-=1")
  .from(".abt-right-line", {duration: 1,opacity: 0, stagger: 0.05}, "-=0.5");
  
  // ========= Solution IVR ============
  
  let ivrHero = gsap.timeline({scrollTrigger:{
	  trigger:".ivr-branch-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr-hero-img", {duration: 1, opacity: 0})
  .from(".hero-ivr-call", {duration: 1, opacity: 0}, "-=0.5")
  .from(".ivr-first-number", {y:50, duration: 1, opacity: 0}, "-=0.5")
  .from(".ivr-second-number", {y:60, duration: 1, opacity: 0}, "-=0.5") 
  .from(".ivr-third-number", {y:70, duration: 1, opacity: 0}, "-=0.5") 
  .from(".ivr-last-number", {x:10, duration: 1, opacity: 0}, "-=0.5"); 
  
  
  let rolodexRouting = gsap.timeline({scrollTrigger:{
	  trigger:".rolodex-routing",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr1-chart", {duration: 1, opacity: 0})
  .from(".ivr1-left-box", {duration: 1,opacity: 0}, "-=0.5")
  .from(".ivr1-right-box", {y: 1242,duration: 1, opacity: 0}, "-=1.2")
  .from(".ivr1-add-users", {duration: 1, opacity: 0}, "-=1")
  .from(".ivr1-circle", {y: 980.56,duration: 0.9, opacity: 0, stagger: 0.05}, "-=1")
  .from(".ivr1-cust-img", { duration: 0.5, opacity: 0, stagger: 0.05}, "-=0.6");
  
  let promptsIncentives = gsap.timeline({scrollTrigger:{
	  trigger:".prompts-incentives",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr2-topBox", {y: 1721,duration: 1, opacity: 0})
  .from(".ivr2-bottomBox", {y: 1939,duration: 1, opacity: 0}, "-=0.5")
  .from(".ivr2-voiceBox", {duration: 1, opacity: 0}, "-=0.5");
  
  let branchingTransfer = gsap.timeline({scrollTrigger:{
	  trigger:".branching-transfer",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr3-dailer", {duration: 1, opacity: 0})
  .from(".ivr3-widget", {y: 2009, duration: 1, opacity: 0}, "-=1.5")
  .from(".ivr3-mobile", {y:-1421.008, duration: 1, opacity: 0}, "-=1.5")
  .from(".ivr2-leftBox", {y:310.5, duration: 1, opacity: 0}, "-=0.5")
  .from(".ivr3-linker1", {duration: 1, opacity: 0, stagger: 0.05}, "-=1")
  .from(".ivr3-linker2", {duration: 1, opacity: 0, stagger: 0.05}, "-=1")
  .from(".ivr3-linker3", {duration: 1, opacity: 0, stagger: 0.05}, "-=1")
  .from(".ivr3-tooltip", {duration: 1, opacity: 0, stagger: 0.05}, "-=1");
  
  let destinationKeyword = gsap.timeline({scrollTrigger:{
	  trigger:".destination-keyword-section",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr4-widget", {y:3925, duration: 1, opacity: 0})
  .from(".ivr4-charts", {duration: 1, opacity: 0}, "-=0.2")
  .from(".ivr4-top-icons", {duration: 1, opacity: 0}, "-=0.9")
  .from(".ivr4-lines-dots", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=0.9");
  
  let walloffsRegistration = gsap.timeline({scrollTrigger:{
	  trigger:".walloffs-registration",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ivr5-event", {y:3934.667, duration: 1, opacity: 0})
  .from(".ivr5-right-box", {duration: 1, opacity: 0}, "-=0.5")
  .from(".ivr5-moneypeople", {duration: 1, opacity: 0}, "-=0.8")
  .from(".ivr5-connector", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=1"); 
  
  
  // ========= Industries ============
  
  let IndustriesIvr = gsap.timeline({scrollTrigger:{
	  trigger:".ivr-branch-wrapper",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-ivr1", {y:2893.531, duration: 1, opacity: 0})
  .from(".ind-ivr2", {y:1987, duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-ivr3", {y:2965.361, duration: 1, opacity: 0}, "-=0.8")
  .from(".ind-ivr-connector1", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=0.8")
  .from(".ind-ivr-connector2", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=0.8")
  .from(".ind-ivr-connector3", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=0.8");
  
  
  let IndustriesHotlines = gsap.timeline({scrollTrigger:{
	  trigger:".hotlines-branch-wrapper",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-hotlines2", {y:2643, duration: 1, opacity: 0})
  .from(".ind-hotlines1", {y:2200.531, duration: 1, opacity: 0}, "-=0.2");
  
  
  let IndustriesDialerSms = gsap.timeline({scrollTrigger:{
	  trigger:".dialer-solution-wrap",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-dailer1", {duration: 1, opacity: 0})
  .from(".ind-dailer1-left-box", {y:200.531, duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-dailer1-right-box", {y:500.531, duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-dailer1-add-cust", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".ind-dailer1-add-cust-img", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".ind-dailer1-linker", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  
  let IndustriesSmartSms = gsap.timeline({scrollTrigger:{
	  trigger:".smartsms-solution-wrap",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-sms1", {duration: 1, opacity: 0})
  .from(".ind-sms1-bottom-bigsms", {y:2963.104, duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-sms1-left-bigsms", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".ind-sms1-right-bottom", {y:200, duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-sms1-right-elements", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let IndustriesTelepay = gsap.timeline({scrollTrigger:{
	  trigger:".solution-telepay-wrapper",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-telepay1", {y:3920.238, duration: 1, opacity: 0})
  .from(".ind-telepay2", {duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-telepay3", {y:195.549, duration: 1, opacity: 0}, "-=0.5");
  
  let IndustriesFlexpbx = gsap.timeline({scrollTrigger:{
	  trigger:".flepbx-wrap",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-flexpbx1", {y:4340.451, duration: 1, opacity: 0})
  .from(".ind-flexpbx1-charts", {duration: 1, opacity: 0}, "-=0.8")
  .from(".ind-flexpbx2", {y:200.451, duration: 1, opacity: 0}, "-=0.8")
  .from(".ind-flexpbx3", {y:-716.954, duration: 1, opacity: 0}, "-=0.8");
  
  let IndustriesDid = gsap.timeline({scrollTrigger:{
	  trigger:".didtrunking-wrap",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-didtrunking1", {y:1842.6, duration: 1, opacity: 0})
  .from(".ind-didtrunking1-linker", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let IndustriesTelepaytech = gsap.timeline({scrollTrigger:{
	  trigger:".solution-telepay-wrapper",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-telepay31", {y:320.172, duration: 1.3, opacity: 0})
  .from(".ind-telepay32", {duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-telepay33", {y:5117.2339, duration: 1, opacity: 0}, "-=0.5");
  
  let IndustriesDelivery = gsap.timeline({scrollTrigger:{
	  trigger:".solution-telepay-wrapper",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".ind-telepayd1", {y:320.172, duration: 1.3, opacity: 0})
  .from(".ind-telepayd2", {y:-441,duration: 1, opacity: 0}, "-=0.5")
  .from(".ind-telepayd3", {duration: 1, opacity: 0}, "-=0.5");
  
  
  // ========= Solution hotlines ============
  
  let hotlinesHero = gsap.timeline({scrollTrigger:{
	  trigger:".hotline-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline-hero-img", {duration: 1, opacity: 0})
  .from(".hotline-hero-rbox", {y: 588.962, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline-hero-rec", {duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline-hero-btmbox", {y:950.394, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline-hero-connector", {duration: 1.2, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let librariesControls = gsap.timeline({scrollTrigger:{
	  trigger:".libraries-controls",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline1-mainbx", {y:50, duration: 1, opacity: 0})
  .from(".hotline1-rightbx", {y:50, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline1-btns", {x:-20, duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let recordingOrganization = gsap.timeline({scrollTrigger:{
	  trigger:".recording-organization",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline2-mainbx", {y:1001, duration: 1, opacity: 0})
  .from(".hotline2-rightbx", {y:90.15, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline2-voicebox", {duration: 1, opacity: 0}, "-=0.5");
  
  let streamingRecording = gsap.timeline({scrollTrigger:{
	  trigger:".streaming-recording",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline3-bg", {duration: 1, opacity: 0})
  .from(".hotline3-mainbx", {y:2404, duration: 1.2, opacity: 0}, "-=0.9")
  .from(".hotline3-rightbx", {y:90.15, duration: 1, opacity: 0}, "-=0.9")
  .from(".hotline3-voicebox", {duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline3-btmBox", {y:2928, duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let defaultOverrides = gsap.timeline({scrollTrigger:{
	  trigger:".default-overrides",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline4-bgBox", {duration: 1, opacity: 0})
  .from(".hotline4-rightBox", {y: 3838, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline4-callBox", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".hotline4-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  
  let alertingParking = gsap.timeline({scrollTrigger:{
	  trigger:".alerting-parking",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline5-Box", {y: 50, duration: 1, opacity: 0})
  .from(".hotline5-callBox", {y: 104, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline5-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".hotline5-btmBox", {y: 500.17, duration: 1, opacity: 0, stagger: 0.05}, "-=0.9")
  .from(".hotline5-msg", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.9");
  
  let announcementsRestrictions = gsap.timeline({scrollTrigger:{
	  trigger:".announcements-restrictions",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".hotline6-Box", {y: 4065, duration: 1, opacity: 0})
  .from(".hotline6-callBox", {y: 1376, duration: 1, opacity: 0}, "-=0.5")
  .from(".hotline6-chart", {duration: 1, opacity: 0}, "-=0.9")
  .from(".hotline6-btmBox", {y: 150.17, duration: 1, opacity: 0, stagger: 0.05}, "-=0.9")
  
  // ========= Solution dailer ============
  
  let dailerHero = gsap.timeline({scrollTrigger:{
	  trigger:".dialer-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".dialer-hero-img", {duration: 1, opacity: 0})
  .from(".dialer-hero-dailpad", {y: 341.483, duration: 1, opacity: 0}, "-=0.6")
  .from(".dialer-hero-msg", {y:90.376, duration: 1, opacity: 0}, "-=0.6")
  .from(".dialer-hero-callBtn", { duration: 1, opacity: 0}, "-=0.6")
  .from(".dialer-hero-cust", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.8")
  .from(".dialer-hero-cust-img", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.8")
  .from(".dialer-hero-linker", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.4");
  
  let smsAutomation = gsap.timeline({scrollTrigger:{
	  trigger:".sms-automation",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".dialer1-Box", {duration: 1, opacity: 0})
  .from(".dialer1-rightbx1", {y:1209, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer1-rightbx2", {y:1221.392, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer1-chart", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".dialer1-btns", {y:1506.272, duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let autocallingTracking = gsap.timeline({scrollTrigger:{
	  trigger:".autocalling-tracking",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".dialer2-Box", {y:150, duration: 1, opacity: 0})
  .from(".dialer2-leftBox", {y:1550, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer2-connector", {duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer2-inviteeBox", {y:-2489, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer2-graphBox", {y:-109.114, duration: 1, opacity: 0}, "-=0.5")
  
  let ivrcallRountingg = gsap.timeline({scrollTrigger:{
	  trigger:".ivr-call-rounting",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".dialer3-leftBox", {y:1942, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer3-rightBox", {y:3529.333, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer3-callbox", {y:100, duration: 1, opacity: 0}, "-=0.5")
  .from(".dialer3-connector", {duration: 1, opacity: 0}, "-=0.5")
  
  
  // ========= Solution smart SMS ============
  
  let smsHero = gsap.timeline({scrollTrigger:{
	  trigger:".smartsms-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".sms-hero-img", {duration: 1, opacity: 0})
  .from(".sms-hero-msgs", {duration: 1, opacity: 0, stagger: 0.1}, "-=0.6")
  .from(".sms-hero-callBox", {y:-3543.683, duration: 1, opacity: 0, stagger: 0.05}, "-=0.6")
  .from(".sms-hero-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.6");
  
  let chatBroadcast = gsap.timeline({scrollTrigger:{
	  trigger:".chat-broadcast",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".sms1-leftBox", {y:1501.859, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms1-rightBox", {y:864.705, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms1-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let routingSwitching = gsap.timeline({scrollTrigger:{
	  trigger:".routing-switching",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".sms2-watch", {y:50, duration: 1, opacity: 0})
  .from(".sms2-cat", {y:50, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms2-box", {y:80, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms2-msgs", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".sms2-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let emailsNotices = gsap.timeline({scrollTrigger:{
	  trigger:".emails-notices",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".sms3-notifiaction", {y:70, duration: 1, opacity: 0})
  .from(".sms3-box", {y:626.004, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms3-callBox", {y:-1576, duration: 1, opacity: 0}, "-=0.5")
  .from(".sms3-mailBox", {duration: 1, opacity: 0}, "-=0.5");
  
  let smartsmsLandlines = gsap.timeline({scrollTrigger:{
	  trigger:".smartsms-landlines",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".sms4-leftBox", {y:3232.809, duration: 1, opacity: 0})
  .from(".sms4-msg", {y:10.383, duration: 1, opacity: 0}, "-=0.9")
  .from(".sms4-rightBox", {y:100, duration: 1, opacity: 0}, "-=0.9")
  .from(".sms4-mail", {duration: 1, opacity: 0}, "-=0.9")
  .from(".sms4-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.9");
  
  
  // ========= Solution Telepay SMS ============
  
  let telepayHero = gsap.timeline({scrollTrigger:{
	  trigger:".telepay-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".telepay-hero-img", {duration: 1, opacity: 0})
  .from(".telepay-hero-dailer", {y:448.468, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay-hero-callBox", {opacity: 0, stagger: 0.05}, "-=0.6")
  .from(".telepay-hero-rightBox", {y:658.146, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay-hero-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.6");
  
  let accessCartManagement = gsap.timeline({scrollTrigger:{
	  trigger:".access-cart-management",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".telepay1-Box", {y:1509, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay1-images", { duration: 1, opacity: 0, stagger: 0.05}, "-=0.6")
  .from(".telepay1-callBox", {y:-2865.404, duration: 1, opacity: 0}, "-=0.6");
  
  let paymentScheduling = gsap.timeline({scrollTrigger:{
	  trigger:".payment-and-scheduling",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".telepay2-righttBox", {y:2267.356, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay2-leftBox", {y:2208.21, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay2-price", {y:2395.295, duration: 1, opacity: 0}, "-=0.6")
  .from(".telepay2-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.6");
  
  let campaignsAnalytics = gsap.timeline({scrollTrigger:{
	  trigger:".campaigns-analytics",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".telepay3-leftBox", {y:290, duration: 1, opacity: 0}, "-=0.5")
  .from(".telepay3-rightBox", {y:220, duration: 1, opacity: 0}, "-=0.5")
  .from(".telepay3-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  
  // ========= Solution Flexpbx SMS ============
  
  let flexpbxHero = gsap.timeline({scrollTrigger:{
	  trigger:".flexpbx-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".flexpbx-hero-img", {duration: 1, opacity: 0})
  .from(".flexpbx-hero-box", {y:206.143, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx-hero-callBox", {y:-2332.385, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".flexpbx-hero-dailer", {y:807.669, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx-hero-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let sipHostingOptions = gsap.timeline({scrollTrigger:{
	  trigger:".sip-hosting-options",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".flexpbx1-Box", {y:1066, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx1-callBox", {y:-3391.405, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx1-mobile", {y:-2868.451, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx1-chart", {duration: 1, opacity: 0}, "-=0.5");
  
  let systemMapping = gsap.timeline({scrollTrigger:{
	  trigger:".system-mapping",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".flexpbx2-telephon", {duration: 1, opacity: 0})
  .from(".flexpbx2-dailer", {y:1640.195, duration: 1, opacity: 0}, "-=0.6")
  .from(".flexpbx2-chat", {y:-3391.405, duration: 1, opacity: 0}, "-=0.6")
  .from(".flexpbx2-user", {duration: 1, opacity: 0, stagger: 0.1}, "-=0.6")
  .from(".flexpbx2-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.6")
  .from(".flexpbx2-voicemail", {y:1069.871, duration: 1, opacity: 0}, "-=0.6");
  
  let roboReachingSection = gsap.timeline({scrollTrigger:{
	  trigger:".robo-reaching-section",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".flexpbx3-voicemail", {y:1834.078, duration: 1, opacity: 0})
  .from(".flexpbx3-rightbox", {y:2618, duration: 1, opacity: 0}, "-=0.5")
  .from(".flexpbx2-chart", {duration: 1.2, opacity: 0}, "-=0.5")
  .from(".flexpbx2-voicebox", {duration: 1, opacity: 0}, "-=0.5");
  
  
  // ========= Solution DID trunking SMS ============
  
  let didHero = gsap.timeline({scrollTrigger:{
	  trigger:".didtrunking-banner .inner-hero-image",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".did-hero-img", {duration: 1, opacity: 0})
  .from(".did-hero-box", {y:-7236.185, duration: 1, opacity: 0}, "-=0.5")
  .from(".did-hero-callBox", {y:429.699, opacity: 0, stagger: 0.05}, "-=0.5")
  .from(".did-hero-dailer", {y:-7911.517, duration: 1, opacity: 0}, "-=0.5")
  .from(".did-hero-connector", {duration: 1, opacity: 0, stagger: 0.05}, "-=0.5");
  
  let organizationIntegration = gsap.timeline({scrollTrigger:{
	  trigger:".organization-integration",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".did1-img", {duration: 1, opacity: 0})
  .from(".did1-dailBox", {y:246.782, duration: 1, opacity: 0}, "-=0.5")
  .from(".did1-callbox", {y:200, duration: 1, opacity: 0}, "-=0.5")
  .from(".did1-connector", {duration: 1, opacity: 0}, "-=0.5");
  
  let flexibilityConvenience = gsap.timeline({scrollTrigger:{
	  trigger:".flexibility-convenience",
	  start:"top 50%",
	  end:"bottom top",
	  toggleActions:"play none none none"
  }})
  .from(".did2-leftbox1", {y:772.866, duration: 1, opacity: 0})
  .from(".did2-leftbox2", {y:1777.866, duration: 1, opacity: 0}, "-=0.5")
  .from(".did2-chart", {duration: 1, opacity: 0}, "-=0.5")
  .from(".did2-icons", {duration: 1, opacity: 0}, "-=0.5")
  .from(".did2-connector", {duration: 1, opacity: 0}, "-=0.5");
  
  /* Header */
  function globalNavDropdowns(e) {
	  var t = this;
	  this.container = document.querySelector(e), this.root = this.container.querySelector(".navRoot"), this.primaryNav = this.root.querySelector(".navSection.primary"), this.primaryNavItem = this.root.querySelector(".navSection.primary .rootLink:last-child"), this.secondaryNavItem = this.root.querySelector(".navSection.secondary .rootLink:first-child"), this.checkCollision(), window.addEventListener("load", this.checkCollision.bind(this)), window.addEventListener("resize", this.checkCollision.bind(this)), this.container.classList.add("noDropdownTransition"), this.dropdownBackground = this.container.querySelector(".dropdownBackground"), this.dropdownBackgroundAlt = this.container.querySelector(".alternateBackground"), this.dropdownContainer = this.container.querySelector(".dropdownContainer"), this.dropdownArrow = this.container.querySelector(".dropdownArrow"), this.dropdownRoots = Strut.queryArray(".hasDropdown", this.root), this.dropdownSections = Strut.queryArray(".dropdownSection", this.container).map(function(e) {
		  return {
			  el: e,
			  name: e.getAttribute("data-dropdown"),
			  content: e.querySelector(".dropdownContent")
		  }
	  });
	  var n = window.PointerEvent ? {
		  end: "pointerup",
		  enter: "pointerenter",
		  leave: "pointerleave"
	  } : {
		  end: "touchend",
		  enter: "mouseenter",
		  leave: "mouseleave"
	  };
	  this.dropdownRoots.forEach(function(e, r) {
		  e.addEventListener(n.end, function(n) {
			  n.preventDefault(), n.stopPropagation(), t.toggleDropdown(e)
		  }), e.addEventListener(n.enter, function(n) {
			  if (n.pointerType == "touch") return;
			  t.stopCloseTimeout(), t.openDropdown(e)
		  }), e.addEventListener(n.leave, function(e) {
			  if (e.pointerType == "touch") return;
			  t.startCloseTimeout()
		  })
	  }), this.dropdownContainer.addEventListener(n.end, function(e) {
		  e.stopPropagation()
	  }), this.dropdownContainer.addEventListener(n.enter, function(e) {
		  if (e.pointerType == "touch") return;
		  t.stopCloseTimeout()
	  }), this.dropdownContainer.addEventListener(n.leave, function(e) {
		  if (e.pointerType == "touch") return;
		  t.startCloseTimeout()
	  }), document.body.addEventListener(n.end, function(e) {
		  Strut.touch.isDragging || t.closeDropdown()
	  })
  }
  
  function globalNavPopup(e) {
	  var t = this,
		  n = Strut.touch.isSupported ? "touchend" : "click";
	  this.activeClass = "globalPopupActive", this.root = document.querySelector(e), this.link = this.root.querySelector(".rootLink"), this.popup = this.root.querySelector(".popup"), this.closeButton = this.root.querySelector(".popupCloseButton"), this.link.addEventListener(n, function(e) {
		  e.stopPropagation(), t.togglePopup()
	  }), this.popup.addEventListener(n, function(e) {
		  e.stopPropagation()
	  }), this.closeButton && this.closeButton.addEventListener(n, function(e) {
		  t.closeAllPopups()
	  }), document.body.addEventListener(n, function(e) {
		  Strut.touch.isDragging || t.closeAllPopups()
	  }, !1)
  }(function() {
	  window.$ && window.$.ajaxPrefilter && $(function() {
		  return $.ajaxPrefilter(function(e, t, n) {
			  var r, i;
			  return i = $("meta[name=csrf-token]"), r = i ? i.attr("content") : "", n.setRequestHeader("x-stripe-csrf-token", r)
		  })
	  })
  }).call(this),
	  function() {
		  function i(e, t, n) {
			  if (!("Analytics" in window)) return;
			  n ? window.Analytics[e](t, {
				  source: n
			  }) : window.Analytics[e](t)
		  }
  
		  function s(e, t, n, r) {
			  e.addEventListener("click", function(e) {
				  i(t, n, r)
			  })
		  }
  
		  function o() {
			  var n = document.querySelectorAll("[" + e + "]");
			  [].slice.call(n).forEach(function(n) {
				  s(n, "action", n.getAttribute(e), n.getAttribute(t))
			  })
		  }
  
		  function u(e) {
			  var t = document.querySelectorAll("[" + n + "]");
			  [].slice.call(t).forEach(function(e) {
				  s(e, "modal", e.getAttribute(n), e.getAttribute(r))
			  })
		  }
		  var e = "data-analytics-action",
			  t = "data-action-source",
			  n = "data-analytics-modal",
			  r = "data-modal-source";
		  document.addEventListener("DOMContentLoaded", function() {
			  o(), u()
		  })
	  }(), "use strict";
  var Strut = {
	  random: function(e, t) {
		  return Math.random() * (t - e) + e
	  },
	  arrayRandom: function(e) {
		  return e[Math.floor(Math.random() * e.length)]
	  },
	  interpolate: function(e, t, n) {
		  return e * (1 - n) + t * n
	  },
	  rangePosition: function(e, t, n) {
		  return (n - e) / (t - e)
	  },
	  clamp: function(e, t, n) {
		  return Math.max(Math.min(e, n), t)
	  },
	  queryArray: function(e, t) {
		  return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e))
	  },
	  ready: function(e) {
		  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e)
	  }
  };
  Strut.isRetina = window.devicePixelRatio > 1.3, Strut.mobileViewportWidth = 670, Strut.isMobileViewport = window.innerWidth < Strut.mobileViewportWidth, window.addEventListener("resize", function() {
	  Strut.isMobileViewport = window.innerWidth < Strut.mobileViewportWidth
  }), Strut.touch = {
	  isSupported: "ontouchstart" in window || navigator.maxTouchPoints,
	  isDragging: !1
  }, document.addEventListener("DOMContentLoaded", function() {
	  document.body.addEventListener("touchmove", function() {
		  Strut.touch.isDragging = !0
	  }), document.body.addEventListener("touchstart", function() {
		  Strut.touch.isDragging = !1
	  })
  }), Strut.load = {
	  images: function(e, t) {
		  typeof e == "string" && (e = [e]);
		  var n = -e.length;
		  e.forEach(function(e) {
			  var r = new Image;
			  r.src = e, r.onload = function() {
				  n++, n === 0 && t && t()
			  }
		  })
	  },
	  css: function(e, t) {
		  var n = document.createElement("link"),
			  r = window.readConfig("strut_files") || {},
			  i = r[e];
		  if (!i) throw new Error('CSS file "' + e + '" not found in strut_files config');
		  n.href = i, n.rel = "stylesheet", document.head.appendChild(n), t && (n.onload = t)
	  },
	  js: function(e, t) {
		  var n = document.createElement("script"),
			  r = window.readConfig("strut_files") || {},
			  i = r[e];
		  if (!i) throw new Error('Javascript file "' + e + '" not found in strut_files config');
		  n.src = i, document.head.appendChild(n), t && (n.onload = t)
	  }
  }, Strut.supports = {
	  es6: function() {
		  try {
			  return new Function("(a = 0) => a"), !0
		  } catch (e) {
			  return !1
		  }
	  }(),
	  pointerEvents: function() {
		  var e = document.createElement("a").style;
		  return e.cssText = "pointer-events:auto", e.pointerEvents === "auto"
	  }(),
	  positionSticky: function() {
		  var e = "position:",
			  t = "sticky",
			  n = document.createElement("a"),
			  r = n.style,
			  i = " -webkit- -moz- -o- -ms- ".split(" ");
		  return r.cssText = e + i.join(t + ";" + e).slice(0, -e.length), r.position.indexOf(t) !== -1
	  }(),
	  masks: function() {
		  return !/MSIE|Trident|Edge/i.test(navigator.userAgent)
	  }()
  }, globalNavDropdowns.prototype.checkCollision = function() {
	  var e = this;
	  if (Strut.isMobileViewport) return;
	  if (e.compact == 1) {
		  var t = document.body.clientWidth,
			  n = e.primaryNav.getBoundingClientRect();
		  n.left + n.width / 2 > t / 2 && (e.container.classList.remove("compact"), e.compact = !1)
	  } else {
		  var r = e.primaryNavItem.getBoundingClientRect(),
			  i = e.secondaryNavItem.getBoundingClientRect();
		  r.right > i.left && (e.container.classList.add("compact"), e.compact = !0)
	  }
  }, globalNavDropdowns.prototype.openDropdown = function(e) {
	  var t = this;
	  if (this.activeDropdown === e) return;
	  this.container.classList.add("overlayActive"), this.container.classList.add("dropdownActive"), this.activeDropdown = e, this.dropdownRoots.forEach(function(e, t) {
		  e.classList.remove("active")
	  }), e.classList.add("active");
	  var n = e.getAttribute("data-dropdown"),
		  r = "left",
		  i, s, o;
	  this.dropdownSections.forEach(function(e) {
		  e.el.classList.remove("active"), e.el.classList.remove("left"), e.el.classList.remove("right"), e.name == n ? (e.el.classList.add("active"), r = "right", i = e.content.offsetWidth, s = e.content.offsetHeight, o = e.content) : e.el.classList.add(r)
	  });
	  var u = 520,
		  a = 400,
		  f = i / u,
		  l = s / a,
		  c = e.getBoundingClientRect(),
		  h = c.left + c.width / 2 - i / 2;
	  h = Math.round(Math.max(h, 10)), clearTimeout(this.disableTransitionTimeout), this.enableTransitionTimeout = setTimeout(function() {
		  t.container.classList.remove("noDropdownTransition")
	  }, 50), this.dropdownBackground.style.transform = "translateX(" + h + "px) scaleX(" + f + ") scaleY(" + l + ")", this.dropdownContainer.style.transform = "translateX(" + h + "px)", this.dropdownContainer.style.width = i + "px", this.dropdownContainer.style.height = s + "px";
	  var p = Math.round(c.left + c.width / 2);
	  this.dropdownArrow.style.transform = "translateX(" + p + "px) rotate(45deg)";
	  var d = o.children[0].offsetHeight / l;
	  this.dropdownBackgroundAlt.style.transform = "translateY(" + d + "px)"
  }, globalNavDropdowns.prototype.closeDropdown = function() {
	  var e = this;
	  if (!this.activeDropdown) return;
	  this.dropdownRoots.forEach(function(e, t) {
		  e.classList.remove("active")
	  }), clearTimeout(this.enableTransitionTimeout), this.disableTransitionTimeout = setTimeout(function() {
		  e.container.classList.add("noDropdownTransition")
	  }, 50), this.container.classList.remove("overlayActive"), this.container.classList.remove("dropdownActive"), this.activeDropdown = undefined
  }, globalNavDropdowns.prototype.toggleDropdown = function(e) {
	  this.activeDropdown === e ? this.closeDropdown() : this.openDropdown(e)
  }, globalNavDropdowns.prototype.startCloseTimeout = function() {
	  var e = this;
	  e.closeDropdownTimeout = setTimeout(function() {
		  e.closeDropdown()
	  }, 50)
  }, globalNavDropdowns.prototype.stopCloseTimeout = function() {
	  var e = this;
	  clearTimeout(e.closeDropdownTimeout)
  }, globalNavPopup.prototype.togglePopup = function() {
	  var e = this.root.classList.contains(this.activeClass);
	  this.closeAllPopups(!0), e || this.root.classList.add(this.activeClass)
  }, globalNavPopup.prototype.closeAllPopups = function(e) {
	  var t = document.getElementsByClassName(this.activeClass);
	  for (var n = 0; n < t.length; n++) t[n].classList.remove(this.activeClass)
  }, Strut.supports.pointerEvents || Strut.load.css("v3/shared/navigation_ie10.css"), Strut.ready(function() {
	  new globalNavDropdowns(".globalNav"), new globalNavPopup(".globalNav .navSection.mobile"), new globalNavPopup(".globalFooterNav .select.country"), new globalNavPopup(".globalFooterNav .select.language")
  });
  
  
  
  