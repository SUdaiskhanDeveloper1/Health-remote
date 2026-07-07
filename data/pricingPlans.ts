import { PricingPlan } from '@/types/pricing';
export const pricingPlans: PricingPlan[] = [
{ id:'starter', name:'Starter Care', description:'For clinics exploring care management workflows.', priceLabel:'Placeholder quote', highlighted:false, cta:'Request starter quote', features:['RPM and CCM UI modules','Basic dashboard previews','Patient list and alerts','Email support placeholder'] },
{ id:'growth', name:'Growth Care', description:'For growing care teams managing multiple programs.', priceLabel:'Custom monthly quote', highlighted:true, cta:'Request growth demo', features:['All core program modules','Device monitoring add-on UI','Care team coordination','Billing report placeholders','Priority onboarding placeholder'] },
{ id:'enterprise', name:'Enterprise Care', description:'For hospitals and service centers needing scalable workflows.', priceLabel:'Enterprise quote', highlighted:false, cta:'Contact enterprise team', features:['Advanced dashboard concepts','Multi-team workflows','Custom modules placeholder','Training and support placeholder','Integration concept UI'] }
];
