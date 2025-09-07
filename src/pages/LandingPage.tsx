import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { 
  TrendingUp, 
  Coins, 
  Shield, 
  Zap, 
  Bell, 
  Trophy,
  ChevronRight,
  Mail,
  Linkedin,
  Sparkles,
  PiggyBank,
  Target,
  BarChart3,
  Wallet,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Calculator,
  TrendingDown
} from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState<string | null>(null)

  console.log('LandingPage component rendered with dark theme')

  const handleTryDemo = () => {
    console.log('Try Demo button clicked')
    navigate('/chat')
  }

  const handleContact = () => {
    console.log('Contact button clicked')
    window.open('mailto:2022cs27@student.uet.edu.pk', '_blank')
  }

  const features = [
    {
      icon: Sparkles,
      title: 'Smart Insights',
      description: '"You spent 30% more on food than last month" → AI-powered categorization & analysis.',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: TrendingUp,
      title: 'Investment Suggestions',
      description: 'Recommends ETFs, mutual funds, bonds (region-specific).',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Bell,
      title: 'Bill Reminders & Automation',
      description: 'Utility bill tracking + reminders.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Badges for saving goals, streaks for staying under budget.',
      gradient: 'from-yellow-400 to-amber-600'
    }
  ]

  const problems = [
    {
      icon: Calculator,
      title: 'Manual Tracking',
      description: 'People struggle to track expenses & savings manually, leading to financial chaos.',
      stat: '78% of people'
    },
    {
      icon: TrendingDown,
      title: 'Budget Discipline',
      description: 'Many don\'t know where their money goes → no budgeting discipline.',
      stat: '65% lack control'
    },
    {
      icon: Shield,
      title: 'Investment Confusion',
      description: 'Investing is confusing → they don\'t know where to start or whom to trust.',
      stat: '84% feel lost'
    },
    {
      icon: DollarSign,
      title: 'Expensive Advisors',
      description: 'Traditional financial advisors are expensive and biased.',
      stat: '$2000+ annually'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Analysis',
      description: 'Get real-time insights into your spending patterns and financial health.'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and achieve financial goals with AI-powered recommendations.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Optimization',
      description: 'Optimize your investment portfolio with personalized strategies.'
    },
    {
      icon: Wallet,
      title: 'Smart Budgeting',
      description: 'Create budgets that actually work with intelligent spending limits.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Entrepreneur',
      content: 'InvestWise helped me save $5,000 in just 6 months by optimizing my spending habits.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'The investment suggestions are spot-on. My portfolio grew 23% this year.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      content: 'Finally, a financial advisor that understands my goals and budget constraints.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen dark-gradient text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center glow-effect">
              <Coins className="w-6 h-6 text-black" />
            </div>
            <span className="text-3xl font-bold gradient-text text-glow">InvestWise</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => window.open('mailto:2022cs27@student.uet.edu.pk')}
              className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant="ghost"
              onClick={handleContact}
              className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-block p-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
              <span className="text-yellow-400 text-sm font-semibold px-4 py-2">🚀 AI-Powered Financial Revolution</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Your AI-Powered
            <span className="gradient-text block text-glow">Investment Coach</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Transform your financial future with personalized insights, smart budgeting, 
            and expert investment guidance. Join <span className="text-yellow-400 font-semibold">50,000+</span> users 
            who are already building wealth with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handleTryDemo}
              className="gold-gradient text-black hover:opacity-90 px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 glow-effect font-semibold"
              onMouseEnter={() => setIsHovered('demo')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Try Demo Free
              <ChevronRight className={`w-6 h-6 ml-2 transition-transform duration-300 ${isHovered === 'demo' ? 'translate-x-1' : ''}`} />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleContact}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-6 text-xl rounded-2xl transition-all duration-300 font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.3M+</div>
              <div className="text-gray-400">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="w-full max-w-4xl mx-auto glass-effect rounded-3xl p-8 shadow-2xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop"
                alt="Financial Dashboard"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 gold-gradient rounded-full flex items-center justify-center animate-pulse-glow">
                <Coins className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">We Solve Real Problems</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Financial challenges that keep millions awake at night. We understand because we've been there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <problem.icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-sm text-yellow-400 font-semibold mb-2">{problem.stat}</div>
                <CardTitle className="text-xl text-white">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{problem.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Why Choose InvestWise?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of personal finance with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Coming Soon Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary features that will transform your financial journey forever
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(`feature-${index}`)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`} />
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
              </CardContent>
              
              {isHovered === `feature-${index}` && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                </div>
              )}
              
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-400/30">
                  Coming Soon
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who transformed their financial lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center gold-gradient rounded-3xl p-16 text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 via-amber-500/90 to-yellow-600/90"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">Ready to Take Control?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of users who are already transforming their financial future. 
              Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleTryDemo}
                className="bg-black text-yellow-400 hover:bg-gray-900 px-10 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <div className="flex items-center space-x-2 text-black/80">
                <CheckCircle className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 gold-gradient rounded-xl flex items-center justify-center">
              <Coins className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold gradient-text">InvestWise</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('mailto:2022cs27@student.uet.edu.pk')}
              className="text-gray-400 hover:text-yellow-400"
            >
              <Mail className="w-4 h-4 mr-2" />
              2022cs27@student.uet.edu.pk
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleContact}
              className="text-gray-400 hover:text-yellow-400"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            © 2024 InvestWise. Empowering financial freedom through AI innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage