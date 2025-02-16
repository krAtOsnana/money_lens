import { ArrowUpRight, LineChart, PieChart, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Hero() {
  return (
    <div className="h-full w-full p-6 bg-background">
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground/90">
              Visualize Your Finances,{' '}
              <span className="text-primary">Master Your Money</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Transform your financial data into clear, actionable insights. Track
              spending, monitor investments, and achieve your financial goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 bg-background">

            <Card className="p-6 bg-primary/5 border-primary/10 ">
              <Wallet className="h-12  w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expense Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your spending patterns and categorize expenses automatically.
              </p>
            </Card>

            <Card className="p-6 bg-emerald-500/5 border-emerald-500/10">
              <LineChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investment Analysis</h3>
              <p className="text-muted-foreground">
                Track portfolio performance with detailed charts and metrics.
              </p>
            </Card>

            <Card className="p-6 bg-red-500/10 border-red-500/10">
              <PieChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Budget Planning</h3>
              <p className="text-muted-foreground">
                Create and manage budgets with intuitive visualization tools.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}