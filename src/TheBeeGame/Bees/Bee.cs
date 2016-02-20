namespace TheBeeGame.Bees
{
    public abstract class Bee
    {
        public int Health { get; private set; }

        public abstract int MaxHealth { get; }

        public abstract int HealthLost { get; }

        protected Bee()
        {
            Health = MaxHealth;
        }

        public void Hit()
        {
            Health -= HealthLost;
        }

        public bool IsDead()
        {
            return Health <= 0;
        }
    }
}
