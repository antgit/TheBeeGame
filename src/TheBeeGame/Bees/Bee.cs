namespace TheBeeGame.Bees
{
    public abstract class Bee
    {
        public int Health { get; private set; }

        public abstract int MaxHealth { get; }

        public abstract int HealthLost { get; }

        public Bee()
        {
            Health = MaxHealth;
        }

        public void Hit()
        {
            Health -= HealthLost;
        }
    }
}
