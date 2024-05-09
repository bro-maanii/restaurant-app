
  import TestimonialImg01 from '@/public/user.png'
  import FancyTestimonialsSlider from '@/app/UI-components/Testinominals/Fancy-Ui'
  
  export default function TestimonialPage() {  
  
    const restaurantTestimonials = [
        {
          
          quote: "The experience here was amazing! The food was delicious, and the staff was so friendly and accommodating.",
          name: 'Samantha M',
          role: 'Foodie'
        },
        {
          quote: "I've been coming to this restaurant for years, and it never disappoints. The quality of the food and service is consistently excellent.",
          name: 'John D',
          role: 'Regular Patron'
        },
        {
          quote: "What a gem! This place exceeded my expectations. The ambiance, the flavors, everything was top-notch.",
          name: 'Linda K',
          role: 'First-Time Visitor'
        }
      ];
      
    return (
      <FancyTestimonialsSlider testimonials={restaurantTestimonials} />
    )
  }