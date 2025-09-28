 // Generate neon squares for splash screen
        const splash = document.getElementById('splash');
        for(let i=0;i<60;i++){
            const square = document.createElement('div');
            square.classList.add('square');
            const x = (Math.random()-0.5) * window.innerWidth * 2 + 'px';
            const y = (Math.random()-0.5) * window.innerHeight * 2 + 'px';
            square.style.setProperty('--x', x);
            square.style.setProperty('--y', y);
            square.style.left = (Math.random() * window.innerWidth) + 'px';
            square.style.top = (Math.random() * window.innerHeight) + 'px';
            splash.appendChild(square);
        }

        // Generate light streaks for splash screen
        for(let i=0;i<8;i++){
            const streak = document.createElement('div');
            streak.classList.add('streak');
            streak.style.top = (Math.random() * 100) + '%';
            streak.style.animationDelay = (i*0.3) + 's';
            splash.appendChild(streak);
        }

        // Transition from splash to loading screen
        setTimeout(() => {
            splash.style.transition = 'opacity 1s ease';
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                document.querySelector('.loading-container').style.display = 'flex';
                
                // Transition from loading screen to main app
                setTimeout(() => {
                    const loadingContainer = document.querySelector('.loading-container');
                    loadingContainer.style.transition = 'opacity 1s ease-in-out';
                    loadingContainer.style.opacity = '0';
                    setTimeout(() => {
                        loadingContainer.style.display = 'none';
                        document.getElementById('mainApp').style.display = 'block';
                        
                        // Initialize main app functionality here
                        // This would include all the JavaScript from the original main app
                    }, 1000);
                }, 5000);
            }, 1000);
        }, 5000);
        
        // Data
        const vehicles = [
            {
                id: 1,
                name: 'Splendor Plus',
                brand: 'Hero',
                type: 'bike',
                price: 75000,
                fuelType: 'petrol',
                image: 'https://images.91wheels.com/assets/b_images/gallery/heromotocorp/splendor-plus/heromotocorp-splendor-plus-43-1717845859.jpg?w=1200&q=80',
                specs: {
                    engine: '97.2cc',
                    mileage: '80 kmpl',
                    topSpeed: '90 kmph',
                    weight: '112 kg',
                    features: ['Alloy Wheels', 'Tubeless Tyres', 'Self Start']
                },
                description: 'The Hero Splendor Plus is a commuter bike that offers excellent mileage and low maintenance costs. It features a refined engine, comfortable seating, and stylish design.'
            },
            {
                id: 2,
                name: 'Activa 6G',
                brand: 'Honda',
                type: 'scooter',
                price: 78000,
                fuelType: 'petrol',
                image: 'https://images.timesdrive.in/photo/msid-151054468/151054468.jpg',
                specs: {
                    engine: '109.51cc',
                    mileage: '60 kmpl',
                    topSpeed: '85 kmph',
                    weight: '109 kg',
                    features: ['External Fuel Filling', 'Side Stand Indicator', 'Engine Kill Switch']
                },
                description: 'The Honda Activa 6G is a popular scooter known for its reliability and smooth performance. It comes with advanced features like external fuel filling and a side stand indicator.'
            },
            {
                id: 3,
                name: 'Ather 450X',
                brand: 'Ather',
                type: 'ev',
                price: 150000,
                fuelType: 'electric',
                image: 'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/atherenergy_450x/images/colours_atherenergy-450x_still-white_600x400.jpg',
                specs: {
                    engine: 'Electric Motor',
                    mileage: '85 km/charge',
                    topSpeed: '80 kmph',
                    weight: '108 kg',
                    features: ['4G Connectivity', 'Bluetooth', 'Reverse Mode']
                },
                description: 'The Ather 450X is a premium electric scooter with smart features like 4G connectivity, Bluetooth, and reverse mode. It offers a smooth and silent ride with zero emissions.'
            },
            {
                id: 4,
                name: 'Pulsar NS200',
                brand: 'Bajaj',
                type: 'bike',
                price: 140000,
                fuelType: 'petrol',
                image: 'https://cdn.bikedekho.com/processedimages/bajaj/pulsar-ns400z/source/pulsar-ns400z6889bf8868f6f.jpg?imwidth=412&impolicy=resize',
                specs: {
                    engine: '199.5cc',
                    mileage: '35 kmpl',
                    topSpeed: '136 kmph',
                    weight: '156 kg',
                    features: ['ABS', 'LED Headlights', 'Digital Console']
                },
                description: 'The Bajaj Pulsar NS200 is a powerful sports bike with aggressive styling and advanced features like ABS, LED headlights, and a digital console.'
            },
            {
                id: 5,
                name: 'Ntorq 125',
                brand: 'TVS',
                type: 'scooter',
                price: 85000,
                fuelType: 'petrol',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WRDw-fvvm4Gy8YseJR0m6nPJYRsCD7IH4Q&s',
                specs: {
                    engine: '124.8cc',
                    mileage: '45 kmpl',
                    topSpeed: '95 kmph',
                    weight: '118 kg',
                    features: ['Bluetooth Connectivity', 'LED Lights', 'External Fuel Filling']
                },
                description: 'The TVS Ntorq 125 is a feature-rich scooter with Bluetooth connectivity, LED lights, and external fuel filling. It offers a sporty and stylish design.'
            },
            {
                id: 6,
                name: 'Ola S1 Pro',
                brand: 'Ola',
                type: 'ev',
                price: 130000,
                fuelType: 'electric',
                image: 'https://catalog-management.s3.ap-south-1.amazonaws.com/htmobile1/olaelectric_s1-pro/images/exterior_olaelectric-s1-pro_front-left-view_600x400.jpg',
                specs: {
                    engine: 'Electric Motor',
                    mileage: '181 km/charge',
                    topSpeed: '115 kmph',
                    weight: '121 kg',
                    features: ['Cruise Control', 'Reverse Mode', 'Music System']
                },
                description: 'The Ola S1 Pro is a high-performance electric scooter with features like cruise control, reverse mode, and a music system. It offers an impressive range of 181 km on a single charge.'
            },
            {
                id: 7,
                name: 'Royal Enfield Classic 350',
                brand: 'Royal Enfield',
                type: 'bike',
                price: 190000,
                fuelType: 'petrol',
                image: 'https://static.india.com/wp-content/uploads/2020/09/Royal-Enfield-Bullet-350.jpg?impolicy=Medium_Widthonly&w=400',
                specs: {
                    engine: '349cc',
                    mileage: '35 kmpl',
                    topSpeed: '110 kmph',
                    weight: '195 kg',
                    features: ['Classic Design', 'Fuel Injection', 'Dual Channel ABS']
                },
                description: 'The Royal Enfield Classic 350 is a timeless motorcycle with classic design and modern features like fuel injection and dual-channel ABS. It offers a comfortable ride with its retro styling.'
            },
            {
                id: 8,
                name: 'Yamaha Fascino 125',
                brand: 'Yamaha',
                type: 'scooter',
                price: 77000,
                fuelType: 'petrol',
                image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/208612/fascino-right-front-three-quarter-4.jpeg?isig=0&q=100',
                specs: {
                    engine: '125cc',
                    mileage: '55 kmpl',
                    topSpeed: '90 kmph',
                    weight: '99 kg',
                    features: ['Hybrid Engine', 'LED Tail Light', 'Side Stand Engine Cut-off']
                },
                description: 'The Yamaha Fascino 125 is a stylish scooter with a hybrid engine, LED tail light, and side stand engine cut-off feature. It offers excellent mileage and a comfortable ride.'
            },
            {
                id: 9,
                name: 'Bajaj Chetak Electric',
                brand: 'Bajaj',
                type: 'ev',
                price: 145000,
                fuelType: 'electric',
                image: 'https://images.drivespark.com/webp/fit-in/750x550/bikes-photos/models/2025bajajchetak_1735213938.jpg',
                specs: {
                    engine: 'Electric Motor',
                    mileage: '95 km/charge',
                    topSpeed: '70 kmph',
                    weight: '118 kg',
                    features: ['Retro Design', 'IP67 Rating', 'Digital Cluster']
                },
                description: 'The Bajaj Chetak Electric combines retro design with modern electric technology. It features an IP67 rating and a digital cluster for a seamless riding experience.'
            }
        ];

        const secondHandBikes = [
            {
                id: 1,
                name: 'Apache RTR 160',
                brand: 'TVS',
                type: 'bike',
                price: 65000,
                year: 2019,
                kms: 15000,
                image: 'https://img.autocarindia.com/ExtraImages/20181004114155_2018%20TVS%20Apache%20RTR160%204V.jpg?w=700&c=1',
                owner: 'Rajesh Kumar',
                location: 'Bangalore',
                ownerPhone: '+91 9876543210',
                ownerEmail: 'rajesh@example.com',
                description: 'Well-maintained TVS Apache RTR 160 with regular servicing. Single owner, accident-free. Good condition with all documents clear.'
            },
            {
                id: 2,
                name: 'Activa 5G',
                brand: 'Honda',
                type: 'scooter',
                price: 45000,
                year: 2020,
                kms: 12000,
                image: 'https://5.imimg.com/data5/ANDROID/Default/2023/5/304864053/BC/NL/FF/188755978/product-jpeg.jpg',
                owner: 'Priya Sharma',
                location: 'Mumbai',
                ownerPhone: '+91 9876543211',
                ownerEmail: 'priya@example.com',
                description: 'Honda Activa 5G in excellent condition. Regularly serviced, good mileage, and all documents up to date. Single owner use.'
            },
            {
                id: 3,
                name: 'Classic 350',
                brand: 'Royal Enfield',
                type: 'bike',
                price: 120000,
                year: 2021,
                kms: 8000,
                image: 'https://www.rushlane.com/wp-content/uploads/2021/07/royal-enfield-classic-350-prices-july-2021.jpg',
                owner: 'Amit Patel',
                location: 'Delhi',
                ownerPhone: '+91 9876543212',
                ownerEmail: 'amit@example.com',
                description: 'Royal Enfield Classic 350 in pristine condition. Very low kilometers, single owner, with all accessories and documents.'
            }
        ];

        const bikeParts = [
            {
                id: 1,
                name: 'Clutch Plate',
                category: 'engine',
                brand: 'Honda',
                compatible: 'Honda Activa, Dio',
                price: 450,
                condition: 'new',
                image: 'https://2wheelerspares.com/wp-content/uploads/2024/08/Honda-Shine-Clutch-Assembly-Set-Genuine-Clutch-Assembly-5.png',
                seller: 'Auto Parts Hub',
                sellerPhone: '+91 9876543213',
                sellerEmail: 'parts@example.com',
                description: 'Genuine Honda clutch plate for Activa and Dio models. High-quality replacement part with warranty.'
            },
            {
                id: 2,
                name: 'Brake Pads',
                category: 'brake',
                brand: 'Bajaj',
                compatible: 'Bajaj Pulsar series',
                price: 350,
                condition: 'new',
                image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350303477/QC/BC/VK/5407231/bajaj-pulsar-200-rear-brake-pad.jpg',
                seller: 'Bike Spares',
                sellerPhone: '+91 9876543214',
                sellerEmail: 'spares@example.com',
                description: 'Original Bajaj brake pads for all Pulsar models. Superior braking performance and durability.'
            },
            {
                id: 3,
                name: 'Headlight Assembly',
                category: 'electrical',
                brand: 'TVS',
                compatible: 'TVS Apache',
                price: 1200,
                condition: 'used',
                image: 'https://image.made-in-china.com/202f0j00vVuqbhTRatkO/Motorcycle-Parts-Headlight-Headlamp-Assembly-for-Tvs-Apache-RTR160-4V-N9221760.webp',
                seller: 'Second Hand Spares',
                sellerPhone: '+91 9876543215',
                sellerEmail: 'secondhand@example.com',
                description: 'Used TVS Apache headlight assembly in good condition. All functions working properly.'
            },
            {
                id: 4,
                name: 'Tyre (Front)',
                category: 'tyres',
                brand: 'MRF',
                compatible: 'All 100cc-150cc bikes',
                price: 1500,
                condition: 'new',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNyKY2uJNflWZDjHyXhl4162qWJl4wIJQeA&s',
                seller: 'Tyre World',
                sellerPhone: '+91 9876543216',
                sellerEmail: 'tyre@example.com',
                description: 'MRF front tyre suitable for all 100cc-150cc bikes. Excellent grip and long-lasting tread.'
            }
        ];

        const showrooms = [
            {
                id: 1,
                name: 'Vahan Bazar Central',
                address: '123 MG Road, Bangalore, Karnataka',
                phone: '+91 9876543210',
                email: 'central@vahanbazar.app',
                hours: '9:00 AM - 8:00 PM'
            },
            {
                id: 2,
                name: 'Vahan Bazar North',
                address: '456 Nehru Place, Delhi, NCR',
                phone: '+91 9876543211',
                email: 'north@vahanbazar.app',
                hours: '9:00 AM - 8:00 PM'
            },
            {
                id: 3,
                name: 'Vahan Bazar West',
                address: '789 Linking Road, Mumbai, Maharashtra',
                phone: '+91 9876543212',
                email: 'west@vahanbazar.app',
                hours: '9:00 AM - 8:00 PM'
            }
        ];

        const upcomingLaunches = [
            {
                id: 1,
                name: 'Hunter 350',
                brand: 'Royal Enfield',
                type: 'bike',
                expectedPrice: '₹1.5 - 1.7 Lakh',
                launchDate: 'Dec 2023',
                image: 'https://cdn.bikedekho.com/upload/standoutfeatures/65e6ec8173c8f.jpg',
                description: 'The Royal Enfield Hunter 350 is a modern retro motorcycle with a 349cc engine. It features a comfortable riding position and classic styling.'
            },
            {
                id: 2,
                name: 'Aerox 155',
                brand: 'Yamaha',
                type: 'scooter',
                expectedPrice: '₹1.3 - 1.5 Lakh',
                launchDate: 'Jan 2024',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/GW/DI/VJ/153492086/yamaha-aerox-155.jpg',
                description: 'The Yamaha Aerox 155 is a sporty scooter with a 155cc engine. It offers aggressive styling and performance-oriented features.'
            },
            {
                id: 3,
                name: 'Simple One',
                brand: 'Simple Energy',
                type: 'ev',
                expectedPrice: '₹1.1 - 1.3 Lakh',
                launchDate: 'Nov 2023',
                image: 'https://cdn.bikedekho.com/processedimages/simple-energy/simple-one/source/simple-one67af05591b4dc.jpg',
                description: 'The Simple One is an electric scooter with an impressive range of 233 km on a single charge. It features fast charging and smart connectivity.'
            },
            {
                id: 4,
                name: 'Hero Xtreme 160R',
                brand: 'Hero',
                type: 'bike',
                expectedPrice: '₹1.0 - 1.2 Lakh',
                launchDate: 'Feb 2024',
            image: 'https://etimg.etb2bimg.com/photo/107428512.cms',
                description: 'The Hero Xtreme 160R is a stylish commuter bike with a 163cc engine. It features modern design and advanced technology.'
            },
            {
                id: 5,
                name: 'TVS Jupiter 125',
                brand: 'TVS',
                type: 'scooter',
                expectedPrice: '₹80,000 - 90,000',
                launchDate: 'Mar 2024',
                image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/103181/jupiter-125-right-front-three-quarter-5.png?isig=0',
                description: 'The TVS Jupiter 125 is a feature-rich scooter with a 124.8cc engine. It offers comfort and convenience with modern features.'
            },
            {
                id: 6,
                name: 'Bajaj Chetak Urban',
                brand: 'Bajaj',
                type: 'ev',
                expectedPrice: '₹1.2 - 1.4 Lakh',
                launchDate: 'Apr 2024',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyIKu428NC4gdH70BYoOx8mZU2RbjrTKFig&s',
                description: 'The Bajaj Chetak Urban is an electric scooter with retro styling and modern features. It offers a range of 95 km on a single charge.'
            }
        ];

        // Offers data
        const offers = [
            {
                id: 1,
                title: 'Festival Special Discount',
                description: 'Get up to 15% discount on all new bikes during this festive season.',
                code: 'FESTIVE15',
                discount: 15,
                type: 'percentage',
                validity: '31st Dec 2023'
            },
            {
                id: 2,
                title: 'Student Discount',
                description: 'Special discount for students on all bikes and scooters. Valid student ID required.',
                code: 'STUDENT10',
                discount: 10,
                type: 'percentage',
                validity: '31st Dec 2023'
            },
            {
                id: 3,
                title: 'Corporate Discount',
                description: 'Exclusive discount for corporate employees. Contact your HR for details.',
                code: 'CORP20',
                discount: 20,
                type: 'percentage',
                validity: '31st Dec 2023'
            }
        ];

        // Card offers data
        const cardOffers = [
            {
                id: 1,
                title: 'HDFC Bank Offer',
                description: 'Get 5% instant discount on HDFC Bank Credit and Debit Cards.',
                code: 'HDFC5',
                discount: 5,
                type: 'percentage',
                validity: '31st Dec 2023'
            },
            {
                id: 2,
                title: 'ICICI Bank Offer',
                description: 'Get 10% cashback on ICICI Bank Credit Cards. Minimum purchase ₹5000.',
                code: 'ICICI10',
                discount: 10,
                type: 'percentage',
                validity: '31st Dec 2023'
            },
            {
                id: 3,
                title: 'SBI Bank Offer',
                description: 'No-cost EMI on SBI Credit Cards. Available on select models.',
                code: 'SBIEMI',
                discount: 0,
                type: 'emi',
                validity: '31st Dec 2023'
            }
        ];

        // State
        let activeTab = 'bikes';
        let selectedVehicles = [];
        let filteredVehicles = [...vehicles];
        let currentTestRideVehicleId = null;
        let currentSection = 'vehicles';
        let purchaseItem = null;
        let cart = [];
        let currentUser = null;
        let orders = [];
        let checkoutStep = 1;
        let notificationPermissionGranted = false;
        let currentVehicleDetail = null;
        let appliedCoupon = null;
        let coupons = [];
        let referralCode = '';

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is logged in
            const savedUser = localStorage.getItem('vahanBazarUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                document.getElementById('authSection').style.display = 'none';
                document.getElementById('mainApp').style.display = 'block';
                document.getElementById('userName').textContent = currentUser.name;
                
                // Update account information
                document.getElementById('accountName').textContent = currentUser.name;
                document.getElementById('accountEmail').textContent = currentUser.email;
                document.getElementById('accountNameInput').value = currentUser.name;
                document.getElementById('accountEmailInput').value = currentUser.email;
                document.getElementById('accountPhoneInput').value = currentUser.phone || '+91 9876543210';
                document.getElementById('accountAddressInput').value = currentUser.address || '123 MG Road, Bangalore';
                
                // Generate referral code for user
                generateReferralCode();
                
                // Load coupons from localStorage
                const savedCoupons = localStorage.getItem('vahanBazarCoupons');
                if (savedCoupons) {
                    coupons = JSON.parse(savedCoupons);
                    renderCoupons();
                }
            }
            
            // Load orders from localStorage
            const savedOrders = localStorage.getItem('vahanBazarOrders');
            if (savedOrders) {
                orders = JSON.parse(savedOrders);
            }
            
            // Request notification permission
            if ("Notification" in window && Notification.permission === "default") {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        notificationPermissionGranted = true;
                        console.log("Notification permission granted");
                    }
                });
            } else if (Notification.permission === "granted") {
                notificationPermissionGranted = true;
            }
            
            populateBrandFilter();
            renderVehicles();
            renderSecondHandBikes();
            renderBikeParts();
            renderUpcomingLaunches();
            renderShowrooms();
            renderOrders();
            setupEventListeners();
            updateCalculators();
            updateCartCount();
            
            // Setup payment method change for checkout
            document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const emiOptions = document.getElementById('emiOptions');
                    const emiDetails = document.getElementById('emiDetails');
                    const cashDetails = document.getElementById('cashDetails');
                    
                    if (this.value === 'bajaj') {
                        emiOptions.classList.remove('hidden');
                        emiDetails.classList.remove('hidden');
                        cashDetails.classList.add('hidden');
                        calculateEMI();
                    } else if (this.value === 'cash') {
                        emiOptions.classList.add('hidden');
                        emiDetails.classList.add('hidden');
                        cashDetails.classList.remove('hidden');
                        calculateCashDetails();
                    } else {
                        emiOptions.classList.add('hidden');
                        emiDetails.classList.add('hidden');
                        cashDetails.classList.add('hidden');
                    }
                });
            });
            
            // Setup EMI calculation on change
            document.getElementById('checkoutLoanTenure').addEventListener('change', calculateEMI);
            document.getElementById('checkoutDownPayment').addEventListener('input', calculateEMI);
            
            // Setup account form submission
            document.getElementById('accountForm').addEventListener('submit', function(event) {
                event.preventDefault();
                
                const name = document.getElementById('accountNameInput').value;
                const email = document.getElementById('accountEmailInput').value;
                const phone = document.getElementById('accountPhoneInput').value;
                const address = document.getElementById('accountAddressInput').value;
                const password = document.getElementById('accountPasswordInput').value;
                const confirmPassword = document.getElementById('accountConfirmPasswordInput').value;
                
                if (password && password !== confirmPassword) {
                    showNotification('error', 'Password Mismatch', 'Passwords do not match');
                    return;
                }
                
                // Update user information
                currentUser.name = name;
                currentUser.email = email;
                currentUser.phone = phone;
                currentUser.address = address;
                
                localStorage.setItem('vahanBazarUser', JSON.stringify(currentUser));
                
                document.getElementById('accountName').textContent = name;
                document.getElementById('accountEmail').textContent = email;
                document.getElementById('userName').textContent = name;
                
                showNotification('success', 'Account Updated', 'Your account information has been updated successfully');
            });
            
            // Setup cash on delivery notes
            document.getElementById('sellPayment').addEventListener('change', function() {
                const note = document.getElementById('cashOnDeliveryNote_sell');
                if (this.value === 'cash') {
                    note.classList.remove('hidden');
                } else {
                    note.classList.add('hidden');
                }
            });
            
            document.getElementById('secondHandPayment').addEventListener('change', function() {
                const note = document.getElementById('cashOnDeliveryNote_secondHand');
                if (this.value === 'cash') {
                    note.classList.remove('hidden');
                } else {
                    note.classList.add('hidden');
                }
            });
            
            document.getElementById('partsPayment').addEventListener('change', function() {
                const note = document.getElementById('cashOnDeliveryNote_parts');
                if (this.value === 'cash') {
                    note.classList.remove('hidden');
                } else {
                    note.classList.add('hidden');
                }
            });
            
            document.getElementById('buyerPayment').addEventListener('change', function() {
                const note = document.getElementById('cashOnDeliveryNote_buyer');
                if (this.value === 'cash') {
                    note.classList.remove('hidden');
                } else {
                    note.classList.add('hidden');
                }
            });
        });

        // Generate referral code
        function generateReferralCode() {
            if (!currentUser.referralCode) {
                // Generate referral code based on user ID and random string
                const userId = currentUser.email.split('@')[0];
                const randomStr = Math.random().toString(36).substring(2, 5).toUpperCase();
                referralCode = `VB${userId.substring(0, 3)}${randomStr}`;
                
                // Update user with referral code
                currentUser.referralCode = referralCode;
                localStorage.setItem('vahanBazarUser', JSON.stringify(currentUser));
                
                // Update referral code display
                document.getElementById('referralCode').textContent = referralCode;
            } else {
                referralCode = currentUser.referralCode;
                document.getElementById('referralCode').textContent = referralCode;
            }
        }

        // Copy referral code
        function copyReferralCode() {
            navigator.clipboard.writeText(referralCode).then(function() {
                showNotification('success', 'Copied!', 'Referral code copied to clipboard');
            }).catch(function() {
                showNotification('error', 'Failed', 'Unable to copy referral code');
            });
        }

        // Apply offer
        function applyOffer(offerCode) {
            const offer = offers.find(o => o.code === offerCode);
            if (offer) {
                showNotification('success', 'Offer Applied', `${offer.title} has been applied to your cart`);
                // In a real app, this would apply the offer to the cart
            }
        }

        // Apply card offer
        function applyCardOffer(offerCode) {
            const offer = cardOffers.find(o => o.code === offerCode);
            if (offer) {
                showNotification('success', 'Card Offer Applied', `${offer.title} has been applied to your cart`);
                // In a real app, this would apply the offer to the cart
            }
        }

        // Render coupons
        function renderCoupons() {
            const couponGrid = document.getElementById('couponGrid');
            couponGrid.innerHTML = '';
            
            if (coupons.length === 0) {
                couponGrid.innerHTML = '<p class="text-center text-gray-500 py-8">No coupons available</p>';
                return;
            }
            
            coupons.forEach(coupon => {
                const couponCard = document.createElement('div');
                couponCard.className = 'coupon-card';
                
                couponCard.innerHTML = `
                    <div class="coupon-value">₹${coupon.value}</div>
                    <div class="coupon-description">${coupon.description}</div>
                    <div class="coupon-code">${coupon.code}</div>
                    <div class="coupon-validity">Valid until: ${coupon.validity}</div>
                    <button class="coupon-btn" onclick="applyCoupon('${coupon.code}')">Apply</button>
                `;
                
                couponGrid.appendChild(couponCard);
            });
        }

        // Apply coupon
        function applyCoupon(code) {
            const coupon = coupons.find(c => c.code === code);
            if (coupon) {
                appliedCoupon = coupon;
                document.getElementById('appliedCouponContainer').classList.remove('hidden');
                document.getElementById('appliedCouponCode').textContent = coupon.code;
                updateCheckoutTotal();
                showNotification('success', 'Coupon Applied', `${coupon.description}`);
            } else {
                showNotification('error', 'Invalid Coupon', 'This coupon code is invalid or expired');
            }
        }

        // Remove coupon
        function removeCoupon() {
            appliedCoupon = null;
            document.getElementById('appliedCouponContainer').classList.add('hidden');
            document.getElementById('couponInput').value = '';
            updateCheckoutTotal();
        }

        // Update checkout total with coupon
        function updateCheckoutTotal() {
            const checkoutModal = document.getElementById('checkoutModal');
            const subtotal = parseFloat(checkoutModal.getAttribute('data-subtotal') || 0);
            const shipping = parseFloat(checkoutModal.getAttribute('data-shipping') || 0);
            const tax = parseFloat(checkoutModal.getAttribute('data-tax') || 0);
            
            let discount = 0;
            if (appliedCoupon) {
                if (appliedCoupon.type === 'fixed') {
                    discount = appliedCoupon.value;
                } else if (appliedCoupon.type === 'percentage') {
                    discount = subtotal * (appliedCoupon.value / 100);
                }
            }
            
            const total = subtotal + shipping + tax - discount;
            
            document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
            document.getElementById('checkoutShipping').textContent = `₹${shipping.toLocaleString()}`;
            document.getElementById('checkoutTax').textContent = `₹${tax.toFixed(2)}`;
            
            if (discount > 0) {
                document.getElementById('discountRow').style.display = 'flex';
                document.getElementById('checkoutDiscount').textContent = `-₹${discount.toFixed(2)}`;
            } else {
                document.getElementById('discountRow').style.display = 'none';
            }
            
            document.getElementById('checkoutTotal').textContent = `₹${total.toFixed(2)}`;
            checkoutModal.setAttribute('data-total', total);
        }

        // Show PPF form
        function showPPFForm() {
            document.getElementById('ppfModal').classList.remove('hidden');
        }

        // Close PPF modal
        function closePPFModal() {
            document.getElementById('ppfModal').classList.add('hidden');
            document.getElementById('ppfName').value = '';
            document.getElementById('ppfPhone').value = '';
            document.getElementById('ppfEmail').value = '';
            document.getElementById('ppfAmount').value = '';
            document.getElementById('ppfPayment').value = '';
        }

        // Invest in PPF
        function investPPF(event) {
            event.preventDefault();
            
            const name = document.getElementById('ppfName').value;
            const amount = document.getElementById('ppfAmount').value;
            const payment = document.getElementById('ppfPayment').value;
            
            showNotification('success', 'PPF Successful', `Thank you ${name}! Your PPF of ₹${amount} has been processed successfully. Payment method: ${payment}.`);
            closePPFModal();
        }

        // Show notifications
        function showNotifications() {
            const notifications = [
                {
                    title: 'Special Offer',
                    message: 'Get 15% discount on all new bikes this festive season!',
                    time: '2 hours ago'
                },
                {
                    title: 'Referral Bonus',
                    message: 'You earned ₹500 coupon for referring a friend!',
                    time: '1 day ago'
                },
                {
                    title: 'New Launch',
                    message: 'Royal Enfield Hunter 350 launching soon!',
                    time: '2 days ago'
                }
            ];
            
            let notificationHtml = '<div class="space-y-4">';
            notifications.forEach(notification => {
                notificationHtml += `
                    <div class="bg-gray-800 p-4 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-semibold text-gray-100">${notification.title}</h4>
                            <span class="text-xs text-gray-400">${notification.time}</span>
                        </div>
                        <p class="text-sm text-gray-300">${notification.message}</p>
                    </div>
                `;
            });
            notificationHtml += '</div>';
            
            showNotification('success', 'Notifications', notificationHtml);
        }

        // Populate brand filter
        function populateBrandFilter() {
            const brands = [...new Set(vehicles.map(v => v.brand))];
            const brandFilter = document.getElementById('brandFilter');
            
            brands.forEach(brand => {
                const option = document.createElement('option');
                option.value = brand;
                option.textContent = brand;
                brandFilter.appendChild(option);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search and filters
            document.getElementById('searchInput').addEventListener('input', applyFilters);
            document.getElementById('brandFilter').addEventListener('change', applyFilters);
            document.getElementById('typeFilter').addEventListener('change', applyFilters);
            document.getElementById('fuelFilter').addEventListener('change', applyFilters);
            
            // Price range
            document.getElementById('minPrice').addEventListener('input', function() {
                document.getElementById('minPriceValue').textContent = this.value;
                applyFilters();
            });
            
            document.getElementById('maxPrice').addEventListener('input', function() {
                document.getElementById('maxPriceValue').textContent = this.value;
                applyFilters();
            });
            
            // EMI Calculator
            document.getElementById('loanAmount').addEventListener('input', function() {
                document.getElementById('loanAmountValue').textContent = this.value;
                updateCalculators();
            });
            
            document.getElementById('interestRate').addEventListener('input', function() {
                document.getElementById('interestRateValue').textContent = this.value;
                updateCalculators();
            });
            
            document.getElementById('loanTenure').addEventListener('input', function() {
                document.getElementById('loanTenureValue').textContent = this.value;
                updateCalculators();
            });
        }

        // Auth Functions
        function showLogin() {
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('signupForm').classList.add('hidden');
        }

        function showSignup() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('signupForm').classList.remove('hidden');
        }

        function login() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation (in a real app, this would be a server request)
            if (email && password) {
                const user = {
                    name: email.split('@')[0],
                    email: email,
                    phone: '+91 9876543210',
                    address: '123 MG Road, Bangalore'
                };
                
                currentUser = user;
                localStorage.setItem('vahanBazarUser', JSON.stringify(user));
                
                document.getElementById('authSection').style.display = 'none';
                document.getElementById('mainApp').style.display = 'block';
                document.getElementById('userName').textContent = user.name;
                
                // Update account information
                document.getElementById('accountName').textContent = user.name;
                document.getElementById('accountEmail').textContent = user.email;
                document.getElementById('accountNameInput').value = user.name;
                document.getElementById('accountEmailInput').value = user.email;
                document.getElementById('accountPhoneInput').value = user.phone;
                document.getElementById('accountAddressInput').value = user.address;
                
                // Generate referral code
                generateReferralCode();
                
                showNotification('success', 'Login Successful', `Welcome back, ${user.name}!`);
            } else {
                showNotification('error', 'Login Failed', 'Please enter valid credentials');
            }
        }

        function signup() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('signupPhone').value;
            const referralCode = document.getElementById('signupReferralCode').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Simple validation (in a real app, this would be a server request)
            if (name && email && phone && password && password === confirmPassword && agreeTerms) {
                const user = {
                    name,
                    email,
                    phone,
                    address: '123 MG Road, Bangalore'
                };
                
                currentUser = user;
                localStorage.setItem('vahanBazarUser', JSON.stringify(user));
                
                document.getElementById('authSection').style.display = 'none';
                document.getElementById('mainApp').style.display = 'block';
                document.getElementById('userName').textContent = user.name;
                
                // Update account information
                document.getElementById('accountName').textContent = user.name;
                document.getElementById('accountEmail').textContent = user.email;
                document.getElementById('accountNameInput').value = user.name;
                document.getElementById('accountEmailInput').value = user.email;
                document.getElementById('accountPhoneInput').value = user.phone;
                document.getElementById('accountAddressInput').value = user.address;
                
                // Generate referral code
                generateReferralCode();
                
                // Check if referral code is valid and issue coupon to referrer
                if (referralCode) {
                    // In a real app, this would be validated on the server
                    // For demo purposes, we'll assume it's valid
                    const referrerCoupon = {
                        code: 'REF500',
                        value: 500,
                        type: 'fixed',
                        description: '₹500 off on purchases above ₹500',
                        validity: '31st Dec 2024'
                    };
                    
                    // Add coupon to referrer's account (in a real app, this would be done on the server)
                    // For demo purposes, we'll just show a notification
                    showNotification('success', 'Referral Successful', `You've been referred by ${referralCode}. A ₹500 coupon has been issued to the referrer.`);
                }
                
                showNotification('success', 'Account Created', `Welcome to Vahan Bazar, ${name}!`);
            } else {
                showNotification('error', 'Signup Failed', 'Please fill all fields correctly');
            }
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('vahanBazarUser');
            
            document.getElementById('authSection').style.display = 'flex';
            document.getElementById('mainApp').style.display = 'none';
            
            // Reset forms
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('signupName').value = '';
            document.getElementById('signupEmail').value = '';
            document.getElementById('signupPhone').value = '';
            document.getElementById('signupReferralCode').value = '';
            document.getElementById('signupPassword').value = '';
            document.getElementById('signupConfirmPassword').value = '';
            document.getElementById('agreeTerms').checked = false;
            
            showNotification('success', 'Logged Out', 'You have been logged out successfully');
        }

        // Show section
        function showSection(section) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(`${section}-section`).classList.add('active');
            currentSection = section;
            
            // Show/hide hero section based on section
            const heroSection = document.getElementById('heroSection');
            if (section === 'vehicles') {
                heroSection.style.display = 'block';
            } else {
                heroSection.style.display = 'none';
            }
            
            // Show/hide instruction section based on section
            const instructionSection = document.getElementById('instruction-section');
            if (section === 'vehicles') {
                instructionSection.style.display = 'block';
            } else {
                instructionSection.style.display = 'none';
            }
            
            // Update nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-red-400', 'font-semibold');
                btn.classList.add('text-gray-300');
            });
            
            const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
                btn.textContent.toLowerCase().includes(section.replace('-', ' '))
            );
            
            if (activeBtn) {
                activeBtn.classList.remove('text-gray-300');
                activeBtn.classList.add('text-red-400', 'font-semibold');
            }
        }

        // Apply filters
        function applyFilters() {
            const search = document.getElementById('searchInput').value.toLowerCase();
            const brand = document.getElementById('brandFilter').value;
            const type = document.getElementById('typeFilter').value;
            const fuel = document.getElementById('fuelFilter').value;
            const minPrice = parseInt(document.getElementById('minPrice').value);
            const maxPrice = parseInt(document.getElementById('maxPrice').value);
            
            filteredVehicles = vehicles.filter(vehicle => {
                const matchesSearch = vehicle.name.toLowerCase().includes(search) || 
                                    vehicle.brand.toLowerCase().includes(search);
                const matchesBrand = !brand || vehicle.brand === brand;
                const matchesType = !type || vehicle.type === type;
                const matchesFuel = !fuel || vehicle.fuelType === fuel;
                const matchesPrice = vehicle.price >= minPrice && vehicle.price <= maxPrice;
                
                return matchesSearch && matchesBrand && matchesType && matchesFuel && matchesPrice;
            });
            
            renderVehicles();
        }

        // Reset filters
        function resetFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('brandFilter').value = '';
            document.getElementById('typeFilter').value = '';
            document.getElementById('fuelFilter').value = '';
            document.getElementById('minPrice').value = 0;
            document.getElementById('maxPrice').value = 500000;
            document.getElementById('minPriceValue').textContent = '0';
            document.getElementById('maxPriceValue').textContent = '500000';
            
            applyFilters();
        }

        // Set active tab
        function setActiveTab(tab) {
            activeTab = tab;
            
            // Update tab styles
            document.querySelectorAll('[id$="Tab"]').forEach(el => {
                el.classList.remove('tab-active');
            });
            document.getElementById(tab + 'Tab').classList.add('tab-active');
            
            renderVehicles();
        }

        // Render vehicles
        function renderVehicles() {
            const vehicleGrid = document.getElementById('vehicleGrid');
            vehicleGrid.innerHTML = '';
            
            const tabFilteredVehicles = filteredVehicles.filter(vehicle => {
                if (activeTab === 'bikes') return vehicle.type === 'bike';
                if (activeTab === 'scooters') return vehicle.type === 'scooter';
                if (activeTab === 'evs') return vehicle.type === 'ev';
                return true;
            });
            
            tabFilteredVehicles.forEach(vehicle => {
                const card = document.createElement('div');
                card.className = 'vehicle-card';
                
                card.innerHTML = `
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-48 object-cover cursor-pointer" onclick="showVehicleDetail(${vehicle.id})">
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-gray-100 cursor-pointer" onclick="showVehicleDetail(${vehicle.id})">${vehicle.name}</h3>
                                <p class="text-gray-400">${vehicle.brand}</p>
                            </div>
                            <span class="bg-red-900 text-red-300 px-2 py-1 rounded-md text-sm font-semibold">
                                ₹${vehicle.price.toLocaleString()}
                            </span>
                        </div>
                        
                        <div class="flex space-x-2 mb-4">
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${vehicle.type.toUpperCase()}
                            </span>
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${vehicle.fuelType.toUpperCase()}
                            </span>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-2 mb-4">
                            <div class="text-sm">
                                <p class="text-gray-500">Engine</p>
                                <p class="font-medium text-gray-200">${vehicle.specs.engine}</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-500">Mileage</p>
                                <p class="font-medium text-gray-200">${vehicle.specs.mileage}</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-500">Top Speed</p>
                                <p class="font-medium text-gray-200">${vehicle.specs.topSpeed}</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-500">Weight</p>
                                <p class="font-medium text-gray-200">${vehicle.specs.weight}</p>
                            </div>
                        </div>
                        
                        <div class="flex space-x-2 mb-2">
                            <button onclick="addToComparison(${vehicle.id})" 
                                class="btn btn-info btn-sm">
                                Compare
                            </button>
                            <button onclick="showTestRideForm(${vehicle.id})" 
                                class="btn btn-success btn-sm">
                                Test Ride
                            </button>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="addToCart('vehicle', ${vehicle.id})" 
                                class="btn btn-warning btn-sm">
                                Add to Cart
                            </button>
                            <button onclick="showPurchaseForm('vehicle', ${vehicle.id})" 
                                class="btn btn-primary btn-sm">
                                Buy Now
                            </button>
                        </div>
                        
                        <div class="mt-2 text-center">
                            <button onclick="showReturnModal()" class="text-red-400 text-sm hover:text-red-300">
                                30-Day Return/Replacement Policy
                            </button>
                        </div>
                        
                        <!-- Free petrol offer for new bikes -->
                        <div class="free-petrol-offer mt-3">
                            <div class="free-petrol-icon">
                                <i class="fas fa-gas-pump"></i>
                            </div>
                            <div class="free-petrol-content">
                                <h4 class="free-petrol-title">Free Petrol Offer</h4>
                                <p class="free-petrol-description">Get 3 liters of petrol free with this new bike purchase!</p>
                            </div>
                        </div>
                    </div>
                `;
                
                vehicleGrid.appendChild(card);
            });
        }

        // Render second hand bikes
        function renderSecondHandBikes() {
            const secondHandGrid = document.getElementById('secondHandGrid');
            secondHandGrid.innerHTML = '';
            
            secondHandBikes.forEach(bike => {
                const card = document.createElement('div');
                card.className = 'vehicle-card';
                
                card.innerHTML = `
                    <img src="${bike.image}" alt="${bike.name}" class="w-full h-48 object-cover cursor-pointer" onclick="showSecondHandDetail(${bike.id})">
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-gray-100 cursor-pointer" onclick="showSecondHandDetail(${bike.id})">${bike.name}</h3>
                                <p class="text-gray-400">${bike.brand}</p>
                            </div>
                            <span class="bg-green-900 text-green-300 px-2 py-1 rounded-md text-sm font-semibold">
                                ₹${bike.price.toLocaleString()}
                            </span>
                        </div>
                        
                        <div class="flex space-x-2 mb-4">
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${bike.type.toUpperCase()}
                            </span>
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${bike.year} Model
                            </span>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-2 mb-4">
                            <div class="text-sm">
                                <p class="text-gray-500">Kilometers</p>
                                <p class="font-medium text-gray-200">${bike.kms.toLocaleString()} km</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-500">Owner</p>
                                <p class="font-medium text-gray-200">${bike.owner}</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-500">Location</p>
                                <p class="font-medium text-gray-200">${bike.location}</p>
                            </div>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="contactOwner('${bike.ownerPhone}', '${bike.ownerEmail}')" 
                                class="btn btn-info btn-sm">
                                Contact Owner
                            </button>
                            <button onclick="addToCart('second-hand', ${bike.id})" 
                                class="btn btn-warning btn-sm">
                                Add to Cart
                            </button>
                        </div>
                        
                        <div class="mt-2">
                            <button onclick="showPurchaseForm('second-hand', ${bike.id})" 
                                class="btn btn-success btn-block">
                                Buy Now
                            </button>
                        </div>
                    </div>
                `;
                
                secondHandGrid.appendChild(card);
            });
        }

        // Render bike parts
        function renderBikeParts() {
            const partsGrid = document.getElementById('partsGrid');
            partsGrid.innerHTML = '';
            
            bikeParts.forEach(part => {
                const card = document.createElement('div');
                card.className = 'vehicle-card';
                
                card.innerHTML = `
                    <img src="${part.image}" alt="${part.name}" class="w-full h-40 object-cover cursor-pointer" onclick="showPartDetail(${part.id})">
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h3 class="text-lg font-bold text-gray-100 cursor-pointer" onclick="showPartDetail(${part.id})">${part.name}</h3>
                                <p class="text-gray-400">${part.brand}</p>
                            </div>
                            <span class="bg-red-900 text-red-300 px-2 py-1 rounded-md text-sm font-semibold">
                                ₹${part.price.toLocaleString()}
                            </span>
                        </div>
                        
                        <div class="flex space-x-2 mb-3">
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${part.category.toUpperCase()}
                            </span>
                            <span class="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                                ${part.condition.toUpperCase()}
                            </span>
                        </div>
                        
                        <div class="text-sm mb-3">
                            <p class="text-gray-500">Compatible with</p>
                            <p class="font-medium text-gray-200">${part.compatible}</p>
                        </div>
                        
                        <div class="text-sm mb-4">
                            <p class="text-gray-500">Seller</p>
                            <p class="font-medium text-gray-200">${part.seller}</p>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="addToCart('part', ${part.id})" 
                                class="btn btn-warning btn-sm">
                                Add to Cart
                            </button>
                            <button onclick="showPurchaseForm('part', ${part.id})" 
                                class="btn btn-purple btn-sm">
                                Buy Now
                            </button>
                        </div>
                    </div>
                `;
                
                partsGrid.appendChild(card);
            });
        }

        // Render upcoming launches
        function renderUpcomingLaunches() {
            const upcomingGrid = document.getElementById('upcomingGrid');
            upcomingGrid.innerHTML = '';
            
            upcomingLaunches.forEach(launch => {
                const card = document.createElement('div');
                card.className = 'upcoming-card';
                
                card.innerHTML = `
                    <img src="${launch.image}" alt="${launch.name}" class="upcoming-image">
                    <div class="upcoming-content">
                        <h3 class="upcoming-title">${launch.name}</h3>
                        <p class="upcoming-brand">${launch.brand}</p>
                        
                        <div class="upcoming-details">
                            <div class="upcoming-detail">
                                <div class="upcoming-detail-label">Expected Price</div>
                                <div class="upcoming-detail-value">${launch.expectedPrice}</div>
                            </div>
                            <div class="upcoming-detail">
                                <div class="upcoming-detail-label">Launch Date</div>
                                <div class="upcoming-detail-value">${launch.launchDate}</div>
                            </div>
                        </div>
                        
                        <button onclick="notifyMe(${launch.id})" class="upcoming-btn">Notify Me</button>
                    </div>
                `;
                
                upcomingGrid.appendChild(card);
            });
        }

        // Render showrooms
        function renderShowrooms() {
            const showroomGrid = document.getElementById('showroomGrid');
            showroomGrid.innerHTML = '';
            
            showrooms.forEach(showroom => {
                const card = document.createElement('div');
                card.className = 'bg-gray-900 rounded-2xl shadow-md p-6';
                
                card.innerHTML = `
                    <h3 class="text-xl font-bold text-gray-100 mb-2">${showroom.name}</h3>
                    <p class="text-gray-400 mb-4">${showroom.address}</p>
                    
                    <div class="space-y-2 mb-4">
                        <p class="text-sm text-gray-300">
                            <span class="font-medium">Phone:</span> ${showroom.phone}
                        </p>
                        <p class="text-sm text-gray-300">
                            <span class="font-medium">Email:</span> ${showroom.email}
                        </p>
                        <p class="text-sm text-gray-300">
                            <span class="font-medium">Hours:</span> ${showroom.hours}
                        </p>
                    </div>
                    
                    <button onclick="getDirections(${showroom.id})" class="btn btn-primary btn-block">Get Directions</button>
                `;
                
                showroomGrid.appendChild(card);
            });
        }

        // Render orders
        function renderOrders() {
            const ordersList = document.getElementById('ordersList');
            ordersList.innerHTML = '';
            
            if (orders.length === 0) {
                ordersList.innerHTML = `
                    <div class="text-center py-12">
                        <i class="fas fa-shopping-bag text-gray-500 text-4xl mb-4"></i>
                        <h3 class="text-xl font-semibold text-gray-300 mb-2">No orders yet</h3>
                        <p class="text-gray-400">You haven't placed any orders yet. Start shopping now!</p>
                    </div>
                `;
                return;
            }
            
            orders.forEach(order => {
                const orderCard = document.createElement('div');
                orderCard.className = 'order-card';
                
                let statusClass = '';
                if (order.status === 'pending') statusClass = 'pending';
                else if (order.status === 'processing') statusClass = 'processing';
                else if (order.status === 'delivered') statusClass = 'delivered';
                else if (order.status === 'cancelled') statusClass = 'cancelled';
                
                // Create order details HTML
                let orderDetailsHTML = '';
                if (order.items && order.items.length > 0) {
                    order.items.forEach(item => {
                        orderDetailsHTML += `
                            <div class="flex items-center mb-2">
                                <img src="${item.item.image}" alt="${item.item.name}" class="w-16 h-16 object-contain mr-3">
                                <div>
                                    <h5 class="font-medium text-gray-100">${item.item.name}</h5>
                                    <p class="text-sm text-gray-400">${item.item.brand || item.item.seller}</p>
                                    <p class="text-sm text-gray-400">Qty: ${item.quantity}</p>
                                </div>
                            </div>
                        `;
                    });
                }
                
                orderCard.innerHTML = `
                    <div class="order-header">
                        <div class="order-id">Order #${order.id}</div>
                        <div class="order-status ${statusClass}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
                    </div>
                    
                    <div class="order-details">
                        ${orderDetailsHTML}
                    </div>
                    
                    <div class="order-footer">
                        <div class="order-price">₹${order.totalAmount ? order.totalAmount.toLocaleString() : '0'}</div>
                        <div class="order-actions">
                            <button class="order-btn view" onclick="viewOrderDetails(${order.id})">View</button>
                            ${order.status === 'pending' ? `<button class="order-btn cancel" onclick="cancelOrder(${order.id})">Cancel</button>` : ''}
                        </div>
                    </div>
                `;
                
                ordersList.appendChild(orderCard);
            });
        }

        // Show vehicle detail modal
        function showVehicleDetail(vehicleId) {
            const vehicle = vehicles.find(v => v.id === vehicleId);
            if (vehicle) {
                currentVehicleDetail = vehicle;
                
                document.getElementById('vehicleDetailImage').src = vehicle.image;
                document.getElementById('vehicleDetailTitle').textContent = vehicle.name;
                document.getElementById('vehicleDetailBrand').textContent = vehicle.brand;
                document.getElementById('vehicleDetailPrice').textContent = `₹${vehicle.price.toLocaleString()}`;
                
                // Populate specs
                const specsContainer = document.getElementById('vehicleDetailSpecs');
                specsContainer.innerHTML = `
                    <div class="spec-item">
                        <div class="spec-label">Engine</div>
                        <div class="spec-value">${vehicle.specs.engine}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Mileage</div>
                        <div class="spec-value">${vehicle.specs.mileage}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Top Speed</div>
                        <div class="spec-value">${vehicle.specs.topSpeed}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Weight</div>
                        <div class="spec-value">${vehicle.specs.weight}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Fuel Type</div>
                        <div class="spec-value">${vehicle.fuelType.charAt(0).toUpperCase() + vehicle.fuelType.slice(1)}</div>
                    </div>
                `;
                
                // Populate features
                const featuresList = document.getElementById('vehicleDetailFeaturesList');
                featuresList.innerHTML = '';
                vehicle.specs.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Add description
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'vehicle-detail-description';
                descriptionDiv.innerHTML = `
                    <h3 class="features-title">Description</h3>
                    <p>${vehicle.description}</p>
                `;
                document.querySelector('.vehicle-detail-features').after(descriptionDiv);
                
                // Add free petrol offer
                const freePetrolDiv = document.createElement('div');
                freePetrolDiv.className = 'free-petrol-offer mt-4';
                freePetrolDiv.innerHTML = `
                    <div class="free-petrol-icon">
                        <i class="fas fa-gas-pump"></i>
                    </div>
                    <div class="free-petrol-content">
                        <h4 class="free-petrol-title">Free Petrol Offer</h4>
                        <p class="free-petrol-description">Get 3 liters of petrol free with this new bike purchase!</p>
                    </div>
                `;
                document.querySelector('.vehicle-detail-description').after(freePetrolDiv);
                
                document.getElementById('vehicleDetailModal').style.display = 'flex';
            }
        }

        function closeVehicleDetailModal() {
            document.getElementById('vehicleDetailModal').style.display = 'none';
            currentVehicleDetail = null;
        }

        // Show second hand detail modal
        function showSecondHandDetail(bikeId) {
            const bike = secondHandBikes.find(b => b.id === bikeId);
            if (bike) {
                currentVehicleDetail = bike;
                
                document.getElementById('vehicleDetailImage').src = bike.image;
                document.getElementById('vehicleDetailTitle').textContent = bike.name;
                document.getElementById('vehicleDetailBrand').textContent = bike.brand;
                document.getElementById('vehicleDetailPrice').textContent = `₹${bike.price.toLocaleString()}`;
                
                // Populate specs
                const specsContainer = document.getElementById('vehicleDetailSpecs');
                specsContainer.innerHTML = `
                    <div class="spec-item">
                        <div class="spec-label">Year</div>
                        <div class="spec-value">${bike.year}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Kilometers</div>
                        <div class="spec-value">${bike.kms.toLocaleString()} km</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Owner</div>
                        <div class="spec-value">${bike.owner}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Location</div>
                        <div class="spec-value">${bike.location}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Type</div>
                        <div class="spec-value">${bike.type.charAt(0).toUpperCase() + bike.type.slice(1)}</div>
                    </div>
                `;
                
                // Populate features
                const featuresList = document.getElementById('vehicleDetailFeaturesList');
                featuresList.innerHTML = '';
                
                // Add description
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'vehicle-detail-description';
                descriptionDiv.innerHTML = `
                    <h3 class="features-title">Description</h3>
                    <p>${bike.description}</p>
                `;
                document.querySelector('.vehicle-detail-features').after(descriptionDiv);
                
                document.getElementById('vehicleDetailModal').style.display = 'flex';
            }
        }

        // Show part detail modal
        function showPartDetail(partId) {
            const part = bikeParts.find(p => p.id === partId);
            if (part) {
                currentVehicleDetail = part;
                
                document.getElementById('vehicleDetailImage').src = part.image;
                document.getElementById('vehicleDetailTitle').textContent = part.name;
                document.getElementById('vehicleDetailBrand').textContent = part.brand;
                document.getElementById('vehicleDetailPrice').textContent = `₹${part.price.toLocaleString()}`;
                
                // Populate specs
                const specsContainer = document.getElementById('vehicleDetailSpecs');
                specsContainer.innerHTML = `
                    <div class="spec-item">
                        <div class="spec-label">Category</div>
                        <div class="spec-value">${part.category.charAt(0).toUpperCase() + part.category.slice(1)}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Condition</div>
                        <div class="spec-value">${part.condition.charAt(0).toUpperCase() + part.condition.slice(1)}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Compatible</div>
                        <div class="spec-value">${part.compatible}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Seller</div>
                        <div class="spec-value">${part.seller}</div>
                    </div>
                `;
                
                // Populate features
                const featuresList = document.getElementById('vehicleDetailFeaturesList');
                featuresList.innerHTML = '';
                
                // Add description
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'vehicle-detail-description';
                descriptionDiv.innerHTML = `
                    <h3 class="features-title">Description</h3>
                    <p>${part.description}</p>
                `;
                document.querySelector('.vehicle-detail-features').after(descriptionDiv);
                
                document.getElementById('vehicleDetailModal').style.display = 'flex';
            }
        }

        // Add to comparison
        function addToComparison(vehicleId) {
            const vehicle = vehicles.find(v => v.id === vehicleId);
            
            if (selectedVehicles.length < 3 && !selectedVehicles.some(v => v.id === vehicleId)) {
                selectedVehicles.push(vehicle);
                renderComparison();
                showNotification('success', 'Added to Comparison', `${vehicle.name} has been added to comparison`);
            } else if (selectedVehicles.length >= 3) {
                showNotification('error', 'Comparison Limit', 'You can compare maximum 3 vehicles at a time');
            } else {
                showNotification('error', 'Already Added', `${vehicle.name} is already in comparison`);
            }
        }

        // Render comparison
        function renderComparison() {
            const comparisonSection = document.getElementById('comparisonSection');
            const comparisonTableBody = document.getElementById('comparisonTableBody');
            
            if (selectedVehicles.length === 0) {
                comparisonSection.classList.add('hidden');
                return;
            }
            
            comparisonSection.classList.remove('hidden');
            
            // Clear previous content
            comparisonTableBody.innerHTML = '';
            
            // Create header row
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = '<th class="px-4 py-3 bg-gray-800 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Feature</th>';
            
            selectedVehicles.forEach(vehicle => {
                headerRow.innerHTML += `
                    <th class="px-4 py-3 bg-gray-800 text-center">
                        <div class="flex flex-col items-center">
                            <img src="${vehicle.image}" alt="${vehicle.name}" class="w-20 h-20 object-contain mb-2">
                            <h3 class="font-bold text-gray-100">${vehicle.name}</h3>
                            <p class="text-sm text-gray-400">${vehicle.brand}</p>
                            <p class="text-red-400 font-semibold">₹${vehicle.price.toLocaleString()}</p>
                            <button onclick="removeFromComparison(${vehicle.id})" class="mt-2 text-red-400 text-sm hover:text-red-300">
                                Remove
                            </button>
                        </div>
                    </th>
                `;
            });
            
            comparisonTableBody.appendChild(headerRow);
            
            // Create feature rows
            const features = [
                { name: 'Type', key: 'type' },
                { name: 'Fuel Type', key: 'fuelType' },
                { name: 'Engine', key: 'engine', nested: true },
                { name: 'Mileage', key: 'mileage', nested: true },
                { name: 'Top Speed', key: 'topSpeed', nested: true },
                { name: 'Weight', key: 'weight', nested: true },
                { name: 'Features', key: 'features', nested: true, isList: true }
            ];
            
            features.forEach(feature => {
                const row = document.createElement('tr');
                row.innerHTML = `<td class="px-4 py-3 font-medium text-gray-100">${feature.name}</td>`;
                
                selectedVehicles.forEach(vehicle => {
                    let value;
                    
                    if (feature.nested) {
                        if (feature.isList) {
                            value = vehicle.specs[feature.key].map(f => `<li class="text-sm">${f}</li>`).join('');
                            value = `<ul class="list-disc list-inside text-left">${value}</ul>`;
                        } else {
                            value = vehicle.specs[feature.key];
                        }
                    } else {
                        value = vehicle[feature.key];
                    }
                    
                    row.innerHTML += `<td class="px-4 py-3 text-center text-gray-300">${value}</td>`;
                });
                
                comparisonTableBody.appendChild(row);
            });
        }

        // Remove from comparison
        function removeFromComparison(vehicleId) {
            selectedVehicles = selectedVehicles.filter(v => v.id !== vehicleId);
            renderComparison();
            showNotification('success', 'Removed from Comparison', 'Vehicle has been removed from comparison');
        }

        // Clear comparison
        function clearComparison() {
            selectedVehicles = [];
            renderComparison();
            showNotification('success', 'Comparison Cleared', 'All vehicles have been removed from comparison');
        }

        // Update calculators
        function updateCalculators() {
            // EMI Calculator
            const loanAmount = parseFloat(document.getElementById('loanAmount').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value);
            const loanTenure = parseInt(document.getElementById('loanTenure').value);
            
            const monthlyInterestRate = interestRate / 12 / 100;
            const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / 
                       (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
            
            const totalAmount = emi * loanTenure;
            const totalInterest = totalAmount - loanAmount;
            
            document.getElementById('emiResult').textContent = emi.toFixed(2);
            document.getElementById('principalAmount').textContent = loanAmount.toLocaleString();
            document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
            document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
        }

        // Cart Functions
        function addToCart(type, id) {
            let item;
            
            if (type === 'vehicle') {
                item = vehicles.find(v => v.id === id);
            } else if (type === 'second-hand') {
                item = secondHandBikes.find(b => b.id === id);
            } else if (type === 'part') {
                item = bikeParts.find(p => p.id === id);
            }
            
            if (item) {
                // Check if item is already in cart
                const existingItem = cart.find(cartItem => 
                    cartItem.type === type && cartItem.item.id === id
                );
                
                if (existingItem) {
                    showNotification('error', 'Already in Cart', 'This item is already in your cart');
                    return;
                }
                
                cart.push({ type, item, quantity: 1 });
                updateCartCount();
                showNotification('success', 'Added to Cart', `${item.name} has been added to your cart`);
            }
        }

        function addToCartFromDetail() {
            if (currentVehicleDetail) {
                let type;
                
                if (currentVehicleDetail.specs) {
                    type = 'vehicle';
                } else if (currentVehicleDetail.year) {
                    type = 'second-hand';
                } else if (currentVehicleDetail.category) {
                    type = 'part';
                }
                
                addToCart(type, currentVehicleDetail.id);
                closeVehicleDetailModal();
            }
        }

        function updateCartCount() {
            const cartCount = document.getElementById('cartCount');
            cartCount.textContent = cart.length;
        }

        function showCart() {
            const cartModal = document.getElementById('cartModal');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            cartModal.classList.remove('hidden');
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-center text-gray-500 py-8">Your cart is empty</p>';
                cartTotal.textContent = '₹0';
                return;
            }
            
            let total = 0;
            
            cart.forEach((cartItem, index) => {
                const { type, item, quantity } = cartItem;
                const itemTotal = item.price * quantity;
                total += itemTotal;
                
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'flex items-center p-4 border-b border-gray-700';
                
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain mr-4">
                    <div class="flex-grow">
                        <h4 class="font-medium text-gray-100">${item.name}</h4>
                        <p class="text-sm text-gray-400">${item.brand || item.seller}</p>
                        <p class="text-sm text-gray-400">₹${item.price.toLocaleString()} × ${quantity}</p>
                    </div>
                    <div class="flex flex-col items-end">
                        <p class="font-semibold text-gray-100">₹${itemTotal.toLocaleString()}</p>
                        <div class="flex mt-2">
                            <button onclick="decreaseQuantity(${index})" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="mx-2 text-gray-300">${quantity}</span>
                            <button onclick="increaseQuantity(${index})" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                        <button onclick="removeFromCart(${index})" class="mt-2 text-red-400 text-sm hover:text-red-300">
                            Remove
                        </button>
                    </div>
                `;
                
                cartItems.appendChild(cartItemDiv);
            });
            
            cartTotal.textContent = `₹${total.toLocaleString()}`;
        }

        function closeCart() {
            document.getElementById('cartModal').classList.add('hidden');
        }

        function increaseQuantity(index) {
            cart[index].quantity += 1;
            showCart();
        }

        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                showCart();
            }
        }

        function removeFromCart(index) {
            const item = cart[index];
            cart.splice(index, 1);
            updateCartCount();
            showCart();
            showNotification('success', 'Removed from Cart', `${item.item.name} has been removed from your cart`);
        }

        function clearCart() {
            cart = [];
            updateCartCount();
            showCart();
            showNotification('success', 'Cart Cleared', 'All items have been removed from your cart');
        }

        function checkout() {
            if (cart.length === 0) {
                showNotification('error', 'Empty Cart', 'Your cart is empty');
                return;
            }
            
            closeCart();
            showCheckoutModal();
        }

        // Checkout Functions
        function showCheckoutModal() {
            const checkoutModal = document.getElementById('checkoutModal');
            const checkoutItems = document.getElementById('checkoutItems');
            
            checkoutModal.classList.remove('hidden');
            checkoutItems.innerHTML = '';
            
            let subtotal = 0;
            
            cart.forEach(cartItem => {
                const { type, item, quantity } = cartItem;
                const itemTotal = item.price * quantity;
                subtotal += itemTotal;
                
                const checkoutItemDiv = document.createElement('div');
                checkoutItemDiv.className = 'flex items-center p-3 bg-gray-800 rounded-lg mb-3';
                
                checkoutItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain mr-3">
                    <div class="flex-grow">
                        <h5 class="font-medium text-gray-100">${item.name}</h5>
                        <p class="text-xs text-gray-400">${item.brand || item.seller}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-semibold text-gray-100">₹${itemTotal.toLocaleString()}</p>
                        <p class="text-xs text-gray-400">Qty: ${quantity}</p>
                    </div>
                `;
                
                checkoutItems.appendChild(checkoutItemDiv);
            });
            
            // Calculate totals
            const shipping = 50;
            const tax = subtotal * 0.05;
            const total = subtotal + shipping + tax;
            
            document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
            document.getElementById('checkoutShipping').textContent = `₹${shipping.toLocaleString()}`;
            document.getElementById('checkoutTax').textContent = `₹${tax.toFixed(2)}`;
            document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString()}`;
            
            // Store values for coupon calculation
            checkoutModal.setAttribute('data-subtotal', subtotal);
            checkoutModal.setAttribute('data-shipping', shipping);
            checkoutModal.setAttribute('data-tax', tax);
            checkoutModal.setAttribute('data-total', total);
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function nextCheckoutStep() {
            if (checkoutStep < 4) {
                checkoutStep++;
                updateCheckoutSteps();
            } else {
                completeCheckout();
            }
        }

        function previousCheckoutStep() {
            if (checkoutStep > 1) {
                checkoutStep--;
                updateCheckoutSteps();
            }
        }

        function updateCheckoutSteps() {
            const steps = document.querySelectorAll('.checkout-step');
            
            steps.forEach((step, index) => {
                const stepNumber = index + 1;
                
                if (stepNumber < checkoutStep) {
                    step.classList.add('completed');
                    step.classList.remove('active');
                } else if (stepNumber === checkoutStep) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            });
        }

        function calculateEMI() {
            const checkoutModal = document.getElementById('checkoutModal');
            const totalAmount = parseFloat(checkoutModal.getAttribute('data-total'));
            const tenure = parseInt(document.getElementById('checkoutLoanTenure').value);
            const downPayment = parseFloat(document.getElementById('checkoutDownPayment').value) || 0;
            const loanAmount = totalAmount - downPayment;
            const interestRate = 9.5; // Fixed interest rate for demo
            
            const monthlyInterestRate = interestRate / 12 / 100;
            const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) / 
                       (Math.pow(1 + monthlyInterestRate, tenure) - 1);
            
            const totalInterest = emi * tenure - loanAmount;
            const totalPayable = emi * tenure + downPayment;
            
            document.getElementById('monthlyEMI').textContent = emi.toFixed(2);
            document.getElementById('totalEMIInterest').textContent = totalInterest.toFixed(2);
            document.getElementById('totalEMIAmount').textContent = totalPayable.toFixed(2);
        }

        function calculateCashDetails() {
            const checkoutModal = document.getElementById('checkoutModal');
            const totalAmount = parseFloat(checkoutModal.getAttribute('data-total'));
            
            const advancePayment = totalAmount * 0.15;
            const remainingPayment = totalAmount - advancePayment;
            
            document.getElementById('advancePayment').textContent = advancePayment.toFixed(2);
            document.getElementById('remainingPayment').textContent = remainingPayment.toFixed(2);
        }

        function completeCheckout() {
            // Create order
            const checkoutModal = document.getElementById('checkoutModal');
            const totalAmount = parseFloat(checkoutModal.getAttribute('data-total'));
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            
            const order = {
                id: orders.length + 1,
                items: [...cart],
                date: new Date().toLocaleDateString(),
                status: 'pending',
                paymentMethod: paymentMethod,
                totalAmount: totalAmount
            };
            
            // Check if any new bikes are in the order
            const hasNewBike = cart.some(item => item.type === 'vehicle');
            
            orders.push(order);
            localStorage.setItem('vahanBazarOrders', JSON.stringify(orders));
            
            // Clear cart
            cart = [];
            updateCartCount();
            
            // Close checkout modal
            closeCheckoutModal();
            
            // Show success notification
            let message = `Your order #${order.id} has been placed successfully!`;
            
            if (hasNewBike) {
                message += " You'll get 3 liters of petrol free with your new bike purchase!";
            }
            
            showNotification('success', 'Order Placed', message);
            
            // Update orders display
            renderOrders();
            
            // Reset checkout step
            checkoutStep = 1;
        }

        // Order Functions
        function viewOrderDetails(orderId) {
            const order = orders.find(o => o.id === orderId);
            if (order) {
                showNotification('success', 'Order Details', `Order #${order.id}: ${order.status} - ${order.date}`);
            }
        }

        function cancelOrder(orderId) {
            const orderIndex = orders.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                orders[orderIndex].status = 'cancelled';
                localStorage.setItem('vahanBazarOrders', JSON.stringify(orders));
                renderOrders();
                showNotification('success', 'Order Cancelled', `Order #${orderId} has been cancelled`);
            }
        }

        // Show test ride form
        function showTestRideForm(vehicleId) {
            currentTestRideVehicleId = vehicleId;
            document.getElementById('testRideModal').classList.remove('hidden');
        }

        function showTestRideFromDetail() {
            if (currentVehicleDetail && currentVehicleDetail.specs) {
                showTestRideForm(currentVehicleDetail.id);
                closeVehicleDetailModal();
            }
        }

        // Close test ride modal
        function closeTestRideModal() {
            document.getElementById('testRideModal').classList.add('hidden');
            document.getElementById('testRideName').value = '';
            document.getElementById('testRidePhone').value = '';
            document.getElementById('testRideEmail').value = '';
            document.getElementById('testRideDate').value = '';
            document.getElementById('testRidePayment').value = '';
        }

        // Book test ride
        function bookTestRide(event) {
            event.preventDefault();
            
            const name = document.getElementById('testRideName').value;
            const payment = document.getElementById('testRidePayment').value;
            
            showNotification('success', 'Test Ride Booked', `Test ride booked successfully for ${name}! Payment method: ${payment}`);
            closeTestRideModal();
        }

        // Show sell form
        function showSellForm() {
            document.getElementById('sellModal').classList.remove('hidden');
        }

        // Close sell modal
        function closeSellModal() {
            document.getElementById('sellModal').classList.add('hidden');
            document.getElementById('sellName').value = '';
            document.getElementById('sellPhone').value = '';
            document.getElementById('sellEmail').value = '';
            document.getElementById('sellVehicleType').value = '';
            document.getElementById('sellBrand').value = '';
            document.getElementById('sellModel').value = '';
            document.getElementById('sellYear').value = '';
            document.getElementById('sellPrice').value = '';
            document.getElementById('sellLocation').value = '';
            document.getElementById('sellPayment').value = '';
            document.getElementById('sellPhotos').value = '';
            document.getElementById('sellDetails').value = '';
        }

        // Sell vehicle
        function sellVehicle(event) {
            event.preventDefault();
            
            const name = document.getElementById('sellName').value;
            const brand = document.getElementById('sellBrand').value;
            const model = document.getElementById('sellModel').value;
            const price = document.getElementById('sellPrice').value;
            const payment = document.getElementById('sellPayment').value;
            
            let message = `Thank you ${name}! Your ${brand} ${model} has been listed for sale at ₹${price}. Payment method: ${payment}.`;
            
            if (payment === 'cash') {
                message += ' 15% advance payment required.';
            }
            
            showNotification('success', 'Vehicle Listed', message);
            closeSellModal();
        }

        // Show fuel delivery form
        function showFuelDeliveryForm() {
            document.getElementById('fuelDeliveryModal').classList.remove('hidden');
        }

        // Close fuel delivery modal
        function closeFuelDeliveryModal() {
            document.getElementById('fuelDeliveryModal').classList.add('hidden');
            document.getElementById('fuelName').value = '';
            document.getElementById('fuelPhone').value = '';
            document.getElementById('fuelType').value = '';
            document.getElementById('fuelQuantity').value = '';
            document.getElementById('fuelLocation').value = '';
            document.getElementById('fuelPayment').value = '';
        }

        // Order fuel
        function orderFuel(event) {
            event.preventDefault();
            
            const name = document.getElementById('fuelName').value;
            const fuelType = document.getElementById('fuelType').value;
            const quantity = document.getElementById('fuelQuantity').value;
            const location = document.getElementById('fuelLocation').value;
            const payment = document.getElementById('fuelPayment').value;
            
            showNotification('success', 'Fuel Order Placed', `Fuel order placed successfully! ${quantity} liters of ${fuelType} will be delivered to ${location}. Payment method: ${payment}`);
            closeFuelDeliveryModal();
        }

        // Show mechanic service form
        function showMechanicServiceForm() {
            document.getElementById('mechanicServiceModal').classList.remove('hidden');
        }

        // Close mechanic service modal
        function closeMechanicServiceModal() {
            document.getElementById('mechanicServiceModal').classList.add('hidden');
            document.getElementById('mechanicName').value = '';
            document.getElementById('mechanicPhone').value = '';
            document.getElementById('mechanicServiceType').value = '';
            document.getElementById('mechanicVehicle').value = '';
            document.getElementById('mechanicLocation').value = '';
            document.getElementById('mechanicDate').value = '';
            document.getElementById('mechanicTime').value = '';
            document.getElementById('mechanicPayment').value = '';
        }

        // Book mechanic
        function bookMechanic(event) {
            event.preventDefault();
            
            const name = document.getElementById('mechanicName').value;
            const serviceType = document.getElementById('mechanicServiceType').value;
            const vehicle = document.getElementById('mechanicVehicle').value;
            const location = document.getElementById('mechanicLocation').value;
            const date = document.getElementById('mechanicDate').value;
            const time = document.getElementById('mechanicTime').value;
            const payment = document.getElementById('mechanicPayment').value;
            
            showNotification('success', 'Mechanic Booked', `Mechanic service booked successfully! ${serviceType} for ${vehicle} at ${location} on ${date} at ${time}. Payment method: ${payment}`);
            closeMechanicServiceModal();
        }

        // Show second hand sell form
        function showSecondHandSellForm() {
            document.getElementById('secondHandSellModal').classList.remove('hidden');
            // Scroll to top of the modal
            document.getElementById('secondHandSellModal').scrollTop = 0;
        }

        // Close second hand sell modal
        function closeSecondHandSellModal() {
            document.getElementById('secondHandSellModal').classList.add('hidden');
            document.getElementById('secondHandName').value = '';
            document.getElementById('secondHandPhone').value = '';
            document.getElementById('secondHandEmail').value = '';
            document.getElementById('secondHandVehicleType').value = '';
            document.getElementById('secondHandBrand').value = '';
            document.getElementById('secondHandModel').value = '';
            document.getElementById('secondHandYear').value = '';
            document.getElementById('secondHandKms').value = '';
            document.getElementById('secondHandPrice').value = '';
            document.getElementById('secondHandLocation').value = '';
            document.getElementById('secondHandPayment').value = '';
            document.getElementById('secondHandPhotos').value = '';
            document.getElementById('secondHandDetails').value = '';
        }

        // Sell second hand bike
        function sellSecondHand(event) {
            event.preventDefault();
            
            const name = document.getElementById('secondHandName').value;
            const brand = document.getElementById('secondHandBrand').value;
            const model = document.getElementById('secondHandModel').value;
            const price = document.getElementById('secondHandPrice').value;
            const payment = document.getElementById('secondHandPayment').value;
            
            let message = `Thank you ${name}! Your ${brand} ${model} has been listed for sale at ₹${price}. Payment method: ${payment}.`;
            
            if (payment === 'cash') {
                message += ' 15% advance payment required.';
            }
            
            showNotification('success', 'Bike Listed', message);
            closeSecondHandSellModal();
        }

        // Contact owner
        function contactOwner(phone, email) {
            showNotification('success', 'Owner Contact', `Contact details:\nPhone: ${phone}\nEmail: ${email}`);
        }

        // Show purchase form
        function showPurchaseForm(type, id) {
            let item;
            
            if (type === 'vehicle') {
                item = vehicles.find(v => v.id === id);
            } else if (type === 'second-hand') {
                item = secondHandBikes.find(b => b.id === id);
            } else if (type === 'part') {
                item = bikeParts.find(p => p.id === id);
            }
            
            purchaseItem = { type, item };
            
            const purchaseDetails = document.getElementById('purchaseDetails');
            purchaseDetails.innerHTML = `
                <div class="flex items-center mb-4">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-contain mr-4">
                    <div>
                        <h4 class="text-lg font-bold text-gray-100">${item.name}</h4>
                        <p class="text-gray-400">${item.brand || item.seller}</p>
                        <p class="text-red-400 font-semibold">₹${item.price.toLocaleString()}</p>
                    </div>
                </div>
            `;
            
            // Add free petrol offer for new bikes
            if (type === 'vehicle') {
                const freePetrolDiv = document.createElement('div');
                freePetrolDiv.className = 'free-petrol-offer mt-3';
                freePetrolDiv.innerHTML = `
                    <div class="free-petrol-icon">
                        <i class="fas fa-gas-pump"></i>
                    </div>
                    <div class="free-petrol-content">
                        <h4 class="free-petrol-title">Free Petrol Offer</h4>
                        <p class="free-petrol-description">Get 3 liters of petrol free with this new bike purchase!</p>
                    </div>
                `;
                purchaseDetails.appendChild(freePetrolDiv);
            }
            
            document.getElementById('purchaseModal').classList.remove('hidden');
        }

        function buyNowFromDetail() {
            if (currentVehicleDetail) {
                let type;
                
                if (currentVehicleDetail.specs) {
                    type = 'vehicle';
                } else if (currentVehicleDetail.year) {
                    type = 'second-hand';
                } else if (currentVehicleDetail.category) {
                    type = 'part';
                }
                
                showPurchaseForm(type, currentVehicleDetail.id);
                closeVehicleDetailModal();
            }
        }

        // Close purchase modal
        function closePurchaseModal() {
            document.getElementById('purchaseModal').classList.add('hidden');
        }

        // Complete purchase
        function completePurchase(event) {
            event.preventDefault();
            
            const name = document.getElementById('buyerName').value;
            const payment = document.getElementById('buyerPayment').value;
            const { type, item } = purchaseItem;
            
            let message = `Purchase successful! ${name}, you have bought ${item.name} for ₹${item.price.toLocaleString()}. Payment method: ${payment}.`;
            
            if (payment === 'cash') {
                message += ' 15% advance payment required.';
            }
            
            if (payment === 'bajaj') {
                const tenure = document.getElementById('buyerLoanTenure').value;
                const downPayment = document.getElementById('buyerDownPayment').value;
                message += ` Loan tenure: ${tenure} months, Down payment: ₹${downPayment}.`;
            }
            
            // Add free petrol offer for new bikes
            if (type === 'vehicle') {
                message += " You'll get 3 liters of petrol free with your new bike purchase!";
            }
            
            showNotification('success', 'Purchase Complete', message);
            closePurchaseModal();
        }

        // Show parts sell form
        function showPartsSellForm() {
            document.getElementById('partsSellModal').classList.remove('hidden');
        }

        // Close parts sell modal
        function closePartsSellModal() {
            document.getElementById('partsSellModal').classList.add('hidden');
            document.getElementById('partsName').value = '';
            document.getElementById('partsPhone').value = '';
            document.getElementById('partsEmail').value = '';
            document.getElementById('partsCategory').value = '';
            document.getElementById('partsPartName').value = '';
            document.getElementById('partsBrands').value = '';
            document.getElementById('partsCondition').value = '';
            document.getElementById('partsPrice').value = '';
            document.getElementById('partsLocation').value = '';
            document.getElementById('partsPayment').value = '';
            document.getElementById('partsPhotos').value = '';
            document.getElementById('partsDetails').value = '';
        }

        // Sell parts
        function sellParts(event) {
            event.preventDefault();
            
            const name = document.getElementById('partsName').value;
            const partName = document.getElementById('partsPartName').value;
            const price = document.getElementById('partsPrice').value;
            const payment = document.getElementById('partsPayment').value;
            
            let message = `Thank you ${name}! Your part ${partName} has been listed for sale at ₹${price}. Payment method: ${payment}.`;
            
            if (payment === 'cash') {
                message += ' 15% advance payment required.';
            }
            
            showNotification('success', 'Part Listed', message);
            closePartsSellModal();
        }

        // Return/Replacement Modal Functions
        function showReturnModal() {
            document.getElementById('returnModal').classList.remove('hidden');
        }

        function closeReturnModal() {
            document.getElementById('returnModal').classList.add('hidden');
            document.getElementById('returnOrderNumber').value = '';
            document.getElementById('returnType').value = '';
            document.getElementById('returnReason').value = '';
            document.getElementById('returnDetails').value = '';
        }

        function processReturn(event) {
            event.preventDefault();
            
            const orderNumber = document.getElementById('returnOrderNumber').value;
            const returnType = document.getElementById('returnType').value;
            const reason = document.getElementById('returnReason').value;
            
            let message = `Your ${returnType} request for order ${orderNumber} has been submitted successfully. Reason: ${reason}.`;
            
            if (returnType === 'return') {
                message += ' If you cancel after delivery, 5% will be deducted and the rest will be refunded.';
            }
            
            showNotification('success', 'Request Submitted', message);
            closeReturnModal();
        }

        // GPS Location Function
        function getLocation(inputId) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        
                        // In a real app, you would reverse geocode to get the address
                        // For demo purposes, we'll just show the coordinates
                        const locationInput = document.getElementById(inputId);
                        locationInput.value = `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
                        
                        showNotification('success', 'Location Detected', 'Your location has been detected successfully');
                    },
                    function(error) {
                        showNotification('error', 'Location Error', 'Unable to detect your location. Please enter it manually.');
                    }
                );
            } else {
                showNotification('error', 'Geolocation Not Supported', 'Your browser does not support geolocation. Please enter your location manually.');
            }
        }

        // Get Directions Function
        function getDirections(showroomId) {
            const showroom = showrooms.find(s => s.id === showroomId);
            if (showroom) {
                const address = encodeURIComponent(showroom.address);
                const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
                window.open(url, '_blank');
                showNotification('success', 'Opening Maps', `Getting directions to ${showroom.name}`);
            }
        }

        // Notify Me Function
        function notifyMe(launchId) {
            const launch = upcomingLaunches.find(l => l.id === launchId);
            if (launch) {
                // Check if browser supports notifications
                if ("Notification" in window && notificationPermissionGranted) {
                    // Create a notification
                    const notification = new Notification("Vahan Bazar Notification", {
                        body: `You'll be notified when ${launch.name} is launched!`,
                        icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-example.png"
                    });
                    
                    // Close the notification after 5 seconds
                    setTimeout(() => {
                        notification.close();
                    }, 5000);
                }
                
                // Show a confirmation message
                showNotification('success', 'Notification Set', `You'll be notified when ${launch.name} is launched!`);
            }
        }

        // Chatbot Functions
        function toggleChatbot() {
            const chatbotWindow = document.getElementById('chatbotWindow');
            chatbotWindow.classList.toggle('hidden');
        }

        function sendChatMessage(event) {
            event.preventDefault();
            
            const chatInput = document.getElementById('chatInput');
            const message = chatInput.value.trim();
            
            if (message === '') return;
            
            // Add user message
            addChatMessage(message, 'user');
            
            // Clear input
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addChatMessage(botResponse, 'bot');
            }, 500);
        }

        function addChatMessage(message, sender) {
            const chatbotMessages = document.getElementById('chatbotMessages');
            const messageDiv = document.createElement('div');
            
            messageDiv.className = `chatbot-message ${sender}-message`;
            messageDiv.textContent = message;
            
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function getBotResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                return 'Hello! How can I assist you today?';
            } else if (lowerMessage.includes('emi')) {
                return 'You can use our EMI calculator to calculate your monthly installments. It\'s available in the Vehicles section.';
            } else if (lowerMessage.includes('service') || lowerMessage.includes('mechanic')) {
                return 'We offer mechanic services at your location. You can book a mechanic in the Services section.';
            } else if (lowerMessage.includes('fuel') || lowerMessage.includes('petrol') || lowerMessage.includes('diesel')) {
                return 'We provide fuel delivery service. You can order petrol or diesel through our Services section.';
            } else if (lowerMessage.includes('second hand') || lowerMessage.includes('used bike')) {
                return 'We have a dedicated section for second-hand bikes where you can buy or sell used vehicles.';
            } else if (lowerMessage.includes('parts') || lowerMessage.includes('spare')) {
                return 'You can buy or sell bike parts in our Parts section. We have a wide range of genuine parts.';
            } else if (lowerMessage.includes('showroom')) {
                return 'We have showrooms in Bangalore, Delhi, and Mumbai. You can find more details in the Showrooms section.';
            } else if (lowerMessage.includes('payment') || lowerMessage.includes('credit card') || lowerMessage.includes('debit card')) {
                return 'We accept various payment methods including Credit Card, Debit Card, UPI, and Bajaj Finserv EMI.';
            } else if (lowerMessage.includes('upcoming') || lowerMessage.includes('launch')) {
                return 'You can check out our upcoming launches section to see the latest bikes that will be launched soon.';
            } else if (lowerMessage.includes('test ride')) {
                return 'You can book a test ride for any bike by clicking on the Test Ride button on the vehicle card.';
            } else if (lowerMessage.includes('compare')) {
                return 'You can compare up to 3 vehicles side by side. Add vehicles to comparison and see the comparison table.';
            } else if (lowerMessage.includes('return') || lowerMessage.includes('replacement')) {
                return 'We offer a 30-day return/replacement policy for new bikes. You can initiate a return or replacement through the Return/Replacement option.';
            } else if (lowerMessage.includes('cart')) {
                return 'You can add items to your cart by clicking the "Add to Cart" button on any product. Click on the cart icon in the header to view your cart.';
            } else if (lowerMessage.includes('sell')) {
                return 'You can sell your bike or bike parts through the "Sell Your Bike" or "Sell Your Parts" options in the respective sections.';
            } else if (lowerMessage.includes('location') || lowerMessage.includes('gps')) {
                return 'We use GPS location detection to provide accurate location-based services. When filling out forms, you can click the GPS button to auto-detect your location.';
            } else if (lowerMessage.includes('offer') || lowerMessage.includes('discount')) {
                return 'We have various offers and discounts available. Check out our Offers section for the latest deals.';
            } else if (lowerMessage.includes('referral') || lowerMessage.includes('refer')) {
                return 'You can refer friends to Vahan Bazar and earn ₹500 coupon codes. Check your account section for your referral code.';
            } else if (lowerMessage.includes('coupon') || lowerMessage.includes('voucher')) {
                return 'You can apply coupon codes during checkout to get discounts on your purchases.';
            } else if (lowerMessage.includes('ppf') || lowerMessage.includes('investment')) {
                return 'We offer PPF (Public Provident Fund) investment services through our platform. Check the Services section for more details.';
            } else if (lowerMessage.includes('free petrol')) {
                return 'When you buy a new bike from Vahan Bazar, you get 3 liters of petrol absolutely free!';
            } else {
                return 'I\'m sorry, I don\'t understand your question. You can ask me about EMI, services, fuel delivery, second-hand bikes, parts, showrooms, payment methods, upcoming launches, return policies, cart, location services, offers, referrals, coupons, PPF, or free petrol offer.';
            }
        }