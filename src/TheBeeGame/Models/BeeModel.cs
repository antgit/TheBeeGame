using System;

namespace TheBeeGame.Models
{
    public class BeeModel
    {
        public int Health { get; set; }
        public BeeType Type { get; set; }
        public Guid UniqueId { get; set; }
    }
}
